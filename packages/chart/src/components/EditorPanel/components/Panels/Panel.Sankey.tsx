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

const SankeySettings: FC<PanelProps> = ({ name }) => {
  const { config, updateConfig } = useContext<ChartContext>(ConfigContext)
  const { getColumns } = useEditorPanelContext()

  if (config.visualizationType !== 'Sankey') return null

  const columnOptions = getColumns?.(false) || []
  const selectedColumns = config.sankey?.columns || {}

  const updateSankeyColumn = (_section: string, _subsection: string, fieldName: string, value: string) => {
    updateConfig?.({
      ...config,
      sankey: {
        ...config.sankey,
        columns: {
          ...selectedColumns,
          [fieldName]: value
        }
      }
    })
  }

  const updateEnableTooltips = (_section: string, _subsection: string, _fieldName: string, value: boolean) => {
    updateConfig?.({
      ...config,
      enableTooltips: value
    })
  }

  const updateHorizontalScrollWidth = (_section: string, _subsection: string, _fieldName: string, value: string) => {
    const nextSankey = { ...config.sankey }
    const width = Number(value)

    if (value.trim() === '' || !Number.isFinite(width) || width <= 0) {
      delete nextSankey.horizontalScrollWidth
    } else {
      nextSankey.horizontalScrollWidth = width
    }

    updateConfig?.({ ...config, sankey: nextSankey })
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{name}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Select
          value={selectedColumns.source || ''}
          section='sankey'
          subsection='columns'
          fieldName='source'
          label='Source Column'
          initial='Select'
          required={true}
          updateField={updateSankeyColumn}
          options={columnOptions}
        />
        <Select
          value={selectedColumns.target || ''}
          section='sankey'
          subsection='columns'
          fieldName='target'
          label='Target Column'
          initial='Select'
          required={true}
          updateField={updateSankeyColumn}
          options={columnOptions}
        />
        <Select
          value={selectedColumns.value || ''}
          section='sankey'
          subsection='columns'
          fieldName='value'
          label='Value Column'
          initial='Select'
          required={true}
          updateField={updateSankeyColumn}
          options={columnOptions}
        />
        <CheckBox
          value={Boolean(config.enableTooltips)}
          fieldName='enableTooltips'
          label='Show Tooltips'
          updateField={updateEnableTooltips}
        />
        <TextField
          value={config.sankey?.horizontalScrollWidth ?? ''}
          type='number'
          section='sankey'
          fieldName='horizontalScrollWidth'
          label='Horizontal Scroll Width'
          updateField={updateHorizontalScrollWidth}
        />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default SankeySettings
