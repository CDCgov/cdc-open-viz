import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import WarningImage from '../../../../../images/warning.svg'
import type { ChartConfig } from '../../../../../types/ChartConfig'
import CategoryAxisPanelBody from './CategoryAxisPanelBody'
import { CategoryAxisPanelProvider, type CategoryAxisPanelContextValue } from './CategoryAxisPanelContext'

type CategoryAxisPanelProps = {
  config: ChartConfig
  value: CategoryAxisPanelContextValue
}

const CategoryAxisPanel = ({ config, value }: CategoryAxisPanelProps) => (
  <AccordionItem>
    <AccordionItemHeading>
      <AccordionItemButton
        data-required-field-section={config.visualizationType === 'Pie' ? 'pie-segments' : 'date-category-axis'}
      >
        {config.visualizationType === 'Pie' ? 'Segments' : 'Date/Category Axis'}
        {!config.xAxis.dataKey && <WarningImage width='25' className='warning-icon' />}
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <CategoryAxisPanelProvider value={value}>
        <CategoryAxisPanelBody />
      </CategoryAxisPanelProvider>
    </AccordionItemPanel>
  </AccordionItem>
)

export default CategoryAxisPanel
