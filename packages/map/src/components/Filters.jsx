import React, { useEffect, useRef, useState } from 'react'
import Button from '@cdc/core/components/element/Button'
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

// TODO: Combine Charts/Maps Filters.js files
const useFilters = () => {
  const { config, updateVisConfig } = useVisConfig()
  const [showApplyButton, setShowApplyButton] = useState(false)
  const lastFiltersRef = useRef()

  const sortAsc = (a, b) => {
    return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
  }

  const sortDesc = (a, b) => {
    return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
  }

  const announceChange = text => {}

  useEffect(() => {
    if (!lastFiltersRef.current) {
      lastFiltersRef.current = config.filters
    }
  }, [config.filters, lastFiltersRef])

  const changeFilterActive = (index, value) => {
    lastFiltersRef.current = config.filters
    let newFilters = config.filters
    newFilters[index].active = value
    updateVisConfig({ filters: newFilters })
    setShowApplyButton(true)
  }

  const handleApplyButton = () => {
    lastFiltersRef.current = null
    setShowApplyButton(false)
  }

  const handleReset = e => {
    e.preventDefault()
    updateVisConfig({ filters: lastFiltersRef.current })
    lastFiltersRef.current = null
  }

  return { announceChange, sortAsc, sortDesc, changeFilterActive, showApplyButton, handleReset, handleApplyButton }
}

export const Filters = () => {
  const { config } = useVisConfig()
  const { filters } = config

  const { handleApplyButton, changeFilterActive, announceChange, showApplyButton, handleReset } = useFilters()

  const buttonText = 'Apply Filters'
  const resetText = 'Reset All'

  if (filters.length === 0) return false

  const FilterList = () => {
    if (filters) {
      return filters.map((singleFilter, idx) => {
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
        <FilterList />
        <div className='filter-section__buttons' style={{ width: '100%' }}>
          <Button onClick={handleApplyButton} disabled={!showApplyButton} style={{ marginRight: '10px' }}>
            {buttonText}
          </Button>
          <a href='#' role='button' onClick={handleReset}>
            {resetText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Filters
