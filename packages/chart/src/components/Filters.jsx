import React, { useState, useContext, useEffect } from 'react'
import ConfigContext from './../ConfigContext'
import Button from '@cdc/core/components/elements/Button'

const Filters = () => {
  const { config, setConfig, setFilteredData, excludedData, filterData } = useContext(ConfigContext)
  const [filters, setFilters] = useState(config.filters)
  const [showApplyButton, setShowApplyButton] = useState(false)
  const buttonText = 'Apply Filters'
  const resetText = 'Reset All'

  const sortAsc = (a, b) => {
    return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
  }

  const sortDesc = (a, b) => {
    return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
  }

  const announceChange = text => {}

  const handleApplyButton = newFilters => {
    setConfig({ ...config, filters: newFilters })
    setFilteredData(filterData(newFilters, excludedData))
    setShowApplyButton(false)
  }

  const handleReset = () => {
    let newFilters = config.filters

    // reset to first item in values array.
    newFilters.map(filter => {
      filter.active = filter.values[0]
    })

    setFilteredData(filterData(newFilters, excludedData))
    setConfig({ ...config, filters: newFilters })
  }

  const changeFilterActive = (index, value) => {
    let newFilters = [...config.filters]
    newFilters[index].active = value
    setFilters(newFilters)
    setShowApplyButton(true)
  }

  useEffect(() => {
    if (JSON.stringify(config.filters) !== JSON.stringify(filters)) {
      setFilters(config.filters)
    }
  }, [JSON.stringify(config.filters)])

  // A List of Dropdowns
  const FilterList = () => {
    if (filters) {
      return filters.map((singleFilter, index) => {
        const values = []

        if (singleFilter.orderedValues) {
          singleFilter.orderedValues.forEach((filterOption, index) => {
            values.push(
              <option key={index} value={filterOption}>
                {singleFilter.labels && singleFilter.labels[filterOption] ? singleFilter.labels[filterOption] : filterOption}
              </option>
            )
          })
        } else {
          if (!singleFilter.order || singleFilter.order === '') {
            singleFilter.order = 'asc'
          }

          if (singleFilter.order === 'desc') {
            singleFilter.values = singleFilter.values.sort(sortDesc)
          }

          if (singleFilter.order === 'asc') {
            singleFilter.values = singleFilter.values.sort(sortAsc)
          }

          singleFilter.values.forEach((filterOption, index) => {
            values.push(
              <option key={index} value={filterOption}>
                {singleFilter.labels && singleFilter.labels[filterOption] ? singleFilter.labels[filterOption] : filterOption}
              </option>
            )
          })
        }

        return (
          <div className='single-filter' key={index}>
            <label htmlFor={`filter-${index}`}>{singleFilter.label}</label>
            <select
              id={`filter-${index}`}
              className='filter-select'
              data-index='0'
              value={singleFilter.active}
              onChange={e => {
                changeFilterActive(index, e.target.value)
                announceChange(`Filter ${singleFilter.label} value has been changed to ${e.target.value}, please reference the data table to see updated values.`)
              }}
            >
              {values}
            </select>
          </div>
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
        {filters.length > 0 && (
          <div className='filter-section__buttons' style={{ width: '100%' }}>
            <Button onClick={() => handleApplyButton(filters)} disabled={!showApplyButton} style={{ marginRight: '10px' }}>
              {buttonText}
            </Button>
            <a href='#!' role='button' onClick={handleReset}>
              {resetText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Filters
