import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import ColumnsEditor from '@cdc/core/components/EditorPanel/ColumnsEditor'
import type { ChartConfig } from '../../../../../types/ChartConfig'

type ColumnsPanelProps = {
  config: ChartConfig
  updateField: (...args: any[]) => void
  deleteColumn: (...args: any[]) => void
  hiddenColumnNames: string[]
}

const ColumnsPanel = ({ config, updateField, deleteColumn, hiddenColumnNames }: ColumnsPanelProps) => {
  if (['Box Plot', 'Sankey'].includes(config.visualizationType)) return null

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Columns</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <ColumnsEditor
          config={config}
          updateField={updateField}
          deleteColumn={deleteColumn}
          hiddenColumnNames={hiddenColumnNames}
        />{' '}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default ColumnsPanel
