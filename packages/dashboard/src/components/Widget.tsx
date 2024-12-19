import { useContext } from 'react'
import { useDrag } from 'react-dnd'

import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'

import { DataTransform } from '@cdc/core/helpers/DataTransform'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
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
  'Bump Chart': 'Bump Chart',
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
  const { config, data } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)

  const transform = new DataTransform()

  const handleWidgetMove = (item, monitor) => {
    let result = monitor.getDropResult()

    if (!result) return null

    const { rowIdx, colIdx } = result

    if (undefined !== widgetConfig?.rowIdx) {
      dispatch({ type: 'MOVE_VISUALIZATION', payload: { rowIdx, colIdx, widget: widgetConfig } })
    } else if (!!addVisualization) {
      // Item does not exist, instantiate a new one
      const newViz = addVisualization()
      dispatch({ type: 'ADD_VISUALIZATION', payload: { newViz, rowIdx, colIdx } })
    }
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
    dispatch({
      type: 'DELETE_WIDGET',
      payload: { rowIdx: widgetConfig.rowIdx, colIdx: widgetConfig.colIdx, uid: widgetConfig.uid }
    })
  }

  const changeDataLimit = (dataUrl, limit) => {
    const url = new URL(dataUrl)
    url.searchParams.set('$limit', limit)
    // Replace encoded $ with actual $ for the URL
    return url.href.replace(/%24/g, '$')
  }

  const loadSampleData = () => {
    const dataKey = config.rows[widgetConfig.rowIdx]?.dataKey || widgetConfig?.dataKey
    const dataset = config.datasets[dataKey]
    const _data = data[dataset?.dataUrl]
    if (_data && !_data.length) {
      const url = changeDataLimit(dataset.dataUrl, 100)
      fetchRemoteData(url).then(responseData => {
        responseData.sample = true
        dispatch({ type: 'SET_DATA', payload: { ...data, [dataKey]: responseData } })
      })
    }
  }

  const editWidget = () => {
    if (!widgetConfig) return
    dispatch({ type: 'UPDATE_VISUALIZATION', payload: { vizKey: widgetConfig.uid, configureData: { editing: true } } })
    loadSampleData()
  }

  let isConfigurationReady = false
  const dataConfiguredForRow = !!config.rows[widgetConfig?.rowIdx]?.dataKey
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
                    overlay?.actions.openOverlay(
                      <DataDesignerModal rowIndex={widgetConfig.rowIdx} vizKey={widgetConfig.uid} />
                    )
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
