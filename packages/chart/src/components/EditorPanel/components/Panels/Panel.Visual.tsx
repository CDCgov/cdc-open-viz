import { useContext, FC, useMemo } from 'react'
import _ from 'lodash'
import cloneConfig from '@cdc/core/helpers/cloneConfig'

// external libraries
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'

// core
import { TextField, Select, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import InputToggle from '@cdc/core/components/inputs/InputToggle'

// contexts
import { useColorPalette } from '@cdc/core/hooks/useColorPalette'
import { getCurrentPaletteName } from '@cdc/core/helpers/palettes/utils'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { ChartContext } from './../../../../types/ChartContext.js'

import { useEditorPermissions } from '../../useEditorPermissions.js'
import { useEditorPanelContext } from '../../EditorPanelContext.js'
import ConfigContext from '../../../../ConfigContext.js'
import { PanelProps } from '../PanelProps'
import { LineChartConfig } from '../../../../types/ChartConfig'
import { PaletteSelector, DeveloperPaletteRollback } from '@cdc/core/components/PaletteSelector'
import './panelVisual.styles.css'

const PanelVisual: FC<PanelProps> = props => {
  const { config, updateConfig, colorPalettes, twoColorPalette } = useContext<ChartContext>(ConfigContext)
  const { visual } = config

  const { setLollipopShape, updateField, handlePaletteSelection, handleTwoColorPaletteSelection } = useEditorPanelContext()
  const {
    visHasBarBorders,
    visCanAnimate,
    visSupportsNonSequentialPallete,
    headerColors,
    visSupportsTooltipOpacity,
    visSupportsTooltipLines,
    visSupportsBarSpace,
    visSupportsBarThickness,
    visHasDataCutoff,
    visSupportsSequentialPallete,
    visSupportsReverseColorPalette,
    visHasSingleSeriesTooltip
  } = useEditorPermissions()
  const { twoColorPalettes, sequential, nonSequential, accessibleColors } = useColorPalette(config, updateConfig)

  const currentPaletteName = getCurrentPaletteName(config)

  const versionedTwoColorPalette = useMemo(() => {
    const version = getColorPaletteVersion(config)
    const versionKey = `v${version}`
    return twoColorPalette[versionKey] || twoColorPalette.v2
  }, [config, twoColorPalette])

  const updateColor = (property, _value) => {
    console.error('value', _value)
    if (property === 'storyNodeFontColor') {
      updateConfig({
        ...config,
        sankey: {
          ...config.sankey,
          storyNodeFontColor: _value
        }
      })
      return
    } else {
      updateConfig({
        ...config,
        sankey: {
          ...config.sankey,
          [property]: {
            ...config.sankey[property],
            default: _value
          }
        }
      })
    }
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Visual</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {(config.barStyle === 'lollipop' || config.isLollipopChart) && (
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
            <Select
              value={config.lollipopColorStyle ? config.lollipopColorStyle : 'two-tone'}
              fieldName='lollipopColorStyle'
              label='Lollipop Color Style'
              updateField={updateField}
              options={['regular', 'two-tone']}
            />
            <Select
              value={config.lollipopSize ? config.lollipopSize : 'small'}
              fieldName='lollipopSize'
              label='Lollipop Size'
              updateField={updateField}
              options={['small', 'medium', 'large']}
            />
          </>
        )}
        {config.visualizationType === 'Box Plot' && (
          <fieldset className='fieldset fieldset--boxplot'>
            <legend className=''>Box Plot Settings</legend>
            <Select
              value={config.boxplot.borders}
              fieldName='borders'
              section='boxplot'
              label='Box Plot Borders'
              updateField={updateField}
              options={['true', 'false']}
            />
            <CheckBox
              value={config.boxplot.plotOutlierValues}
              fieldName='plotOutlierValues'
              section='boxplot'
              label='Plot Outliers'
              updateField={updateField}
            />
            <CheckBox
              value={config.boxplot.plotNonOutlierValues}
              fieldName='plotNonOutlierValues'
              section='boxplot'
              label='Plot non-outlier values'
              updateField={updateField}
            />
          </fieldset>
        )}
        {visHasBarBorders() && (
          <Select
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon
                    display='question'
                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                  />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Recommended set to display for Section 508 compliance.</p>
                </Tooltip.Content>
              </Tooltip>
            }
            value={config.barHasBorder}
            fieldName='barHasBorder'
            label='Bar Borders'
            updateField={updateField}
            options={['true', 'false']}
          />
        )}
        {visCanAnimate() && (
          <CheckBox
            value={config.animate}
            fieldName='animate'
            label='Animate Visualization'
            updateField={updateField}
          />
        )}
        {/*<CheckBox value={config.animateReplay} fieldName="animateReplay" label="Replay Animation When Filters Are Changed" updateField={updateField} />*/}
        {((config.series?.some(
          series =>
            series.type === 'Line' ||
            series.type === 'dashed-lg' ||
            series.type === 'dashed-sm' ||
            series.type === 'dashed-md'
        ) &&
          config.visualizationType === 'Combo') ||
          config.visualizationType === 'Line') && (
            <>
              <Select
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon
                        display='question'
                        style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                      />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        Shapes will appear in the following order: circle, square, triangle, diamond, and inverted
                        triangle. Use with a maximum of 5 data points.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
                value={config.visual.lineDatapointSymbol}
                section='visual'
                fieldName='lineDatapointSymbol'
                label='Line Datapoint Symbols'
                updateField={updateField}
                options={['none', 'standard']}
              />
              {config.series.length > config.visual.maximumShapeAmount &&
                config.visual.lineDatapointSymbol === 'standard' && (
                  <small className='text-danger'>Standard only supports up to 7 data points</small>
                )}

              <Select
                value={config.lineDatapointStyle}
                fieldName='lineDatapointStyle'
                label='Line Datapoint Style'
                updateField={updateField}
                options={['hidden', 'hover', 'always show']}
              />
              <Select
                value={config.lineDatapointColor}
                fieldName='lineDatapointColor'
                label='Line Datapoint Color'
                updateField={updateField}
                options={['Same as Line', 'Lighter than Line']}
              />
              <CheckBox
                value={!(config as LineChartConfig).isolatedDotsSameSize}
                fieldName='isolatedDotsSameSize'
                label='Accentuate isolated data points'
                updateField={(section, subsection, fieldname, value) =>
                  updateField(section, subsection, fieldname, !value)
                }
              />
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
            <div className="mb-2">
              <small className="text-muted">
                Review color contrasts <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">here</a>
              </small>
            </div>
            <DeveloperPaletteRollback config={config} updateConfig={updateConfig} />
            {visSupportsReverseColorPalette() && (
              <InputToggle
                section='general'
                subsection='palette'
                fieldName='isReversed'
                size='small'
                label='Use selected palette in reverse order'
                updateField={updateField}
                onClick={() => {
                  const _state = cloneConfig(config)
                  const currentPaletteName = getCurrentPaletteName(config)
                  _state.general.palette.isReversed = !_state.general.palette.isReversed
                  let paletteName = ''
                  if (_state.general.palette.isReversed && !currentPaletteName.endsWith('reverse')) {
                    paletteName = currentPaletteName + 'reverse'
                  }
                  if (!_state.general.palette.isReversed && currentPaletteName.endsWith('reverse')) {
                    paletteName = currentPaletteName.slice(0, -7)
                  }
                  if (paletteName) {
                    _state.general.palette.name = paletteName
                  }
                  updateConfig(_state)
                }}
                value={config.general?.palette?.isReversed}
              />
            )}
            {visSupportsSequentialPallete() && (
              <>
                <span>Sequential</span>
                <PaletteSelector
                  palettes={sequential}
                  colorPalettes={colorPalettes}
                  config={config}
                  onPaletteSelect={handlePaletteSelection}
                  selectedPalette={currentPaletteName}
                  colorIndices={[2, 3, 5]}
                  className='color-palette'
                />
              </>
            )}
            {visSupportsNonSequentialPallete() && (
              <>
                <span>Non-Sequential</span>
                <PaletteSelector
                  palettes={nonSequential}
                  colorPalettes={colorPalettes}
                  config={config}
                  onPaletteSelect={handlePaletteSelection}
                  selectedPalette={getCurrentPaletteName(config)}
                  colorIndices={[2, 4, 6]}
                  className='color-palette'
                />
                <span>Colorblind Safe</span>
                <PaletteSelector
                  palettes={accessibleColors}
                  colorPalettes={colorPalettes}
                  config={config}
                  onPaletteSelect={handlePaletteSelection}
                  selectedPalette={getCurrentPaletteName(config)}
                  colorIndices={[2, 3, 5]}
                  className='color-palette'
                />
              </>
            )}
          </>
        )}
        {config.visualizationType === 'Sankey' && (
          <>
            <span className='sankey__color-input'>
              <input
                type='color'
                value={config.sankey.nodeColor.default}
                id='storyNodeColor'
                name='storyNodeColor'
                onChange={e => updateColor('nodeColor', e.target.value)}
              />
              <label htmlFor='storyNodeColor'>Story Node Color</label>
            </span>
            <span className='sankey__color-input'>
              <input
                type='color'
                value={config.sankey.storyNodeFontColor || 'red'}
                id='storyNodeFontColor'
                name='storyNodeFontColor'
                onChange={e => updateColor('storyNodeFontColor', e.target.value)}
              />
              <label htmlFor='storyNodeFontColor'>Story Node Font Color</label>
            </span>
            <span className='sankey__color-input'>
              <input
                type='color'
                value={config.sankey.linkColor.default}
                id='linkColor'
                name='linkColor'
                onChange={e => updateColor('linkColor', e.target.value)}
              />
              <label htmlFor='linkColor'>Link Color</label>
            </span>
          </>
        )}
        {(config.visualizationType === 'Paired Bar' || config.visualizationType === 'Deviation Bar') && (
          <>
            <DeveloperPaletteRollback
              config={config}
              updateConfig={updateConfig}
              className="mt-3"
            />
            <InputToggle
              section='twoColor'
              fieldName='isPaletteReversed'
              size='small'
              label='Use selected palette in reverse order'
              updateField={updateField}
              value={config.twoColor.isPaletteReversed}
            />
            <ul className='color-palette'>
              {twoColorPalettes.map(palette => {
                const paletteColors = versionedTwoColorPalette[palette]

                if (!paletteColors || paletteColors.length < 2) {
                  console.warn(`Two-color palette "${palette}" not found or incomplete in version ${getColorPaletteVersion(config)}`)
                  return null
                }

                const colorOne = {
                  backgroundColor: paletteColors[0]
                }

                const colorTwo = {
                  backgroundColor: paletteColors[1]
                }

                return (
                  <button
                    title={palette}
                    key={palette}
                    onClick={e => {
                      e.preventDefault()
                      if (handleTwoColorPaletteSelection) {
                        handleTwoColorPaletteSelection(palette)
                      } else {
                        // Fallback to direct update if handler not available
                        updateConfig({ ...config, twoColor: { ...config.twoColor, palette } })
                      }
                    }}
                    className={config.twoColor.palette === palette ? 'selected' : ''}
                  >
                    <span className='two-color' style={colorOne}></span>
                    <span className='two-color' style={colorTwo}></span>
                  </button>
                )
              }).filter(Boolean)}
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
                    <p>
                      Any value below the cut-off value is included in a special "less than" category. This option
                      supports special conditions like suppressed data.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
          </>
        )}
        {visSupportsBarThickness() &&
          config.orientation === 'horizontal' &&
          !config.isLollipopChart &&
          config.yAxis.labelPlacement !== 'On Bar' && (
            <TextField
              type='number'
              value={config.barHeight || '25'}
              fieldName='barHeight'
              label=' Bar Thickness'
              updateField={updateField}
              min={15}
            />
          )}
        {(config.orientation !== 'horizontal' || config.visualizationType === 'Combo') && (
          <TextField
            value={config.barThickness}
            type='number'
            fieldName='barThickness'
            label='Bar Thickness'
            updateField={updateField}
          />
        )}
        {visSupportsBarSpace() && (
          <TextField
            type='number'
            value={config.barSpace || '15'}
            fieldName='barSpace'
            label='Bar Space'
            updateField={updateField}
            min={0}
          />
        )}
        {(config.visualizationType === 'Bar' ||
          config.visualizationType === 'Line' ||
          config.visualizationType === 'Combo') && (
            <CheckBox
              value={config.topAxis.hasLine}
              section='topAxis'
              fieldName='hasLine'
              label='Add Top Axis Line'
              updateField={updateField}
            />
          )}
        {config.visualizationType === 'Spark Line' && (
          <div className='cove-accordion__panel-section checkbox-group'>
            <CheckBox
              value={visual?.border}
              section='visual'
              fieldName='border'
              label='Show Border'
              updateField={updateField}
            />
            <CheckBox
              value={visual?.borderColorTheme}
              section='visual'
              fieldName='borderColorTheme'
              label='Use Border Color Theme'
              updateField={updateField}
            />
            <CheckBox
              value={visual?.accent}
              section='visual'
              fieldName='accent'
              label='Use Accent Style'
              updateField={updateField}
            />
            <CheckBox
              value={visual?.background}
              section='visual'
              fieldName='background'
              label='Use Theme Background Color'
              updateField={updateField}
            />
            <CheckBox
              value={visual?.hideBackgroundColor}
              section='visual'
              fieldName='hideBackgroundColor'
              label='Hide Background Color'
              updateField={updateField}
            />
          </div>
        )}
        {(config.visualizationType === 'Line' || config.visualizationType === 'Combo') && (
          <CheckBox
            value={config.showLineSeriesLabels}
            fieldName='showLineSeriesLabels'
            label='Append Series Name to End of Line Charts'
            updateField={updateField}
          />
        )}
        {(config.visualizationType === 'Line' || config.visualizationType === 'Combo') &&
          config.showLineSeriesLabels && (
            <CheckBox
              value={config.colorMatchLineSeriesLabels}
              fieldName='colorMatchLineSeriesLabels'
              label='Match Series Color to Name at End of Line Charts'
              updateField={updateField}
            />
          )}
        {visSupportsTooltipLines() && (
          <>
            <CheckBox
              value={visual.verticalHoverLine}
              fieldName='verticalHoverLine'
              section='visual'
              label='Vertical Hover Line'
              updateField={updateField}
            />
            <CheckBox
              value={visual.horizontalHoverLine}
              fieldName='horizontalHoverLine'
              section='visual'
              label='Horizontal Hover Line'
              updateField={updateField}
            />
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
        {visHasSingleSeriesTooltip() && (
          <CheckBox
            value={config.tooltips.singleSeries}
            fieldName='singleSeries'
            section='tooltips'
            label='SHOW HOVER FOR SINGLE DATA SERIES'
            updateField={updateField}
          />
        )}
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
