import DataTableEditor from '@cdc/core/components/EditorPanel/DataTableEditor'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import PanelSection from '@cdc/core/components/panels/PanelSection'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'

import { type DataTableSettingsPanelProps } from './types'

const DataTableSettingsPanel: React.FC<DataTableSettingsPanelProps> = ({
  config,
  columns,
  updateDataTable,
  updateConfigField
}) => (
  <PanelSection title='Data Table'>
    <DataTableEditor config={config} columns={columns} updateField={updateDataTable} isDashboard={false} />
    <Select
      value={config.locale}
      fieldName='locale'
      label='Language for dates and numbers'
      updateField={updateConfigField}
      options={[
        { value: 'en-US', label: 'English (en-US)' },
        { value: 'es-MX', label: 'Spanish (es-MX)' }
      ]}
      tooltip={
        <Tooltip style={{ textTransform: 'none' }}>
          <Tooltip.Target>
            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
          </Tooltip.Target>
          <Tooltip.Content>
            <p>Change the language (locale) for this visualization to alter the way dates and numbers are formatted.</p>
          </Tooltip.Content>
        </Tooltip>
      }
    />
  </PanelSection>
)

export default DataTableSettingsPanel
