import { useContext, FC } from 'react'
import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { TextField, Select } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import ConfigContext from '../../../ConfigContext'
import { useEditorPermissions } from './../useEditorPermissions.js'
import EditorPanelContext, { type EditorPanelContext as EPContext } from './EditorPanelContext'
import { CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import { PanelProps } from './PanelProps'

const PanelLegend: FC<PanelProps> = props => {
  const { config } = useContext(ConfigContext)
  const { updateField, getDataValueOptions, data } = useContext<EPContext>(EditorPanelContext)
  const { visHasLegend } = useEditorPermissions()

  return (
    visHasLegend && (
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>{props.name}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <CheckBox value={config.legend.reverseLabelOrder} section='legend' fieldName='reverseLabelOrder' label='Reverse Labels' updateField={updateField} />

          <CheckBox
            value={config.legend.hide ? true : false}
            section='legend'
            fieldName='hide'
            label='Hide Legend'
            updateField={updateField}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>With a single-series chart, consider hiding the legend to reduce visual clutter.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />

          {config.visualizationType === 'Line' && <CheckBox value={config.legend.lineMode} section='legend' fieldName='lineMode' label='Show Lined Style Legend' updateField={updateField} />}
          {config.visualizationType === 'Bar' && config.visualizationSubType === 'regular' && config.runtime.seriesKeys.length === 1 && (
            <Select value={config.legend.colorCode} section='legend' fieldName='colorCode' label='Color code by category' initial='Select' updateField={updateField} options={getDataValueOptions(data)} />
          )}
          <Select value={config.legend.behavior} section='legend' fieldName='behavior' label='Legend Behavior (When clicked)' updateField={updateField} options={['highlight', 'isolate']} />
          {config.legend.behavior === 'highlight' && config.tooltips.singleSeries && <CheckBox value={config.legend.highlightOnHover} section='legend' fieldName='highlightOnHover' label='HIGHLIGHT DATA SERIES ON HOVER' updateField={updateField} />}
          <TextField value={config.legend.label} section='legend' fieldName='label' label='Title' updateField={updateField} />
          <Select value={config.legend.position} section='legend' fieldName='position' label='Position' updateField={updateField} options={['right', 'left', 'bottom']} />
          {config.legend.position === 'bottom' && (
            <>
              <CheckBox value={config.legend.singleRow} section='legend' fieldName='singleRow' label='Single Row Legend' updateField={updateField} />
              <CheckBox value={config.legend.verticalSorted} section='legend' fieldName='verticalSorted' label='Vertical sorted Legend' updateField={updateField} />
            </>
          )}
          <TextField type='textarea' value={config.legend.description} updateField={updateField} section='legend' fieldName='description' label='Legend Description' />
        </AccordionItemPanel>
      </AccordionItem>
    )
  )
}

export default PanelLegend
