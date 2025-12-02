import React, { useContext, useEffect, useState } from 'react'
import ConfigContext from '../context'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'

const NavigationMenu = ({ data, navigationHandler, options, columns, displayGeoName, mapTabbingID }) => {
  const { interactionLabel, config } = useContext(ConfigContext)
  const [activeGeo, setActiveGeo] = useState('')
  const [dropdownItems, setDropdownItems] = useState({})

  const handleSubmit = event => {
    event.preventDefault()
    if (activeGeo !== '') {
      const urlString = data[dropdownItems[activeGeo]][columns.navigate.name]

      publishAnalyticsEvent({
        vizType: config.type,
        vizSubType: getVizSubType(config),
        eventType: `map_navigation_menu`,
        eventAction: 'submit',
        eventLabel: `${interactionLabel}`,
        vizTitle: getVizTitle(config),
        specifics: `url: ${urlString}, activeGeo: ${activeGeo}`
      })

      navigationHandler(urlString)
    }
  }

  let navSelect
  let navGo

  switch (options.language) {
    case 'es':
      navSelect = 'Selecciona un Artículo'
      navGo = 'Ir'
      break
    default:
      navSelect = 'Select a Location'
      navGo = 'Go'
  }

  useEffect(() => {
    const sortedOptions = {}

    const processedDropdown = {}

    Object.keys(data).forEach(val => {
      const fullName = displayGeoName(val)

      processedDropdown[fullName] = val
    })

    Object.keys(processedDropdown)
      .sort()
      .forEach(key => {
        sortedOptions[key] = processedDropdown[key]
      })

    setDropdownItems(sortedOptions)

    setActiveGeo(Object.keys(sortedOptions)[0])
  }, [data, displayGeoName])

  return (
    <section className='navigation-menu'>
      <form onSubmit={handleSubmit} type='get'>
        <div className='d-flex' style={{ alignItems: 'flex-end' }}>
          <Select
            label={navSelect}
            value={activeGeo}
            options={Object.keys(dropdownItems)}
            onChange={e => setActiveGeo(e.target.value)}
          />
          <input
            type='submit'
            value={navGo}
            className={`${options.headerColor} btn`}
            id='cdcnavmap-dropdown-go'
            style={{ height: '50px', width: '35%' }}
          />
        </div>
      </form>
    </section>
  )
}

export default NavigationMenu
