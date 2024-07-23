import { useContext } from 'react'
import { useDrag } from 'react-dnd'

import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'

import { DataTransform } from '@cdc/core/helpers/DataTransform'
import Icon from '@cdc/core/components/ui/Icon'
import { AnyVisualization } from '@cdc/core/types/Visualization'
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
  dashboardFilters: 'Filter Dropdowns',
  Sankey: 'Sankey Chart',
  table: 'Table'
}

type WidgetConfig = AnyVisualization & { rowIdx: number; colIdx: number }
type WidgetProps = {
  widgetConfig?: WidgetConfig
  addVisualization?: Function
  type: string
}

const Widget = ({ widgetConfig, addVisualization, type }: WidgetProps) => {
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

    if (undefined !== widgetConfig?.rowIdx) {
      rows[widgetConfig.rowIdx].columns[widgetConfig.colIdx].widget = null // Wipe from old position

      rows[rowIdx].columns[colIdx].widget = widgetConfig.uid // Add to new row and col
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
    [config.activeDashboard, config.rows, config.dashboard.sharedFilters]
  )

  const deleteWidget = () => {
    if (!widgetConfig) return
    rows[widgetConfig.rowIdx].columns[widgetConfig.colIdx].widget = null

    delete visualizations[widgetConfig.uid]

    if (config.dashboard.sharedFilters && config.dashboard.sharedFilters.length > 0) {
      config.dashboard.sharedFilters.forEach(sharedFilter => {
        if (sharedFilter.usedBy && sharedFilter.usedBy.indexOf(widgetConfig.uid) !== -1) {
          sharedFilter.usedBy.splice(sharedFilter.usedBy.indexOf(widgetConfig.uid), 1)
        }
      })
    }

    updateConfig({ ...config, rows, visualizations })
  }

  const editWidget = () => {
    if (!widgetConfig) return
    visualizations[widgetConfig.uid].editing = true

    updateConfig({ ...config, visualizations })
  }

  let isConfigurationReady = false
  const dataConfiguredForRow = !!rows[widgetConfig?.rowIdx]?.dataKey
  if (dataConfiguredForRow || ['dashboardFilters', 'markup-include'].includes(type)) {
    isConfigurationReady = true
  } else {
    if (widgetConfig?.formattedData) {
      isConfigurationReady = true
    } else if (widgetConfig?.dataKey && widgetConfig?.dataDescription && config.datasets[widgetConfig.dataKey]) {
      const formattedDataAttempt = transform.autoStandardize(config.datasets[widgetConfig.dataKey].data)
      const canFormatData = !!transform.developerStandardize(formattedDataAttempt, widgetConfig.dataDescription)
      if (canFormatData) {
        isConfigurationReady = true
      }
    }
  }

  const needsDataConfiguration = !dataConfiguredForRow && widgetConfig?.type !== 'dashboardFilters'

  return (
    <>
      <div className='widget' ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} {...collected}>
        <Icon display='move' className='drag-icon' />
        <div className='widget__content'>
          {widgetConfig?.rowIdx !== undefined && (
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
                    overlay?.actions.openOverlay(<DataDesignerModal rowIndex={widgetConfig.rowIdx} vizKey={widgetConfig.uid} />)
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
          {widgetConfig?.newViz && type !== 'dashboardFilters' && (
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
