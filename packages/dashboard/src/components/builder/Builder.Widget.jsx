import React, { useContext, useRef, useEffect } from 'react'

// Third Party
import { useDrag } from 'react-dnd'

// Context
import { useGlobalStore } from '@cdc/core/stores/globalStore'
import ConfigContext from '../../ConfigContext'

// Helpers
import dataTransform from '@cdc/core/helpers/dataTransform'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

// Components - Core
import DataDesigner from '@cdc/core/components/manager/DataDesigner'
import Icon from '@cdc/core/components/ui/Icon'
import Modal from '@cdc/core/components/ui/Modal'

const vizHash = {
  'data-bite': {
    icon: "databite",
    label: 'Data Bite'
  },
  'waffle-chart': {
    icon: "grid",
    label: 'Waffle Chart'
  },
  'markup-include': {
    icon: "code",
    label: 'Markup Include'
  },
  Bar: {
    icon: "chartBar",
    label: 'Bar'
  },
  Line: {
    icon: "chartLine",
    label: 'Line'
  },
  'Spark Line': {
    icon: "chartLine",
    label: 'Spark Line'
  },
  Pie: {
    icon: "chartPie",
    label: 'Pie'
  },
  us: {
    icon: "mapUsa",
    label: 'United States (State/County Level)'
  },
  'us-county': {
    icon: "mapUsa",
    label: 'United States (State/County Level)'
  },
  world: {
    icon: "mapWorld",
    label: 'World'
  },
  'single-state': {
    icon: "mapAl",
    label: 'U.S. State'
  },
  'filtered-text': {
    icon: "filteredText",
    label: 'Filtered Text'
  }
}

const BuilderWidget = ({ data = {}, addVisualization, type }) => {
  const { overlay, openOverlay, toggleOverlay } = useGlobalStore()
  const { rows, visualizations, config, updateConfig } = useContext(ConfigContext)

  const dataRef = useRef()
  dataRef.current = data

  const transform = new dataTransform()

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

    openOverlay(dataDesignerModal(newVisualizations[visualizationKey]))
  }

  const dataDesignerModal = (configureData, dataKeyOverride) => {
    const dataKey = !dataKeyOverride && dataKeyOverride !== '' ? data.dataKey || dataRef.current.dataKey : dataKeyOverride

    toggleOverlay()

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
                openOverlay(dataDesignerModal(data, e.target.value || ''))
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
            <button style={{ margin: '1rem' }} className='cove-button' onClick={() => toggleOverlay()}>
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

      visualizations[data.uid].openModal = false

      updateConfig({ ...config, visualizations })
    }
  }, [data.openModal])

  return (
    <>
      <div className='cove-dashboard__widget' ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} {...collected}>
        <Icon display='move' className='cove-dashboard__widget--move-icon'/>
        <div className='cove-dashboard__widget--content'>
          {data.rowIdx !== undefined && (
            <div className='cove-dashboard__widget-menu'>
              {((data.dataKey && data.dataDescription && data.formattedData) || type === 'markup-include') && (
                <div className="cove-dashboard__widget-menu--item">
                  <button title='Configure Visualization' onClick={editWidget}>
                    <Icon display="tools" base />
                  </button>
                </div>
              )}
              {type !== 'markup-include' && (
                <div className="cove-dashboard__widget-menu--item">
                  <button
                    title='Configure Data'
                    onClick={() => {
                      openOverlay(dataDesignerModal(data))
                    }}
                  >
                    <Icon display="gear" size={14} base />
                  </button>
                </div>
              )}
              <div className='cove-dashboard__widget-menu--item'>
                <button style={{ padding: '3px 4px' }} title="Remove Visualization" onClick={deleteWidget}>
                  <Icon display='close' size={20} base />
                </button>
              </div>
            </div>
          )}
          <Icon className="cove-dashboard__widget-icon" display={vizHash[type].icon} base />
          <span className="cove-dashboard__widget-label">{vizHash[type].label}</span>
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

export default BuilderWidget
