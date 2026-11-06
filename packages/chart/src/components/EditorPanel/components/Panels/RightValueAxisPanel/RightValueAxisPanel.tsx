import { type ReactNode } from 'react'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import PanelHeader from '@cdc/core/components/panels/PanelHeader'
import PanelSection from '@cdc/core/components/panels/PanelSection'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import type { ChartConfig } from '../../../../../types/ChartConfig'
import AxisAnchorEditor from '../ValueAxisPanel/AxisAnchorEditor'

export type RightYAxisField =
  | 'rightLabel'
  | 'rightNumTicks'
  | 'rightHideAxis'
  | 'rightHideLabel'
  | 'rightHideTicks'
  | 'rightMax'
  | 'rightMin'
  | 'smallestRightAxisMax'

export type RightDataFormatField = 'rightCommas' | 'rightRoundTo' | 'rightPrefix' | 'rightSuffix'

export type RightValueAxisModel = {
  rightLabel?: string
  rightTitlePlacement?: 'side' | 'top'
  rightNumTicks?: number | string
  rightHideAxis?: boolean
  rightHideLabel?: boolean
  rightHideTicks?: boolean
  rightMax?: string
  rightMin?: string
  smallestRightAxisMax?: number | string
  rightCommas?: boolean
  rightRoundTo?: number
  rightPrefix?: string
  rightSuffix?: string
  rightMaxMessage?: string
  rightMinMessage?: string
}

type RightValueAxisSectionProps = {
  model: RightValueAxisModel
  anchorEditor?: ReactNode
  anchorConfig?: {
    config: ChartConfig
    lineOptions: { value: string; label?: string }[]
    updateConfig: Function
  }
  onYAxisChange: (field: RightYAxisField, value: unknown) => void
  onDataFormatChange: (field: RightDataFormatField, value: unknown) => void
  onTitlePlacementChange: (value: 'side' | 'top') => void
}

const RightValueAxisSection = ({
  model,
  anchorEditor,
  anchorConfig,
  onYAxisChange,
  onDataFormatChange,
  onTitlePlacementChange
}: RightValueAxisSectionProps) => {
  const updateYAxisField = (_section, _subsection, fieldName: RightYAxisField, value) => onYAxisChange(fieldName, value)
  const updateDataFormatField = (_section, _subsection, fieldName: RightDataFormatField, value) =>
    onDataFormatChange(fieldName, value)

  return (
    <PanelSection title='Right Value Axis'>
      <TextField
        value={model.rightLabel}
        section='yAxis'
        fieldName='rightLabel'
        label='Label'
        updateField={updateYAxisField}
        maxLength={model.rightTitlePlacement === 'side' ? 35 : undefined}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>35 character limit when Label Placement is Side</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <Select
        value={model.rightTitlePlacement || 'top'}
        section='yAxis'
        fieldName='rightTitlePlacement'
        label='Label Placement'
        updateField={(_section, _subsection, _fieldName, value) => onTitlePlacementChange(value)}
        options={[
          { value: 'side', label: 'Side' },
          { value: 'top', label: 'Top' }
        ]}
      />
      <TextField
        value={model.rightNumTicks}
        placeholder='Auto'
        type='number'
        section='yAxis'
        fieldName='rightNumTicks'
        label='Number of ticks'
        className='number-narrow'
        updateField={updateYAxisField}
      />

      <PanelHeader>Number Formatting</PanelHeader>
      <CheckBox
        value={model.rightCommas}
        section='dataFormat'
        fieldName='rightCommas'
        label='Add commas'
        updateField={updateDataFormatField}
      />
      <TextField
        value={model.rightRoundTo}
        type='number'
        section='dataFormat'
        fieldName='rightRoundTo'
        label='Round to decimal point'
        className='number-narrow'
        updateField={updateDataFormatField}
        min={0}
      />
      <div className='two-col-inputs'>
        <TextField
          value={model.rightPrefix}
          section='dataFormat'
          fieldName='rightPrefix'
          label='Prefix'
          updateField={updateDataFormatField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Enter a data prefix (such as "$"), if applicable.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
        <TextField
          value={model.rightSuffix}
          section='dataFormat'
          fieldName='rightSuffix'
          label='Suffix'
          updateField={updateDataFormatField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Enter a data suffix (such as "%"), if applicable.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      </div>

      <CheckBox
        value={model.rightHideAxis}
        section='yAxis'
        fieldName='rightHideAxis'
        label='Hide Axis'
        updateField={updateYAxisField}
      />
      <CheckBox
        value={model.rightHideLabel}
        section='yAxis'
        fieldName='rightHideLabel'
        label='Hide Tick Labels'
        updateField={updateYAxisField}
      />
      <CheckBox
        value={model.rightHideTicks}
        section='yAxis'
        fieldName='rightHideTicks'
        label='Hide Ticks'
        updateField={updateYAxisField}
      />

      <div className='axis-domain-group'>
        <span className='axis-domain-group__title'>Right Axis Domain</span>
        <div className='axis-domain-group__row'>
          <div className='axis-domain-group__field'>
            <TextField
              value={model.rightMax}
              section='yAxis'
              fieldName='rightMax'
              type='number'
              label='axis max value'
              placeholder='Auto'
              className='axis-domain-number'
              updateField={updateYAxisField}
            />
            <span className='axis-domain-warning'>{model.rightMaxMessage}</span>
          </div>
          <div className='axis-domain-group__field'>
            <TextField
              value={model.rightMin}
              section='yAxis'
              fieldName='rightMin'
              type='number'
              label='axis min value'
              placeholder='Auto'
              className='axis-domain-number'
              updateField={updateYAxisField}
            />
            <span className='axis-domain-warning'>{model.rightMinMessage}</span>
          </div>
        </div>
        <TextField
          value={model.smallestRightAxisMax}
          section='yAxis'
          fieldName='smallestRightAxisMax'
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
                  Example: If your data only goes up to 1, the axis might show 0, 0.2, 0.4, 0.6, 0.8, 1. Setting this to
                  5 would make the axis show 0, 1, 2, 3, 4, 5 instead.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
          updateField={updateYAxisField}
        />
      </div>
      {anchorEditor ||
        (anchorConfig && (
          <AxisAnchorEditor
            axisKey='yAxis'
            anchorField='rightAnchors'
            config={anchorConfig.config}
            lineOptions={anchorConfig.lineOptions}
            updateConfig={anchorConfig.updateConfig}
          />
        ))}
    </PanelSection>
  )
}

export default RightValueAxisSection
