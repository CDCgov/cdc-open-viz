import React, { useContext, useState } from 'react';
import { useDrag } from 'react-dnd';
import CloseIcon from '../images/icon-close.svg';
import GridIcon from '../images/icon-grid.svg';
import CodeIcon from '../images/icon-code.svg';
import EditIcon from '../images/icon-edit.svg';
import MoveIcon from '../images/icon-move.svg';
import BiteIcon from '@cdc/core/assets/data-bite-graphic.svg';
import BarIcon from '@cdc/core/assets/chart-bar-solid.svg';
import LineIcon from '@cdc/core/assets/chart-line-solid.svg';
import PieIcon from '@cdc/core/assets/chart-pie-solid.svg';
import UsaIcon from '@cdc/core/assets/usa-graphic.svg';
import WorldIcon from '@cdc/core/assets/world-graphic.svg';

import Context from '../context';

import DataTransform from '@cdc/core/components/DataTransform';
import DataQuestionnaire from '@cdc/core/components/DataQuestionnaire';

import '@cdc/core/styles/dataquestionnaire.scss'

const iconHash = {
  'data-bite' : <BiteIcon />,
  'Bar': <BarIcon />,
  'waffle-chart' : <GridIcon />,
  'markup-include' : <CodeIcon />,
  'Line' : <LineIcon />,
  'Pie' : <PieIcon />,
  'us' : <UsaIcon />,
  'world' : <WorldIcon />
}

const labelHash = {
  'data-bite': 'Data Bite',
  'waffle-chart' : 'Waffle Chart',
  'markup-include' : 'Markup Include',
  'Bar' : 'Bar',
  'Line' : 'Line',
  'Pie' : 'Pie',
  'us' : 'United States',
  'world' : 'World'
}

const Widget = ({ data = {}, addVisualization, type }) => {
  const { rows, visualizations, config, updateConfig } = useContext(Context)

  const [ modal, setModal ] = useState(false);

  const transform = new DataTransform();

  const handleWidgetMove = (item, monitor) => {
      let result = monitor.getDropResult()

      if(!result) return null

      const { rowIdx, colIdx } = result

      if(undefined !== data.rowIdx) {
        rows[data.rowIdx][data.colIdx].widget = null // Wipe from old position

        rows[rowIdx][colIdx].widget = data.uid // Add to new row and col
      } else {
        // Item does not exist, instantiate a new one
        const newViz = addVisualization()
        visualizations[newViz.uid] = newViz // Add to widgets collection
        rows[rowIdx][colIdx].widget = newViz.uid // Store reference in rows collection under the specific column
      }

      updateConfig({...config, rows, visualizations})
  }

  const [ { isDragging, ...collected }, drag ] = useDrag({
    type: 'vis-widget',
    end: handleWidgetMove,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const fetchRemoteData = async (url) => {
    try {
        const regex = /(?:\.([^.]+))?$/

        let data = []

        const ext = (regex.exec(url)[1])
        if ('csv' === ext) {
            data = await fetch(url)
                .then(response => response.text())
                .then(responseText => {
                    const parsedCsv = Papa.parse(responseText, {
                        header: true,
                        dynamicTyping: true,
                        skipEmptyLines: true
                    })
                    return parsedCsv.data
                })
        }

        if ('json' === ext) {
            data = await fetch(url)
                .then(response => response.json())
        }

        return data;
    } catch {
        // If we can't parse it, still attempt to fetch it
        try {
            let response = await (await fetch(configUrl)).json()
            return response
        } catch {
            console.error(`Cannot parse URL: ${url}`);
        }
    }
  }

  const deleteWidget = () => {
    rows[data.rowIdx][data.colIdx].widget = null

    delete visualizations[data.uid]

    updateConfig({...config, rows, visualizations})
  }

  const editWidget = () => {
    visualizations[data.uid].editing = true;

    updateConfig({...config, visualizations});
  }

  const changeDataset = (uid, value) => {
    delete visualizations[uid].dataDescription;
    delete visualizations[uid].formattedData;

    visualizations[uid].dataKey = value;

    updateConfig({...config, visualizations});
  }

  const updateDescriptionProp = async (visualizationKey, datasetKey, key, value) => {
    let dataDescription = { ...config.visualizations[visualizationKey].dataDescription, [key]: value }

    let data
    if(!config.datasets[datasetKey].data && config.datasets[datasetKey].dataUrl) {
      data = await fetchRemoteData(config.datasets[datasetKey].dataUrl)
      data = transform.autoStandardize(data);
    } else {
      data = config.datasets[datasetKey].data;
    }

    let formattedData = transform.developerStandardize(data, dataDescription)

    let newVisualizations = {...config.visualizations}
    newVisualizations[visualizationKey] = {...newVisualizations[visualizationKey], data, dataDescription, formattedData};

    updateConfig({ ...config, visualizations: newVisualizations })
  }

  return (
    <div className="widget" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} {...collected}>
      {modal && (
        <div className="data-questionnaire-modal">
          <div className="data-questionnaire-modal-content">
            <button className="close-button" onClick={() => setModal(false)}>X</button>
            <DataQuestionnaire visualizationKey={data.uid} dataKey={data.dataKey} configureData={data} updateDescriptionProp={updateDescriptionProp} />
          </div>
        </div>
      )}
      <MoveIcon className="drag-icon" />
      <div className="widget__content">
        {data.rowIdx !== undefined && (
          <div className="widget-menu">
            {data.dataKey && data.formattedData && <button className="btn btn-configure" onClick={editWidget}>Configure Visualization</button>}
            {data.dataKey && <button className="btn btn-configure" onClick={() => setModal(true)}>Configure Data</button>}
            <select className="dataset-selector" defaultValue={data.dataKey} onChange={(e) => changeDataset(data.uid, e.target.value)}>
              <option value="">Select a dataset</option>
              {Object.keys(config.datasets).map(datasetKey => (
                <option>{datasetKey}</option>
              ))}
            </select>
            <div className="widget-menu-item" onClick={deleteWidget}><CloseIcon /></div>
          </div>
        )}
        {iconHash[type]}
        <span>{labelHash[type]}</span>
        {data.newViz && <span onClick={editWidget} className="config-needed">Configuration needed</span>}
      </div>
    </div>
  )
}

export default Widget
