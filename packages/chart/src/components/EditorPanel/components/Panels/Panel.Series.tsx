import React, { useContext } from 'react'
import ConfigContext from '../../../../ConfigContext'

// Core
import InputSelect from '@cdc/core/components/inputs/InputSelect'
import Check from '@cdc/core/assets/icon-check.svg'
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'
import { sequentialPalettes } from '@cdc/core/data/colorPalettes'
import Icon from '@cdc/core/components/ui/Icon'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'

// Third Party
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import { Draggable, DragDropContext, Droppable } from '@hello-pangea/dnd'
import Tooltip from '@cdc/core/components/ui/Tooltip'

const SeriesContext = React.createContext({})

const SeriesWrapper = props => {
  const { updateConfig, config, rawData } = useContext(ConfigContext)

  const { getColumns, selectComponent } = props

  const supportedRightAxisTypes = ['Line', 'dashed-sm', 'dashed-md', 'dashed-lg']

  const updateSeries = (index, value, property) => {
    let series = [...config.series]
    series[index][property] = value

    // Reset bars to the left axis if changed.
    if (property === 'type') {
      if (value === 'Bar') {
        series[index].axis = 'Left'
      }
    }

    // dynamically add in the forecasting fields
    if (series[index].type === 'Forecasting') {
      let forecastingStages = Array.from(new Set(rawData.map(item => item[series[index].dataKey])))
      let forecastingStageArr = []

      forecastingStages.forEach(stage => {
        forecastingStageArr.push({ key: stage })
      })
      // debugger
      series[index].stages = forecastingStageArr
      series[index].stageColumn = series[index].dataKey
    }

    updateConfig({ ...config, series })
  }

  return (
    <SeriesContext.Provider value={{ updateSeries, supportedRightAxisTypes, getColumns, selectComponent }}>
      {props.children}
    </SeriesContext.Provider>
  )
}

const SeriesDropdownLineType = props => {
  const { config, updateConfig } = useContext(ConfigContext)
  const { series, index } = props

  // Run a quick test to determine if we should even show this.
  const supportsLineType = () => {
    let supported = false
    if (config.visualizationSubType === 'stacked') return supported
    const supportedCharts = ['Line', 'dashed-sm', 'dashed-md', 'dashed-lg', 'Area Chart', 'Bump Chart']
    if (supportedCharts.some(item => item.includes(series.type))) {
      supported = true
    }
    return supported
  }

  if (!supportsLineType()) return

  const changeLineType = (i, value) => {
    let series = [...config.series]
    series[i].lineType = value
    updateConfig({ ...config, series })
  }

  let options = []

  Object.keys(approvedCurveTypes).map(curveName => {
    return options.push(approvedCurveTypes[curveName])
  })

  return (
    <InputSelect
      initial='Select an option'
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

  const getOptions = () => {
    if (config.visualizationType === 'Combo') {
      return {
        Bar: 'Bar',
        Line: 'Line',
        'dashed-sm': 'Small Dashed',
        'dashed-md': 'Medium Dashed',
        'dashed-lg': 'Large Dashed',
        'Area Chart': 'Area Chart',
        Forecasting: 'Forecasting'
      }
    }
    if (config.visualizationType === 'Line' || config.visualizationType === 'Bump Chart') {
      return {
        Line: 'Line',
        'dashed-sm': 'Small Dashed',
        'dashed-md': 'Medium Dashed',
        'dashed-lg': 'Large Dashed'
      }
    }
  }

  // Allowable changes
  if (!['Line', 'Combo', 'Bump Chart'].includes(config.visualizationType)) return
  return (
    <InputSelect
      initial='Select an option'
      value={series.type}
      label='Series Type'
      onChange={event => {
        updateSeries(index, event.target.value, 'type')
      }}
      options={getOptions()}
    />
  )
}

const SeriesDropdownForecastingStage = props => {
  const { config, updateConfig, rawData } = useContext(ConfigContext)
  const { updateSeries, getColumns } = useContext(SeriesContext)

  const { index, series } = props

  // Only combo charts are allowed to have different options

  return (
    <InputSelect
      initial='Select an option'
      value={series.stageColumn}
      label='Add Forecasting Stages'
      onChange={e => {
        let stageObjects = []
        let tempGroups = new Set(rawData?.map(item => item[e.target.value])) // [estimate, forecast, etc.]
        tempGroups = Array.from(tempGroups) // convert set to array

        tempGroups = tempGroups.filter(group => group !== undefined) // removes undefined

        tempGroups.forEach(group => stageObjects.push({ key: group }))

        const copyOfSeries = [...config.series] // copy the entire series array
        copyOfSeries[index] = { ...copyOfSeries[index], stages: stageObjects, stageColumn: e.target.value }

        updateConfig({
          ...config,
          series: copyOfSeries
        })
      }}
      options={getColumns(false)}
    />
  )
}

const SeriesDropdownForecastingColumn = props => {
  const { config, rawData } = useContext(ConfigContext)
  const { updateSeries } = useContext(SeriesContext)

  const { index, series } = props

  // Only combo charts are allowed to have different options
  if (series.type !== 'Forecasting') return
  if (!rawData) return
  if (!series.stageColumn) return

  let tempGroups = new Set(rawData.map(item => item[series.stageColumn])) // [estimate, forecast, etc.]
  tempGroups = Array.from(tempGroups) // convert set to array

  tempGroups = tempGroups.filter(group => group !== undefined) // removes undefined

  return (
    <InputSelect
      initial='Select an option'
      value={series.stageItem}
      label='Forecasting Item Column'
      onChange={event => {
        updateSeries(index, event.target.value, 'stageItem')
      }}
      options={tempGroups}
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
      value={series.axis ? series.axis : 'Left'}
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

const SeriesDropdownForecastColor = props => {
  const { config, updateConfig } = useContext(ConfigContext)

  const { index, series } = props

  if (series.type !== 'Forecasting') return

  // Hide AxisPositionDropdown in certain cases.
  if (!series) return

  const allowedForecastingColors = () => {
    return Object.keys(sequentialPalettes)
  }

  return series?.stages?.map((stage, stageIndex) => (
    <InputSelect
      key={`${stage}--${stageIndex}`}
      initial='Select an option'
      value={
        config.series?.[index].stages?.[stageIndex].color ? config.series?.[index].stages?.[stageIndex].color : 'Select'
      }
      label={`${stage.key} Series Color`}
      onChange={event => {
        const copyOfSeries = [...config.series] // copy the entire series array
        const copyOfStages = copyOfSeries[index].stages
        copyOfStages[stageIndex].color = event.target.value
        copyOfSeries[index] = { ...copyOfSeries[index], stages: copyOfStages }

        updateConfig({
          ...config,
          series: copyOfSeries
        })
      }}
      options={Object.keys(sequentialPalettes)}
    />
  ))
}

const SeriesDropdownConfidenceInterval = props => {
  const { config, updateConfig } = useContext(ConfigContext)
  const { series, index } = props
  const { getColumns } = useContext(SeriesContext)
  if (series.type !== 'Forecasting') return

  return (
    <div className='edit-block'>
      <span className='edit-label column-heading'>Confidence Interval Groups</span>
      <fieldset>
        <Accordion allowZeroExpanded>
          {series?.confidenceIntervals?.map((ciGroup, ciIndex) => {
            const showInTooltip = ciGroup.showInTooltip ? ciGroup.showInTooltip : false

            const updateShowInTooltip = (e, seriesIndex, ciIndex) => {
              e.preventDefault()
              let copiedSeries = [...config.series]
              copiedSeries[seriesIndex].confidenceIntervals[ciIndex].showInTooltip = !showInTooltip
              updateConfig({
                ...config,
                series: copiedSeries
              })
            }

            return (
              <AccordionItem className='series-item series-item--chart' key={`${ciIndex}`}>
                <AccordionItemHeading className='series-item__title'>
                  <>
                    <AccordionItemButton className={'accordion__button accordion__button'}>
                      Group {ciIndex + 1}
                      <button
                        className='series-list__remove'
                        onClick={e => {
                          e.preventDefault()
                          const copiedIndex = [...config.series[index].confidenceIntervals]
                          copiedIndex.splice(ciIndex, 1)
                          const copyOfSeries = [...config.series] // copy the entire series array
                          copyOfSeries[index] = { ...copyOfSeries[index], confidenceIntervals: [...copiedIndex] }
                          updateConfig({
                            ...config,
                            series: copyOfSeries
                          })
                        }}
                      >
                        Remove
                      </button>
                    </AccordionItemButton>
                  </>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='input-group'>
                    <label htmlFor='showInTooltip'>Show In Tooltip</label>
                    <div
                      className={'cove-input__checkbox--small'}
                      onClick={e => updateShowInTooltip(e, index, ciIndex)}
                    >
                      <div
                        className={`cove-input__checkbox-box${'blue' ? ' custom-color' : ''}`}
                        style={{ backgroundColor: '' }}
                      >
                        {showInTooltip && <Check className='' style={{ fill: '#025eaa' }} />}
                      </div>
                      <input
                        className='cove-input--hidden'
                        type='checkbox'
                        name={'showInTooltip'}
                        checked={showInTooltip ? showInTooltip : false}
                        readOnly
                      />
                    </div>
                  </div>

                  <InputSelect
                    initial='Select an option'
                    value={
                      config.series[index].confidenceIntervals[ciIndex].low
                        ? config.series[index].confidenceIntervals[ciIndex].low
                        : 'Select'
                    }
                    label='Low Confidence Interval'
                    onChange={e => {
                      const copiedConfidenceArray = [...config.series[index].confidenceIntervals]
                      copiedConfidenceArray[ciIndex].low = e.target.value
                      const copyOfSeries = [...config.series] // copy the entire series array
                      copyOfSeries[index] = { ...copyOfSeries[index], confidenceIntervals: copiedConfidenceArray }
                      updateConfig({
                        ...config,
                        series: copyOfSeries
                      })
                    }}
                    options={getColumns()}
                  />
                  <InputSelect
                    initial='Select an option'
                    value={
                      config.series[index].confidenceIntervals[ciIndex].high
                        ? config.series[index].confidenceIntervals[ciIndex].high
                        : 'Select'
                    }
                    label='High Confidence Interval'
                    onChange={e => {
                      const copiedConfidenceArray = [...config.series[index].confidenceIntervals]
                      copiedConfidenceArray[ciIndex].high = e.target.value
                      const copyOfSeries = [...config.series] // copy the entire series array
                      copyOfSeries[index] = { ...copyOfSeries[index], confidenceIntervals: copiedConfidenceArray }
                      updateConfig({
                        ...config,
                        series: copyOfSeries
                      })
                    }}
                    options={getColumns()}
                  />
                </AccordionItemPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
        <button
          className='btn btn-primary full-width'
          onClick={e => {
            e.preventDefault()
            let copiedIndex = null
            if (config.series[index].confidenceIntervals) {
              copiedIndex = [...config.series[index].confidenceIntervals]
            } else {
              copiedIndex = []
            }
            const copyOfSeries = [...config.series] // copy the entire series array
            copyOfSeries[index] = {
              ...copyOfSeries[index],
              confidenceIntervals: [...copiedIndex, { high: '', low: '' }]
            } // update the nested array
            updateConfig({
              ...config,
              series: copyOfSeries
            })
          }}
        >
          Add Confidence Interval Group
        </button>
      </fieldset>
    </div>
  )
}

const DynamicSeriesOrder = () => {
  const { config, updateConfig } = useContext(ConfigContext)
  const handleFilterOrder = (index1, index2) => {
    const values = [...config.runtime.seriesKeys]

    const [removed] = values.splice(index1, 1)
    values.splice(index2, 0, removed)

    updateConfig({ ...config, legend: { ...config.legend, orderedValues: values } })
  }

  return (
    <DragDropContext onDragEnd={({ source, destination }) => handleFilterOrder(source?.index, destination?.index)}>
      <Droppable droppableId='filter_order'>
        {provided => (
          <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef} style={{ marginTop: '1em' }}>
            {config.runtime.seriesLabelsAll?.map((value, index) => {
              return (
                <Draggable key={value} draggableId={`draggableFilter-${value}`} index={index}>
                  {(provided, snapshot) => (
                    <li>
                      <div
                        className={snapshot.isDragging ? 'currently-dragging' : ''}
                        style={provided.draggableProps.style}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {value}
                      </div>
                    </li>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
const legendOrderOptions: { label: string; value: string }[] = [
  { label: 'Order By Data Column', value: 'dataColumn' },
  {
    label: 'Custom',
    value: 'custom'
  },
  {
    label: 'Ascending Alphanumeric',
    value: 'asc'
  },
  {
    label: 'Descending Alphanumeric',
    value: 'desc'
  }
]

const SeriesInputWeight = props => {
  const { series, index: i } = props
  const { config, updateConfig } = useContext(ConfigContext)
  const adjustableWeightSeriesTypes = ['Line', 'Combo', 'dashed-sm', 'dashed-md', 'dashed-lg']

  if (!adjustableWeightSeriesTypes.includes(series.type)) return

  const changeSeriesWeight = (i, value, min, max) => {
    let series = [...config.series]
    let seriesLabelsCopy = { ...config.runtime.seriesLabels }
    series[i].weight = !value ? value : Math.max(Number(min), Math.min(Number(max), Number(value)))
    seriesLabelsCopy[series[i].dataKey] = series[i].weight ? series[i].weight : series[i].dataKey

    const newConfig = {
      ...config,
      series,
      runtime: {
        ...config.runtime,
        seriesLabels: seriesLabelsCopy
      }
    }

    updateConfig(newConfig)
  }

  return (
    <>
      <label htmlFor='series-weight'>Line Weight</label>
      <input
        type='number'
        key={`series-weight-${i}`}
        value={series.weight ? series.weight : ''}
        min='1'
        max='9'
        onChange={event => {
          changeSeriesWeight(i, event.target.value, event.target.min, event.target.max)
        }}
      />
    </>
  )
}

const SeriesInputName = props => {
  const { series, index: i } = props
  const { config, updateConfig } = useContext(ConfigContext)
  const adjustableNameSeriesTypes = [
    'Bump Chart',
    'Bar',
    'Line',
    'Area Chart',
    'Combo',
    'Deviation',
    'Paired',
    'Scatter',
    'dashed-sm',
    'dashed-md',
    'dashed-lg'
  ]

  if (!adjustableNameSeriesTypes.includes(series.type)) return

  const changeSeriesName = (i, value) => {
    let series = [...config.series]
    let seriesLabelsCopy = { ...config.runtime.seriesLabels }
    series[i].name = value
    seriesLabelsCopy[series[i].dataKey] = series[i].name ? series[i].name : series[i].dataKey

    let newConfig = {
      ...config,
      series,
      runtime: {
        ...config.runtime,
        seriesLabels: seriesLabelsCopy
      }
    }

    updateConfig(newConfig)
  }
  // if series name is emty show default data value.
  const value = series.name !== undefined && series.name !== series.dataKey ? series.name : series.dataKey

  return (
    <>
      <label htmlFor='series-name'>Series Name</label>
      <input
        type='text'
        key={`series-name-${i}`}
        value={value}
        onChange={event => {
          changeSeriesName(i, event.target.value)
        }}
      />
    </>
  )
}

const SeriesDisplayInTooltip = props => {
  const { series, index } = props
  const { config, updateConfig } = useContext(ConfigContext)

  if (['Paired Bar', 'Scatter Plot', 'Deviation Bar'].includes(config.visualizationType)) return

  const toggleTooltip = seriesIndex => {
    let copiedSeries = [...config.series]

    const showInTooltip = copiedSeries[seriesIndex].tooltip ? copiedSeries[seriesIndex].tooltip : false

    copiedSeries[seriesIndex].tooltip = !copiedSeries[seriesIndex].tooltip

    updateConfig({
      ...config,
      series: copiedSeries
    })
  }

  return (
    <>
      <div className='input-group'>
        <label htmlFor={`series-tooltip--${index}`}>Show In Tooltip</label>
        <div className={'cove-input__checkbox--small'} onClick={e => toggleTooltip(index)}>
          <div className={`cove-input__checkbox-box${'blue' ? ' custom-color' : ''}`} style={{ backgroundColor: '' }}>
            {series.tooltip && <Check className='' style={{ fill: '#025eaa' }} />}
          </div>
          <input
            className='cove-input--hidden'
            type='checkbox'
            name={`series-tooltip--${index}`}
            checked={series.tooltip ? series.tooltip : false}
            readOnly
          />
        </div>
      </div>
    </>
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
  const { config, updateConfig } = useContext(ConfigContext)
  const { updateSeries, getColumns } = useContext(SeriesContext)
  const { series, getItemStyle, sortableItemStyles, chartsWithOptions, index: i } = props
  const showDynamicCategory =
    ['Bar', 'Line'].includes(config.visualizationType) &&
    config.visualizationSubType !== 'Stacked' &&
    !config.series.find(s => s.dynamicCategory && s.dataKey !== series.dataKey)
  return (
    <Draggable key={series.dataKey} draggableId={`draggableFilter-${series.dataKey}`} index={i}>
      {(provided, snapshot) => (
        <div
          key={i}
          className={snapshot.isDragging ? 'currently-dragging' : ''}
          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Accordion allowZeroExpanded>
            <AccordionItem className='series-item series-item--chart'>
              <AccordionItemHeading className='series-item__title'>
                <AccordionItemButton
                  className={
                    chartsWithOptions.includes(config.visualizationType)
                      ? 'accordion__button'
                      : 'accordion__button hide-arrow'
                  }
                >
                  <Icon display='move' size={15} style={{ cursor: 'default' }} />
                  {series.dataKey}
                  <Series.Button.Remove series={series} index={i} />
                </AccordionItemButton>
              </AccordionItemHeading>
              {chartsWithOptions.includes(config.visualizationType) && (
                <AccordionItemPanel>
                  <Series.Input.Name series={series} index={i} />
                  {showDynamicCategory && (
                    <>
                      <Select
                        label='Dynamic Category'
                        value={series.dynamicCategory}
                        options={['- Select - ', ...getColumns().filter(col => series.dataKey !== col)]}
                        updateField={(_section, _subsection, _fieldName, value) => {
                          if (value === '- Select -') value = ''
                          updateSeries(i, value, 'dynamicCategory')
                        }}
                        tooltip={
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>
                                This field is Optional. If you have a dynamic data series you can select the category
                                field here. You can only add one dynamic category per visualization.
                              </p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />

                      <>
                        <Select
                          value={config.legend.order}
                          options={legendOrderOptions}
                          section='legend'
                          fieldName='order'
                          updateField={(_section, _subsection, _fieldName, value) => {
                            updateConfig({ ...config, legend: { ...config.legend, order: value } })
                          }}
                          label='Dynamic Series Order'
                        />
                        {config.legend.order === 'custom' && <DynamicSeriesOrder />}
                      </>
                    </>
                  )}
                  <Series.Input.Weight series={series} index={i} />
                  <Series.Dropdown.SeriesType series={series} index={i} />
                  <Series.Dropdown.AxisPosition series={series} index={i} />
                  <Series.Dropdown.LineType series={series} index={i} />
                  <Series.Dropdown.ForecastingColor series={series} index={i} />
                  <Series.Dropdown.ConfidenceInterval series={series} index={i} />
                  <Series.Checkbox.DisplayInTooltip series={series} index={i} />
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
    return (
      <SeriesItem
        getItemStyle={getItemStyle}
        sortableItemStyles={sortableItemStyles}
        chartsWithOptions={chartsWithOptions}
        series={series}
        index={i}
        key={`series-list-${i}`}
      />
    )
  })
}

const Series = {
  Wrapper: SeriesWrapper,
  Dropdown: {
    SeriesType: SeriesDropdownSeriesType,
    AxisPosition: SeriesDropdownAxisPosition,
    ConfidenceInterval: SeriesDropdownConfidenceInterval,
    LineType: SeriesDropdownLineType,
    ForecastingStage: SeriesDropdownForecastingStage,
    ForecastingColumn: SeriesDropdownForecastingColumn,
    ForecastingColor: SeriesDropdownForecastColor
  },
  Input: {
    Name: SeriesInputName,
    Weight: SeriesInputWeight
  },
  Checkbox: {
    DisplayInTooltip: SeriesDisplayInTooltip
  },
  Button: {
    Remove: SeriesButtonRemove
  },
  Item: SeriesItem,
  List: SeriesList
}

export default Series
