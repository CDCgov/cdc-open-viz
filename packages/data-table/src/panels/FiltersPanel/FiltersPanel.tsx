import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import VizFilterEditor from '@cdc/core/components/EditorPanel/VizFilterEditor'

import { type FiltersPanelProps } from './types'

const FiltersPanel: React.FC<FiltersPanelProps> = ({ config, data, updateFilters }) => (
  <AccordionItem>
    <AccordionItemHeading>
      <AccordionItemButton>Filters</AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <VizFilterEditor config={config} updateField={updateFilters} rawData={data} />
    </AccordionItemPanel>
  </AccordionItem>
)

export default FiltersPanel
