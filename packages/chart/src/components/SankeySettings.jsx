import React, { useContext, memo, useState, useEffect } from 'react'
import ConfigContext from '../ConfigContext'
import { useDebounce } from 'use-debounce'
import WarningImage from '../images/warning.svg'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'

import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'

const CheckBox = memo(({ label, value, fieldName, section = null, subsection = null, tooltip, updateField, ...attributes }) => (
  <label className='checkbox column-heading'>
    <input
      type='checkbox'
      name={fieldName}
      checked={value}
      onChange={e => {
        updateField(section, subsection, fieldName, !value)
      }}
      {...attributes}
    />
    <span className='edit-label'>
      {label}
      {tooltip}
    </span>
  </label>
))

let updateField = (section, subsection, fieldName, value, i) => regionUpdate(fieldName, value, i)

  let removeColumn = i => {
    let regions = []

    if (config.regions) {
      regions = [...config.regions]
    }

    regions.splice(i, 1)

    updateConfig({ ...config, regions })
  }

  let addColumn = () => {
    let regions = []

    if (config.regions) {
      regions = [...config.regions]
    }

    regions.push({})

    updateConfig({ ...config, regions })
  }

const SankeySettings = () => {
    const { config } = useContext(ConfigContext)

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Sankey Settings
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
      <CheckBox value={config.enableKPIs} fieldName='enableKPIs' label='Enable KPIs' updateField={updateField} />
      <CheckBox value={config.enableStoryNodes} fieldName='enableStoryNodes' label='Enable StoryNodes' updateField={updateField} />
      <CheckBox value={config.enableTooltips} fieldName='enableTooltips' label='Enable Tooltips' updateField={updateField} />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default SankeySettings
