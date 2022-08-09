import React, { useContext } from 'react';

// Third Party
import { useDrag } from 'react-dnd';

// Components
import Icon from '@cdc/core/components/ui/Icon'


const widgetHash = {
  'data-byte' : {
    label: "Data Byte",
    icon: <Icon display="databyte"/>
  },
  'bar': {
    label: "Waffle Chart",
    icon: <Icon display="chartBar"/>
  },
  'waffle-chart' : {
    label: "Markup Include",
    icon: <Icon display="grid"/>
  },
  'markup-include' : {
    label: "Bar",
    icon: <Icon display="code"/>
  },
  'Line' : {
    label: "Line",
    icon: <Icon display="chartLine"/>
  },
  'Pie' : {
    label: "Pie",
    icon: <Icon display="chartPie"/>
  },
  'us' : {
    label: "United States (State or County-Level)",
    icon: <Icon display="mapUsa"/>
  },
  'us-county': {
    label: "United States (State or County-Level)",
    icon: <Icon display="mapUsa"/>
  },
  'world' : {
    label: "World",
    icon: <Icon display="mapWorld"/>
  },
  'single-state': {
    label: "U.S. State",
    icon: <Icon display="mapAl"/>
  }
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
    type: 'viz-widget',
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

  return (
    <div className="widget" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} {...collected}>
      <Icon display="move"/>
      <div className="widget__content">
        {data.rowIdx !== undefined && (
          <div className="widget-menu">
            <div className="widget-menu-item" onClick={editWidget}>
              <Icon display="edit"/>
            </div>
            <div className="widget-menu-item" onClick={deleteWidget}>
              <Icon display="close"/>
            </div>
          </div>
        )}
        {widgetHash[type].icon}
        <span>{widgetHash[type].label}</span>
        {data.newViz &&
          <span onClick={editWidget} className="config-needed">Configuration needed</span>
        }
      </div>
    </div>
  )
}

export default Widget
