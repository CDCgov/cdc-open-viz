import React, { useContext, useRef, useEffect } from 'react'
import { useDrag } from 'react-dnd'

import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'

import { DataTransform } from '@cdc/core/helpers/DataTransform'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

import DataDesigner from '@cdc/core/components/managers/DataDesigner'
import Icon from '@cdc/core/components/ui/Icon'
import Modal from '@cdc/core/components/ui/Modal'
import { Visualization } from '@cdc/core/types/Visualization'

const iconHash = {
  'data-bite': <Icon display='databite' base />,
  Bar: <Icon display='chartBar' base />,
  'Spark Line': <Icon display='chartLine' />,
  'waffle-chart': <Icon display='grid' base />,
  'markup-include': <Icon display='code' base />,
  Line: <Icon display='chartLine' base />,
  Pie: <Icon display='chartPie' base />,
  us: <Icon display='mapUsa' base />,
  'us-county': <Icon display='mapUsa' base />,
  world: <Icon display='mapWorld' base />,
  'single-state': <Icon display='mapAl' base />,
  gear: <Icon display='gear' base />,
  tools: <Icon display='tools' base />,
  'filtered-text': <Icon display='filtered-text' base />,
  'filter-dropdowns': <Icon display='filter-dropdowns' base />
}

const labelHash = {
  'data-bite': 'Data Bite',
  'waffle-chart': 'Waffle Chart',
  'markup-include': 'Markup Include',
  Bar: 'Bar',
  Line: 'Line',
  'Spark Line': 'Spark Line',
  Pie: 'Pie',
  us: 'United States (State- or County-Level)',
  'us-county': 'United States (State- or County-Level)',
  world: 'World',
  'single-state': 'U.S. State',
  'filtered-text': 'Filtered Text',
  'filter-dropdowns': 'Filter Dropdowns'
}

type WidgetData = Visualization & { rowIdx: number; colIdx: number }
type WidgetProps = {
  data?: WidgetData
  addVisualization?: Function
  type: string
}

const Widget = ({ data, addVisualization, type }: WidgetProps) => {
  const { overlay } = useGlobalContext()
  const { config } = useContext(DashboardContext)
  if (!config) return null
  const rows = config.rows
  const visualizations = config.visualizations
  const dispatch = useContext(DashboardDispatchContext)
  const updateConfig = config => dispatch({ type: 'UPDATE_CONFIG', payload: [config] })
  const dataRef = useRef<WidgetData>()
  dataRef.current = data

  const transform = new DataTransform()

  const handleWidgetMove = (item, monitor) => {
    let result = monitor.getDropResult()

    if (!result) return null

    const { rowIdx, colIdx } = result

    if (undefined !== data?.rowIdx) {
      rows[data.rowIdx][data.colIdx].widget = null // Wipe from old position

      rows[rowIdx][colIdx].widget = data.uid // Add to new row and col
    } else if (!!addVisualization) {
      // Item does not exist, instantiate a new one
      const newViz = addVisualization()
      visualizations[newViz.uid] = newViz // Add to widgets collection
      rows[rowIdx][colIdx].widget = newViz.uid // Store reference in rows collection under the specific column
    }

    updateConfig({ ...config, rows, visualizations })
  }

  const [{ isDragging, ...collected }, drag] = useDrag(
    {
      type: 'vis-widget',
      end: handleWidgetMove,
      collect: monitor => ({
        isDragging: monitor.isDragging()
      })
    },
    [config.activeDashboard, config.rows]
  )

  const deleteWidget = () => {
    if (!data) return
    rows[data.rowIdx][data.colIdx].widget = null

    delete visualizations[data.uid]

    if (config.dashboard.sharedFilters && config.dashboard.sharedFilters.length > 0) {
      config.dashboard.sharedFilters.forEach(sharedFilter => {
        if (sharedFilter.usedBy && sharedFilter.usedBy.indexOf(data.uid) !== -1) {
          sharedFilter.usedBy.splice(sharedFilter.usedBy.indexOf(data.uid), 1)
        }
      })
    }

    updateConfig({ ...config, rows, visualizations })
  }

  const editWidget = () => {
    if (!data) return
    visualizations[data.uid].editing = true

    updateConfig({ ...config, visualizations })
  }

  const changeDataset = (uid, value) => {
    visualizations[uid].dataDescription = {}
    visualizations[uid].formattedData = undefined

    visualizations[uid].dataKey = value

    updateConfig({ ...config, visualizations })
  }

  const updateDescriptionProp = async (visualizationKey, datasetKey, key, value) => {
    let dataDescription = { ...(dataRef.current?.dataDescription as Object), [key]: value }

    let newData
    if (!config.datasets[datasetKey].data && config.datasets[datasetKey].dataUrl) {
      newData = await fetchRemoteData(config.datasets[datasetKey].dataUrl)
      newData = transform.autoStandardize(newData)
    } else {
      newData = config.datasets[datasetKey].data
    }

    let formattedData = transform.developerStandardize(newData, dataDescription)

    let newVisualizations = { ...config.visualizations }
    newVisualizations[visualizationKey] = { ...newVisualizations[visualizationKey], data: newData, dataDescription, formattedData }

    updateConfig({ ...config, visualizations: newVisualizations })

    overlay?.actions.openOverlay(dataDesignerModal(newVisualizations[visualizationKey]))
  }

  const dataDesignerModal = (configureData, dataKeyOverride?) => {
    const dataKey = !dataKeyOverride && dataKeyOverride !== '' ? data?.dataKey || dataRef.current?.dataKey : dataKeyOverride

    overlay?.actions.toggleOverlay()

    return (
      <Modal>
        <Modal.Content>
          <div className='dataset-selector-container'>
            Select a dataset:&nbsp;
            <select
              className='dataset-selector'
              defaultValue={dataKey}
              onChange={e => {
                changeDataset(data?.uid, e.target.value)
                overlay?.actions.openOverlay(dataDesignerModal(data, e.target.value || ''))
              }}
            >
              <option value=''>Select a dataset</option>
              {config.datasets && Object.keys(config.datasets).map(datasetKey => <option key={datasetKey}>{datasetKey}</option>)}
            </select>
          </div>
          {dataKey && (
            <DataDesigner
              {...{
                configureData,
                visualizationKey: data?.uid,
                dataKey: dataKey,
                updateDescriptionProp
              }}
            />
          )}
          {configureData.formattedData && (
            <button style={{ margin: '1em' }} className='cove-button' onClick={() => overlay?.actions.toggleOverlay()}>
              Continue
            </button>
          )}
        </Modal.Content>
      </Modal>
    )
  }

  const FilterHideModal = configureData => {
    const currentVizKey = Object.keys(visualizations).find(vizKey => vizKey === configureData.uid) || ''
    const currentViz = config.visualizations && config.visualizations[currentVizKey]
    const onFilterHideChange = (e, index) => {
      const visualizations = { ...config.visualizations }

      if (currentVizKey) {
        const currentVizConfig = visualizations[currentVizKey]

        if (currentVizConfig) {
          if (!currentVizConfig.hide) currentVizConfig.hide = []
          if (!e.target.checked && currentVizConfig.hide.indexOf(index) === -1) {
            visualizations[currentVizKey].hide.push(index)
          } else if (e.target.checked && currentVizConfig.hide.indexOf(index) !== -1) {
            visualizations[currentVizKey].hide.splice(currentVizConfig.hide.indexOf(index), 1)
          }
        }
      }

      updateConfig({ ...config, visualizations })
    }

    const vizWithAutoLoad = Object.keys(config.visualizations).find(vizKey => config.visualizations[vizKey].autoLoad)
    const onToggleAutoLoad = e => {
      if (currentViz) {
        currentViz.autoLoad = e.target.checked
        updateConfig({ ...config, visualizations: { ...visualizations, [currentVizKey]: currentViz } })
      }
    }

    overlay?.actions.toggleOverlay()

    const showAutoLoadCheckbox = !vizWithAutoLoad || vizWithAutoLoad === currentVizKey
    return (
      <Modal>
        <Modal.Content>
          <div>Choose which filters to display:</div>

          {config.dashboard.sharedFilters &&
            config.dashboard.sharedFilters.length > 0 &&
            config.dashboard.sharedFilters.map((sharedFilter, index) => (
              <label>
                <input type='checkbox' defaultChecked={!configureData.hide || configureData.hide.indexOf(index) === -1} onChange={e => onFilterHideChange(e, index)} />
                {sharedFilter.key}
              </label>
            ))}

          {(!config.dashboard.sharedFilters || config.dashboard.sharedFilters.length === 0) && <>No dashboard filters added yet.</>}

          {showAutoLoadCheckbox && (
            <label>
              Make Autoload:
              <input type='checkbox' defaultChecked={currentViz?.autoLoad} onChange={onToggleAutoLoad} />
            </label>
          )}
          <div>
            <button style={{ margin: '1em' }} className='cove-button' onClick={() => overlay?.actions.toggleOverlay()}>
              Continue
            </button>
          </div>
        </Modal.Content>
      </Modal>
    )
  }

  useEffect(() => {
    if (data?.openModal) {
      overlay?.actions.openOverlay(type === 'filter-dropdowns' ? FilterHideModal(dataRef.current) : dataDesignerModal(dataRef.current))

      visualizations[data.uid].openModal = false

      updateConfig({ ...config, visualizations })
    }
  }, [data?.openModal])

  let isConfigurationReady = false;
  if(type === 'markup-include' || type === 'filter-dropdowns'){
    isConfigurationReady = true;
  } else if(data && data.formattedData) {
    isConfigurationReady = true;
  } else if(data && data.dataKey && data.dataDescription && config.datasets[data.dataKey]){
    let formattedDataAttempt = transform.autoStandardize(config.datasets[data.dataKey].data);
    formattedDataAttempt = transform.developerStandardize(formattedDataAttempt, data.dataDescription);
    if(formattedDataAttempt){
      isConfigurationReady = true;
    }
  }

  return (
    <>
      <div className='widget' ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} {...collected}>
        <Icon display='move' className='drag-icon' />
        <div className='widget__content'>
          {data?.rowIdx !== undefined && (
            <div className='widget-menu'>
              {isConfigurationReady && (
                <button title='Configure Visualization' className='btn btn-configure' onClick={editWidget}>
                  {iconHash['tools']}
                </button>
              )}
              {type !== 'markup-include' && (
                <button
                  title='Configure Data'
                  className='btn btn-configure'
                  onClick={() => {
                    overlay?.actions.openOverlay(type === 'filter-dropdowns' ? FilterHideModal(data) : dataDesignerModal(data))
                  }}
                >
                  {iconHash['gear']}
                </button>
              )}
              <div className='widget-menu-item' onClick={deleteWidget}>
                <Icon display='close' base />
              </div>
            </div>
          )}
          {iconHash[type]}
          <span>{labelHash[type]}</span>
          {data?.newViz && type !== 'filter-dropdowns' && (
            <span onClick={editWidget} className='config-needed'>
              Configuration needed
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default Widget
