import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import {
  type ValueAxisInputUpdate,
  type ValueAxisYAxisField,
  useValueAxisControlsContext
} from './ValueAxisControlsContext'

const HeatMapValueAxisControls = () => {
  const { model, onLegacyYAxisChange } = useValueAxisControlsContext()
  if (model.visualizationType !== 'HeatMap') return null

  const updateYAxis: ValueAxisInputUpdate<ValueAxisYAxisField> = (_section, _subsection, field, value) =>
    onLegacyYAxisChange(field, value)
  const yAxis = model.yAxis

  return (
    <>
      <TextField
        value={yAxis.label as string}
        section='yAxis'
        fieldName='label'
        label='Label'
        updateField={updateYAxis}
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
      <Select
        value={(yAxis.titlePlacement as string) || 'side'}
        section='yAxis'
        fieldName='titlePlacement'
        label='Label Placement'
        updateField={updateYAxis}
        options={[
          { value: 'side', label: 'Side' },
          { value: 'top', label: 'Top' }
        ]}
      />
      <TextField
        value={yAxis.size as string | number}
        type='number'
        section='yAxis'
        fieldName='size'
        label='Size (Width)'
        className='number-narrow'
        updateField={updateYAxis}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon
                display='question'
                style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
              />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Increase the size if month labels are crowded or overlap the chart area.</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <CheckBox
        value={yAxis.hideAxis as boolean}
        section='yAxis'
        fieldName='hideAxis'
        label='Hide Axis'
        updateField={updateYAxis}
      />
      <CheckBox
        value={yAxis.hideTicks as boolean}
        section='yAxis'
        fieldName='hideTicks'
        label='Hide Ticks'
        updateField={updateYAxis}
      />
      <TextField
        value={(yAxis.tickRotation as string | number) || 0}
        type='number'
        min={0}
        section='yAxis'
        fieldName='tickRotation'
        label='Tick rotation (Degrees)'
        className='number-narrow'
        updateField={updateYAxis}
      />
    </>
  )
}

export default HeatMapValueAxisControls
