import VizFilterEditor from '@cdc/core/components/EditorPanel/VizFilterEditor'
import PanelSection from '@cdc/core/components/panels/PanelSection'
import type { ChartConfig } from '../../../../../types/ChartConfig'

type FiltersPanelProps = {
  config: ChartConfig
  updateField: (...args: any[]) => void
  rawData: Record<string, any>[]
  hasFootnotes: boolean
}

const FiltersPanel = ({ config, updateField, rawData, hasFootnotes }: FiltersPanelProps) => (
  <PanelSection title='Filters'>
    <VizFilterEditor config={config} updateField={updateField} rawData={rawData} hasFootnotes={hasFootnotes} />
  </PanelSection>
)

export default FiltersPanel
