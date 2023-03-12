import React, { useRef, useEffect } from 'react'

// Third Party
import { useDrag } from 'react-dnd'

// Store
import useStore from '@cdc/core/store/store'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

// Helpers
import dataTransform from '@cdc/core/helpers/data/dataTransform'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

// Components - Core
import DataDesigner from '@cdc/core/components/manager/DataDesigner'
import Icon from '@cdc/core/components/ui/Icon'
import Modal from '@cdc/core/components/ui/Modal'

const vizHash = {
  'data-bite': {
    icon: 'databite',
    label: 'Data Bite'
  },
  'waffle-chart': {
    icon: 'grid',
    label: 'Waffle Chart'
  },
  'markup-include': {
    icon: 'code',
    label: 'Markup Include'
  },
  Bar: {
    icon: 'chartBar',
    label: 'Bar'
  },
  Line: {
    icon: 'chartLine',
    label: 'Line'
  },
  'Spark Line': {
    icon: 'chartLine',
    label: 'Spark Line'
  },
  Pie: {
    icon: 'chartPie',
    label: 'Pie'
  },
  us: {
    icon: 'mapUsa',
    label: 'United States (State/County Level)'
  },
  'us-county': {
    icon: 'mapUsa',
    label: 'United States (State/County Level)'
  },
  world: {
    icon: 'mapWorld',
    label: 'World'
  },
  'single-state': {
    icon: 'mapAl',
    label: 'U.S. State'
  },
  'filtered-text': {
    icon: 'filteredText',
    label: 'Filtered Text'
  }
}

const BuilderWidget = ({ data = {}, addVisualization, type }) => {
  // Store Selectors
  const openOverlay = useStore(state => state.openOverlay)
  const toggleOverlay = useStore(state => state.toggleOverlay)

  const { config, updateVisConfig, updateVisConfigField } = useVisConfig()

  const dataRef = useRef()
  dataRef.current = data

  const transform = new dataTransform()

  const handleWidgetMove = (item, monitor) => {
    let result = monitor.getDropResult()

    if (!result) return null

    const { rowIdx, colIdx } = result

    if (undefined !== data.rowIdx) {
      updateVisConfigField([ 'rows', data.rowIdx, data.colIdx, 'widget' ], null) // Wipe from old position
      updateVisConfigField([ 'rows', rowIdx, colIdx, 'widget' ], data.uid) // Add to new row and col
    } else {
      // Item does not exist, instantiate a new one
      const newViz = addVisualization()
      updateVisConfigField([ 'visualizations', newViz.uid ], newViz) // Add to widgets collection
      updateVisConfigField([ 'rows', rowIdx, colIdx, 'widget' ], newViz.uid) // Store reference in rows collection under the specific column
    }
  }

  const [ { isDragging, ...collected }, drag ] = useDrag({
    type: 'vis-widget',
    end: handleWidgetMove,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const deleteWidget = () => {
    updateVisConfigField([ 'rows', data.rowIdx, data.colIdx, 'widget' ], null)

    if (config.dashboard.sharedFilters && config.dashboard.sharedFilters.length > 0) {
      let filters = [ ...config.dashboard.sharedFilters ]
      filters.forEach(sharedFilter => {
        if (sharedFilter.usedBy.indexOf(data.uid) !== -1) {
          sharedFilter.usedBy.splice(sharedFilter.usedBy.indexOf(data.uid), 1)
        }
      })
      updateVisConfigField(['dashboard', 'sharedFilters'], filters)
    }
  }

  const editWidget = () => {
    updateVisConfigField([ 'visualizations', data.uid, 'editing' ], true)
  }

  const changeDataset = (uid, value) => {
    let targetVisualization = {[uid]: { ...config.visualizations[uid] } }
    delete targetVisualization[uid].dataDescription
    delete targetVisualization[uid].formattedData

    targetVisualization[uid].dataKey = value

    updateVisConfig({
      visualizations: {
        ...config.visualizations,
        ...targetVisualization
      }
    })
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

    updateVisConfig({ ...config, visualizations: newVisualizations })

    openOverlay(dataDesignerModal(newVisualizations[visualizationKey]))
  }

  const dataDesignerModal = (configureData, dataKeyOverride) => {
    const dataKey = !dataKeyOverride && dataKeyOverride !== '' ? data.dataKey || dataRef.current.dataKey : dataKeyOverride

    toggleOverlay()

    return (
      <Modal>
        <Modal.Content>
          <div className="dataset-selector-container">
            Select a dataset:&nbsp;
            <select
              className="dataset-selector"
              defaultValue={dataKey}
              onChange={e => {
                changeDataset(data.uid, e.target.value)
                openOverlay(dataDesignerModal(data, e.target.value || ''))
              }}
            >
              <option value="">Select a dataset</option>
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
            <button style={{ margin: '1rem' }} className="cove-button" onClick={() => toggleOverlay()}>
              Continue
            </button>
          )}
        </Modal.Content>
      </Modal>
    )
  }

  useEffect(() => {
    if (data.openModal) {
      openOverlay(dataDesignerModal(dataRef.current))
      updateVisConfigField([ 'visualizations', data.uid, 'openModal' ], false)
    }
  }, [ data.openModal ])

  return (
    <>
      <div className="cove-dashboard__widget" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} {...collected}>
        <Icon display="move" className="cove-dashboard__widget--move-icon"/>
        <div className="cove-dashboard__widget--content">
          {data.rowIdx !== undefined && (
            <div className="cove-dashboard__widget-menu">
              {((data.dataKey && data.dataDescription && data.formattedData) || type === 'markup-include') && (
                <div className="cove-dashboard__widget-menu--item">
                  <button title="Configure Visualization" onClick={editWidget}>
                    <Icon display="tools" base/>
                  </button>
                </div>
              )}
              {type !== 'markup-include' && (
                <div className="cove-dashboard__widget-menu--item">
                  <button
                    title="Configure Data"
                    onClick={() => {
                      openOverlay(dataDesignerModal(data))
                    }}
                  >
                    <Icon display="gear" size={14} base/>
                  </button>
                </div>
              )}
              <div className="cove-dashboard__widget-menu--item">
                <button style={{ padding: '3px 4px' }} title="Remove Visualization" onClick={deleteWidget}>
                  <Icon display="close" size={20} base/>
                </button>
              </div>
            </div>
          )}
          <Icon className="cove-dashboard__widget-icon" display={vizHash[type].icon} base/>
          <span className="cove-dashboard__widget-label">{vizHash[type].label}</span>
          {data.newViz && (
            <span onClick={editWidget} className="cove-dashboard__widget__alert-config">
              <Icon className="mr-1" display="tools"/>
              Configuration needed
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default BuilderWidget
