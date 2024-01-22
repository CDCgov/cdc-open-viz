import { useContext, FC } from 'react'

// external libraries
import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'

// core
import { TextField, Select, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import InputToggle from '@cdc/core/components/inputs/InputToggle'

// contexts
import { useColorPalette } from '../../../../hooks/useColorPalette'
import { ChartContext } from './../../../../types/ChartContext.js'

import { useEditorPermissions } from '../../useEditorPermissions.js'
import EditorPanelContext, { type EditorPanelContext as EPContext } from '../EditorPanelContext.js'
import ConfigContext from '../../../../ConfigContext.js'
import { PanelProps } from '../PanelProps'

const PanelVisual: FC<PanelProps> = props => {
  const { config, updateConfig, colorPalettes, twoColorPalette } = useContext<ChartContext>(ConfigContext)
  const { visual } = config
  const { setLollipopShape, updateField } = useContext<EPContext>(EditorPanelContext)
  const { visHasBarBorders, visCanAnimate, visSupportsNonSequentialPallete, headerColors, visSupportsTooltipOpacity, visSupportsTooltipLines, visSupportsBarSpace, visSupportsBarThickness, visHasDataCutoff, visSupportsSequentialPallete, visSupportsReverseColorPalette } = useEditorPermissions()
  const { twoColorPalettes, sequential, nonSequential } = useColorPalette(config, updateConfig)

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Visual</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {config.isLollipopChart && (
          <>
            <fieldset className='header'>
              <legend className='edit-label'>Lollipop Shape</legend>
              <div
                onChange={e => {
                  setLollipopShape(e.target.value)
                }}
              >
                <label className='radio-label'>
                  <input type='radio' name='lollipopShape' value='circle' checked={config.lollipopShape === 'circle'} />
                  Circle
                </label>
                <label className='radio-label'>
                  <input type='radio' name='lollipopShape' value='square' checked={config.lollipopShape === 'square'} />
                  Square
                </label>
              </div>
            </fieldset>
            <Select value={config.lollipopColorStyle ? config.lollipopColorStyle : 'two-tone'} fieldName='lollipopColorStyle' label='Lollipop Color Style' updateField={updateField} options={['regular', 'two-tone']} />
            <Select value={config.lollipopSize ? config.lollipopSize : 'small'} fieldName='lollipopSize' label='Lollipop Size' updateField={updateField} options={['small', 'medium', 'large']} />
          </>
        )}

        {config.visualizationType === 'Box Plot' && (
          <fieldset className='fieldset fieldset--boxplot'>
            <legend className=''>Box Plot Settings</legend>
            <Select value={config.boxplot.borders} fieldName='borders' section='boxplot' label='Box Plot Borders' updateField={updateField} options={['true', 'false']} />
            <CheckBox value={config.boxplot.plotOutlierValues} fieldName='plotOutlierValues' section='boxplot' label='Plot Outliers' updateField={updateField} />
            <CheckBox value={config.boxplot.plotNonOutlierValues} fieldName='plotNonOutlierValues' section='boxplot' label='Plot non-outlier values' updateField={updateField} />
          </fieldset>
        )}

        <Select value={config.fontSize} fieldName='fontSize' label='Font Size' updateField={updateField} options={['small', 'medium', 'large']} />
        {visHasBarBorders() && <Select value={config.barHasBorder} fieldName='barHasBorder' label='Bar Borders' updateField={updateField} options={['true', 'false']} />}
        {visCanAnimate() && <CheckBox value={config.animate} fieldName='animate' label='Animate Visualization' updateField={updateField} />}

        {/*<CheckBox value={config.animateReplay} fieldName="animateReplay" label="Replay Animation When Filters Are Changed" updateField={updateField} />*/}

        {((config.series?.some(series => series.type === 'Line' || series.type === 'dashed-lg' || series.type === 'dashed-sm' || series.type === 'dashed-md') && config.visualizationType === 'Combo') || config.visualizationType === 'Line') && (
          <>
            <Select value={config.lineDatapointStyle} fieldName='lineDatapointStyle' label='Line Datapoint Style' updateField={updateField} options={['hidden', 'hover', 'always show']} />
            <Select value={config.lineDatapointColor} fieldName='lineDatapointColor' label='Line Datapoint Color' updateField={updateField} options={['Same as Line', 'Lighter than Line']} />
          </>
        )}

        {/* eslint-disable */}
        <label className='header'>
          <span className='edit-label'>Header Theme</span>
          <ul className='color-palette'>
            {headerColors.map(palette => (
              <button
                title={palette}
                key={palette}
                onClick={e => {
                  e.preventDefault()
                  updateConfig({ ...config, theme: palette })
                }}
                className={config.theme === palette ? 'selected ' + palette : palette}
              ></button>
            ))}
          </ul>
        </label>
        {/* eslint-enable */}
        {(visSupportsNonSequentialPallete() || visSupportsNonSequentialPallete()) && (
          <>
            <label>
              <span className='edit-label'>Chart Color Palette</span>
            </label>
            {visSupportsReverseColorPalette() && <InputToggle fieldName='isPaletteReversed' size='small' label='Use selected palette in reverse order' updateField={updateField} value={config.isPaletteReversed} />}
            {visSupportsSequentialPallete() && (
              <>
                <span>Sequential</span>
                <ul className='color-palette'>
                  {sequential.map(palette => {
                    const colorOne = {
                      backgroundColor: colorPalettes[palette][2]
                    }

                    const colorTwo = {
                      backgroundColor: colorPalettes[palette][3]
                    }

                    const colorThree = {
                      backgroundColor: colorPalettes[palette][5]
                    }

                    return (
                      <button
                        title={palette}
                        key={palette}
                        onClick={e => {
                          e.preventDefault()
                          updateConfig({ ...config, palette })
                        }}
                        className={config.palette === palette ? 'selected' : ''}
                      >
                        <span style={colorOne}></span>
                        <span style={colorTwo}></span>
                        <span style={colorThree}></span>
                      </button>
                    )
                  })}
                </ul>
              </>
            )}
            {visSupportsNonSequentialPallete() && (
              <>
                <span>Non-Sequential</span>
                <ul className='color-palette'>
                  {nonSequential.map(palette => {
                    const colorOne = {
                      backgroundColor: colorPalettes[palette][2]
                    }

                    const colorTwo = {
                      backgroundColor: colorPalettes[palette][4]
                    }

                    const colorThree = {
                      backgroundColor: colorPalettes[palette][6]
                    }

                    return (
                      <button
                        title={palette}
                        key={palette}
                        onClick={e => {
                          e.preventDefault()
                          updateConfig({ ...config, palette })
                        }}
                        className={config.palette === palette ? 'selected' : ''}
                      >
                        <span style={colorOne}></span>
                        <span style={colorTwo}></span>
                        <span style={colorThree}></span>
                      </button>
                    )
                  })}
                </ul>
              </>
            )}
          </>
        )}
        {(config.visualizationType === 'Paired Bar' || config.visualizationType === 'Deviation Bar') && (
          <>
            <InputToggle section='twoColor' fieldName='isPaletteReversed' size='small' label='Use selected palette in reverse order' updateField={updateField} value={config.twoColor.isPaletteReversed} />
            <ul className='color-palette'>
              {twoColorPalettes.map(palette => {
                const colorOne = {
                  backgroundColor: twoColorPalette[palette][0]
                }

                const colorTwo = {
                  backgroundColor: twoColorPalette[palette][1]
                }

                return (
                  <button
                    title={palette}
                    key={palette}
                    onClick={e => {
                      e.preventDefault()
                      updateConfig({ ...config, twoColor: { ...config.twoColor, palette } })
                    }}
                    className={config.twoColor.palette === palette ? 'selected' : ''}
                  >
                    <span className='two-color' style={colorOne}></span>
                    <span className='two-color' style={colorTwo}></span>
                  </button>
                )
              })}
            </ul>
          </>
        )}

        {visHasDataCutoff() && (
          <>
            <TextField
              value={config.dataCutoff}
              type='number'
              fieldName='dataCutoff'
              className='number-narrow'
              label='Data Cutoff'
              updateField={updateField}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
          </>
        )}
        {visSupportsBarThickness() && config.orientation === 'horizontal' && !config.isLollipopChart && config.yAxis.labelPlacement !== 'On Bar' && <TextField type='number' value={config.barHeight || '25'} fieldName='barHeight' label=' Bar Thickness' updateField={updateField} min={15} />}
        {((config.visualizationType === 'Bar' && config.orientation !== 'horizontal') || config.visualizationType === 'Combo') && <TextField value={config.barThickness} type='number' fieldName='barThickness' label='Bar Thickness' updateField={updateField} />}
        {visSupportsBarSpace() && <TextField type='number' value={config.barSpace || '15'} fieldName='barSpace' label='Bar Space' updateField={updateField} min={0} />}
        {(config.visualizationType === 'Bar' || config.visualizationType === 'Line' || config.visualizationType === 'Combo') && <CheckBox value={config.topAxis.hasLine} section='topAxis' fieldName='hasLine' label='Add Top Axis Line' updateField={updateField} />}

        {config.visualizationType === 'Spark Line' && (
          <div className='cove-accordion__panel-section checkbox-group'>
            <CheckBox value={visual?.border} section='visual' fieldName='border' label='Show Border' updateField={updateField} />
            <CheckBox value={visual?.borderColorTheme} section='visual' fieldName='borderColorTheme' label='Use Border Color Theme' updateField={updateField} />
            <CheckBox value={visual?.accent} section='visual' fieldName='accent' label='Use Accent Style' updateField={updateField} />
            <CheckBox value={visual?.background} section='visual' fieldName='background' label='Use Theme Background Color' updateField={updateField} />
            <CheckBox value={visual?.hideBackgroundColor} section='visual' fieldName='hideBackgroundColor' label='Hide Background Color' updateField={updateField} />
          </div>
        )}

        {(config.visualizationType === 'Line' || config.visualizationType === 'Combo') && <CheckBox value={config.showLineSeriesLabels} fieldName='showLineSeriesLabels' label='Append Series Name to End of Line Charts' updateField={updateField} />}
        {(config.visualizationType === 'Line' || config.visualizationType === 'Combo') && config.showLineSeriesLabels && <CheckBox value={config.colorMatchLineSeriesLabels} fieldName='colorMatchLineSeriesLabels' label='Match Series Color to Name at End of Line Charts' updateField={updateField} />}

        {visSupportsTooltipLines() && (
          <>
            <CheckBox value={visual.verticalHoverLine} fieldName='verticalHoverLine' section='visual' label='Vertical Hover Line' updateField={updateField} />
            <CheckBox value={visual.horizontalHoverLine} fieldName='horizontalHoverLine' section='visual' label='Horizontal Hover Line' updateField={updateField} />
          </>
        )}
        {visSupportsTooltipOpacity() && (
          <label>
            <span className='edit-label column-heading'>Tooltip Opacity</span>
            <input
              type='number'
              value={config.tooltips.opacity ? config.tooltips.opacity : 100}
              onChange={e =>
                updateConfig({
                  ...config,
                  tooltips: {
                    ...config.tooltips,
                    opacity: e.target.value
                  }
                })
              }
            />
          </label>
        )}
        {config.visualizationType === 'Bar' && <CheckBox value={config.tooltips.singleSeries} fieldName='singleSeries' section='tooltips' label='SHOW HOVER FOR SINGLE DATA SERIES' updateField={updateField} />}

        <label>
          <span className='edit-label column-heading'>No Data Message</span>
          <input
            type='text'
            value={config.chartMessage.noData ? config.chartMessage.noData : ''}
            onChange={e =>
              updateConfig({
                ...config,
                chartMessage: {
                  ...config.chartMessage,
                  noData: e.target.value
                }
              })
            }
          />
        </label>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default PanelVisual
