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

const PanelRightAxis = () => {
  const { config, updateConfig, lineOptions } = useContext(ConfigContext)
  const { updateField, warningMsg, getColumns } = useContext<EPContext>(EditorPanelContext)
  const { visSupportsLeftValueAxis, visSupportsValueAxisMax, visSupportsValueAxisMin, visSupportsValueAxisGridLines, visHasAnchors, visSupportsValueAxisLine, visSupportsValueAxisLabels, visSupportsValueAxisTicks } = useEditorPermissions()

  return (
    visSupportsLeftValueAxis && (
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {config.visualizationType === 'Pie' ? 'Data Format' : config.orientation === 'vertical' ? 'Left Value Axis' : 'Value Axis'}
            {config.visualizationType === 'Pie' && !config.yAxis.dataKey && <WarningImage width='25' className='warning-icon' />}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {config.visualizationType === 'Pie' && (
            <Select
              value={config.yAxis.dataKey || ''}
              section='yAxis'
              fieldName='dataKey'
              label='Data Column'
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
                    <p>Select the source data to be visually represented.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
          )}
          {config.visualizationType !== 'Pie' && (
            <>
              <TextField value={config.yAxis.label} section='yAxis' fieldName='label' label='Label' updateField={updateField} />
              {config.runtime.seriesKeys && config.runtime.seriesKeys.length === 1 && !['Box Plot', 'Deviation Bar', 'Forest Plot'].includes(config.visualizationType) && <CheckBox value={config.isLegendValue} fieldName='isLegendValue' label='Use Legend Value in Hover' updateField={updateField} />}
              <TextField value={config.yAxis.numTicks} placeholder='Auto' type='number' section='yAxis' fieldName='numTicks' label='Number of ticks' className='number-narrow' updateField={updateField} />
              {config.visualizationType === 'Paired Bar' && <TextField value={config.yAxis.tickRotation || 0} type='number' min={0} section='yAxis' fieldName='tickRotation' label='Tick rotation (Degrees)' className='number-narrow' updateField={updateField} />}
              <TextField
                value={config.yAxis.size}
                type='number'
                section='yAxis'
                fieldName='size'
                label={config.orientation === 'horizontal' ? 'Size (Height)' : 'Size (Width)'}
                className='number-narrow'
                updateField={updateField}
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>{`Increase the size if elements in the ${config.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`}</p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
              {config.orientation === 'horizontal' && config.visualizationType !== 'Paired Bar' && <CheckBox value={config.isResponsiveTicks} fieldName='isResponsiveTicks' label='Use Responsive Ticks' updateField={updateField} />}
              {(config.orientation === 'vertical' || !config.isResponsiveTicks) && <TextField value={config.yAxis.tickRotation} type='number' min={0} section='yAxis' fieldName='tickRotation' label='Tick rotation (Degrees)' className='number-narrow' updateField={updateField} />}
              {config.isResponsiveTicks && config.orientation === 'horizontal' && config.visualizationType !== 'Paired Bar' && (
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

              {/* Hiding this for now, not interested in moving the axis lines away from chart comp. right now. */}
              {/* <TextField value={config.yAxis.axisPadding} type='number' max={10} min={0} section='yAxis' fieldName='axisPadding' label={'Axis Padding'} className='number-narrow' updateField={updateField} /> */}
              {config.orientation === 'horizontal' && <TextField value={config.xAxis.labelOffset} section='xAxis' fieldName='labelOffset' label='Label offset' type='number' className='number-narrow' updateField={updateField} />}
              {visSupportsValueAxisGridLines() && <CheckBox value={config.yAxis.gridLines} section='yAxis' fieldName='gridLines' label='Show Gridlines' updateField={updateField} />}
              <CheckBox value={config.yAxis.enablePadding} section='yAxis' fieldName='enablePadding' label='Add Padding to Value Axis Scale' updateField={updateField} />
              {config.visualizationSubType === 'regular' && config.visualizationType !== 'Forest Plot' && <CheckBox value={config.useLogScale} fieldName='useLogScale' label='use logarithmic scale' updateField={updateField} />}
            </>
          )}
          <span className='divider-heading'>Number Formatting</span>
          <CheckBox value={config.dataFormat.commas} section='dataFormat' fieldName='commas' label='Add commas' updateField={updateField} />
          <CheckBox
            value={config.dataFormat.abbreviated}
            section='dataFormat'
            fieldName='abbreviated'
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
          <TextField value={config.dataFormat.roundTo ? config.dataFormat.roundTo : 0} type='number' section='dataFormat' fieldName='roundTo' label='Round to decimal point' className='number-narrow' updateField={updateField} min={0} />
          <div className='two-col-inputs'>
            <TextField
              value={config.dataFormat.prefix}
              section='dataFormat'
              fieldName='prefix'
              label='Prefix'
              updateField={updateField}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    {config.visualizationType === 'Pie' && <p>Enter a data prefix to display in the data table and chart tooltips, if applicable.</p>}
                    {config.visualizationType !== 'Pie' && <p>Enter a data prefix (such as "$"), if applicable.</p>}
                  </Tooltip.Content>
                </Tooltip>
              }
            />
            <TextField
              value={config.dataFormat.suffix}
              section='dataFormat'
              fieldName='suffix'
              label='Suffix'
              updateField={updateField}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    {config.visualizationType === 'Pie' && <p>Enter a data suffix to display in the data table and tooltips, if applicable.</p>}
                    {config.visualizationType !== 'Pie' && <p>Enter a data suffix (such as "%"), if applicable.</p>}
                  </Tooltip.Content>
                </Tooltip>
              }
            />
          </div>

          {config.orientation === 'horizontal' ? ( // horizontal - x is vertical y is horizontal
            <>
              {visSupportsValueAxisLine() && <CheckBox value={config.xAxis.hideAxis} section='xAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />}
              {visSupportsValueAxisLabels() && <CheckBox value={config.xAxis.hideLabel} section='xAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />}
              {visSupportsValueAxisTicks() && <CheckBox value={config.xAxis.hideTicks} section='xAxis' fieldName='hideTicks' label='Hide Ticks' updateField={updateField} />}
              {visSupportsValueAxisMax() && <TextField value={config.xAxis.max} section='xAxis' fieldName='max' label='max value' type='number' placeholder='Auto' updateField={updateField} />}
              <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
              {visSupportsValueAxisMin() && <TextField value={config.xAxis.min} section='xAxis' fieldName='min' type='number' label='min value' placeholder='Auto' updateField={updateField} />}
              <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
              {config.visualizationType === 'Deviation Bar' && (
                <>
                  <TextField value={config.xAxis.target} section='xAxis' fieldName='target' type='number' label='Deviation point' placeholder='Auto' updateField={updateField} />
                  <TextField value={config.xAxis.targetLabel || 'Target'} section='xAxis' fieldName='targetLabel' type='text' label='Deviation point Label' updateField={updateField} />
                  <CheckBox value={config.xAxis.showTargetLabel} section='xAxis' fieldName='showTargetLabel' label='Show Deviation point label' updateField={updateField} />
                </>
              )}
            </>
          ) : (
            config.visualizationType !== 'Pie' && (
              <>
                <CheckBox value={config.yAxis.hideAxis} section='yAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />
                <CheckBox value={config.yAxis.hideLabel} section='yAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />
                <CheckBox value={config.yAxis.hideTicks} section='yAxis' fieldName='hideTicks' label='Hide Ticks' updateField={updateField} />

                <TextField value={config.yAxis.max} section='yAxis' fieldName='max' type='number' label='left axis max value' placeholder='Auto' updateField={updateField} />
                <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
                <TextField value={config.yAxis.min} section='yAxis' fieldName='min' type='number' label='left axis min value' placeholder='Auto' updateField={updateField} />
                <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
              </>
            )
          )}

          {/* start: anchors */}
          {visHasAnchors() && config.orientation !== 'horizontal' && (
            <div className='edit-block'>
              <span className='edit-label column-heading'>Anchors</span>
              <Accordion allowZeroExpanded>
                {config.yAxis?.anchors?.map((anchor, index) => (
                  <AccordionItem className='series-item series-item--chart' key={`yaxis-anchors-2-${index}`}>
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

          {visHasAnchors() && config.orientation === 'horizontal' && (
            <div className='edit-block'>
              <span className='edit-label column-heading'>Anchors</span>
              <Accordion allowZeroExpanded>
                {config.xAxis?.anchors?.map((anchor, index) => (
                  <AccordionItem className='series-item series-item--chart' key={`xaxis-anchors-${index}`}>
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
          {/* end: anchors */}
        </AccordionItemPanel>
      </AccordionItem>
    )
  )
}

export default PanelRightAxis
