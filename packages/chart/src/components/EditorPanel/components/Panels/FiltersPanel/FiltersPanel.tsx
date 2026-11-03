import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import VizFilterEditor from '@cdc/core/components/EditorPanel/VizFilterEditor'
import type { ChartConfig } from '../../../../../types/ChartConfig'

type FiltersPanelProps = {
  config: ChartConfig
  updateField: (...args: any[]) => void
  rawData: Record<string, any>[]
  hasFootnotes: boolean
}

const FiltersPanel = ({ config, updateField, rawData, hasFootnotes }: FiltersPanelProps) => (
  <AccordionItem>
    <AccordionItemHeading>
      <AccordionItemButton>Filters</AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <VizFilterEditor config={config} updateField={updateField} rawData={rawData} hasFootnotes={hasFootnotes} />
    </AccordionItemPanel>
  </AccordionItem>
)

export default FiltersPanel
