import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import {
  type ValueAxisInputUpdate,
  type ValueAxisRootField,
  type ValueAxisXAxisField,
  type ValueAxisYAxisField,
  useValueAxisControlsContext
} from './ValueAxisControlsContext'

const StandardValueAxisControls = () => {
  const { model, onAxisTypeChange, onCurrentYAxisChange, onLegacyXAxisChange, onLegacyYAxisChange, onRootChange } =
    useValueAxisControlsContext()
  if (model.isBarRace || model.visualizationType === 'HeatMap') return null

  const updateLegacyYAxis: ValueAxisInputUpdate<ValueAxisYAxisField> = (_section, _subsection, field, value) =>
    onLegacyYAxisChange(field, value)
  const updateCurrentYAxis: ValueAxisInputUpdate<'titlePlacement' | 'inlineLabel'> = (
    _section,
    _subsection,
    field,
    value
  ) => onCurrentYAxisChange(field, value)
  const updateXAxis: ValueAxisInputUpdate<ValueAxisXAxisField> = (_section, _subsection, field, value) =>
    onLegacyXAxisChange(field, value)
  const updateRoot: ValueAxisInputUpdate<ValueAxisRootField> = (_section, _subsection, field, value) =>
    onRootChange(field, value)
  const yAxis = model.yAxis
  const xAxis = model.xAxis
  const horizontal = model.orientation === 'horizontal'
  const axisType =
    yAxis.type === 'categorical' &&
    (yAxis.categoryMode === 'data-driven' || (yAxis.categoryMode === undefined && yAxis.dataDrivenCategories))
      ? 'categorical-data-driven'
      : (yAxis.type as string)

  return (
    <>
      <Select
        label='Axis Type'
        value={axisType}
        options={[
          { value: 'linear', label: 'Numeric (Linear Scale)' },
          ...(model.visualizationSubType !== 'stacked'
            ? [{ value: 'logarithmic', label: 'Numeric (Logarithmic Scale)' }]
            : []),
          ...(!horizontal
            ? [
                { value: 'categorical', label: 'Categorical' },
                { value: 'categorical-data-driven', label: 'Categorical (Data-Driven)' }
              ]
            : [])
        ]}
        section='yAxis'
        fieldName='type'
        updateField={(_section, _subsection, _fieldName, value) => onAxisTypeChange(value)}
        tooltip={
          <Tooltip style={{ textTransform: 'none', display: 'inline-block' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              Select a numeric scale, 'Categorical' for manually sized categories, or 'Categorical (Data-Driven)' to
              size categories from threshold columns in the current data.
            </Tooltip.Content>
          </Tooltip>
        }
      />
      {model.categoricalAxisEditor}

      <TextField
        display={!model.hasCategoricalAxis}
        value={yAxis.label as string}
        section='yAxis'
        fieldName='label'
        label='Label'
        updateField={updateLegacyYAxis}
        maxLength={horizontal || yAxis.titlePlacement === 'side' ? 35 : undefined}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>{horizontal ? '35 character limit' : '35 character limit when Label Placement is Side'}</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <Select
        display={!horizontal && !model.hasCategoricalAxis}
        value={yAxis.titlePlacement as string}
        section='yAxis'
        fieldName='titlePlacement'
        label='Label Placement'
        updateField={updateCurrentYAxis}
        options={[
          { value: 'side', label: 'Side' },
          { value: 'top', label: 'Top' }
        ]}
      />
      <TextField
        display={!model.hasCategoricalAxis}
        value={yAxis.inlineLabel as string}
        section='yAxis'
        fieldName='inlineLabel'
        label='Inline Label'
        updateField={updateCurrentYAxis}
        maxLength={35}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>35 character limit</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      {model.seriesCount === 1 && !['Box Plot', 'Deviation Bar', 'Forest Plot'].includes(model.visualizationType) && (
        <CheckBox
          value={model.root.isLegendValue as boolean}
          fieldName='isLegendValue'
          label='Use Legend Value in Hover'
          updateField={updateRoot}
        />
      )}
      <TextField
        display={!model.hasCategoricalAxis}
        value={yAxis.numTicks as string | number}
        placeholder='Auto'
        type='number'
        section='yAxis'
        fieldName='numTicks'
        label='Number of ticks'
        className='number-narrow'
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
                Apporoximate number of ticks. Other factors such as space available and data may change the exact number
                of ticks used.
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
        updateField={updateLegacyYAxis}
      />
      {horizontal && (
        <CheckBox
          value={model.root.isResponsiveTicks as boolean}
          fieldName='isResponsiveTicks'
          label='Use Responsive Ticks'
          updateField={updateRoot}
        />
      )}
      {(model.orientation === 'vertical' || !model.root.isResponsiveTicks) && (
        <TextField
          display={!model.hasCategoricalAxis}
          value={(yAxis.tickRotation as string | number) || 0}
          type='number'
          min={0}
          section='yAxis'
          fieldName='tickRotation'
          label='Tick rotation (Degrees)'
          className='number-narrow'
          updateField={updateLegacyYAxis}
        />
      )}
      {model.root.isResponsiveTicks && horizontal && (
        <TextField
          value={xAxis.maxTickRotation as string | number}
          type='number'
          min={0}
          section='xAxis'
          fieldName='maxTickRotation'
          label='Max Tick Rotation'
          className='number-narrow'
          updateField={updateXAxis}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon
                  display='question'
                  style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Degrees ticks will be rotated if values overlap, especially in smaller viewports.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}
      {model.permissions.gridLines && (
        <CheckBox
          value={yAxis.gridLines as boolean}
          section='yAxis'
          fieldName='gridLines'
          label='Show Gridlines'
          updateField={updateLegacyYAxis}
        />
      )}
      {model.permissions.gridLines && (
        <CheckBox
          value={yAxis.labelsAboveGridlines as boolean}
          section='yAxis'
          fieldName='labelsAboveGridlines'
          label='Tick labels above gridlines'
          updateField={updateLegacyYAxis}
          disabled={!yAxis.gridLines}
          title={!yAxis.gridLines ? 'Show gridlines to enable' : ''}
        />
      )}
    </>
  )
}

export default StandardValueAxisControls
