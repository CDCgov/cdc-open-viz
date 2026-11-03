import VizFilterEditor from '@cdc/core/components/EditorPanel/VizFilterEditor'
import PanelSection from '@cdc/core/components/panels/PanelSection'

import { type FiltersPanelProps } from './types'

const FiltersPanel: React.FC<FiltersPanelProps> = ({ config, data, updateFilters }) => (
  <PanelSection title='Filters'>
    <VizFilterEditor config={config as any} updateField={updateFilters} rawData={data} />
  </PanelSection>
)

export default FiltersPanel
