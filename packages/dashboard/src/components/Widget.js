import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import CloseIcon from '../images/icon-close.svg';
import GridIcon from '../images/icon-grid.svg';
import EditIcon from '../images/icon-edit.svg';
import MoveIcon from '../images/icon-move.svg';
import BiteIcon from '@cdc/core/assets/data-bite-graphic.svg';
import BarIcon from '@cdc/core/assets/chart-bar-solid.svg';
import LineIcon from '@cdc/core/assets/chart-line-solid.svg';
import PieIcon from '@cdc/core/assets/chart-pie-solid.svg';
import UsaIcon from '@cdc/core/assets/usa-graphic.svg';
import WorldIcon from '@cdc/core/assets/world-graphic.svg';

import Context from '../context';

const iconHash = {
  'data-bite' : <BiteIcon />,
  'Bar': <BarIcon />,
  'waffle-chart' : <GridIcon />,
  'Line' : <LineIcon />,
  'Pie' : <PieIcon />,
  'us' : <UsaIcon />,
  'world' : <WorldIcon />
}

const labelHash = {
  'data-bite': 'Data Bite',
  'waffle-chart' : 'Waffle Chart',
  'Bar' : 'Bar',
  'Line' : 'Line',
  'Pie' : 'Pie',
  'us' : 'United States',
  'world' : 'World'
}

const Widget = ({ data = {}, addVisualization, type }) => {
  const { rows, visualizations, config, updateConfig } = useContext(Context)

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
    visualizations[uid].dataKey = value;

    updateConfig({...config, visualizations});
  }

  return (
    <div className="widget" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} {...collected}>
      <MoveIcon className="drag-icon" />
      <div className="widget__content">
        {data.rowIdx !== undefined && (
          <div className="widget-menu">
            <select defaultValue={data.dataKey} onChange={(e) => changeDataset(data.uid, e.target.value)}>
              <option value="">Select a dataset</option>
              {Object.keys(config.datasets).map(datasetKey => (
                <option>{datasetKey}</option>
              ))}
            </select>
            <div className="widget-menu-item" onClick={editWidget}><EditIcon /></div>
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
