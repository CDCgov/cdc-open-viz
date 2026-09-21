import { useContext, type FC } from 'react'
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'

import ConfigContext from '../../../../ConfigContext'
import type { ChartContext } from '../../../../types/ChartContext'
import { useEditorPanelContext } from '../../EditorPanelContext'
import type { PanelProps } from '../PanelProps'
import './Panel.Dendrogram.css'

const DendrogramSettings: FC<PanelProps> = ({ name }) => {
  const { config, updateConfig } = useContext<ChartContext>(ConfigContext)
  const { getColumns } = useEditorPanelContext()

  if (config.visualizationType !== 'Dendrogram') return null

  const dendrogram = config.dendrogram || ({} as NonNullable<typeof config.dendrogram>)
  const columns = dendrogram.columns || { node: '', parent: '', style: '', nodeColor: '' }
  const columnOptions = getColumns?.(false) || []

  const updateColumn = (_section: string, _subsection: string, fieldName: string, value: string) => {
    updateConfig?.({
      ...config,
      dendrogram: { ...dendrogram, columns: { ...columns, [fieldName]: value } }
    })
  }

  const updateDendrogramField = (_section: string, _subsection: string, fieldName: string, value: string | boolean) => {
    const numericFields = ['height', 'nodeRadius', 'leafSpacing', 'depthSpacing']
    const numericDefaults: Record<string, number> = { height: 500, nodeRadius: 6, leafSpacing: 40, depthSpacing: 140 }
    updateConfig?.({
      ...config,
      dendrogram: {
        ...dendrogram,
        [fieldName]: numericFields.includes(fieldName)
          ? value === ''
            ? numericDefaults[fieldName]
            : Number(value)
          : value
      }
    })
  }

  const updateTooltips = (_section: string, _subsection: string, _fieldName: string, value: boolean) => {
    updateConfig?.({ ...config, enableTooltips: value })
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{name}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Select
          value={columns.node || ''}
          section='dendrogram'
          subsection='columns'
          fieldName='node'
          label='Node ID Column'
          initial='Select'
          required
          updateField={updateColumn}
          options={columnOptions}
        />
        <Select
          value={columns.parent || ''}
          section='dendrogram'
          subsection='columns'
          fieldName='parent'
          label='Parent ID Column'
          initial='Select'
          required
          updateField={updateColumn}
          options={columnOptions}
        />
        <Select
          value={columns.style || ''}
          section='dendrogram'
          subsection='columns'
          fieldName='style'
          label='Link Style Column (Optional)'
          initial='None'
          updateField={updateColumn}
          options={columnOptions}
        />
        <Select
          value={columns.nodeColor || ''}
          section='dendrogram'
          subsection='columns'
          fieldName='nodeColor'
          label='Node Color Column (Optional)'
          initial='None'
          updateField={updateColumn}
          options={columnOptions}
        />
        <Select
          value={dendrogram.orientation || 'horizontal'}
          section='dendrogram'
          fieldName='orientation'
          label='Orientation'
          updateField={updateDendrogramField}
          options={[
            { value: 'horizontal', label: 'Horizontal' },
            { value: 'vertical', label: 'Vertical' }
          ]}
        />
        <Select
          value={['left', 'center', 'right'].includes(dendrogram.alignment) ? dendrogram.alignment : 'left'}
          section='dendrogram'
          fieldName='alignment'
          label='Horizontal Alignment'
          updateField={updateDendrogramField}
          options={[
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
            { value: 'right', label: 'Right' }
          ]}
        />
        <Select
          value={
            ['top', 'center', 'bottom'].includes(dendrogram.verticalAlignment) ? dendrogram.verticalAlignment : 'top'
          }
          section='dendrogram'
          fieldName='verticalAlignment'
          label='Vertical Alignment'
          updateField={updateDendrogramField}
          options={[
            { value: 'top', label: 'Top' },
            { value: 'center', label: 'Center' },
            { value: 'bottom', label: 'Bottom' }
          ]}
        />
        <CheckBox
          value={dendrogram.showLabels !== false}
          fieldName='showLabels'
          label='Show Node Labels'
          updateField={updateDendrogramField}
        />
        <CheckBox
          value={Boolean(config.enableTooltips)}
          fieldName='enableTooltips'
          label='Show Tooltips'
          updateField={updateTooltips}
        />
        <TextField
          value={dendrogram.height ?? 500}
          type='number'
          section='dendrogram'
          fieldName='height'
          label='Height'
          min={160}
          updateField={updateDendrogramField}
        />
        <TextField
          value={dendrogram.nodeRadius ?? 6}
          type='number'
          section='dendrogram'
          fieldName='nodeRadius'
          label='Node Radius'
          min={2}
          updateField={updateDendrogramField}
        />
        <label className='dendrogram-settings__range'>
          <span className='edit-label column-heading'>
            Leaf Spacing: <output>{dendrogram.leafSpacing ?? 40}</output>
          </span>
          <input
            type='range'
            aria-label='Leaf Spacing'
            min={20}
            max={120}
            step={5}
            value={dendrogram.leafSpacing ?? 40}
            onChange={event => updateDendrogramField('dendrogram', '', 'leafSpacing', event.target.value)}
          />
        </label>
        <label className='dendrogram-settings__range'>
          <span className='edit-label column-heading'>
            Depth Spacing: <output>{dendrogram.depthSpacing ?? 140}</output>
          </span>
          <input
            type='range'
            aria-label='Depth Spacing'
            min={60}
            max={300}
            step={10}
            value={dendrogram.depthSpacing ?? 140}
            onChange={event => updateDendrogramField('dendrogram', '', 'depthSpacing', event.target.value)}
          />
        </label>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default DendrogramSettings
