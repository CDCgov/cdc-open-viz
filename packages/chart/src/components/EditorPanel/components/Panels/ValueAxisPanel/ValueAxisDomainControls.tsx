import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import {
  type ValueAxisInputUpdate,
  type ValueAxisXAxisField,
  type ValueAxisYAxisField,
  useValueAxisControlsContext
} from './ValueAxisControlsContext'

const SmallestAxisMaximum = ({ updateYAxis }: { updateYAxis: ValueAxisInputUpdate<ValueAxisYAxisField> }) => {
  const { model } = useValueAxisControlsContext()
  return (
    <TextField
      value={model.yAxis.smallestLeftAxisMax as string | number}
      section='yAxis'
      fieldName='smallestLeftAxisMax'
      type='number'
      label='Smallest axis maximum'
      placeholder='Auto'
      className='axis-domain-number'
      tooltip={
        <Tooltip style={{ textTransform: 'none' }}>
          <Tooltip.Target>
            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
          </Tooltip.Target>
          <Tooltip.Content>
            <p>
              Example: If your data only goes up to 1, the axis might show 0, 0.2, 0.4, 0.6, 0.8, 1. Setting this to 5
              would make the axis show 0, 1, 2, 3, 4, 5 instead.
            </p>
          </Tooltip.Content>
        </Tooltip>
      }
      updateField={updateYAxis}
    />
  )
}

const DomainStrategies = ({ updateYAxis }: { updateYAxis: ValueAxisInputUpdate<ValueAxisYAxisField> }) => {
  const { model } = useValueAxisControlsContext()
  const combo = model.visualizationType === 'Combo'
  return (
    <>
      {model.permissions.autoMaxStrategy && (
        <Select
          value={(model.yAxis.autoMaxStrategy as string) || 'default'}
          section='yAxis'
          fieldName='autoMaxStrategy'
          label='Automatic max strategy'
          updateField={updateYAxis}
          options={[
            { value: 'default', label: 'Default' },
            { value: 'clean-top-tick', label: 'Clean top tick' }
          ]}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                {combo ? (
                  <p>
                    Clean top tick rounds automatic left and right axis maximums up to cleaner tick steps before axis
                    padding is applied.
                  </p>
                ) : (
                  <p>
                    Clean top tick rounds the automatic value axis maximum up to a cleaner tick step before axis padding
                    is applied.
                  </p>
                )}
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}
      {model.permissions.filterDomainBehavior && (
        <Select
          value={(model.yAxis.filterDomainBehavior as string) || 'dynamic'}
          section='yAxis'
          fieldName='filterDomainBehavior'
          label='Filter Domain Behavior'
          updateField={updateYAxis}
          options={[
            { value: 'dynamic', label: 'Dynamic' },
            { value: 'stable', label: 'Stable' }
          ]}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                {combo ? (
                  <p>
                    Dynamic rescales the value axes to the currently filtered data. Stable keeps the left and right axes
                    based on the full eligible dataset while still rendering filtered rows.
                  </p>
                ) : (
                  <p>
                    Dynamic rescales the value axis to the currently filtered data. Stable keeps the value axis based on
                    the full eligible dataset while still rendering filtered rows.
                  </p>
                )}
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}
    </>
  )
}

const ValueAxisDomainControls = () => {
  const { model, onLegacyXAxisChange, onLegacyYAxisChange } = useValueAxisControlsContext()
  if (model.isBarRace || model.visualizationType === 'HeatMap') return null

  const updateYAxis: ValueAxisInputUpdate<ValueAxisYAxisField> = (_section, _subsection, field, value) =>
    onLegacyYAxisChange(field, value)
  const updateXAxis: ValueAxisInputUpdate<ValueAxisXAxisField> = (_section, _subsection, field, value) =>
    onLegacyXAxisChange(field, value)
  const yAxis = model.yAxis
  const xAxis = model.xAxis

  if (model.orientation === 'horizontal') {
    return (
      <>
        {model.permissions.axisLine && (
          <CheckBox
            value={xAxis.hideAxis as boolean}
            section='xAxis'
            fieldName='hideAxis'
            label='Hide Axis'
            updateField={updateXAxis}
          />
        )}
        {model.permissions.axisLabels && (
          <CheckBox
            value={xAxis.hideLabel as boolean}
            section='xAxis'
            fieldName='hideLabel'
            label='Hide Tick Labels'
            updateField={updateXAxis}
          />
        )}
        {model.permissions.axisTicks && (
          <CheckBox
            value={xAxis.hideTicks as boolean}
            section='xAxis'
            fieldName='hideTicks'
            label='Hide Ticks'
            updateField={updateXAxis}
          />
        )}
        <div className='axis-domain-group'>
          <span className='axis-domain-group__title'>Value Axis Domain</span>
          <div className='axis-domain-group__row'>
            {model.permissions.axisMax && (
              <div className='axis-domain-group__field'>
                <TextField
                  value={xAxis.max as string | number}
                  section='xAxis'
                  fieldName='max'
                  label='axis max value'
                  type='number'
                  placeholder='Auto'
                  className='axis-domain-number'
                  updateField={updateXAxis}
                />
                <span className='axis-domain-warning'>{model.warnings.max}</span>
              </div>
            )}
            {model.permissions.axisMin && (
              <div className='axis-domain-group__field'>
                <TextField
                  value={xAxis.min as string | number}
                  section='xAxis'
                  fieldName='min'
                  type='number'
                  label='axis min value'
                  placeholder='Auto'
                  className='axis-domain-number'
                  updateField={updateXAxis}
                />
                <span className='axis-domain-warning'>{model.warnings.min}</span>
              </div>
            )}
          </div>
          {model.visualizationType === 'Deviation Bar' && (
            <TextField
              value={xAxis.target as string | number}
              section='xAxis'
              fieldName='target'
              type='number'
              label='Deviation point'
              placeholder='Auto'
              className='axis-domain-number'
              updateField={updateXAxis}
            />
          )}
          <SmallestAxisMaximum updateYAxis={updateYAxis} />
          <DomainStrategies updateYAxis={updateYAxis} />
        </div>
        {model.visualizationType === 'Deviation Bar' && (
          <>
            <TextField
              value={(xAxis.targetLabel as string) || 'Target'}
              section='xAxis'
              fieldName='targetLabel'
              type='text'
              label='Deviation point Label'
              updateField={updateXAxis}
            />
            <CheckBox
              value={xAxis.showTargetLabel as boolean}
              section='xAxis'
              fieldName='showTargetLabel'
              label='Show Deviation point label'
              updateField={updateXAxis}
            />
          </>
        )}
      </>
    )
  }

  return (
    <>
      <CheckBox
        value={yAxis.hideAxis as boolean}
        section='yAxis'
        fieldName='hideAxis'
        label='Hide Axis'
        updateField={updateYAxis}
      />
      <CheckBox
        display={!model.hasCategoricalAxis}
        value={yAxis.hideLabel as boolean}
        section='yAxis'
        fieldName='hideLabel'
        label='Hide Tick Labels'
        updateField={updateYAxis}
      />
      <CheckBox
        display={!model.hasCategoricalAxis}
        value={yAxis.hideTicks as boolean}
        section='yAxis'
        fieldName='hideTicks'
        label='Hide Ticks'
        updateField={updateYAxis}
      />
      <div className='axis-domain-group'>
        <span className='axis-domain-group__title'>Value Axis Domain</span>
        <div className='axis-domain-group__row'>
          <div className='axis-domain-group__field'>
            <TextField
              value={yAxis.max as string | number}
              section='yAxis'
              fieldName='max'
              type='number'
              label='axis max value'
              placeholder='Auto'
              className='axis-domain-number'
              updateField={updateYAxis}
            />
            <span className='axis-domain-warning'>{model.warnings.max}</span>
          </div>
          {model.visualizationType !== 'Area Chart' && model.visualizationSubType !== 'stacked' && (
            <div className='axis-domain-group__field'>
              <TextField
                value={yAxis.min as string | number}
                section='yAxis'
                fieldName='min'
                type='number'
                label='axis min value'
                placeholder='Auto'
                className='axis-domain-number'
                updateField={updateYAxis}
              />
              <span className='axis-domain-warning'>{model.warnings.min}</span>
            </div>
          )}
        </div>
        <SmallestAxisMaximum updateYAxis={updateYAxis} />
        <DomainStrategies updateYAxis={updateYAxis} />
        {model.permissions.yPadding && (
          <CheckBox
            value={yAxis.enablePadding as boolean}
            section='yAxis'
            fieldName='enablePadding'
            label='Add Padding to Value Axis Scale'
            updateField={updateYAxis}
          />
        )}
        {yAxis.enablePadding && model.permissions.yPadding && (
          <TextField
            type='number'
            section='yAxis'
            fieldName='scalePadding'
            label='Padding Percentage'
            className='axis-domain-number'
            updateField={updateYAxis}
            value={yAxis.scalePadding as string | number}
          />
        )}
      </div>
    </>
  )
}

export default ValueAxisDomainControls
