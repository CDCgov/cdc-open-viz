import React, { useContext, useEffect, useState } from 'react'
import ConfigContext from '../context'

const NavigationMenu = ({ data, navigationHandler, options, columns, displayGeoName, mapTabbingID }) => {
  const { state } = useContext(ConfigContext)
  const [activeGeo, setActiveGeo] = useState('')
  const [dropdownItems, setDropdownItems] = useState({})

  const handleSubmit = event => {
    event.preventDefault()
    if (activeGeo !== '') {
      const urlString = data[dropdownItems[activeGeo]][columns.navigate.name]

      navigationHandler(state.general.navigationTarget, urlString)
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
      navSelect = 'Select an Item'
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
        <label htmlFor={mapTabbingID.replace('#', '')}>
          <div className='select-heading'>{navSelect}</div>
          <select value={activeGeo} id={mapTabbingID.replace('#', '')} onChange={e => setActiveGeo(e.target.value)}>
            {Object.keys(dropdownItems).map(key => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </label>
        <input type='submit' value={navGo} className={`${options.headerColor} btn`} id='cdcnavmap-dropdown-go' />
      </form>
    </section>
  )
}

export default NavigationMenu
