import { useContext } from 'react'
import { useDrag } from 'react-dnd'

import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'

import { DataTransform } from '@cdc/core/helpers/DataTransform'
import Icon from '@cdc/core/components/ui/Icon'
import Modal from '@cdc/core/components/ui/Modal'
import { Visualization } from '@cdc/core/types/Visualization'
import { iconHash } from '../helpers/iconHash'
import _ from 'lodash'
import { DataDesignerModal } from './DataDesignerModal'

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
  'filter-dropdowns': 'Filter Dropdowns',
  Sankey: 'Sankey Chart',
  table: 'Table'
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
  const rows = config.rows
  const visualizations = config.visualizations
  const dispatch = useContext(DashboardDispatchContext)
  const updateConfig = config => dispatch({ type: 'UPDATE_CONFIG', payload: [config] })

  const transform = new DataTransform()

  const handleWidgetMove = (item, monitor) => {
    let result = monitor.getDropResult()

    if (!result) return null

    const { rowIdx, colIdx } = result

    if (undefined !== data?.rowIdx) {
      rows[data.rowIdx].columns[data.colIdx].widget = null // Wipe from old position

      rows[rowIdx].columns[colIdx].widget = data.uid // Add to new row and col
    } else if (!!addVisualization) {
      // Item does not exist, instantiate a new one
      const newViz = addVisualization()
      visualizations[newViz.uid] = newViz // Add to widgets collection
      rows[rowIdx].columns[colIdx].widget = newViz.uid // Store reference in rows collection under the specific column
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
    rows[data.rowIdx].columns[data.colIdx].widget = null

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

  let isConfigurationReady = false
  const dataConfiguredForRow = !!rows[data?.rowIdx]?.dataKey
  if (dataConfiguredForRow || ['filter-dropdowns', 'markup-include'].includes(type)) {
    isConfigurationReady = true
  } else {
    if (data?.formattedData) {
      isConfigurationReady = true
    } else if (data?.dataKey && data?.dataDescription && config.datasets[data.dataKey]) {
      const formattedDataAttempt = transform.autoStandardize(config.datasets[data.dataKey].data)
      const canFormatData = !!transform.developerStandardize(formattedDataAttempt, data.dataDescription)
      if (canFormatData) {
        isConfigurationReady = true
      }
    }
  }

  const needsDataConfiguration = !dataConfiguredForRow

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
              {needsDataConfiguration && (
                <button
                  title='Configure Data'
                  className='btn btn-configure'
                  onClick={() => {
                    overlay?.actions.openOverlay(type === 'filter-dropdowns' ? FilterHideModal(data) : <DataDesignerModal rowIndex={data.rowIdx} vizKey={data.uid} />)
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
