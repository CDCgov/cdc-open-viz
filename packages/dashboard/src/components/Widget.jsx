import React, { useContext, useRef, useEffect } from 'react'
import { useDrag } from 'react-dnd'

import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import ConfigContext from '../ConfigContext'

import { DataTransform } from '@cdc/core/helpers/DataTransform'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

import DataDesigner from '@cdc/core/components/managers/DataDesigner'
import Icon from '@cdc/core/components/ui/Icon'
import Modal from '@cdc/core/components/ui/Modal'

// TODO: COVE Refactor - Below hashes are unnecessary. Run conversion for kebab-case if needed, or construct and reference map
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
  'filtered-text': <Icon display='filteredText' base />
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
  'filtered-text': 'filtered-text'
}

const Widget = ({ data = {}, addVisualization, type }) => {
  const { overlay } = useGlobalContext()
  const { rows, visualizations, config, updateConfig } = useContext(ConfigContext)

  const dataRef = useRef()
  dataRef.current = data

  const transform = new DataTransform()

  const handleWidgetMove = (item, monitor) => {
    let result = monitor.getDropResult()

    if (!result) return null

    const { rowIdx, colIdx } = result

    if (undefined !== data.rowIdx) {
      rows[data.rowIdx][data.colIdx].widget = null // Wipe from old position

      rows[rowIdx][colIdx].widget = data.uid // Add to new row and col
    } else {
      // Item does not exist, instantiate a new one
      const newViz = addVisualization()
      visualizations[newViz.uid] = newViz // Add to widgets collection
      rows[rowIdx][colIdx].widget = newViz.uid // Store reference in rows collection under the specific column
    }

    updateConfig({ ...config, rows, visualizations })
  }

  const [{ isDragging, ...collected }, drag] = useDrag({
    type: 'vis-widget',
    end: handleWidgetMove,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const deleteWidget = () => {
    rows[data.rowIdx][data.colIdx].widget = null

    delete visualizations[data.uid]

    if (config.dashboard.sharedFilters && config.dashboard.sharedFilters.length > 0) {
      config.dashboard.sharedFilters.forEach(sharedFilter => {
        if (sharedFilter.usedBy.indexOf(data.uid) !== -1) {
          sharedFilter.usedBy.splice(sharedFilter.usedBy.indexOf(data.uid), 1)
        }
      })
    }

    updateConfig({ ...config, rows, visualizations })
  }

  const editWidget = () => {
    visualizations[data.uid].editing = true

    updateConfig({ ...config, visualizations })
  }

  const changeDataset = (uid, value) => {
    delete visualizations[uid].dataDescription
    delete visualizations[uid].formattedData

    visualizations[uid].dataKey = value

    updateConfig({ ...config, visualizations })
  }

  const updateDescriptionProp = async (visualizationKey, datasetKey, key, value) => {
    let dataDescription = { ...dataRef.current.dataDescription, [key]: value }

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

  const dataDesignerModal = (configureData, dataKeyOverride) => {
    const dataKey = !dataKeyOverride && dataKeyOverride !== '' ? data.dataKey || dataRef.current.dataKey : dataKeyOverride

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
                changeDataset(data.uid, e.target.value)
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
                visualizationKey: data.uid,
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

  useEffect(() => {
    if (data.openModal) {
      overlay?.actions.openOverlay(dataDesignerModal(dataRef.current))

      visualizations[data.uid].openModal = false

      updateConfig({ ...config, visualizations })
    }
  }, [data.openModal])

  return (
    <>
      <div className='widget' ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} {...collected}>
        <Icon display='move' className='drag-icon' />
        <div className='widget__content'>
          {data.rowIdx !== undefined && (
            <div className='widget-menu'>
              {((data.dataKey && data.dataDescription && data.formattedData) || type === 'markup-include') && (
                <button title='Configure Visualization' className='btn btn-configure' onClick={editWidget}>
                  {iconHash['tools']}
                </button>
              )}
              {type !== 'markup-include' && (
                <button
                  title='Configure Data'
                  className='btn btn-configure'
                  onClick={() => {
                    overlay?.actions.openOverlay(dataDesignerModal(data))
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
          {data.newViz && (
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
