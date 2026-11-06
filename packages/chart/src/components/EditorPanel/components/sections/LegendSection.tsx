import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import type { ChartConfig } from '../../../../types/ChartConfig'

type LegendConfig = ChartConfig['legend']

export type LegendField =
  | 'position'
  | 'style'
  | 'groupBy'
  | 'hasShape'
  | 'subStyle'
  | 'tickRotation'
  | 'hideSuppressedLabels'
  | 'hideSuppressionLink'
  | 'colorCode'
  | 'axisAlign'
  | 'highlightOnHover'
  | 'seriesHighlight'
  | 'reverseLabelOrder'
  | 'hide'
  | 'singleRow'
  | 'verticalSorted'
  | 'label'
  | 'description'
  | 'unified'
  | 'expandForecastConfidenceIntervals'
  | 'side'
  | 'topBottom'

export type LegendSectionModel = {
  visualizationType: ChartConfig['visualizationType']
  position: LegendConfig['position']
  hide: LegendConfig['hide']
  style: LegendConfig['style']
  groupBy: LegendConfig['groupBy']
  hasShape: LegendConfig['hasShape']
  subStyle: LegendConfig['subStyle']
  tickRotation: LegendConfig['tickRotation']
  hideSuppressedLabels: LegendConfig['hideSuppressedLabels']
  hideSuppressionLink: LegendConfig['hideSuppressionLink']
  behavior: LegendConfig['behavior']
  colorCode: LegendConfig['colorCode']
  axisAlign: LegendConfig['axisAlign']
  highlightOnHover: LegendConfig['highlightOnHover']
  seriesHighlight: LegendConfig['seriesHighlight']
  reverseLabelOrder: LegendConfig['reverseLabelOrder']
  hideBorder: LegendConfig['hideBorder']
  singleRow: LegendConfig['singleRow']
  verticalSorted: LegendConfig['verticalSorted']
  label: LegendConfig['label']
  description: LegendConfig['description']
  unified: LegendConfig['unified']
  expandForecastConfidenceIntervals: LegendConfig['expandForecastConfidenceIntervals']
  hasSuppressionData: boolean
  supportsClicking: boolean
  hasDynamicCategory: boolean
  hasMultipleSeries: boolean
  supportsColorCategory: boolean
  supportsAxisAlign: boolean
  supportsSelectableValues: boolean
  supportsForecastConfidenceIntervalExpansion: boolean
  colorCodeByCategory: boolean
  tooltipsSingleSeries: boolean
  groupByOptions: string[]
  colorCodeOptions: string[]
  isolateOptions: string[]
}

type LegendSectionProps = {
  model: LegendSectionModel
  onFieldChange: (field: LegendField, value: unknown, subsection?: 'hideBorder') => void
  onBehaviorChange: (value: LegendConfig['behavior']) => void
  onSeriesHighlightChange: (values: string[]) => void
  onShowAll: () => void
}

const getPositionOptions = (model: LegendSectionModel) => {
  if (model.visualizationType === 'HeatMap') {
    return model.style === 'gradient' ? ['bottom', 'top'] : ['right', 'left', 'bottom', 'top']
  }
  return model.visualizationType === 'Warming Stripes' ? ['bottom'] : ['right', 'left', 'bottom', 'top']
}

export const getLegendStyleOptions = (model: LegendSectionModel) => {
  const options = ['circles', 'boxes']
  const isSide = ['right', 'left'].includes(model.position)

  if (model.visualizationType === 'HeatMap' && !isSide && model.position) options.push('gradient')
  if (model.visualizationType === 'Bar' && (!isSide || !model.position)) options.push('gradient')
  if (model.visualizationType === 'Warming Stripes') options.push('gradient')
  if (model.visualizationType === 'Line') options.push('lines')

  return options
}

export const getLegendSubStyleOptions = (visualizationType: ChartConfig['visualizationType']) =>
  visualizationType === 'Bar' || visualizationType === 'HeatMap' ? ['linear blocks'] : ['linear blocks', 'smooth']

export const supportsForecastConfidenceIntervalExpansion = (
  visualizationType: ChartConfig['visualizationType'],
  series: ChartConfig['series']
) => ['Forecasting', 'Combo'].includes(visualizationType) && Boolean(series?.some(item => item.type === 'Forecasting'))

const LegendSection = ({
  model,
  onFieldChange,
  onBehaviorChange,
  onSeriesHighlightChange,
  onShowAll
}: LegendSectionProps) => {
  const updateField = (_section, subsection, fieldName: LegendField, value) =>
    onFieldChange(fieldName, value, subsection || undefined)
  const isSide = ['left', 'right'].includes(model.position)
  const showSuppressionControls = model.visualizationType !== 'Radar' && model.hasSuppressionData

  const removeIsolateValue = (index: number) => {
    const updatedValues = [...model.seriesHighlight]
    updatedValues.splice(index, 1)
    onFieldChange('seriesHighlight', updatedValues)
    if (!updatedValues.length) onShowAll()
  }

  const updateIsolateValue = (index: number, value: string) => {
    if (model.seriesHighlight.includes(value)) return
    const updatedValues = [...model.seriesHighlight]
    updatedValues[index] = value
    onSeriesHighlightChange(updatedValues)
  }

  const addIsolateValue = () => {
    if (model.seriesHighlight.length >= model.isolateOptions.length) return
    const nextValue = model.isolateOptions.find(value => !model.seriesHighlight.includes(value))
    if (nextValue === undefined) return
    onSeriesHighlightChange([...model.seriesHighlight, nextValue])
  }

  const hideLegendControl = (
    <CheckBox
      value={model.hide ? true : false}
      section='legend'
      fieldName='hide'
      label='Hide Legend'
      updateField={updateField}
      tooltip={
        <Tooltip style={{ textTransform: 'none' }}>
          <Tooltip.Target>
            <Icon
              display='question'
              style={
                model.visualizationType === 'Network'
                  ? { marginLeft: '0.5rem' }
                  : { marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }
              }
            />
          </Tooltip.Target>
          <Tooltip.Content>
            <p>With a single-series chart, consider hiding the legend to reduce visual clutter.</p>
          </Tooltip.Content>
        </Tooltip>
      }
    />
  )

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Legend</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {model.visualizationType === 'Network' ? (
          hideLegendControl
        ) : (
          <>
            <Select
              value={model.position}
              section='legend'
              fieldName='position'
              label='Position'
              updateField={updateField}
              options={getPositionOptions(model)}
            />
            {(isSide || !model.position) && model.style === 'gradient' && (
              <span style={{ color: 'red', fontSize: '14px' }}>
                Position must be set to top or bottom to use gradient style.
              </span>
            )}
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
                      If using gradient style, limit the legend to five items for better mobile visibility, and position
                      the legend at the top or bottom.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              }
              display={!model.hide}
              value={model.style}
              section='legend'
              fieldName='style'
              label='Legend Style'
              updateField={updateField}
              options={getLegendStyleOptions(model)}
            />
            {model.visualizationType !== 'Warming Stripes' && model.visualizationType !== 'HeatMap' && (
              <Select
                value={model.groupBy}
                section='legend'
                fieldName='groupBy'
                initial='Select'
                label='Legend Group By:'
                updateField={updateField}
                options={model.groupByOptions}
              />
            )}
            <CheckBox
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon
                      display='question'
                      style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                    />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Choose option Shapes in Line Datapoint Symbols to display.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
              display={!model.hide && model.style === 'lines'}
              value={model.hasShape}
              section='legend'
              fieldName='hasShape'
              label='Shapes'
              updateField={updateField}
            />
            <Select
              display={!model.hide && model.style === 'gradient'}
              value={model.subStyle}
              section='legend'
              fieldName='subStyle'
              label='Gradient Style'
              updateField={updateField}
              options={getLegendSubStyleOptions(model.visualizationType)}
            />
            <TextField
              display={model.visualizationType !== 'HeatMap' && model.style === 'gradient' && !model.hide}
              className='number-narrow'
              type='number'
              value={model.tickRotation}
              section='legend'
              fieldName='tickRotation'
              label='Tick Rotation (Degrees)'
              updateField={updateField}
            />
            <CheckBox
              display={showSuppressionControls}
              value={model.hideSuppressedLabels}
              section='legend'
              fieldName='hideSuppressedLabels'
              label='Hide Suppressed Labels'
              updateField={updateField}
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
                      Hiding suppressed labels will not override the 'Special Class' assigned to line chart indicating
                      "suppressed" data in the Data Series Panel.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
            <CheckBox
              display={showSuppressionControls}
              value={model.hideSuppressionLink}
              section='legend'
              fieldName='hideSuppressionLink'
              label='Hide Suppression Definition Link'
              updateField={updateField}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon
                      display='question'
                      style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                    />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Selecting this option will hide the suppression definition link from display.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
            <Select
              display={model.supportsClicking && (model.hasDynamicCategory || model.hasMultipleSeries)}
              value={model.behavior}
              section='legend'
              fieldName='behavior'
              label='Legend Behavior (When clicked)'
              updateField={(_section, _subsection, _fieldName, value) => onBehaviorChange(value)}
              options={['highlight', 'isolate']}
            />
            <Select
              display={model.supportsColorCategory}
              value={model.colorCode}
              section='legend'
              fieldName='colorCode'
              label='Color code by category'
              initial='Select'
              updateField={updateField}
              options={model.colorCodeOptions}
            />
            {model.supportsAxisAlign && (
              <CheckBox
                value={model.axisAlign}
                fieldName='axisAlign'
                section='legend'
                label='Align to Axis on Isolate'
                updateField={updateField}
              />
            )}
            {model.behavior === 'highlight' && model.tooltipsSingleSeries && (
              <CheckBox
                value={model.highlightOnHover}
                section='legend'
                fieldName='highlightOnHover'
                label='HIGHLIGHT DATA SERIES ON HOVER'
                updateField={updateField}
              />
            )}
            {model.supportsSelectableValues && model.behavior === 'isolate' && !model.colorCodeByCategory && (
              <fieldset className='primary-fieldset edit-block' key='additional-highlight-values'>
                <label>
                  <span className='edit-label'>
                    Isolate Data Series
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>
                          You can choose data series that are shown on load. Others will be added when the user clicks
                          on them in the legend.
                        </p>
                      </Tooltip.Content>
                    </Tooltip>
                  </span>
                </label>
                {model.seriesHighlight.map((value, index) => (
                  <fieldset className='edit-block' key={`${value}-${index}`}>
                    <Button
                      className='btn btn-danger'
                      onClick={event => {
                        event.preventDefault()
                        removeIsolateValue(index)
                      }}
                    >
                      Remove
                    </Button>
                    <Select
                      value={value}
                      fieldName='seriesHighlight'
                      label='Isolate Value'
                      onChange={event => updateIsolateValue(index, event.target.value)}
                      options={model.isolateOptions}
                    />
                  </fieldset>
                ))}
                <Button
                  variant='editor-primary'
                  onClick={event => {
                    event.preventDefault()
                    addIsolateValue()
                  }}
                >
                  Add Isolate Value
                </Button>
              </fieldset>
            )}
            <CheckBox
              display={!model.hide && model.style !== 'gradient'}
              value={model.reverseLabelOrder}
              section='legend'
              fieldName='reverseLabelOrder'
              label='Reverse Labels'
              updateField={updateField}
            />
            {model.visualizationType !== 'Warming Stripes' && (
              <CheckBox
                display={!model.hide}
                value={isSide ? model.hideBorder.side : model.hideBorder.topBottom}
                section='legend'
                subsection='hideBorder'
                fieldName={isSide ? 'side' : 'topBottom'}
                label='Hide Legend Box'
                updateField={updateField}
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon
                        display='question'
                        style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                      />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>Default option for top and bottom legends is ‘No Box.’.</p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
            )}
            <CheckBox
              display={!model.hide && !isSide && model.style !== 'gradient'}
              value={model.singleRow}
              section='legend'
              fieldName='singleRow'
              label='Single Row Legend'
              updateField={updateField}
            />
            <CheckBox
              display={
                ['bottom', 'top'].includes(model.position) &&
                !model.hide &&
                model.style !== 'gradient' &&
                !model.singleRow &&
                !model.singleRow
              }
              value={model.verticalSorted}
              section='legend'
              fieldName='verticalSorted'
              label='Vertical sorted Legend'
              updateField={updateField}
            />
            {model.visualizationType !== 'Warming Stripes' && hideLegendControl}
            <TextField value={model.label} section='legend' fieldName='label' label='Title' updateField={updateField} />
            <TextField
              type='textarea'
              value={model.description}
              updateField={updateField}
              section='legend'
              fieldName='description'
              label='Legend Description'
            />
            <CheckBox
              display={model.supportsForecastConfidenceIntervalExpansion}
              value={model.expandForecastConfidenceIntervals === true}
              section='legend'
              fieldName='expandForecastConfidenceIntervals'
              label='Expand Confidence Interval Legends'
              updateField={updateField}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Show separate legend entries for each confidence interval and forecasting stage.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
            {model.visualizationType !== 'Warming Stripes' && (
              <CheckBox
                value={model.unified}
                section='legend'
                fieldName='unified'
                label='Unified Legend'
                updateField={updateField}
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        For a chart with filters, check this option if you want the legend to contain an item for every
                        series in the data set, including those that are filtered.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
            )}
          </>
        )}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default LegendSection
