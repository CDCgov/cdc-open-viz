import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'

// Core
import InputSelect from '@cdc/core/components/inputs/InputSelect'
import Icon from '@cdc/core/components/ui/Icon'

// Third Party
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { Draggable } from '@hello-pangea/dnd'

const SeriesContext = React.createContext()

const SeriesWrapper = props => {
  const { updateConfig, config } = useContext(ConfigContext)

  const supportedRightAxisTypes = ['Line', 'dashed-sm', 'dashed-md', 'dashed-lg']

  const updateSeries = (index, value, property) => {
    let series = [...config.series]
    series[index][property] = value
    updateConfig({ ...config, series })
  }

  return <SeriesContext.Provider value={{ updateSeries, supportedRightAxisTypes }}>{props.children}</SeriesContext.Provider>
}

const SeriesDropdownLineType = props => {
  const { config, updateConfig } = useContext(ConfigContext)
  const { series, index } = props

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

const SeriesDropdownSeriesType = props => {
  const { config } = useContext(ConfigContext)
  const { updateSeries } = useContext(SeriesContext)

  const { index, series } = props

  // Only combo charts are allowed to have different options
  if (config.visualizationType !== 'Combo') return

  return (
    <InputSelect
      initial='Select an option'
      initialDisabled
      initialSnap
      value={series.type}
      label='Series Type'
      onChange={event => {
        updateSeries(index, event.target.value, 'type')
      }}
      options={{
        Bar: 'Bar',
        Line: 'Line',
        'dashed-sm': 'Small Dashed',
        'dashed-md': 'Medium Dashed',
        'dashed-lg': 'Large Dashed',
        'Area Chart': 'Area Chart'
      }}
    />
  )
}

const SeriesDropdownAxisPosition = props => {
  const { config } = useContext(ConfigContext)
  const { updateSeries, supportedRightAxisTypes } = useContext(SeriesContext)

  const { index, series } = props

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
        updateSeries(index, event.target.value, 'axis')
      }}
      options={{
        ['Left']: 'Left',
        ['Right']: 'Right'
      }}
    />
  )
}

const SeriesDropdownConfidenceInterval = props => {
  const { config } = useContext(ConfigContext)
  const { updateSeries } = useContext(SeriesContext)

  const { series, index } = props
  if (config.visualizationType !== 'Forecasting' || !series) return

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

const SeriesButtonRemove = props => {
  const { config, updateConfig } = useContext(ConfigContext)
  const { series, index } = props

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

  const handleRemoveSeries = (e, series, index) => {
    e.preventDefault()
    removeSeries(series.dataKey)
  }

  return (
    config.series &&
    config.series.length > 1 && (
      <button className='series-list__remove' onClick={e => handleRemoveSeries(e, series, index)}>
        Remove
      </button>
    )
  )
}

const SeriesItem = props => {
  const { config } = useContext(ConfigContext)

  const { series, getItemStyle, sortableItemStyles, chartsWithOptions, index: i } = props

  return (
    <Draggable key={series.dataKey} draggableId={`draggableFilter-${series.dataKey}`} index={i}>
      {(provided, snapshot) => (
        <div key={i} className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Accordion allowZeroExpanded>
            <AccordionItem className='series-item series-item--chart'>
              <AccordionItemHeading className='series-item__title'>
                <AccordionItemButton className={chartsWithOptions.includes(config.visualizationType) ? 'accordion__button' : 'accordion__button hide-arrow'}>
                  <Icon display='move' size={15} style={{ cursor: 'default' }} />
                  {series.dataKey}
                  <Series.Button.Remove series={series} index={i} />
                </AccordionItemButton>
              </AccordionItemHeading>
              {chartsWithOptions.includes(config.visualizationType) && (
                <AccordionItemPanel>
                  <Series.Dropdown.SeriesType series={series} index={i} />
                  <Series.Dropdown.AxisPosition series={series} index={i} />
                  <Series.Dropdown.LineType series={series} index={i} />
                  <Series.Dropdown.ConfidenceInterval series={series} index={i} />
                </AccordionItemPanel>
              )}
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </Draggable>
  )
}

const SeriesList = props => {
  const { series, getItemStyle, sortableItemStyles, chartsWithOptions } = props
  return series.map((series, i) => {
    return <SeriesItem getItemStyle={getItemStyle} sortableItemStyles={sortableItemStyles} chartsWithOptions={chartsWithOptions} series={series} index={i} />
  })
}

const Series = {
  Wrapper: SeriesWrapper,
  Dropdown: {
    SeriesType: SeriesDropdownSeriesType,
    AxisPosition: SeriesDropdownAxisPosition,
    ConfidenceInterval: SeriesDropdownConfidenceInterval,
    LineType: SeriesDropdownLineType
  },
  Button: {
    Remove: SeriesButtonRemove
  },
  Item: SeriesItem,
  List: SeriesList
}

export default Series
