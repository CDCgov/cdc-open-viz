//TODO: COVE Refactor This is LEGEND-ary
import React from 'react'
import parse from 'html-react-parser'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendCircle from '@cdc/core/components/LegendCircle'

const Sidebar = props => {
  const { legend, runtimeFilters, columns, setAccessibleStatus, changeFilterActive, resetLegendToggles, runtimeLegend, setRuntimeLegend, prefix, suffix, viewport, displayDataAsText } = props

  // Toggles if a legend is active and being applied to the map and data table.
  const toggleLegendActive = (i, legendLabel) => {
    const newValue = !runtimeLegend[i].disabled

    runtimeLegend[i].disabled = newValue // Toggle!

    let newLegend = [...runtimeLegend]

    newLegend[i].disabled = newValue

    const disabledAmt = runtimeLegend.disabledAmt ?? 0

    newLegend['disabledAmt'] = newValue ? disabledAmt + 1 : disabledAmt - 1

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

    return (
      <li
        className={disabled ? 'disabled single-legend' : 'single-legend'}
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

  const filtersList = runtimeFilters.map((singleFilter, idx) => {
    const values = []

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
  })

  const columnLogic = legend.position === 'side' && legend.singleColumn ? 'single-column' : legend.position === 'bottom' && legend.singleRow ? 'single-row' : ''

  const classNames = [`${legend.position}`, `${columnLogic}`, `cdcdataviz-sr-focusable`, `${viewport}`]

  return (
    <ErrorBoundary component='Sidebar'>
      <aside id='legend' className={classNames.join(' ')} role='region' aria-label='Legend' tabIndex='0'>
        <section className='legend-section' aria-label='Map Legend'>
          {runtimeLegend.disabledAmt > 0 && (
            <button
              onClick={e => {
                e.preventDefault()
                resetLegendToggles()
                setAccessibleStatus('Legend has been reset, please reference the data table to see updated values.')
              }}
              className='clear btn'
            >
              Clear
            </button>
          )}
          {legend.title && <span className='heading-2'>{parse(legend.title)}</span>}
          {legend.dynamicDescription === false && legend.description && <p>{parse(legend.description)}</p>}
          {legend.dynamicDescription === true &&
            runtimeFilters.map((filter, idx) => {
              const lookupStr = `${idx},${filter.values.indexOf(String(filter.active))}`

              // Do we have a custom description for this?
              const desc = legend.descriptions[lookupStr] || ''

              if (desc.length > 0) {
                return <p key={`dynamic-description-${lookupStr}`}>{desc}</p>
              }
              return true
            })}
          <ul className={columnLogic} aria-label='Legend items'>
            {legendList}
          </ul>
        </section>
      </aside>
    </ErrorBoundary>
  )
}

export default Sidebar
