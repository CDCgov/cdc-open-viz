import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import DataTableEditor from '../../EditorPanel/DataTableEditor'
import { BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useMemo } from 'react'
import ColumnsEditor from '../../EditorPanel/ColumnsEditor'
import VizFilterEditor from '../../EditorPanel/VizFilterEditor'
import _ from 'lodash'
import FootnotesEditor from '../../EditorPanel/FootnotesEditor'
import { Datasets } from '@cdc/core/types/DataSet'
import { Column } from '@cdc/core/types/Column'

/**
 * Configuration interface for DataTableEditorPanel component.
 * Extends BaseVisualizationConfig with the additional properties needed by the data table editor.
 */
interface DataTableEditorConfig extends BaseVisualizationConfig {
  columns?: Record<string, Partial<Column>>
  originalFormattedData?: Record<string, any>[]
}

type DataTableEditorProps = {
  config: DataTableEditorConfig
  updateConfig: Function
  datasets?: Datasets
}

const DataTableEditorPanel: React.FC<DataTableEditorProps> = ({ config, updateConfig, datasets }) => {
  const updateField = useMemo(() => updateFieldFactory(config, updateConfig), [JSON.stringify(config)])
  const deleteColumn = columnName => {
    const newColumns = _.cloneDeep(config.columns)

    delete newColumns[columnName]

    updateConfig({
      ...config,
      columns: newColumns
    })
  }

  const columns = Object.keys(config.originalFormattedData?.[0] || {})
  return (
    <Accordion allowZeroExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Filters</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <VizFilterEditor
            config={config}
            updateField={updateField}
            rawData={config.originalFormattedData}
            hasFootnotes={true}
          />
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Columns</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <ColumnsEditor config={config} updateField={updateField} deleteColumn={deleteColumn} />
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Data Table</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <DataTableEditor config={config} columns={columns} updateField={updateField} isDashboard={true} />
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Footnotes</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <FootnotesEditor config={config} updateField={updateField} datasets={datasets} />
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default DataTableEditorPanel
