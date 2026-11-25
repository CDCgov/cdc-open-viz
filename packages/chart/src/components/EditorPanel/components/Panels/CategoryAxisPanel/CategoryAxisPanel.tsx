import PanelSection from '@cdc/core/components/panels/PanelSection'
import WarningImage from '../../../../../images/warning.svg'
import type { ChartConfig } from '../../../../../types/ChartConfig'
import CategoryAxisPanelBody from './CategoryAxisPanelBody'
import { CategoryAxisPanelProvider, type CategoryAxisPanelContextValue } from './CategoryAxisPanelContext'

type CategoryAxisPanelProps = {
  config: ChartConfig
  value: CategoryAxisPanelContextValue
}

const CategoryAxisPanel = ({ config, value }: CategoryAxisPanelProps) => (
  <PanelSection
    title={
      <>
        {config.visualizationType === 'Pie' ? 'Segments' : 'Date/Category Axis'}
        {!config.xAxis.dataKey && <WarningImage width='25' className='warning-icon' />}
      </>
    }
    buttonProps={{
      'data-required-field-section': config.visualizationType === 'Pie' ? 'pie-segments' : 'date-category-axis'
    }}
  >
    <CategoryAxisPanelProvider value={value}>
      <CategoryAxisPanelBody />
    </CategoryAxisPanelProvider>
  </PanelSection>
)

export default CategoryAxisPanel
