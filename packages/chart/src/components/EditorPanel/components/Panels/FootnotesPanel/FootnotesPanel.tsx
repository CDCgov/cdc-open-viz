import FootnotesEditor from '@cdc/core/components/EditorPanel/FootnotesEditor'
import PanelSection from '@cdc/core/components/panels/PanelSection'
import type { Datasets } from '@cdc/core/types/DataSet'
import type { ChartConfig } from '../../../../../types/ChartConfig'

type FootnotesPanelProps = {
  config: ChartConfig
  updateField: (...args: any[]) => void
  datasets?: Datasets
}

const FootnotesPanel = ({ config, updateField, datasets }: FootnotesPanelProps) => (
  <PanelSection title='Footnotes'>
    <FootnotesEditor config={config} updateField={updateField} datasets={datasets} />
  </PanelSection>
)

export default FootnotesPanel
