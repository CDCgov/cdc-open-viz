import ColumnsEditor from '@cdc/core/components/EditorPanel/ColumnsEditor'
import PanelSection from '@cdc/core/components/panels/PanelSection'

import { type ColumnsPanelProps } from './types'

const ColumnsPanel: React.FC<ColumnsPanelProps> = ({ config, updateField, deleteColumn }) => (
  <PanelSection title='Columns'>
    <ColumnsEditor config={config} updateField={updateField} deleteColumn={deleteColumn} />
  </PanelSection>
)

export default ColumnsPanel
