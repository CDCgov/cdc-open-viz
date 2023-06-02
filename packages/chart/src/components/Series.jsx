import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'

// Core
import InputSelect from '@cdc/core/components/inputs/InputSelect'
import Check from '@cdc/core/assets/icon-check.svg'

import Icon from '@cdc/core/components/ui/Icon'

// Third Party
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { Draggable } from '@hello-pangea/dnd'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

const SeriesContext = React.createContext()

const SeriesWrapper = props => {
  const { updateConfig, config } = useContext(ConfigContext)

  const { getColumns, selectComponent } = props

  const supportedRightAxisTypes = ['Line', 'dashed-sm', 'dashed-md', 'dashed-lg']

  const updateSeries = (index, value, property) => {
    let series = [...config.series]
    series[index][property] = value

    updateConfig({ ...config, series })
  }

  return <SeriesContext.Provider value={{ updateSeries, supportedRightAxisTypes, getColumns, selectComponent }}>{props.children}</SeriesContext.Provider>
}

const SeriesDropdownLineType = props => {
  const { config, updateConfig } = useContext(ConfigContext)
  const { series, index } = props

  // Run a quick test to determine if we should even show this.
  const supportsLineType = ['Line', 'dashed-sm', 'dashed-md', 'dashed-lg', 'Area Chart'].some(item => item.includes(series.type))

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
        'Area Chart': 'Area Chart',
        Forecasting: 'Forecasting'
      }}
    />
  )
}

const SeriesDropdownForecastingStage = props => {
  const { config, updateConfig, rawData } = useContext(ConfigContext)
  const { updateSeries, getColumns } = useContext(SeriesContext)

  const { index, series } = props

  // Only combo charts are allowed to have different options
  if (series.type !== 'Forecasting') return

  return (
    <InputSelect
      initial='Select an option'
      initialDisabled
      initialSnap
      value={series.stageColumn}
      label='Add Forecasting Stages'
      // onChange={event => {
      //   updateSeries(index, event.target.value, 'stageColumn')
      // }}
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
      initialDisabled
      initialSnap
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

const SeriesDropdownForecastColor = props => {
  const { config, updateConfig } = useContext(ConfigContext)

  const { index, series } = props

  if (series.type !== 'Forecasting') return

  // Hide AxisPositionDropdown in certain cases.
  if (config.visualizationType !== 'Combo' || !series) return

  return series?.stages?.map((stage, stageIndex) => (
    <InputSelect
      initial='Select an option'
      initialDisabled
      value={config.series?.[index].stages?.[stageIndex].color ? config.series?.[index].stages?.[stageIndex].color : 'Select'}
      initialSnap
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
      options={Object.keys(colorPalettesChart)}
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
      <h3>Confidence Interval Groups</h3>
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
              <AccordionItem className='series-item series-item--chart'>
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
                    <label for='showInTooltip'>Show In Tooltip</label>
                    <div className={'cove-input__checkbox--small'} onClick={e => updateShowInTooltip(e, index, ciIndex)}>
                      <div className={`cove-input__checkbox-box${'blue' ? ' custom-color' : ''}`} style={{ backgroundColor: '' }}>
                        {showInTooltip && <Check className='' style={{ fill: '#025eaa' }} />}
                      </div>
                      <input className='cove-input--hidden' type='checkbox' name={'showInTooltip'} checked={showInTooltip ? showInTooltip : false} readOnly />
                    </div>
                  </div>

                  <InputSelect
                    initial='Select an option'
                    initialDisabled
                    initialSnap
                    value={config.series[index].confidenceIntervals[ciIndex].low ? config.series[index].confidenceIntervals[ciIndex].low : 'Select'}
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
                    initialDisabled
                    initialSnap
                    value={config.series[index].confidenceIntervals[ciIndex].high ? config.series[index].confidenceIntervals[ciIndex].high : 'Select'}
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
          className='btn full-width'
          onClick={e => {
            e.preventDefault()
            let copiedIndex = null
            if (config.series[index].confidenceIntervals) {
              copiedIndex = [...config.series[index].confidenceIntervals]
            } else {
              copiedIndex = []
            }
            const copyOfSeries = [...config.series] // copy the entire series array
            copyOfSeries[index] = { ...copyOfSeries[index], confidenceIntervals: [...copiedIndex, { high: '', low: '' }] } // update the nested array
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

const SeriesInputName = props => {
  const { series, index: i } = props
  const { config, updateConfig } = useContext(ConfigContext)
  const adjustableNameSeriesTypes = ['Bar', 'Line']

  if (config.visualizationType === 'Combo') return

  if (!adjustableNameSeriesTypes.includes(series.type)) return

  let changeSeriesName = (i, value) => {
    let series = [...config.series]
    let seriesLabelsCopy = { ...config.runtime.seriesLabels }
    series[i].name = value
    seriesLabelsCopy[series[i].dataKey] = series[i].name

    let newConfig = {
      ...config,
      series
    }

    updateConfig(newConfig)
  }

  return (
    <>
      <label htmlFor='series-name'>Series Name</label>
      <input
        type='text'
        key={`series-name-${i}`}
        value={series.name ? series.name : ''}
        onChange={event => {
          changeSeriesName(i, event.target.value)
        }}
      />
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
                  <Series.Input.Name series={series} index={i} />
                  <Series.Dropdown.SeriesType series={series} index={i} />
                  <Series.Dropdown.AxisPosition series={series} index={i} />
                  <Series.Dropdown.LineType series={series} index={i} />
                  <Series.Dropdown.ForecastingStage series={series} index={i} />
                  <Series.Dropdown.ForecastingColor series={series} index={i} />
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
    LineType: SeriesDropdownLineType,
    ForecastingStage: SeriesDropdownForecastingStage,
    ForecastingColumn: SeriesDropdownForecastingColumn,
    ForecastingColor: SeriesDropdownForecastColor
  },
  Input: {
    Name: SeriesInputName
  },
  Button: {
    Remove: SeriesButtonRemove
  },
  Item: SeriesItem,
  List: SeriesList
}

export default Series
