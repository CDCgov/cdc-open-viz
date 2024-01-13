import { FC, useContext } from 'react'
import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import ConfigContext from '../../../ConfigContext'
import EditorPanelContext, { type EditorPanelContext as EPContext } from './EditorPanelContext'
import { CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import useRightAxis from '../../../hooks/useRightAxis'
import { PanelProps } from './PanelProps'

const PanelRightAxis: FC<PanelProps> = props => {
  const { config, updateConfig } = useContext(ConfigContext)
  const { updateField, warningMsg } = useContext<EPContext>(EditorPanelContext)
  const { hasRightAxis } = useRightAxis({ config: config, yMax: config.yAxis.size, data: config.data, updateConfig })

  return (
    hasRightAxis && (
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>{props.name}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <TextField value={config.yAxis.rightLabel} section='yAxis' fieldName='rightLabel' label='Label' updateField={updateField} />
          <TextField value={config.yAxis.rightNumTicks} placeholder='Auto' type='number' section='yAxis' fieldName='rightNumTicks' label='Number of ticks' className='number-narrow' updateField={updateField} />
          <TextField value={config.yAxis.rightAxisSize} type='number' section='yAxis' fieldName='rightAxisSize' label='Size (Width)' className='number-narrow' updateField={updateField} />
          <TextField value={config.yAxis.rightLabelOffsetSize} type='number' section='yAxis' fieldName='rightLabelOffsetSize' label='Label Offset' className='number-narrow' updateField={updateField} />
          <span className='divider-heading'>Number Formatting</span>
          <CheckBox value={config.dataFormat.rightCommas} section='dataFormat' fieldName='rightCommas' label='Add commas' updateField={updateField} />
          <TextField value={config.dataFormat.rightRoundTo} type='number' section='dataFormat' fieldName='rightRoundTo' label='Round to decimal point' className='number-narrow' updateField={updateField} min={0} />
          <div className='two-col-inputs'>
            <TextField
              value={config.dataFormat.rightPrefix}
              section='dataFormat'
              fieldName='rightPrefix'
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
              value={config.dataFormat.rightSuffix}
              section='dataFormat'
              fieldName='rightSuffix'
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
          <CheckBox value={config.yAxis.rightHideAxis} section='yAxis' fieldName='rightHideAxis' label='Hide Axis' updateField={updateField} />
          <CheckBox value={config.yAxis.rightHideLabel} section='yAxis' fieldName='rightHideLabel' label='Hide Label' updateField={updateField} />
          <CheckBox value={config.yAxis.rightHideTicks} section='yAxis' fieldName='rightHideTicks' label='Hide Ticks' updateField={updateField} />
          <TextField value={config.yAxis.max} section='yAxis' fieldName='rightMax' type='number' label='right axis max value' placeholder='Auto' updateField={updateField} />
          <span style={{ color: 'red', display: 'block' }}>{warningMsg.rightMaxMessage}</span>
          <TextField value={config.yAxis.min} section='yAxis' fieldName='rightMin' type='number' label='right axis min value' placeholder='Auto' updateField={updateField} />
          <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
        </AccordionItemPanel>
      </AccordionItem>
    )
  )
}

export default PanelRightAxis
