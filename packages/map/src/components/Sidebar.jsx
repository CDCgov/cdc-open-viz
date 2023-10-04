//TODO: Move legends to core
import React, { useContext } from 'react'
import parse from 'html-react-parser'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendCircle from '@cdc/core/components/LegendCircle'
import HexSetting from './HexShapeSettings'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import ConfigContext from '../context'

const Sidebar = props => {
  // prettier-ignore
  const {
    changeFilterActive,
    displayDataAsText,
    resetLegendToggles,
    runtimeFilters,
    runtimeLegend,
    setAccessibleStatus,
    setRuntimeLegend,
    state,
    suffix,
    viewport,
  } = useContext(ConfigContext)

  const { legend } = state
  console.log('state', state)

  // Toggles if a legend is active and being applied to the map and data table.
  const toggleLegendActive = (i, legendLabel) => {
    const newValue = !runtimeLegend[i].disabled

    runtimeLegend[i].disabled = newValue // Toggle!

    let newLegend = [...runtimeLegend]

    newLegend[i].disabled = newValue

    const disabledAmt = runtimeLegend.disabledAmt ?? 0

    newLegend['disabledAmt'] = newValue ? disabledAmt + 1 : disabledAmt - 1

    newLegend.runtimeDataHash = runtimeLegend.runtimeDataHash

    setRuntimeLegend(newLegend)

    setAccessibleStatus(`Disabled legend item ${legendLabel ?? ''}. Please reference the data table to see updated values.`)
  }

  const legendList = runtimeLegend.map((entry, idx) => {
    const entryMax = displayDataAsText(entry.max, 'primary')

    const entryMin = displayDataAsText(entry.min, 'primary')

    let formattedText = `${entryMin}${entryMax !== entryMin ? ` - ${entryMax}` : ''}`

    // If interval, add some formatting
    if (legend.type === 'equalinterval' && idx !== runtimeLegend.length - 1) {
      formattedText = `${entryMin} - < ${entryMax}`
    }

    const { disabled } = entry

    if (legend.type === 'category') {
      formattedText = displayDataAsText(entry.value, 'primary')
    }

    if (entry.max === 0 && entry.min === 0) {
      formattedText = '0'
    }

    let legendLabel = formattedText

    if (entry.hasOwnProperty('special')) {
      legendLabel = entry.label || entry.value
    }

    const handleListItemClass = () => {
      let classes = ['legend-container__li']
      if (disabled) classes.push('legend-container__li--disabled')
      if (entry.hasOwnProperty('special')) classes.push('legend-container__li--special-class')
      return classes
    }

    return (
      <li
        className={handleListItemClass().join(' ')}
        key={idx}
        title={`Legend item ${legendLabel} - Click to disable`}
        onClick={() => {
          toggleLegendActive(idx, legendLabel)
        }}
      >
        <LegendCircle fill={entry.color} /> <span className='label'>{legendLabel}</span>
      </li>
    )
  })

  const { legendClasses } = useDataVizClasses(state, viewport)

  const handleReset = e => {
    e.preventDefault()
    resetLegendToggles()
    setAccessibleStatus('Legend has been reset, please reference the data table to see updated values.')
    if (undefined === singleFilter.active) return null

    singleFilter.values.forEach((filterOption, idx) => {
      values.push(
        <option key={idx} value={filterOption}>
          {filterOption}
        </option>
      )
    })

    return (
      <section className='filter-col' key={idx}>
        {singleFilter.label?.length > 0 && <label htmlFor={`filter-${idx}`}>{singleFilter.label}</label>}
        <select
          id={`filter-${idx}`}
          className='filter-select'
          aria-label='select filter'
          value={singleFilter.active}
          onChange={val => {
            changeFilterActive(idx, val.target.value)
            setAccessibleStatus(`Filter ${singleFilter.label} value has been changed to ${val.target.value}, please reference the data table to see updated values.`)
          }}
        >
          {values}
        </select>
      </section>
    )
  }

  const columnLogic = legend.position === 'side' && legend.singleColumn ? 'single-column' : legend.position === 'bottom' && legend.singleRow ? 'single-row' : legend.verticalSorted && !legend.singleRow ? 'vertical-sorted' : ''

  return (
    <ErrorBoundary component='Sidebar'>
      <div className='legends'>
        <aside id='legend' className={legendClasses.aside.join(' ') || ''} role='region' aria-label='Legend' tabIndex='0'>
          <section className={legendClasses.section.join(' ') || ''} aria-label='Map Legend'>
            {runtimeLegend.disabledAmt > 0 && (
              <button onClick={handleReset} className={legendClasses.resetButton.join(' ') || ''}>
                Clear
              </button>
            )}
            {legend.title && <span className={legendClasses.title.join(' ') || ''}>{parse(legend.title)}</span>}
            {legend.dynamicDescription === false && legend.description && <p className={legendClasses.description.join(' ') || ''}>{parse(legend.description)}</p>}
            {legend.dynamicDescription === true &&
              runtimeFilters.map((filter, idx) => {
                const lookupStr = `${idx},${filter.values.indexOf(String(filter.active))}`

                // Do we have a custom description for this?
                const desc = legend.descriptions[lookupStr] || ''

                if (desc.length > 0) {
                  return (
                    <p key={`dynamic-description-${lookupStr}`} className={`dynamic-legend-description-${lookupStr}`}>
                      {desc}
                    </p>
                  )
                }
                return true
              })}
            <ul className={legendClasses.ul.join(' ') || ''} aria-label='Legend items'>
              {legendList}
            </ul>
          </section>
        </aside>
        {state.hexMap.shapeGroups?.length > 0 && state.hexMap.type === 'shapes' && state.general.displayAsHex && <HexSetting.Legend state={state} runtimeLegend={runtimeLegend} viewport={viewport} />}
      </div>
    </ErrorBoundary>
  )
}

export default Sidebar
