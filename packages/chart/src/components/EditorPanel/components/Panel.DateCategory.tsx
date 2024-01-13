import { useContext } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'

// Core
import { TextField, Select, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import WarningImage from '../../../images/warning.svg'

// contexts
import ConfigContext from '../../../ConfigContext'
import EditorPanelContext, { type EditorPanelContext as EPContext } from './EditorPanelContext'
import { useEditorPermissions } from './../useEditorPermissions.js'

// types
import { type Anchor } from '@cdc/core/types/Axis'
import { PanelProps } from './PanelProps'

const PanelDateCategory: FC<PanelProps> = props => {
  const { config, updateConfig, lineOptions } = useContext(ConfigContext)

  // prettier-ignore
  const {
    addNewExclusion,
    getColumns,
    getDataValues,
    handleAddNewHighlightedBar,
    handleHighlightedBarLegendLabel,
    isPaletteReversed,
    handleRemoveHighlightedBar,
    handleUpdateHighlightedBar,
    handleUpdateHighlightedBarColor,
    handleUpdateHighlightedBorderWidth,
    highlightedBarValues,
    highlightedSeriesValues,
    updateField,
    } = useContext<EPContext>(EditorPanelContext)
  const { visSupportsDateCategoryAxisTicks, visSupportsDateCategoryAxisLabel, visSupportsDateCategoryAxisLine, visSupportsDateCategoryTickRotation, visSupportsDateCategoryHeight, visSupportsDateCategoryNumTicks, visSupportsResponsiveTicks, visSupportsDateCategoryAxis, visHasAnchors } =
    useEditorPermissions()

  return (
    visSupportsDateCategoryAxis() && (
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {config.visualizationType === 'Pie' ? 'Segments' : 'Date/Category Axis'}
            {!config.xAxis.dataKey && <WarningImage width='25' className='warning-icon' />}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {config.visualizationType !== 'Pie' && (
            <>
              {config.visualizationType !== 'Forest Plot' && (
                <>
                  <Select value={config.xAxis.type} section='xAxis' fieldName='type' label='Data Type' updateField={updateField} options={config.visualizationType !== 'Scatter Plot' ? ['categorical', 'date'] : ['categorical', 'continuous', 'date']} />
                  <CheckBox value={config.xAxis.sortDates} section='xAxis' fieldName='sortDates' label='Force Date Scale (Sort Dates)' updateField={updateField} />{' '}
                </>
              )}
              <Select
                value={config.xAxis.dataKey || setCategoryAxis() || ''}
                section='xAxis'
                fieldName='dataKey'
                label='Data Key'
                initial='Select'
                required={true}
                updateField={updateField}
                options={getColumns(false)}
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>Select the column or row containing the categories or dates for this axis. </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
            </>
          )}

          {config.visualizationType === 'Pie' && (
            <Select
              value={config.xAxis.dataKey || ''}
              section='xAxis'
              fieldName='dataKey'
              label='Segment Labels'
              initial='Select'
              required={true}
              updateField={updateField}
              options={getColumns(false)}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."</p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
          )}

          {config.visualizationType !== 'Pie' && (
            <>
              <TextField value={config.xAxis.label} section='xAxis' fieldName='label' label='Label' updateField={updateField} />

              {config.xAxis.type === 'continuous' && (
                <>
                  <TextField
                    value={config.dataFormat.bottomPrefix}
                    section='dataFormat'
                    fieldName='bottomPrefix'
                    label='Prefix'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Enter a data suffix (such as "%"), if applicable.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />

                  <TextField
                    value={config.dataFormat.bottomSuffix}
                    section='dataFormat'
                    fieldName='bottomSuffix'
                    label='Suffix'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Enter a data suffix (such as "%"), if applicable.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />

                  <CheckBox
                    value={config.dataFormat.bottomAbbreviated}
                    section='dataFormat'
                    fieldName='bottomAbbreviated'
                    label='Abbreviate Axis Values'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>{`This option abbreviates very large or very small numbers on the value axis`}</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                </>
              )}

              {config.xAxis.type === 'date' && (
                <>
                  <p style={{ padding: '1.5em 0 0.5em', fontSize: '.9rem', lineHeight: '1rem' }}>
                    Format how charts should parse and display your dates using{' '}
                    <a href='https://github.com/d3/d3-time-format#locale_format' target='_blank' rel='noreferrer'>
                      these guidelines
                    </a>
                    .
                  </p>
                  <TextField value={config.xAxis.dateParseFormat} section='xAxis' fieldName='dateParseFormat' placeholder='Ex. %Y-%m-%d' label='Date Parse Format' updateField={updateField} />
                  <TextField value={config.xAxis.dateDisplayFormat} section='xAxis' fieldName='dateDisplayFormat' placeholder='Ex. %Y-%m-%d' label='Date Display Format' updateField={updateField} />
                </>
              )}

              <CheckBox
                value={config.exclusions.active}
                section='exclusions'
                fieldName='active'
                label={config.xAxis.type === 'date' ? 'Limit by start and/or end dates' : 'Exclude one or more values'}
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>When this option is checked, you can select source-file values for exclusion from the date/category axis. </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
                updateField={updateField}
              />
              {/* {visHasBrushChart && <CheckBox value={config.brush.active} section='brush' fieldName='active' label='Brush Slider ' updateField={updateField} />} */}

              {config.exclusions.active && (
                <>
                  {config.xAxis.type === 'categorical' && (
                    <>
                      {config.exclusions.keys.length > 0 && (
                        <>
                          <fieldset>
                            <legend className='edit-label'>Excluded Keys</legend>
                          </fieldset>
                          <ExclusionsList />
                        </>
                      )}

                      <Select
                        fieldName='visualizationType'
                        label='Add Exclusion'
                        initial='Select'
                        onChange={e => {
                          if (e.target.value !== '' && e.target.value !== 'Select') {
                            addNewExclusion(e.target.value)
                          }
                          e.target.value = ''
                        }}
                        options={getDataValues(config.xAxis.dataKey, true)}
                      />
                    </>
                  )}

                  {config.xAxis.type === 'date' && (
                    <>
                      <TextField type='date' section='exclusions' fieldName='dateStart' label='Start Date' updateField={updateField} value={config.exclusions.dateStart || ''} />
                      <TextField type='date' section='exclusions' fieldName='dateEnd' label='End Date' updateField={updateField} value={config.exclusions.dateEnd || ''} />
                    </>
                  )}
                </>
              )}

              {visSupportsDateCategoryNumTicks() && <TextField value={config.xAxis.numTicks} placeholder='Auto' type='number' min={1} section='xAxis' fieldName='numTicks' label='Number of ticks' className='number-narrow' updateField={updateField} />}
              {visSupportsDateCategoryHeight() && <TextField value={config.xAxis.size} type='number' min={0} section='xAxis' fieldName='size' label={config.orientation === 'horizontal' ? 'Size (Width)' : 'Size (Height)'} className='number-narrow' updateField={updateField} />}

              {/* Hiding this for now, not interested in moving the axis lines away from chart comp. right now. */}
              {/* <TextField value={config.xAxis.axisPadding} type='number' max={10} min={0} section='xAxis' fieldName='axisPadding' label={'Axis Padding'} className='number-narrow' updateField={updateField} /> */}
              {(config.xAxis.type === 'continuous' || config.forestPlot.type === 'Logarithmic') && (
                <>
                  <CheckBox value={config.dataFormat.bottomCommas} section='dataFormat' fieldName='bottomCommas' label='Add commas' updateField={updateField} />
                  <TextField value={config.dataFormat.bottomRoundTo} type='number' section='dataFormat' fieldName='bottomRoundTo' label='Round to decimal point' className='number-narrow' updateField={updateField} min={0} />
                </>
              )}
              {visSupportsResponsiveTicks() && config.orientation === 'vertical' && config.visualizationType !== 'Paired Bar' && <CheckBox value={config.isResponsiveTicks} fieldName='isResponsiveTicks' label='Use Responsive Ticks' updateField={updateField} />}
              {(config.orientation === 'horizontal' || !config.isResponsiveTicks) && visSupportsDateCategoryTickRotation() && (
                <TextField value={config.xAxis.tickRotation} type='number' min={0} section='xAxis' fieldName='tickRotation' label='Tick rotation (Degrees)' className='number-narrow' updateField={updateField} />
              )}
              {config.orientation === 'vertical' && config.isResponsiveTicks && config.visualizationType !== 'Paired Bar' && (
                <TextField
                  value={config.xAxis.maxTickRotation}
                  type='number'
                  min={0}
                  section='xAxis'
                  fieldName='maxTickRotation'
                  label='Max Tick Rotation'
                  className='number-narrow'
                  updateField={updateField}
                  tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>Degrees ticks will be rotated if values overlap, especially in smaller viewports.</p>
                      </Tooltip.Content>
                    </Tooltip>
                  }
                />
              )}

              {config.orientation === 'horizontal' ? (
                <>
                  {visSupportsDateCategoryAxisLine() && <CheckBox value={config.yAxis.hideAxis} section='yAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />}
                  {visSupportsDateCategoryAxisLabel() && <CheckBox value={config.yAxis.hideLabel} section='yAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />}
                </>
              ) : (
                <>
                  {visSupportsDateCategoryAxisLine() && <CheckBox value={config.xAxis.hideAxis} section='xAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />}
                  {visSupportsDateCategoryAxisLabel() && <CheckBox value={config.xAxis.hideLabel} section='xAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />}
                  {visSupportsDateCategoryAxisTicks() && <CheckBox value={config.xAxis.hideTicks} section='xAxis' fieldName='hideTicks' label='Hide Ticks' updateField={updateField} />}
                </>
              )}

              {config.series?.length === 1 && config.visualizationType === 'Bar' && (
                <>
                  {/* HIGHLIGHTED BARS */}
                  <label htmlFor='barHighlight'>Bar Highlighting</label>
                  {config.series.length === 1 &&
                    highlightedBarValues.map((highlightedBarValue, i) => (
                      <fieldset>
                        <div className='edit-block' key={`highlighted-bar-${i}`}>
                          <button className='remove-column' onClick={e => handleRemoveHighlightedBar(e, i)}>
                            Remove
                          </button>
                          <p>Highlighted Bar {i + 1}</p>
                          <label>
                            <span className='edit-label column-heading'>Value</span>
                            <select value={config.highlightedBarValues[i].value} onChange={e => handleUpdateHighlightedBar(e, i)}>
                              <option value=''>- Select Value -</option>
                              {highlightedSeriesValues && [...new Set(highlightedSeriesValues)].sort().map(option => <option key={`special-class-value-option-${i}-${option}`}>{option}</option>)}
                            </select>
                          </label>
                          <label>
                            <span className='edit-label column-heading'>Color</span>
                            <input type='text' value={config.highlightedBarValues[i].color ? config.highlightedBarValues[i].color : ''} onChange={e => handleUpdateHighlightedBarColor(e, i)} />
                          </label>
                          <label>
                            <span className='edit-label column-heading'>Border Width</span>
                            <input max='5' min='0' type='number' value={config.highlightedBarValues[i].borderWidth ? config.highlightedBarValues[i].borderWidth : ''} onChange={e => handleUpdateHighlightedBorderWidth(e, i)} />
                          </label>
                          <label>
                            <span className='edit-label column-heading'>Legend Label</span>
                            <input type='text' value={config.highlightedBarValues[i].legendLabel ? config.highlightedBarValues[i].legendLabel : ''} onChange={e => handleHighlightedBarLegendLabel(e, i)} />
                          </label>
                        </div>
                      </fieldset>
                    ))}
                  <button className='btn full-width' onClick={e => handleAddNewHighlightedBar(e)}>
                    Add Highlighted Bar
                  </button>
                </>
              )}
            </>
          )}

          {config.visualizationType === 'Pie' && (
            <>
              <CheckBox
                value={config.exclusions.active}
                section='exclusions'
                fieldName='active'
                label={'Exclude one or more values'}
                updateField={updateField}
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>When this option is checked, you can select values for exclusion from the pie segments.</p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
              {config.exclusions.active && (
                <>
                  {config.exclusions.keys.length > 0 && (
                    <>
                      <fieldset>
                        <legend className='edit-label'>Excluded Keys</legend>
                      </fieldset>
                      {props.exclusionsList}
                    </>
                  )}

                  <Select
                    fieldName='visualizationType'
                    label='Add Exclusion'
                    initial='Select'
                    onChange={e => {
                      if (e.target.value !== '' && e.target.value !== 'Select') {
                        addNewExclusion(e.target.value)
                      }
                      e.target.value = ''
                    }}
                    options={getDataValues(config.xAxis.dataKey, true)}
                  />
                </>
              )}
            </>
          )}

          {/* anchors */}
          {visHasAnchors() && config.orientation !== 'horizontal' && (
            <div className='edit-block'>
              <span className='edit-label column-heading'>Anchors</span>
              <Accordion allowZeroExpanded>
                {config.xAxis?.anchors?.map((anchor, index) => (
                  <AccordionItem className='series-item series-item--chart' key={`xaxis-anchors-2-${index}`}>
                    <AccordionItemHeading className='series-item__title'>
                      <>
                        <AccordionItemButton className={'accordion__button accordion__button'}>
                          Anchor {index + 1}
                          <button
                            className='series-list__remove'
                            onClick={e => {
                              e.preventDefault()
                              const copiedAnchorGroups = [...config.xAxis.anchors]
                              copiedAnchorGroups.splice(index, 1)
                              updateConfig({
                                ...config,
                                xAxis: {
                                  ...config.xAxis,
                                  anchors: copiedAnchorGroups
                                }
                              })
                            }}
                          >
                            Remove
                          </button>
                        </AccordionItemButton>
                      </>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <label>
                        <span>Anchor Value</span>
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Enter the value as its shown in the data column</p>
                          </Tooltip.Content>
                        </Tooltip>
                        <input
                          type='text'
                          value={config.xAxis.anchors[index].value ? config.xAxis.anchors[index].value : ''}
                          onChange={e => {
                            e.preventDefault()
                            const copiedAnchors = [...config.xAxis.anchors]
                            copiedAnchors[index].value = e.target.value
                            updateConfig({
                              ...config,
                              xAxis: {
                                ...config.xAxis,
                                anchors: copiedAnchors
                              }
                            })
                          }}
                        />
                      </label>

                      <label>
                        <span>Anchor Color</span>
                        <input
                          type='text'
                          value={config.xAxis.anchors[index].color ? config.xAxis.anchors[index].color : ''}
                          onChange={e => {
                            e.preventDefault()
                            const copiedAnchors = [...config.xAxis.anchors]
                            copiedAnchors[index].color = e.target.value
                            updateConfig({
                              ...config,
                              xAxis: {
                                ...config.xAxis,
                                anchors: copiedAnchors
                              }
                            })
                          }}
                        />
                      </label>

                      <label>
                        Anchor Line Style
                        <select
                          value={config.xAxis.anchors[index].lineStyle || ''}
                          onChange={e => {
                            const copiedAnchors = [...config.xAxis.anchors]
                            copiedAnchors[index].lineStyle = e.target.value
                            updateConfig({
                              ...config,
                              xAxis: {
                                ...config.xAxis,
                                anchors: copiedAnchors
                              }
                            })
                          }}
                        >
                          <option>Select</option>
                          {lineOptions.map(line => (
                            <option key={line.key}>{line.value}</option>
                          ))}
                        </select>
                      </label>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>

              <button
                className='btn full-width'
                onClick={e => {
                  e.preventDefault()
                  const anchors = [...config.xAxis.anchors]
                  anchors.push({} as Anchor)
                  updateConfig({
                    ...config,
                    xAxis: {
                      ...config.xAxis,
                      anchors
                    }
                  })
                }}
              >
                Add Anchor
              </button>
            </div>
          )}

          {visHasAnchors() && config.orientation === 'horizontal' && (
            <div className='edit-block'>
              <span className='edit-label column-heading'>Anchors</span>
              <Accordion allowZeroExpanded>
                {config.yAxis?.anchors?.map((anchor, index) => (
                  <AccordionItem className='series-item series-item--chart' key={`accordion-yaxis-anchors-${index}`}>
                    <AccordionItemHeading className='series-item__title'>
                      <>
                        <AccordionItemButton className={'accordion__button accordion__button'}>
                          Anchor {index + 1}
                          <button
                            className='series-list__remove'
                            onClick={e => {
                              e.preventDefault()
                              const copiedAnchorGroups = [...config.yAxis.anchors]
                              copiedAnchorGroups.splice(index, 1)
                              updateConfig({
                                ...config,
                                yAxis: {
                                  ...config.yAxis,
                                  anchors: copiedAnchorGroups
                                }
                              })
                            }}
                          >
                            Remove
                          </button>
                        </AccordionItemButton>
                      </>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <label>
                        <span>Anchor Value</span>
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Enter the value as its shown in the data column</p>
                          </Tooltip.Content>
                        </Tooltip>
                        <input
                          type='text'
                          value={config.yAxis.anchors[index].value ? config.yAxis.anchors[index].value : ''}
                          onChange={e => {
                            e.preventDefault()
                            const copiedAnchors = [...config.yAxis.anchors]
                            copiedAnchors[index].value = e.target.value
                            updateConfig({
                              ...config,
                              yAxis: {
                                ...config.yAxis,
                                anchors: copiedAnchors
                              }
                            })
                          }}
                        />
                      </label>

                      <label>
                        <span>Anchor Color</span>
                        <input
                          type='text'
                          value={config.yAxis.anchors[index].color ? config.yAxis.anchors[index].color : ''}
                          onChange={e => {
                            e.preventDefault()
                            const copiedAnchors = [...config.yAxis.anchors]
                            copiedAnchors[index].color = e.target.value
                            updateConfig({
                              ...config,
                              yAxis: {
                                ...config.yAxis,
                                anchors: copiedAnchors
                              }
                            })
                          }}
                        />
                      </label>

                      <label>
                        Anchor Line Style
                        <select
                          value={config.yAxis.anchors[index].lineStyle || ''}
                          onChange={e => {
                            const copiedAnchors = [...config.yAxis.anchors]
                            copiedAnchors[index].lineStyle = e.target.value
                            updateConfig({
                              ...config,
                              yAxis: {
                                ...config.yAxis,
                                anchors: copiedAnchors
                              }
                            })
                          }}
                        >
                          <option>Select</option>
                          {lineOptions.map(line => (
                            <option key={line.key}>{line.value}</option>
                          ))}
                        </select>
                      </label>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>

              <button
                className='btn full-width'
                onClick={e => {
                  e.preventDefault()
                  const anchors = [...config.yAxis.anchors]
                  anchors.push({} as Anchor)
                  updateConfig({
                    ...config,
                    yAxis: {
                      ...config.yAxis,
                      anchors
                    }
                  })
                }}
              >
                Add Anchor
              </button>
            </div>
          )}
        </AccordionItemPanel>
      </AccordionItem>
    )
  )
}

export default PanelDateCategory
