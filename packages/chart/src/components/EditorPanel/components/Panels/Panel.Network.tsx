import { useContext, FC } from 'react'
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'

import ConfigContext from '../../../../ConfigContext'
import type { ChartContext } from '../../../../types/ChartContext'
import { useEditorPanelContext } from '../../EditorPanelContext'
import { type PanelProps } from '../PanelProps'
import WarningImage from '../../../../images/warning.svg'
import './Panel.Network.css'

const NetworkSettings: FC<PanelProps> = ({ name }) => {
  const { config, updateConfig } = useContext<ChartContext>(ConfigContext)
  const { getColumns } = useEditorPanelContext()

  if (config.visualizationType !== 'Network') return null

  const network = config.network || ({} as NonNullable<typeof config.network>)
  const columns = network.columns || {
    source: '',
    target: '',
    weight: '',
    style: '',
    nodeColor: ''
  }
  const columnOptions = getColumns?.(false) || []
  const isMissingColumn = (column: unknown) =>
    !column || (columnOptions.length > 0 && !columnOptions.includes(String(column)))

  const updateColumn = (_section: string, _subsection: string, fieldName: string, value: string) => {
    updateConfig?.({
      ...config,
      network: { ...network, columns: { ...columns, [fieldName]: value } }
    })
  }

  const updateNetworkField = (_section: string, _subsection: string, fieldName: string, value: string | boolean) => {
    const numericFields = ['height', 'nodeRadius', 'linkDistance', 'chargeStrength']
    let nextValue: string | boolean | number = numericFields.includes(fieldName) ? Number(value) : value
    if (fieldName === 'chargeStrength') nextValue = Math.min(0, Number(nextValue))
    updateConfig?.({ ...config, network: { ...network, [fieldName]: nextValue } })
  }

  const updateTooltips = (_section: string, _subsection: string, _fieldName: string, value: boolean) => {
    updateConfig?.({ ...config, enableTooltips: value })
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton data-required-field-section='network-columns'>
          {name}
          {(isMissingColumn(columns.source) || isMissingColumn(columns.target)) && (
            <WarningImage width='25' className='warning-icon' />
          )}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Select
          value={columns.source || ''}
          section='network'
          subsection='columns'
          fieldName='source'
          label='Source Column'
          data-required-field-control='network-source'
          initial='Select'
          required
          updateField={updateColumn}
          options={columnOptions}
        />
        <Select
          value={columns.target || ''}
          section='network'
          subsection='columns'
          fieldName='target'
          label='Target Column'
          data-required-field-control='network-target'
          initial='Select'
          required
          updateField={updateColumn}
          options={columnOptions}
        />
        <Select
          value={columns.weight || ''}
          section='network'
          subsection='columns'
          fieldName='weight'
          label='Weight Column (Optional)'
          initial='None'
          updateField={updateColumn}
          options={columnOptions}
        />
        <Select
          value={columns.style || ''}
          section='network'
          subsection='columns'
          fieldName='style'
          label='Link Style Column (Optional)'
          initial='None'
          updateField={updateColumn}
          options={columnOptions}
        />
        <Select
          value={columns.nodeColor || ''}
          section='network'
          subsection='columns'
          fieldName='nodeColor'
          label='Node Color Column (Optional)'
          initial='None'
          updateField={updateColumn}
          options={columnOptions}
        />
        <CheckBox
          value={Boolean(network.directed)}
          fieldName='directed'
          label='Directed Network'
          updateField={updateNetworkField}
        />
        <CheckBox
          value={network.showLabels !== false}
          fieldName='showLabels'
          label='Show Node Labels'
          updateField={updateNetworkField}
        />
        <CheckBox
          value={Boolean(config.enableTooltips)}
          fieldName='enableTooltips'
          label='Show Tooltips'
          updateField={updateTooltips}
        />
        <TextField
          value={network.height ?? 500}
          type='number'
          section='network'
          fieldName='height'
          label='Height'
          min={160}
          updateField={updateNetworkField}
        />
        <TextField
          value={network.nodeRadius ?? 8}
          type='number'
          section='network'
          fieldName='nodeRadius'
          label='Node Radius'
          min={2}
          updateField={updateNetworkField}
        />
        <label className='network-settings__range'>
          <span className='edit-label column-heading'>
            Link Distance: <output>{network.linkDistance ?? 90}</output>
          </span>
          <input
            type='range'
            aria-label='Link Distance'
            min={20}
            max={300}
            step={5}
            value={network.linkDistance ?? 90}
            onChange={event => updateNetworkField('network', '', 'linkDistance', event.target.value)}
          />
        </label>
        <label className='network-settings__range'>
          <span className='edit-label column-heading'>
            Repulsion Strength: <output>{network.chargeStrength ?? -240}</output>
          </span>
          <input
            type='range'
            aria-label='Repulsion Strength'
            min={-1000}
            max={0}
            step={10}
            value={network.chargeStrength ?? -240}
            onChange={event => updateNetworkField('network', '', 'chargeStrength', event.target.value)}
          />
        </label>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default NetworkSettings
