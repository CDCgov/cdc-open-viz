import React, { useState, useContext } from 'react'
import Context from './../context'
import Button from '@cdc/core/components/elements/Button'

// TODO: Combine Charts/Maps Filters.js files
const useFilters = () => {
  const { state: config, setState: setConfig, runtimeFilters, setRuntimeFilters } = useContext(Context)
  const [showApplyButton, setShowApplyButton] = useState(false)

  const sortAsc = (a, b) => {
    return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
  }

  const sortDesc = (a, b) => {
    return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
  }

  const announceChange = text => { }

  const changeFilterActive = (index, value) => {
    let newFilters = config.filters
    newFilters[index].active = value
    setRuntimeFilters(newFilters)
    setShowApplyButton(true)
  }

  const handleApplyButton = () => {
    setConfig({ ...config, filters: runtimeFilters })
    setShowApplyButton(false)
  }

  const handleReset = () => {
    let newFilters = runtimeFilters

    // reset to first item in values array.
    newFilters.map(filter => {
      filter.active = filter.values[0]
    })

    setConfig({ ...config, filters: newFilters })
  }

  return { announceChange, sortAsc, sortDesc, changeFilterActive, showApplyButton, handleReset, handleApplyButton }
}

export const Filters = () => {
  const { runtimeFilters, state: config } = useContext(Context)
  const { handleApplyButton, changeFilterActive, announceChange, sortAsc, sortDesc, showApplyButton, handleReset } = useFilters()

  const buttonText = 'Apply Filters'
  const resetText = 'Reset All'

  const { filters } = config

  if (filters.length === 0) return false

  const FilterList = ({ filters: runtimeFilters }) => {
    if (runtimeFilters) {
      return runtimeFilters.map((singleFilter, idx) => {
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
          <section className='filter-col single-filter' key={idx}>
            {singleFilter.label?.length > 0 && <label htmlFor={`filter-${idx}`}>{singleFilter.label}</label>}
            <select
              id={`filter-${idx}`}
              className='filter-select'
              aria-label='select filter'
              value={singleFilter.active}
              onChange={e => {
                changeFilterActive(idx, e.target.value)
                announceChange(`Filter ${singleFilter.label} value has been changed to ${e.target.value}, please reference the data table to see updated values.`)
              }}
            >
              {values}
            </select>
          </section>
        )
      })
    } else {
      return null
    }
  }

  return (
    <section className={`filters-section`} style={{ display: 'block', width: '100%' }}>
      <div className='filters-section__wrapper' style={{ flexWrap: 'wrap', display: 'flex', gap: '7px 15px', marginTop: '15px' }}>
        <FilterList filters={runtimeFilters} />
        <div className='filter-section__buttons' style={{ width: '100%' }}>
          <Button onClick={handleApplyButton} disabled={!showApplyButton} style={{ marginRight: '10px' }}>
            {buttonText}
          </Button>
          <a href='#!' role='button' onClick={handleReset}>
            {resetText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Filters
