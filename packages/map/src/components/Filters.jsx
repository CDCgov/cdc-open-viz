import React, { useState, useContext, useEffect } from 'react'
import Context from './../context'
import Button from '@cdc/core/components/elements/Button'

export const Filters = () => {
  const { runtimeFilters, state: config, setState: setConfig, setRuntimeFilters, setFilteredData, excludedData, filterData } = useContext(Context)
  const [filters, setFilters] = useState(config.filters)
  const [showApplyButton, setShowApplyButton] = useState(false)

  const announceChange = text => { }

  const changeFilterActive = (index, value) => {
    let newFilters = [...config.filters]
    newFilters[index].active = value
    setFilters(newFilters)
    setShowApplyButton(true)
  }

  const handleApplyButton = (newFilters) => {
    setConfig({ ...config, filters: newFilters })
    setShowApplyButton(false)
  }

  const handleReset = (e) => {
    let newFilters = [...config.filters]

    // reset to first item in values array.
    newFilters.map(filter => {
      filter.active = filter.values[0]
    })

    setConfig({ ...config, filters: newFilters })
  }

  useEffect(() => {
    if(JSON.stringify(config.filters) !== JSON.stringify(filters)){
      setFilters(config.filters)
    }
  }, [JSON.stringify(config.filters)])

  const buttonText = 'Apply Filters'
  const resetText = 'Reset All'

  if (filters.length === 0) return false

  const FilterList = ({ filters }) => {
    if (filters) {
      return filters.map((singleFilter, idx) => {
        const values = []

        let runtimeValues = singleFilter.values;
        if(singleFilter.columnName && (!runtimeValues || runtimeValues.length === 0)){
          let runtimeFilter = runtimeFilters.find(runtimeFilter => runtimeFilter.columnName === singleFilter.columnName);
          if(runtimeFilter) {
            runtimeValues = runtimeFilter.values;
          }
        }

        runtimeValues.forEach((filterOption, idx) => {
          values.push(
            <option key={idx} value={filterOption}>
              {singleFilter.labels && singleFilter.labels[filterOption] ? singleFilter.labels[filterOption] : filterOption}
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
        <FilterList filters={filters} />
        <div className='filter-section__buttons' style={{ width: '100%' }}>
          <Button onClick={() => handleApplyButton(filters)} disabled={!showApplyButton} style={{ marginRight: '10px' }}>
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
