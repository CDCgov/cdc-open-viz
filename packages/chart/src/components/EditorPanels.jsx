import React, { useState, useEffect, useCallback, memo } from 'react'

// Third Party
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import produce from 'immer'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'
import useReduceData from '../hooks/useReduceData'
import useRightAxis from '../hooks/useRightAxis'

// Helpers
import { getDataColumns, getDataValues, getDataValueOptions, getFilteredDataColumns } from '@cdc/core/helpers/cove/data'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import Button from '@cdc/core/components/element/Button'
import InputCheckbox from '@cdc/core/components/input/InputCheckbox'
import InputSelect from '@cdc/core/components/input/InputSelect'
import InputText from '@cdc/core/components/input/InputText'
import InputToggle from '@cdc/core/components/input/InputToggle'
import PanelComponentAdvanced from '@cdc/core/components/editor/Panel.Component.Advanced'
import PanelGlobal from '@cdc/core/components/editor/Panel.Global'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import SectionBlock from '@cdc/core/components/ui/SectionBlock'
import SectionWrapper from '@cdc/core/components/ui/SectionWrapper'
import Icon from '@cdc/core/components/ui/Icon'

// Styles
import '@cdc/core/styles/v2/components/ui/alert.scss'
import ColorPickerSequence from '@cdc/core/components/ui/ColorPickerSequence'

const Regions = memo(() => {
  const { config, updateVisConfigField } = useVisConfig()

  let regionUpdate = (fieldName, value, i) => {
    let regions = []

    if (config.regions) {
      regions = [ ...config.regions ]
    }

    regions = produce(regions, draft => {
      draft[i][fieldName] = value
    })

    updateVisConfigField('regions', regions)
  }

  let regionRemoveColumn = i => {
    let regions = []

    if (config.regions) {
      regions = [ ...config.regions ]
    }

    regions.splice(i, 1)

    updateVisConfigField('regions', regions, false)
  }

  let regionAddColumn = () => {
    let regions = []

    if (config.regions) {
      regions = [ ...config.regions ]
    }

    regions.push({})

    updateVisConfigField('regions', regions)
  }

  return (
    <>
      {config.regions &&
        config.regions.map(({ label, color, from, to, background }, i) => (
          <SectionBlock key={`region-${i}`}>
            <Button className="cove-button--remove" onClick={() => regionRemoveColumn(i)}>
              Remove
            </Button>
            <InputText label="Region Label" onChange={e => regionUpdate('label', e.target.value, i)} value={label}/>

            <div className="cove-grid cove-grid--gap--2">
              <div className="cove-grid__col--6">
                <InputText label="Text Color" onChange={e => regionUpdate('color', e.target.value, i)} value={color}/>
              </div>
              <div className="cove-grid__col--6">
                <InputText label="Background" onChange={e => regionUpdate('background', e.target.value, i)} value={background}/>
              </div>
            </div>
            <div className="cove-grid cove-grid--gap--2">
              <div className="cove-grid__col--6">
                <InputText label="From Value" onChange={e => regionUpdate('from', e.target.value, i)} value={from}/>
              </div>
              <div className="cove-grid__col--6">
                <InputText label="To Value" onChange={e => regionUpdate('to', e.target.value, i)} value={to}/>
              </div>
            </div>
          </SectionBlock>
        ))}

      {(!config.regions || config.regions.length === 0) &&
        <p className="my-2" style={{ fontStyle: 'italic', textAlign: 'center' }}>
          There are currently no regions.
        </p>
      }

      <Button className="mb-2" onClick={regionAddColumn} fluid>Add Region</Button>
    </>
  )
})

const EditorPanels = () => {
  const { config, updateVisConfigField, updateVisConfig } = useVisConfig()

  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData()

  const [ warningMsg, setWarningMsg ] = useState({ maxMsg: '', minMsg: '' })

  useEffect(() => {
    // When the visualization type changes we have to update the individual series type & axis details.
    // dataKey is unchanged here: Ex. { dataKey: 'series_name', type: 'Bar', axis: 'Left'}

    let newSeries = []
    if (config.series) {
      newSeries = config.series.map(series => {
        return {
          ...series,
          type: config.visualizationType === 'Combo' ? 'Bar' : config.visualizationType ? config.visualizationType : 'Bar',
          axis: 'Left'
        }
      })
    }

    updateVisConfigField('series', newSeries)
  }, [ config.visualizationType ]) // eslint-disable-line

  useEffect(() => {
    validateMinValue()
    validateMaxValue()
  }, [ minValue, maxValue ]) // eslint-disable-line

  useEffect(() => {
    // Set paired bars to be horizontal, even though that option doesn't display
    if (config.visualizationType === 'Paired Bar') {
      updateVisConfigField('orientation', 'horizontal')
    }
  }, []) // eslint-disable-line

  useEffect(() => {
    if (config.orientation === 'horizontal') {
      updateVisConfigField('lollipopShape', config.lollipopShape)
    }
  }, [ config.isLollipopChart, config.lollipopShape ]) // eslint-disable-line

  const { hasRightAxis } = useRightAxis({ yMax: config.yAxis.size })

  const filterOptions = [
    {
      label: 'Ascending Alphanumeric',
      value: 'asc'
    },
    {
      label: 'Descending Alphanumeric',
      value: 'desc'
    },
    {
      label: 'Custom',
      value: 'cust'
    }
  ]

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle
  })

  const sortableItemStyles = {
    animate: false,
    animateReplay: true,
    display: 'block',
    boxSizing: 'border-box',
    border: '1px solid #D1D1D1',
    borderRadius: '2px',
    background: '#F1F1F1',
    padding: '.4em .6em',
    fontSize: '.8em',
    marginRight: '.3em',
    marginBottom: '.3em',
    cursor: 'move',
    zIndex: '999'
  }

  /* Filters */
  const removeFilter = index => {
    let filters = [ ...config.filters ]

    filters.splice(index, 1)

    updateVisConfigField('filters', filters, false)
  }

  const updateFilterProp = (name, index, value) => {
    updateVisConfig(
      produce(config, draft => {
        draft.filters[index][name] = value
      })
    )
  }

  const addNewFilter = () => {
    updateVisConfig(
      produce(config, draft => {
        let filters = draft.filters ? [ ...draft.filters ] : []
        filters.push({ values: [] })
        draft.filters = filters
      })
    )
  }

  const handleFilterChange = (idx1, idx2, filterIndex, filter) => {
    let filterOrder = filter.values
    let [ movedItem ] = filterOrder.splice(idx1, 1)
    filterOrder.splice(idx2, 0, movedItem)
    let filters = [ ...config.filters ]
    let filterItem = { ...config.filters[filterIndex] }
    filterItem.active = filter.values[0]
    filterItem.orderedValues = filterOrder
    filterItem.order = 'cust'
    filters[filterIndex] = filterItem
    updateVisConfigField('filters', filters, false)
  }

  /* Series */
  const addNewSeries = seriesKey => {
    updateVisConfig(
      produce(config, draft => {
        draft.series.push({ dataKey: seriesKey, type: 'Bar' })
      })
    )
  }

  const sortSeries = e => {
    const seriesKey = config.series[0].dataKey
    const sorted = config.data.sort((a, b) => a[seriesKey] - b[seriesKey])
    const newData = e === 'asc' ? sorted : sorted.reverse()
    updateVisConfigField('data', newData, false)
  }

  const removeSeries = seriesKey => {
    let series = config.series
    let seriesIndex = -1

    for (let i = 0; i < series.length; i++) {
      if (series[i].dataKey === seriesKey) {
        seriesIndex = i
        break
      }
    }

    if (seriesIndex !== -1) {
      series.splice(seriesIndex, 1)

      if (series.length === 0) {
        updateVisConfig(
          produce(config, draft => {
            delete draft.series
          })
        )
      }
    }

    if (config.visualizationType === 'Paired Bar') {
      updateVisConfigField('series', [])
    }
  }

  const handleSeriesChange = (idx1, idx2) => {
    let seriesOrder = config.series
    let [ movedItem ] = seriesOrder.splice(idx1, 1)
    seriesOrder.splice(idx2, 0, movedItem)
    updateVisConfigField('series', seriesOrder, false)
  }

  /* Exclusions */
  const ExclusionsList = useCallback(() => {
    const exclusions = [ ...config.exclusions.keys ]
    return (
      <ul className="series-list">
        {exclusions.map((exclusion, index) => {
          return (
            <li key={exclusion}>
              <div className="series-list__name" data-title={exclusion}>
                <div className="series-list__name--text">{exclusion}</div>
              </div>
              <button className="series-list__remove" onClick={() => removeExclusion(exclusion)}>
                &#215;
              </button>
            </li>
          )
        })}
      </ul>
    )
  }, [ config ]) // eslint-disable-line

  const addNewExclusion = exclusionKey => {
    let newExclusion = [ ...config.exclusions.keys ]
    newExclusion.push(exclusionKey)

    let payload = { ...config.exclusions, keys: newExclusion }
    updateVisConfigField('exclusions', payload)
  }

  const removeExclusion = excludeValue => {
    let exclusionsIndex = -1
    let exclusions = [ ...config.exclusions.keys ]

    for (let i = 0; i < exclusions.length; i++) {
      if (exclusions[i] === excludeValue) {
        exclusionsIndex = i
        break
      }
    }

    if (exclusionsIndex !== -1) {
      exclusions.splice(exclusionsIndex, 1)

      let newExclusions = { ...config.exclusions, keys: exclusions }
      let newExclusionsPayload = { ...config, exclusions: newExclusions }

      if (exclusions.length === 0) {
        delete newExclusionsPayload.exclusions.keys
      }

      updateVisConfig(newExclusionsPayload)
    }
  }

  const showBarStyleOptions = () => {
    if (config.visualizationType === 'Bar' && config.visualizationSubType !== 'stacked' && (config.orientation === 'horizontal' || config.orientation === 'vertical')) {
      return [ 'flat', 'rounded', 'lollipop' ]
    } else {
      return [ 'flat', 'rounded' ]
    }
  }

  /* Error Messages */
  if (config.isLollipopChart && config?.series?.length > 1) {
    config.runtime.editorErrorMessage = 'Lollipop charts must use only one data series'
  }

  if (config.isLollipopChart && config?.series?.length === 0) {
    config.runtime.editorErrorMessage = 'Add a data series'
  }

  /* Validation */
  const validateMaxValue = () => {
    const enteredValue = config[config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'].max
    let message = ''

    switch (true) {
      case enteredValue && parseFloat(enteredValue) < parseFloat(maxValue) && existPositiveValue:
        message = 'Max value must be more than ' + maxValue
        break
      case enteredValue && parseFloat(enteredValue) < 0 && !existPositiveValue:
        message = 'Value must be more than or equal to 0'
        break
      default:
        message = ''
    }
    setWarningMsg(function (prevMsg) {
      return { ...prevMsg, maxMsg: message }
    })
  }

  const validateMinValue = () => {
    const enteredValue = config[config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'].min
    let minVal = Number(minValue)
    let message = ''

    switch (true) {
      case (config.visualizationType === 'Line' || config.visualizationType === 'Spark Line') && enteredValue && parseFloat(enteredValue) > minVal:
        message = 'Value must be less than ' + minValue
        break
      case config.visualizationType === 'Combo' && isAllLine && enteredValue && parseFloat(enteredValue) > minVal:
        message = 'Value must be less than ' + minValue
        break
      case (config.visualizationType === 'Bar' || (config.visualizationType === 'Combo' && !isAllLine)) && enteredValue && minVal > 0 && parseFloat(enteredValue) > 0:
        message = 'Value must be less than or equal to 0'
        break
      case enteredValue && minVal < 0 && parseFloat(enteredValue) > minVal:
        message = 'Value must be less than ' + minValue
        break
      default:
        message = ''
    }

    setWarningMsg(function (prevMsg) {
      return { ...prevMsg, minMsg: message }
    })
  }

  /* Panels */
  const panelGeneral = (
    <Accordion.Section label="General">
      <InputSelect label="Chart Type" configField={'visualizationType'} options={[ 'Pie', 'Line', 'Bar', 'Combo', 'Paired Bar', 'Spark Line' ]}/>

      {(config.visualizationType === 'Bar' || config.visualizationType === 'Combo') &&
        <InputSelect label="Chart Subtype" configField={'visualizationSubType'} options={{
          regular: 'Regular',
          stacked: 'Stacked'
        }}/>
      }

      {config.visualizationType === 'Bar' &&
        <InputSelect label="Orientation" configField={'orientation'} options={{
          vertical: 'Vertical',
          horizontal: 'Horizontal'
        }}/>
      }

      {config.visualizationType === 'Bar' &&
        <InputSelect label="Bar Style" configField={'barStyle'} options={showBarStyleOptions()}/>
      }

      {config.visualizationType === 'Bar' && config.barStyle === 'rounded' &&
        <InputSelect label="Tip Rounding" configField={'tipRounding'} options={[ 'top', 'full' ]}/>
      }

      {config.visualizationType === 'Bar' && config.barStyle === 'rounded' &&
        <InputSelect label="Rounding Style" configField={'roundingStyle'} options={[ 'standard', 'shallow', 'finger' ]}/>
      }

      {config.visualizationType === 'Bar' && config.orientation === 'horizontal' &&
        <InputSelect label="Label Placement" configField={[ 'yAxis', 'labelPlacement' ]} options={[ 'Below Bar', 'On Date/Category Axis' ]}/>
      }

      {config.orientation === 'horizontal' && (config.yAxis.labelPlacement === 'Below Bar' || config.yAxis.labelPlacement === 'On Date/Category Axis' || config.visualizationType === 'Paired Bar')
        ? (
          <InputCheckbox label={config.isLollipopChart ? 'Display Numbers after Bar' : 'Display Numbers on Bar'} configField={[ 'yAxis', 'displayNumbersOnBar' ]}/>
        )
        : (
          config.visualizationType !== 'Pie' && (
            <InputCheckbox label="Display label on data" configField={'labels'}/>
          )
        )
      }

      {config.visualizationType === 'Pie' &&
        <InputSelect label="Pie Chart Type" configField={'pieType'} options={[ 'Regular', 'Donut' ]}/>
      }

      <InputText label="Title" configField={'title'}/>

      <InputText label="Super Title" configField={'superTitle'} placeholder="Super Title"/>

      <InputText type="textarea" label="Intro Text" configField={'introText'} placeholder="Intro Text"/>

      <InputText type="textarea" label="Subtext" configField={'description'} placeholder="Subtext"
                 tooltip="Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub."/>

      <InputText type="textarea" label="Footnotes" configField={'footnotes'} placeholder="Footnotes"/>

      {config.orientation === 'vertical' &&
        <InputText type="number" label="Chart Height" configField={[ 'heights', 'vertical' ]}/>
      }
    </Accordion.Section>
  )

  const panelDataSeries = (
    <Accordion.Section label="Data Series" warnIf={!config.series || config.series.length === 0 || (config.visualizationType === 'Paired Bar' && config.series.length < 2)}>
      {(!config.series || config.series.length === 0) && config.visualizationType !== 'Paired Bar' &&
        <div className="cove-alert cove-alert--error">
          At least one series is required
        </div>
      }

      {(!config.series || config.series.length === 0 || config.series.length < 2) && config.visualizationType === 'Paired Bar' &&
        <div className="cove-alert cove-alert--error">
          Select two data series for paired bar chart (e.g., Male and Female).
        </div>
      }

      {config.series && config.series.length !== 0 && (
        <SectionWrapper label="Displaying" tooltip="A data series is a set of related data points plotted in a chart and typically represented in the chart legend.">
          <DragDropContext onDragEnd={({ source, destination }) => handleSeriesChange(source.index, destination.index)}>
            <Droppable droppableId="filter_order">
              {provided => (
                <ul {...provided.droppableProps} className="series-list" ref={provided.innerRef} style={{ marginTop: '1em' }}>
                  {config.series.map((series, i) => {
                    if (config.visualizationType === 'Combo') {
                      let changeType = (i, value) => {
                        let series = [ ...config.series ]
                        series[i].type = value

                        series[i].axis = 'Left'

                        updateVisConfigField('series', series, false)
                      }

                      let typeDropdown = (
                        <select
                          value={series.type}
                          onChange={event => {
                            changeType(i, event.target.value)
                          }}
                          style={{ width: '100px', marginRight: '10px' }}
                        >
                          <option value="" default>
                            Select
                          </option>
                          <option value="Bar">Bar</option>
                          <option value="Line">Solid Line</option>
                          <option value="dashed-sm">Small Dashed</option>
                          <option value="dashed-md">Medium Dashed</option>
                          <option value="dashed-lg">Large Dashed</option>
                        </select>
                      )

                      return (
                        <Draggable key={series.dataKey} draggableId={`draggableFilter-${series.dataKey}`} index={i}>
                          {(provided, snapshot) => (
                            <li>
                              <div className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <div className={`series-list__name${series.dataKey.length > 15 ? ' series-list__name--truncate' : ''}`} data-title={series.dataKey}>
                                  <div className="series-list__name-text">{series.dataKey}</div>
                                </div>
                                <div>
                                  <span className="series-list__dropdown">{typeDropdown}</span>
                                  {config.series && config.series.length > 1 && (
                                    <button className="series-list__remove" onClick={() => removeSeries(series.dataKey)}>
                                      &#215;
                                    </button>
                                  )}
                                </div>
                              </div>
                            </li>
                          )}
                        </Draggable>
                      )
                    }

                    return (
                      <Draggable key={series.dataKey} draggableId={`draggableFilter-${series.dataKey}`} index={i}>
                        {(provided, snapshot) => (
                          <li
                            key={series.dataKey}
                            className={snapshot.isDragging ? 'currently-dragging' : ''}
                            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {/*<div  className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>*/}
                            <div className="series-list__name" data-title={series.dataKey}>
                              <div className="series-list__name--text">{series.dataKey}</div>
                            </div>
                            {config.series && config.series.length > 1 && (
                              <button className="series-list__remove" onClick={() => removeSeries(series.dataKey)}>
                                &#215;
                              </button>
                            )}
                            {/*</div>*/}
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
        </SectionWrapper>
      )}

      <InputSelect label="Add Data Series" options={getFilteredDataColumns(config, config.data)} onChange={e => addNewSeries(e.target.value)} initialDisabled initialSnap/>

      {config.series && config.series.length <= 1 && config.visualizationType === 'Bar' && (
        <>
          <div className="cove-heading--5">Confidence Keys</div>
          <InputSelect label="Upper" configField={[ 'confidenceKeys', 'upper' ]} options={getFilteredDataColumns(config, config.data)}/>
          <InputSelect label="Lower" configField={[ 'confidenceKeys', 'lower' ]} options={getFilteredDataColumns(config, config.data)}/>
        </>
      )}

      {config.series && config.series.length === 1 &&
        <InputSelect label="Rank by Value" configField="sortSeries" options={[ 'asc', 'desc' ]} onChange={e => sortSeries(e.target.value)}/>
      }
    </Accordion.Section>
  )

  const panelMeasures = (
    <Accordion.Section label="Measures">
      <SectionWrapper label="Labels for 5-Number Summary">
        <InputText label="Maximum Label" configField={[ 'boxplot', 'labels', 'maximum' ]} tooltip="Highest value, excluding outliers"/>

        <InputText label="Upper Quartile" configField={[ 'boxplot', 'labels', 'q3' ]} tooltip="Represented by top line of box. 25% of data are higher."/>

        <InputText label="Median" configField={[ 'boxplot', 'labels', 'median' ]} tooltip="Middle data point. Half of data are higher value."/>

        <InputText label="Lower Quartile" configField={[ 'boxplot', 'labels', 'q1' ]} tooltip="Represented by bottom line of box. 25% of data are lower."/>

        <InputText label="Minimum" configField={[ 'boxplot', 'labels', 'minimum' ]} tooltip="Lowest value, excluding outliers"/>

        <InputText label="Interquartile Range" configField={[ 'boxplot', 'labels', 'iqr' ]}/>

        <InputText label="Count" configField={[ 'boxplot', 'labels', 'count' ]}/>

        <InputText label="Mean" configField={[ 'boxplot', 'labels', 'mean' ]}/>

        <InputText label="Outliers" configField={[ 'boxplot', 'labels', 'outliers' ]}/>

        <InputText label="Values" configField={[ 'boxplot', 'labels', 'values' ]}/>
      </SectionWrapper>

      <SectionWrapper label="Percentages for Quartiles">
        <InputText type="number" label="Lower Quartile" configField={[ 'boxplot', 'firstQuartilePercentage' ]} tooltip="Represented by bottom line of box. 25% of data are lower." max={100}/>

        <InputText type="number" label="Upper Quartile" configField={[ 'boxplot', 'thirdQuartilePercentage' ]} tooltip="Represented by top line of box. 25% of data are higher." max={100}/>
      </SectionWrapper>
    </Accordion.Section>
  )

  const panelAssignSeriesAxis = (
    <Accordion.Section label="Assign Data Series Axis">
      <p>Only line series data can be assigned to the right axis. Check the data series section above.</p>
      {config.series && config.series.filter(series => series.type === ('Line' || 'dashed-sm')) && (
        <>
          <fieldset>
            <legend className="edit-label float-left">Displaying</legend>
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display="questionCircle" style={{ marginLeft: '0.5rem' }}/>
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Assign an axis for the series</p>
              </Tooltip.Content>
            </Tooltip>
          </fieldset>
          <ul className="series-list">
            {config.series &&
              config.series.map((series, i) => {
                if (series.type === 'Bar') return false // can't set individual bars atm.

                let changeAxis = (i, value) => {
                  let series = [ ...config.series ]
                  series[i].axis = value
                  updateVisConfigField('series', series, false)
                }

                let axisDropdown = (
                  <select
                    value={series.axis}
                    onChange={event => {
                      changeAxis(i, event.target.value)
                    }}
                    style={{ width: '100px', marginRight: '10px' }}
                  >
                    <option value="Left" default>
                      left
                    </option>
                    <option value="Right">right</option>
                  </select>
                )

                return (
                  <li key={series.dataKey}>
                    <div className={`series-list__name${series.dataKey.length > 15 ? ' series-list__name--truncate' : ''}`} data-title={series.dataKey}>
                      <div className="series-list__name-text">{series.dataKey}</div>
                    </div>
                    <div>
                      <span className="series-list__dropdown">{axisDropdown}</span>
                    </div>
                  </li>
                )
              })}
          </ul>
        </>
      )}
    </Accordion.Section>
  )

  const panelLeftValueAxisOrFormat = (
    <Accordion.Section label={config.visualizationType !== 'Pie' ? (config.orientation !== 'horizontal' ? 'Left Value Axis' : 'Value Axis') : 'Data Format'} warnIf={config.visualizationType === 'Pie' && !config.yAxis.dataKey}>
      {config.visualizationType === 'Pie' && (
        <InputSelect label="Data Column" configField={[ 'yAxis', 'dataKey' ]} options={getDataColumns(config.data)}
                     tooltip="Select the source data to be visually represented." required={true}/>
      )}

      {config.visualizationType !== 'Pie' && (
        <>
          <InputText label="Label" configField={[ 'yAxis', 'label' ]}/>

          {config.runtime.seriesKeys && config.runtime.seriesKeys.length === 1 &&
            <InputCheckbox label="Use Legend Value in Hover" configField={'isLegendValue'}/>
          }

          <InputText type="number" label="Number of ticks" configField={[ 'yAxis', 'numTicks' ]} tooltip="Number of ticks on the axis. Leave blank for automatic."/>

          {config.visualizationType === 'Paired Bar' &&
            <InputText type="number" label="Tick rotation (Degrees)" configField={[ 'yAxis', 'tickRotation' ]} min={0}/>
          }

          <InputText type="number" label={config.orientation === 'horizontal' ? 'Size (Height)' : 'Size (Width)'} configField={[ 'yAxis', 'size' ]}
                     tooltip={`Increase the size if elements in the ${config.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`}/>

          <InputText type="number" label="Axis Padding" configField={[ 'yAxis', 'axisPadding' ]} min={0} max={10}/>

          {config.orientation === 'horizontal' &&
            <InputText type="number" label="Label offset" configField={[ 'xAxis', 'labelOffset' ]}/>
          }

          {config.orientation !== 'horizontal' &&
            <InputCheckbox label="Display Gridlines" configField={[ 'yAxis', 'gridLines' ]}/>
          }
        </>
      )}


      <SectionWrapper label="Number Formatting">
        <div className="mt-2"/>
        <InputCheckbox label="Add commas" configField={[ 'dataFormat', 'commas' ]}/>

        <InputCheckbox label="Abbreviate Axis Values" configField={[ 'dataFormat', 'abbreviated' ]} tooltip="This option abbreviates very large or very small numbers on the value axis"/>


        <InputText type="number" label="Round to decimal point" configField={[ 'dataFormat', 'roundTo' ]} min={0}/>

        <div className="cove-grid cove-grid--gap--2">
          <div className="cove-grid__col--6">
            <InputText label="Prefix" configField={[ 'dataFormat', 'prefix' ]} tooltip={
              config.visualizationType === 'Pie'
                ? <p>Enter a data prefix to display in the data table and chart tooltips, if applicable.</p>
                : <p>Enter a data prefix (such as "$"), if applicable.</p>
            }/>
          </div>
          <div className="cove-grid__col--6">
            <InputText label="Suffix" configField={[ 'dataFormat', 'suffix' ]} tooltip={
              config.visualizationType === 'Pie'
                ? <p>Enter a data suffix to display in the data table and chart tooltips, if applicable.</p>
                : <p>Enter a data suffix (such as "%"), if applicable.</p>
            }/>
          </div>
        </div>

        {config.orientation === 'horizontal'
          ? ( // horizontal - axis swapped, x is vertical y is horizontal
            <>
              <InputCheckbox label="Hide Axis" configField={[ 'xAxis', 'hideAxis' ]}/>
              <InputCheckbox label="Hide Label" configField={[ 'xAxis', 'hideLabel' ]}/>
              <InputCheckbox label="Hide Ticks" configField={[ 'xAxis', 'hideTicks' ]}/>
              <InputText type="number" label="Update max value" configField={[ 'xAxis', 'max' ]}/>
              <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
            </>
          )
          : (
            config.visualizationType !== 'Pie' && (
              <>
                <InputCheckbox label="Hide Axis" configField={[ 'yAxis', 'hideAxis' ]}/>
                <InputCheckbox label="Hide Label" configField={[ 'yAxis', 'hideLabel' ]}/>
                <InputCheckbox label="Hide Ticks" configField={[ 'yAxis', 'hideTicks' ]}/>
                <InputText type="number" label="Update max value" configField={[ 'yAxis', 'max' ]}/>
                <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
                <InputText type="number" label="Update min value" configField={[ 'yAxis', 'min' ]}/>
                <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
              </>
            )
          )}
      </SectionWrapper>
    </Accordion.Section>
  )

  const panelRightValueAxis = (
    <Accordion.Section label="Right Value Axis">
      <InputText label="Label" configField={[ 'yAxis', 'rightLabel' ]}/>
      <InputText type="number" label="Number of ticks" configField={[ 'yAxis', 'rightNumTicks' ]}/>
      <InputText type="number" label="Size (Width)" configField={[ 'yAxis', 'rightAxisSize' ]}/>
      <InputText type="number" label="Label offset" configField={[ 'yAxis', 'rightLabelOffsetSize' ]}/>

      <SectionWrapper label="Number Formatting">
        <InputCheckbox label="Add commas" configField={[ 'dataFormat', 'rightCommas' ]}/>
        <InputText type="number" label="Round to decimal point" configField={[ 'dataFormat', 'rightRoundTo' ]} min={0}/>

        <div className="cove-grid cove-grid--gap--2">
          <div className="cove-grid__col--6">
            <InputText label="Prefix" configField={[ 'dataFormat', 'rightPrefix' ]} tooltip={
              config.visualizationType === 'Pie'
                ? <p>Enter a data prefix to display in the data table and chart tooltips, if applicable.</p>
                : <p>Enter a data prefix (such as "$"), if applicable.</p>
            }/>
          </div>
          <div className="cove-grid__col--6">
            <InputText label="Suffix" configField={[ 'dataFormat', 'rightSuffix' ]} tooltip={
              config.visualizationType === 'Pie'
                ? <p>Enter a data suffix to display in the data table and chart tooltips, if applicable.</p>
                : <p>Enter a data suffix (such as "%"), if applicable.</p>
            }/>
          </div>
        </div>

        <InputCheckbox label="Hide Axis" configField={[ 'yAxis', 'rightHideAxis' ]}/>
        <InputCheckbox label="Hide Label" configField={[ 'yAxis', 'rightHideLabel' ]}/>
        <InputCheckbox label="Hide Ticks" configField={[ 'yAxis', 'rightHideTicks' ]}/>
      </SectionWrapper>
    </Accordion.Section>
  )

  const panelDateCategoryAxisSegments = (
    <Accordion.Section label={config.visualizationType !== 'Pie' ? (config.visualizationType === 'Bar' ? 'Date/Category Axis' : 'Date/Category Axis') : 'Segments'} warnIf={!config.xAxis.dataKey}>
      {config.visualizationType !== 'Pie' && (
        <>

          <InputSelect label="Data Type" configField={[ 'xAxis', 'type' ]}
                       options={config.visualizationType !== 'Scatter Plot' ? [ 'categorical', 'date' ] : [ 'categorical', 'date', 'continuous' ]}/>
          <InputSelect label="Data Key" configField={[ 'xAxis', 'dataKey' ]}
                       options={getDataColumns(config.data)} tooltip="Select the column or row containing the categories or dates for this axis." required={true}/>

        </>
      )}

      {config.visualizationType === 'Pie' && (
        <InputSelect label="Segmented Labels" configField={[ 'xAxis', 'dataKey' ]} options={getDataColumns(config.data)}
                     tooltip="Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as 'Key'." required={true}/>
      )}

      {config.visualizationType !== 'Pie' && (
        <>
          <InputText label="Label" configField={[ 'xAxis', 'label' ]}/>

          {config.xAxis.type === 'date' && (
            <>
              <p style={{ padding: '1.5em 0 0.5em', fontSize: '.9rem', lineHeight: '1rem' }}>
                Format how charts should parse and display your dates using{' '}
                <a href="https://github.com/d3/d3-time-format#locale_format" target="_blank" rel="noreferrer">
                  these guidelines
                </a>
                .
              </p>
              <InputText label="Date Parse Format" configField={[ 'xAxis', 'dateParseFormat' ]} placeholder="Ex. %Y-%m-%d"/>
              <InputText label="Date Display Format" configField={[ 'xAxis', 'dateDisplayFormat' ]} placeholder="Ex. %Y-%m-%d"/>
            </>
          )}

          <InputCheckbox label={config.xAxis.type === 'date' ? 'Limit by start and/or end dates' : 'Exclude one or more values'} configField={[ 'exclusions', 'active' ]}
                         tooltip="When this option is checked, you can select source-file values for exclusion from the date/category axis."/>


          {config.exclusions.active && (
            <>
              {config.xAxis.type === 'categorical' && (
                <>
                  {config.exclusions.keys && config.exclusions.keys.length > 0 && (
                    <>
                      <SectionWrapper label="Excluded Keys">
                        <ExclusionsList/>
                      </SectionWrapper>
                    </>
                  )}

                  <InputSelect label="Add Exclusion" options={getDataValues(config.data, config.xAxis.dataKey, true)} onChange={e => addNewExclusion(e.target.value)} initialSnap/>
                </>
              )}

              {config.xAxis.type === 'date' && (
                <>
                  <InputText type="date" label="Start Date" configField={[ 'exclusions', 'dateStart' ]}/>
                  <InputText type="date" label="End Date" configField={[ 'exclusions', 'dateEnd' ]}/>
                </>
              )}
            </>
          )}

          <InputText type="number" label="Number of ticks" configField={[ 'xAxis', 'numTicks' ]}/>
          <InputText type="number" label={config.orientation === 'horizontal' ? 'Size (Width)' : 'Size (Height)'} configField={[ 'xAxis', 'size' ]} min={0}/>
          <InputText type="number" label="Axis Padding" configField={[ 'xAxis', 'axisPadding' ]} min={0} max={10}/>

          {config.yAxis.labelPlacement !== 'Below Bar' &&
            <InputText type="number" label="Tick rotation (Degrees)" configField={[ 'xAxis', 'tickRotation' ]} min="0"/>
          }

          {config.orientation === 'horizontal'
            ? <>
              <InputCheckbox label="Hide Axis" configField={[ 'yAxis', 'hideAxis' ]}/>
              <InputCheckbox label="Hide Label" configField={[ 'yAxis', 'hideLabel' ]}/>
            </>
            : <>
              <InputCheckbox label="Hide Axis" configField={[ 'xAxis', 'hideAxis' ]}/>
              <InputCheckbox label="Hide Label" configField={[ 'xAxis', 'hideLabel' ]}/>
              <InputCheckbox label="Hide Ticks" configField={[ 'xAxis', 'hideTicks' ]}/>
            </>
          }
        </>
      )}

      {config.visualizationType === 'Pie' && <>
        <InputCheckbox label="Exclude one or more values" configField={[ 'exclusions', 'active' ]}
                       tooltip="When this option is checked, you can select source-file values for exclusion from the pie segments."/>

        {config.exclusions.active && <>
          {config.exclusions.keys && config.exclusions.keys.length > 0 && <>
            <SectionWrapper label="Excluded Keys">
              <ExclusionsList/>
            </SectionWrapper>
          </>}

          <InputSelect label="Add Exclusion" options={getDataValues(config.data, config.xAxis.dataKey, true)} onChange={e => addNewExclusion(e.target.value)} initialSnap/>
        </>}

      </>}
    </Accordion.Section>
  )

  const panelRegions = (
    <Accordion.Section label="Regions">
      <Regions/>
    </Accordion.Section>
  )

  const panelLegend = (
    <Accordion.Section label="Legend">
      <InputCheckbox label="Reverse Labels" configField={[ 'legend', 'reverseLabelOrder' ]}/>

      {/*
      <fieldset className="checkbox-group">
        <InputCheckbox label="Dynamic Legend" configField={[ 'legend', 'dynamicLegend' ]}/>
        {config.legend.dynamicLegend && (
          <>
            <InputText label="Dynamic Legend Default Text" configField={[ 'legend', 'dynamicLegendDefaultText' ]}/>
            <InputText type="number" label="Dynamic Legend Limit" configField={[ 'legend', 'dynamicLegendItemLimit' ]} min={0}/>
            <InputText label="Dynamic Legend Item Limit Message" configField={[ 'legend', 'dynamicLegendItemLimitMessage' ]}/>
            <InputText label="Dynamic Legend Chart Message" configField={[ 'legend', 'dynamicLegendChartMessage' ]}/>
          </>
        )}
      </fieldset>
      */}

      <InputCheckbox label="Hide Legend" configField={[ 'legend', 'hide' ]} tooltip="With a single-series chart, consider hiding the legend to reduce visual clutter."/>

      <InputCheckbox label="Show Legend Values in Tooltip" configField={[ 'legend', 'showLegendValuesTooltip' ]}/>

      {config.visualizationType === 'Bar' && config.visualizationSubType === 'regular' && config.runtime.seriesKeys.length === 1 && (
        <InputSelect label="Color code by category" configField={[ 'legend', 'colorCode' ]} options={getDataValueOptions(config.data)}/>
      )}

      <InputSelect label="Legend Behavior (When clicked)" configField={[ 'legend', 'behavior' ]} options={[ 'highlight', 'isolate' ]}/>

      <InputText label="Title" configField={[ 'legend', 'label' ]}/>

      <InputSelect label="Position" configField={[ 'legend', 'position' ]} options={[ 'right', 'left', 'bottom' ]}/>

      {config.legend.position === 'bottom' &&
        <InputCheckbox label="Single Row Legend" configField={[ 'legend', 'singleRow' ]}/>
      }
      <InputText type="textarea" label="Legend Description" configField={[ 'legend', 'description' ]}/>
    </Accordion.Section>
  )

  const panelFilters = (
    <Accordion.Section label="Filters">
      {config.filters && config.filters.map((filter, index) => (
        <SectionBlock key={index}>
          <Button className="cove-button--remove" onClick={() => removeFilter(index)}>
            Remove
          </Button>

          <InputSelect label="Filter" value={filter.columnName} options={getFilteredDataColumns(config, config.data)}
                       onChange={e => updateFilterProp('columnName', index, e.target.value)}/>


          <InputText label="Label" value={filter.label} onChange={e => updateFilterProp('label', index, e.target.value)}/>


          <InputSelect label="Filter Order" value={filter.order ?? 'asc'} options={filterOptions} onChange={e => updateFilterProp('order', index, e.target.value)}/>

          {filter.order === 'cust' && (
            <DragDropContext onDragEnd={({ source, destination }) => handleFilterChange(source.index, destination.index, index, config.filters[index])}>
              <Droppable droppableId="filter_order">
                {provided => (

                  <ul {...provided.droppableProps} className="sort-list" ref={provided.innerRef} style={{ marginTop: '1em' }}>
                    {config.filters[index]?.values.map((value, index) => {
                      return (

                        <Draggable key={value} draggableId={`draggableFilter-${value}`} index={index}>
                          {(provided, snapshot) => (
                            <li>
                              <div className={snapshot.isDragging ? 'currently-dragging' : ''}
                                   style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)}
                                   {...provided.draggableProps}
                                   {...provided.dragHandleProps}
                                   ref={provided.innerRef}
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
          )}
        </SectionBlock>
      ))}

      {(!config.filters || config.filters.length === 0) &&
        <p className="my-2" style={{ fontStyle: 'italic', textAlign: 'center' }}>
          There are currently no filters.
        </p>
      }

      <Button className="mb-2" onClick={addNewFilter} fluid>Add Filter</Button>
    </Accordion.Section>
  )

  const panelVisual = (
    <Accordion.Section label="Visual">
      {config.isLollipopChart && (
        <SectionWrapper label="Lollipop">
          <label className="radio-label">
            <input type="radio" name="lollipopShape" value="circle" checked={config.lollipopShape === 'circle'}/>
            Circle
          </label>
          <label className="radio-label">
            <input type="radio" name="lollipopShape" value="square" checked={config.lollipopShape === 'square'}/>
            Square
          </label>
          <InputSelect label="Lollipop Color Style" configField="lollipopColorStyle" options={[ 'regular', 'two-tone' ]}/>
          <InputSelect label="Lollipop Size" configField="lollipopSize" options={[ 'small', 'medium', 'large' ]}/>
        </SectionWrapper>
      )}

      {config.visualizationType === 'Box Plot' && (
        <SectionWrapper label="Box Plot Settings">
          <InputToggle label="Box Plot Borders" configField={[ 'boxplot', 'borders' ]}/>
          <InputToggle label="Plot Outliers" configField={[ 'boxplot', 'plotOutlierValues' ]}/>
          <InputToggle label="Plot non-outlier values" configField={[ 'boxplot', 'plotNonOutlierValues' ]}/>
          <InputToggle label="Display How To Read Text" configField={[ 'boxplot', 'legend', 'displayHowToReadText' ]}/>
          <InputText label="How to read text" configField={[ 'boxplot', 'legend', 'howToReadText' ]}/>
        </SectionWrapper>
      )}

      <InputSelect label="Font Size" configField="fontSize" options={[ 'small', 'medium', 'large' ]}/>

      {config.visualizationType !== 'Box Plot' && config.series?.some(series => series.type === 'Bar' || series.type === 'Paired Bar') &&
        <InputSelect label="Bar Borders" configField="barHasBorder" options={[ 'true', 'false' ]}/>
      }

      <InputCheckbox label="Animate Visualization" configField="animate"/>

      {/*<InputCheckbox label="Replay Animation When Filters Are Changed" configField="animateReplay"/>*/}

      {((config.series?.some(series => series.type === 'Line') && config.visualizationType === 'Combo') || config.visualizationType === 'Line' || config.visualizationType === 'Spark Line') && (
        <InputSelect label="Line Datapoint Style" configField="lineDatapointStyle" options={[ 'hidden', 'hover', 'always show' ]}/>
      )}

      <label>
        <span className="edit-label">Chart Color Palette</span>
      </label>

      <InputToggle label="Use selected palette in reverse order" configField="isPaletteReversed"/>

      <ColorPickerSequence label="Sequential" type="sequential"/>

      <ColorPickerSequence label="Non-Sequential" type="nonsequential"/>

      {config.visualizationType !== 'Pie' &&
        <InputText type="number" label="Data Cut-off Label" configField="dataCutoffLabel"
                   tooltip="The label for the special 'less than' category. This option supports special conditions like suppressed data."/>
      }

      {config.orientation === 'horizontal' && !config.isLollipopChart && config.yAxis.labelPlacement !== 'On Bar' &&
        <InputText type="number" label="Bar Thickness" configField="barHeight" min="15"/>
      }

      {((config.visualizationType === 'Bar' && config.orientation !== 'horizontal') || config.visualizationType === 'Combo') &&
        <InputText type="number" label="Bar Thickness" configField="barHeight" min="15"/>
      }

      {(config.orientation === 'horizontal' || config.visualizationType === 'Paired Bar') &&
        <InputText type="number" label="Bar Space" configField="barSpace" min="0"/>
      }

      {(config.visualizationType === 'Bar' || config.visualizationType === 'Line' || config.visualizationType === 'Combo') &&
        <InputCheckbox label="Add Top Axis Line" configField={[ 'topAxis', 'hasLine' ]}/>
      }

      {(config.visualizationType === 'Line' || config.visualizationType === 'Combo') &&
        <InputCheckbox label="Append Series Name to End of Line Charts" configField="showLineSeriesLabels"/>
      }

      {(config.visualizationType === 'Line' || config.visualizationType === 'Combo') && config.showLineSeriesLabels &&
        <InputCheckbox label="Match Series Color to Name at End of Line Charts" configField="colorMatchLineSeriesLabels"/>
      }
    </Accordion.Section>
  )

  const panelDataTable = (
    <Accordion.Section label="Data Table">
      <InputCheckbox label="Show Table" configField={[ 'table', 'show' ]}
                   tooltip="Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement."/>

      <InputText type="textarea" label="Data Table Caption" configField={[ 'table', 'caption' ]}
                 tooltip="Enter a description of the data table to be read by screen readers."/>

      <InputToggle label="Limit Table Height" configField={[ 'table', 'limitHeight' ]}/>

      {config.table.limitHeight &&
        <InputText type="number" label="Data Table Height" configField={[ 'table', 'height' ]} min="0" max="500" placeholder="Height (px)"/>
      }

      <InputToggle label="Expanded by Default" configField={[ 'table', 'expanded' ]}/>

      <InputToggle label="Display Download Button" configField={[ 'table', 'download' ]}/>

      <InputToggle label="Display Link to Dataset" configField={[ 'table', 'showDownloadUrl' ]}/>

      {/*<InputToggle label="Display Image Button" configField={[ 'table', 'showDownloadImgButton' ]}/>*/}

      {/*<InputToggle label="Display PDF Button" configField={[ 'table', 'showDownloadPdfButton' ]}/>*/}

      <InputText label="Label" configField={[ 'table', 'label' ]}/>

      {config.visualizationType !== 'Pie' &&
        <InputText label="Index Column Header" configField={[ 'table', 'indexLabel' ]}/>
      }
    </Accordion.Section>
  )

  return <>
    <Accordion>
      {panelGeneral}
      {!config.series || config.series.length === 0 || (config.visualizationType === 'Paired Bar' && config.series.length < 2) &&
        panelDataSeries
      }
      {config.visualizationType === 'Box Plot' &&
        panelMeasures
      }
      {hasRightAxis && config.series && config.visualizationType === 'Combo' &&
        panelAssignSeriesAxis
      }
      {panelLeftValueAxisOrFormat}
      {hasRightAxis &&
        panelRightValueAxis
      }
      {panelDateCategoryAxisSegments}
      {config.visualizationType !== 'Pie' && config.visualizationType !== 'Paired Bar' &&
        panelRegions
      }
      {panelLegend}
      {panelFilters}
      {panelVisual}
      {panelDataTable}
      {PanelGlobal}
    </Accordion>
    {config.type !== 'Spark Line' && <PanelComponentAdvanced/>}
  </>
}

export default EditorPanels
