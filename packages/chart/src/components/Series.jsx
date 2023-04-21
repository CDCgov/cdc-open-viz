import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'

// Core
import InputSelect from '@cdc/core/components/inputs/InputSelect'
import Icon from '@cdc/core/components/ui/Icon'

// Third Party
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

// TODO: entire file -> use core select component when its ready.
// TODO: entire file -> use context
const Series = props => {
  const { config } = useContext(ConfigContext)

  return (
    <div className={props.snapshot.isDragging ? 'currently-dragging' : ''} style={props.getItemStyle(props.snapshot.isDragging, props.provided.draggableProps.style, props.sortableItemStyles)} ref={props.provided.innerRef} {...props.provided.draggableProps} {...props.provided.dragHandleProps}>
      {props.children}
    </div>
  )
}

Series.Settings = props => props.children
Series.Dropdowns = props => props.children
Series.Dropdown = props => props.children

Series.Dropdown.LineType = props => {
  const { series, index, config, updateConfig } = props

  // Run a quick test to determine if we should even show this.
  const supportsLineType = ['Line', 'dashed-sm', 'dashed-md', 'dashed-lg', 'Area Chart', 'Forecasting'].some(item => item.includes(series.type))
  if (!supportsLineType) return

  const changeLineType = (i, value) => {
    let series = [...config.series]
    series[i].lineType = value
    updateConfig({ ...config, series })
  }

  const approvedCurveTypes = {
    Linear: 'curveLinear',
    Cardinal: 'curveCardinal',
    Natural: 'curveNatural',
    'Monotone X': 'curveMonotoneX',
    Step: 'curveStep'
  }

  let options = []

  Object.keys(approvedCurveTypes).map(curveName => {
    return options.push(approvedCurveTypes[curveName])
  })

  return (
    <InputSelect
      initial='Select an option'
      initialDisabled
      initialSnap
      value={series.lineType ? series.lineType : 'curveLinear'}
      label='Series Line Type'
      onChange={event => {
        changeLineType(index, event.target.value)
      }}
      options={options}
    />
  )
}

Series.Dropdown.SeriesType = props => {
  const { changeType, index, series } = props

  // Only combo charts are allowed to have different options
  if (props.config.visualizationType !== 'Combo') return

  return (
    <InputSelect
      initial='Select an option'
      initialDisabled
      initialSnap
      value={series.type}
      label='Series Type'
      onChange={event => {
        changeType(index, event.target.value)
      }}
      options={{
        Bar: 'Bar',
        Line: 'Line',
        ['dashed-sm']: 'Small Dashed',
        ['dashed-md']: 'Medium Dashed',
        ['dashed-lg']: 'Large Dashed',
        ['Area Chart']: 'Area Chart'
      }}
    />
  )
}

Series.Dropdown.AxisPosition = props => {
  const { index, changeAxis, series, config } = props
  const supportedRightAxisTypes = ['Line', 'dashed-sm', 'dashed-md', 'dashed-lg']

  // Hide AxisPositionDropdown in certain cases.
  if (config.visualizationType !== 'Combo' || !series) return
  if (!supportedRightAxisTypes.includes(series.type)) {
    return
  }
  return (
    <InputSelect
      initial='Select an option'
      initialDisabled
      value={series.axis ? series.axis : 'Left'}
      initialSnap
      label='Series Axis'
      onChange={event => {
        changeAxis(index, event.target.value)
      }}
      options={{
        ['Left']: 'Left',
        ['Right']: 'Right'
      }}
    />
  )
}

Series.Dropdown.ConfidenceInterval = props => {
  const { series, config, updateConfig, index } = props
  if (config.visualizationType !== 'Forecasting' || !series) return

  const updateSeries = (index, value, property) => {
    let series = [...config.series]
    series[index][property] = value
    updateConfig({ ...config, series })
  }

  return (
    <InputSelect
      initial='Select an option'
      initialDisabled
      value={series.confidenceInterval}
      initialSnap
      label='Confidence Interval'
      onChange={event => {
        updateSeries(index, event.target.value, 'confidenceInterval')
      }}
      options={['25', '50', '95']}
    />
  )
}

Series.List = props => {
  const { provided, children } = props
  return (
    <ul {...provided.droppableProps} className='series-list' ref={provided.innerRef}>
      {children}
    </ul>
  )
}

Series.Item = props => {
  const { series, updateConfig, config, getItemStyle, sortableItemStyles, chartsWithOptions, index: i } = props

  let changeType = (i, value) => {
    let series = [...config.series]
    series[i].type = value

    series[i].axis = 'Left'

    updateConfig({ ...config, series })
  }

  // used for assigning axis
  const changeAxis = (i, value) => {
    let series = [...config.series]
    series[i].axis = value
    updateConfig({ ...config, series })
  }

  const removeSeries = seriesKey => {
    let series = [...config.series]
    let seriesIndex = -1

    for (let i = 0; i < series.length; i++) {
      if (series[i].dataKey === seriesKey) {
        seriesIndex = i
        break
      }
    }

    if (seriesIndex !== -1) {
      series.splice(seriesIndex, 1)

      let newConfig = { ...config, series }

      if (series.length === 0) {
        delete newConfig.series
      }

      updateConfig(newConfig)
    }

    if (config.visualizationType === 'Paired Bar') {
      updateConfig({
        ...config,
        series: []
      })
    }
  }

  return (
    <Draggable key={series.dataKey} draggableId={`draggableFilter-${series.dataKey}`} index={i}>
      {(provided, snapshot) => (
        <>
          <div key={i} className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <div className={`series-list__name ${series.dataKey.length > 15 ? ' series-list__name--truncate' : ''}`} data-title={series.dataKey}></div>
            <Accordion allowZeroExpanded>
              <AccordionItem className='series-item series-item--chart'>
                <AccordionItemHeading className='series-item__title'>
                  <AccordionItemButton className={chartsWithOptions.includes(config.visualizationType) ? 'accordion__button' : 'accordion__button hide-arrow'}>
                    <Icon display='move' size={15} style={{ cursor: 'default' }} />
                    {series.dataKey}
                    {config.series && config.series.length > 1 && (
                      <button className='series-list__remove' onClick={() => removeSeries(series.dataKey)}>
                        Remove
                      </button>
                    )}
                  </AccordionItemButton>
                </AccordionItemHeading>
                {chartsWithOptions.includes(config.visualizationType) && (
                  <AccordionItemPanel>
                    <Series provided={provided} snapshot={snapshot} getItemStyle={getItemStyle} sortableItemStyles={sortableItemStyles}>
                      <Series.Dropdowns>
                        <Series.Dropdown.SeriesType changeType={changeType} series={series} config={config} index={i} />
                        <Series.Dropdown.AxisPosition changeAxis={changeAxis} index={i} series={series} config={config} />
                        <Series.Dropdown.LineType config={config} updateConfig={updateConfig} series={series} index={i} />
                        <Series.Dropdown.ConfidenceInterval config={config} updateConfig={updateConfig} series={series} index={i} />
                      </Series.Dropdowns>
                    </Series>
                  </AccordionItemPanel>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </>
      )}
    </Draggable>
  )
}

// Series.Non = props => {
//   return (
//     <Draggable key={`series.dataKey--${i}`} draggableId={`draggableFilter-${series.dataKey}`} index={i}>
//     {(provided, snapshot) => (
//       <li
//         key={series.dataKey}
//         className={snapshot.isDragging ? 'currently-dragging' : ''}
//         style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)}
//         ref={provided.innerRef}
//         {...provided.draggableProps}
//         {...provided.dragHandleProps}
//       >
//         {/*<div  className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>*/}
//         <div className='series-list__name' data-title={series.dataKey}>
//           <div className='series-list__name--text'>{series.dataKey}</div>
//         </div>
//         {config.series && config.series.length > 1 && (
//           <button className='series-list__remove' onClick={() => removeSeries(series.dataKey)}>
//             &#215;
//           </button>
//         )}
//         {/*</div>*/}
//       </li>
//     )}
//   </Draggable>
//   )
// }

export default Series
