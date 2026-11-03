import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import ColumnsEditor from '@cdc/core/components/EditorPanel/ColumnsEditor'

import { type ColumnsPanelProps } from './types'

const ColumnsPanel: React.FC<ColumnsPanelProps> = ({ config, updateField, deleteColumn }) => (
  <AccordionItem>
    <AccordionItemHeading>
      <AccordionItemButton>Columns</AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <ColumnsEditor config={config} updateField={updateField} deleteColumn={deleteColumn} />
    </AccordionItemPanel>
  </AccordionItem>
)

export default ColumnsPanel
