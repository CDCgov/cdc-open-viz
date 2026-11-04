import { useContext } from 'react'
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import { Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import ConfigContext from '../../../../context'
import type { MapContext } from '../../../../types/MapContext'

const InteractivitySection = () => {
  const { config, setConfig } = useContext<MapContext>(ConfigContext)
  const { tooltips } = config
  const updateField = updateFieldFactory(config, setConfig)

  return (
    <AccordionItem>
      {' '}
      {/* Tooltips */}
      <AccordionItemHeading>
        <AccordionItemButton>Interactivity</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
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
          value={tooltips.appearanceType}
          options={[
            { value: 'hover', label: 'Hover - Tooltip' },
            { value: 'click', label: 'Click - Popover Modal' }
          ]}
          section='tooltips'
          fieldName='appearanceType'
          updateField={updateField}
        />
        {'click' === tooltips.appearanceType && (
          <TextField
            value={tooltips.linkLabel}
            section='tooltips'
            fieldName='linkLabel'
            label='Tooltips Link Label'
            updateField={updateField}
          />
        )}
        <TextField
          value={tooltips.noDataLabel}
          section='tooltips'
          fieldName='noDataLabel'
          label='No Data Tooltip Text'
          placeholder='No Data'
          updateField={updateField}
        />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default InteractivitySection
