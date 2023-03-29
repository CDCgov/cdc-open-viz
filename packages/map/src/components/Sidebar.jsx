//TODO: COVE Refactor This is LEGEND-ary
import React from 'react'
import parse from 'html-react-parser'

import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'
import LegendCircle from '@cdc/core/components/element/LegendCircle'
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

const Sidebar = props => {
  const { setAccessibleStatus, resetLegendToggles, viewport, displayDataAsText } = props
  const { config, updateVisConfig } = useVisConfig()
  const { legend, sharing } = config

  // Toggles if a legend is active and being applied to the map and data table.
  const toggleLegendActive = (i, legendLabel) => {
    const newValue = !config.legend[i].disabled

    config.legend[i].disabled = newValue // Toggle!

    let newLegend = [...config.legend]

    newLegend[i].disabled = newValue

    const disabledAmt = config.legend.disabledAmt ?? 0

    newLegend['disabledAmt'] = newValue ? disabledAmt + 1 : disabledAmt - 1

    updateVisConfig({ legend: newLegend })

    setAccessibleStatus(`Disabled legend item ${legendLabel ?? ''}. Please reference the data table to see updated values.`)
  }

  // TODO: this very suspicious -- austin
  // changed Object.entries(config.legend) to just `legend` here and also changed the legend prop to runtimeLegend
  const legendList = Object.entries(legend).map(([, entry], idx) => {
    const entryMax = displayDataAsText(entry.max, 'primary')

    const entryMin = displayDataAsText(entry.min, 'primary')

    let formattedText = `${entryMin}${entryMax !== entryMin ? ` - ${entryMax}` : ''}`

    // If interval, add some formatting
    if (legend.type === 'equalinterval' && idx !== config.legend.length - 1) {
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

  const columnLogic = legend.position === 'side' && legend.singleColumn ? 'single-column' : legend.position === 'bottom' && legend.singleRow ? 'single-row' : ''

  const classNames = [`${legend.position}`, `${columnLogic}`, `cdcdataviz-sr-focusable`, `${viewport}`]

  return (
    <ErrorBoundary component='Sidebar'>
      <aside id='legend' className={classNames.join(' ')} role='region' aria-label='Legend' tabIndex='0'>
        <section className='legend-section' aria-label='Map Legend'>
          {config.legend.disabledAmt > 0 && (
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
            config.filters.map((filter, idx) => {
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
