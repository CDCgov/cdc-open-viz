import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import DataTableEditor from '../../EditorPanel/DataTableEditor'
import { Visualization } from '@cdc/core/types/Visualization'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useMemo } from 'react'
import ColumnsEditor from '../../EditorPanel/ColumnsEditor'

type DataTableEditorProps = {
  config: Visualization
  updateConfig: Function
}

const DataTableEditorPanel: React.FC<DataTableEditorProps> = ({ config, updateConfig }) => {
  const updateField = useMemo(() => updateFieldFactory(config, updateConfig), [JSON.stringify(config)])
  const deleteColumn = columnName => {
    const newColumns = config.columns

    delete newColumns[columnName]

    updateConfig({
      ...config,
      columns: newColumns
    })
  }

  const columns = Object.keys(config.columns || {})
  return (
    <Accordion allowZeroExpanded={true}>
      <ColumnsEditor config={config} updateField={updateField} deleteColumn={deleteColumn} />
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Data Table</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <DataTableEditor config={config} columns={columns} updateField={updateField} isDashboard={true} />
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default DataTableEditorPanel
