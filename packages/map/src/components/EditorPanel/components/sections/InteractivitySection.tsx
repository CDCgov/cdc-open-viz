import { Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'

import type { MapConfig } from '../../../../types/MapConfig'

type AppearanceType = MapConfig['tooltips']['appearanceType']

type InteractivitySectionProps = {
  appearanceType: AppearanceType
  linkLabel: string
  noDataLabel?: string
  onAppearanceTypeChange: (value: AppearanceType) => void
  onLinkLabelChange: (value: string) => void
  onNoDataLabelChange: (value: string) => void
}

const InteractivitySection = ({
  appearanceType,
  linkLabel,
  noDataLabel,
  onAppearanceTypeChange,
  onLinkLabelChange,
  onNoDataLabelChange
}: InteractivitySectionProps) => (
  <>
    <Select
      label={
        <>
          Detail displays on{' '}
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>At mobile sizes, information always appears in a popover modal when a user taps on an item.</p>
            </Tooltip.Content>
          </Tooltip>
        </>
      }
      value={appearanceType}
      options={[
        { value: 'hover', label: 'Hover - Tooltip' },
        { value: 'click', label: 'Click - Popover Modal' }
      ]}
      onChange={event => onAppearanceTypeChange(event.target.value as AppearanceType)}
    />
    {'click' === appearanceType && (
      <TextField
        value={linkLabel}
        section='tooltips'
        fieldName='linkLabel'
        label='Tooltips Link Label'
        updateField={(_section: unknown, _subsection: unknown, _fieldName: unknown, value: string) =>
          onLinkLabelChange(value)
        }
      />
    )}
    <TextField
      value={noDataLabel}
      section='tooltips'
      fieldName='noDataLabel'
      label='No Data Tooltip Text'
      placeholder='No Data'
      updateField={(_section: unknown, _subsection: unknown, _fieldName: unknown, value: string) =>
        onNoDataLabelChange(value)
      }
    />
  </>
)

export default InteractivitySection
