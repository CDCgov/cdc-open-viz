import React, { useContext, useRef, useEffect } from 'react'
import { useDrag } from 'react-dnd'

import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import ConfigContext from '../ConfigContext'

import { DataTransform } from '@cdc/core/helpers/dataTransform'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

import DataDesigner from '@cdc/core/components/managers/DataDesigner'
import Icon from '@cdc/core/components/ui/Icon'
import Modal from '@cdc/core/components/ui/Modal'

const iconHash = {
  'data-bite': <Icon display="databite" base/>,
  'Bar': <Icon display="chartBar" base/>,
  'waffle-chart': <Icon display="grid" base/>,
  'markup-include': <Icon display="code" base/>,
  'Line': <Icon display="chartLine" base/>,
  'Pie': <Icon display="chartPie" base/>,
  'us': <Icon display="mapUsa" base/>,
  'us-county': <Icon display="mapUsa" base/>,
  'world': <Icon display="mapWorld" base/>,
  'single-state': <Icon display="mapAl" base/>
}

const labelHash = {
  'data-bite': 'Data Bite',
  'waffle-chart': 'Waffle Chart',
  'markup-include': 'Markup Include',
  'Bar': 'Bar',
  'Line': 'Line',
  'Pie': 'Pie',
  'us': 'United States (State- or County-Level)',
  'us-county': 'United States (State- or County-Level)',
  'world': 'World',
  'single-state': 'U.S. State'
}

const Widget = ({ data = {}, addVisualization, type }) => {
  const { overlay } = useGlobalContext()
  const { rows, visualizations, config, updateConfig } = useContext(ConfigContext)

  const dataRef = useRef();
  dataRef.current = data;

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

  const [ { isDragging, ...collected }, drag ] = useDrag({
    type: 'vis-widget',
    end: handleWidgetMove,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const deleteWidget = () => {
    rows[data.rowIdx][data.colIdx].widget = null

    delete visualizations[data.uid]

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

 
  const dataDesignerModal = (configureData) => (
    <Modal>
      <Modal.Content>
        <DataDesigner {...{
          configureData, 
          visualizationKey: data.uid,
          dataKey: data.dataKey,
          updateDescriptionProp
        }}/>
      </Modal.Content>
    </Modal>
  )

  useEffect(() => {
    if(data.dataKey)
      overlay?.actions.openOverlay(dataDesignerModal(data))
  }, [data.dataKey])

  return (
    <>
      <div className="widget" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} {...collected}>
        <Icon display="move" className="drag-icon"/>
        <div className="widget__content">
          {data.rowIdx !== undefined && (
            <div className="widget-menu">
              {data.dataKey && data.dataDescription && data.formattedData &&
                <button className="btn btn-configure" onClick={editWidget}>Configure Visualization</button>
              }
              {data.dataKey &&
                <button className="btn btn-configure" onClick={() => {
                  overlay?.actions.openOverlay(dataDesignerModal(data))
                }}>Configure Data</button>
              }
              <select className="dataset-selector" defaultValue={data.dataKey} onChange={(e) => {
                changeDataset(data.uid, e.target.value)
              }}>
                <option value="">Select a dataset</option>
                {config.datasets && Object.keys(config.datasets).map(datasetKey => (
                  <option key={datasetKey}>{datasetKey}</option>
                ))}
              </select>
              <div className="widget-menu-item" onClick={deleteWidget}>
                <Icon display="close" base/>
              </div>
            </div>
          )}
          {iconHash[type]}
          <span>{labelHash[type]}</span>
          {data.newViz && <span onClick={editWidget} className="config-needed">Configuration needed</span>}
        </div>
      </div>
    </>
  )
}

export default Widget
