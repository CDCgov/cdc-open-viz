import React, { useContext, useState } from 'react'
import { useDrag } from 'react-dnd'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import Icon from '@cdc/core/components/ui/Icon'
import { AnyVisualization } from '@cdc/core/types/Visualization'
import { iconHash } from '../../helpers/iconHash'
import _ from 'lodash'
import { DataDesignerModal } from '../DataDesignerModal'
import { labelHash } from '@cdc/core/helpers/labelHash'
import './widget.styles.css'

type WidgetConfig = AnyVisualization & { rowIdx: number; colIdx: number }
type WidgetProps = {
  title: string
  widgetConfig?: WidgetConfig
  addVisualization?: Function
  type: string
  widgetInRow?: boolean
  toggleRow?: boolean
}

const Widget = ({
  title,
  columnData,
  widgetConfig,
  addVisualization,
  type,
  widgetInRow = false,
  toggleRow = false
}: WidgetProps) => {
  const { overlay } = useGlobalContext()
  const { config, data } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)

  const [isEditing, setIsEditing] = useState(false)
  const [toggleName, setToggleName] = useState(
    columnData?.toggleName || labelHash[config?.visualizations[columnData?.widget]?.type] || ''
  )

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
      payload: { uid: widgetConfig.uid as string }
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
    const _data = data[dataKey]
    if (dataKey && !_data?.length) {
      const url = changeDataLimit(dataset.dataUrl, 100)
      fetchRemoteData(url).then(responseData => {
        // this sample data is temporary.
        // the HEADER component removes the data when you toggle to the main viz panel.
        // data will be cached only when it's loaded via dashboard preview.
        responseData.sample = true
        dispatch({ type: 'SET_DATA', payload: { ...data, [dataKey]: responseData } })
      })
    }
  }

  const editWidget = () => {
    if (!widgetConfig) return
    dispatch({
      type: 'UPDATE_VISUALIZATION',
      payload: { vizKey: widgetConfig.uid as string, configureData: { editing: true } }
    })
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

  const widgetContent = (
    <div
      className={`widget ${toggleRow ? 'd-block widget--toggle' : ''} ${isDragging && 'dragging'}`}
      style={{ maxHeight: widgetInRow && toggleRow ? '180px' : '180px', minHeight: '100%' }}
    >
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
        <span>{title}</span>
        {widgetConfig?.newViz && type !== 'dashboardFilters' && (
          <span onClick={editWidget} className='config-needed'>
            Configuration needed
          </span>
        )}
      </div>
    </div>
  )

  return (
    <>
      {widgetInRow && toggleRow ? (
        <div
          ref={drag}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            opacity: isDragging ? 0.5 : 1,
            width: '100%',
            height: '100%'
          }}
          {...collected}
        >
          <div className='widget__toggle-title'>
            <div className='flex'>
              {isEditing ? (
                <Icon display='check' className='widget__edit-title-icon me-1' onClick={() => setIsEditing(false)} />
              ) : (
                <Icon display='edit' className='widget__edit-title-icon me-1' onClick={() => setIsEditing(true)} />
              )}{' '}
              {isEditing ? (
                <input
                  type='text'
                  value={toggleName}
                  style={{ fontSize: '12px' }}
                  onChange={e => setToggleName(e.target.value)}
                  onBlur={() => {
                    setIsEditing(false)
                    dispatch({
                      type: 'UPDATE_TOGGLE_NAME',
                      payload: {
                        rowIndex: widgetConfig.rowIdx,
                        columnIndex: widgetConfig.colIdx,
                        toggleName: toggleName
                      }
                    })
                  }}
                />
              ) : (
                <span>{toggleName}</span>
              )}
            </div>
          </div>
          <br />
          <div className='w-100' style={{ minHeight: widgetInRow && toggleRow ? '135px' : '180px' }}>
            {widgetContent}
          </div>
        </div>
      ) : (
        <div
          ref={drag}
          style={{ opacity: isDragging ? 0.5 : 1, width: widgetInRow ? '100%' : 'auto', height: '100%' }}
          {...collected}
        >
          {widgetContent}
        </div>
      )}
    </>
  )
}

export default Widget
