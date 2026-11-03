import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import FootnotesEditor from '@cdc/core/components/EditorPanel/FootnotesEditor'
import type { Datasets } from '@cdc/core/types/DataSet'
import type { ChartConfig } from '../../../../../types/ChartConfig'

type FootnotesPanelProps = {
  config: ChartConfig
  updateField: (...args: any[]) => void
  datasets?: Datasets
}

const FootnotesPanel = ({ config, updateField, datasets }: FootnotesPanelProps) => (
  <AccordionItem>
    <AccordionItemHeading>
      <AccordionItemButton>Footnotes</AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <FootnotesEditor config={config} updateField={updateField} datasets={datasets} />
    </AccordionItemPanel>
  </AccordionItem>
)

export default FootnotesPanel
