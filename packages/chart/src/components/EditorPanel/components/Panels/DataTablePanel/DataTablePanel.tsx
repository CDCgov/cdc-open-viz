import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import DataTableEditor from '@cdc/core/components/EditorPanel/DataTableEditor'
import type { ChartConfig } from '../../../../../types/ChartConfig'

type DataTablePanelProps = {
  config: ChartConfig
  columns: string[]
  updateField: (...args: any[]) => void
  isDashboard: boolean
  isLoadedFromUrl: boolean
}

const DataTablePanel = ({ config, columns, updateField, isDashboard, isLoadedFromUrl }: DataTablePanelProps) => {
  if (config.visualizationType === 'Spark Line') return null

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Data Table</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <DataTableEditor
          config={config}
          columns={columns}
          updateField={updateField}
          isDashboard={isDashboard}
          isLoadedFromUrl={isLoadedFromUrl}
        />{' '}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default DataTablePanel
