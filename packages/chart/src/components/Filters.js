import React, {useEffect, useState, useContext } from 'react'
import Context from './../context'
import Button from '@cdc/core/components/elements/Button'

const useFilters = () => {
  const { config, setConfig, filteredData, setFilteredData, excludedData, filterData } = useContext(Context)
  const [showApplyButton, setShowApplyButton] = useState(false)

  const sortAsc = (a, b) => {
    return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
  }

  const sortDesc = (a, b) => {
    return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
  }

  const announceChange = text => {}

  const changeFilterActive = (index, value) => {
    let newFilters =  config.filters
    newFilters[index].active = value
    setConfig({
      ...config,
      filters: newFilters
    })
    setShowApplyButton(true)
  }

  const handleApplyButton = (newFilters) => {
    setConfig({ ...config, filters: newFilters })
    setFilteredData(filterData(newFilters, excludedData))
    setShowApplyButton(false)
  }

  return { handleApplyButton, changeFilterActive, announceChange, sortAsc, sortDesc, showApplyButton }
}

const Filters = () => {

  const { config, setConfig, filteredData, setFilteredData } = useContext(Context)
  const { handleApplyButton, changeFilterActive, announceChange, sortAsc, sortDesc, showApplyButton } = useFilters()
  const { filters  } = config
  const buttonText = 'Apply Filters'
  const resetText = 'Reset All'

  // A List of Dropdowns
  const FilterList = () => {

    if (config.filters) {
      return config.filters.map((singleFilter, index) => {

        const values = []


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
              {filterOption}
            </option>
          )
        })

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
      return null;
    }

  }

  return (
    <section className='filters-section' style={{ flexWrap: 'wrap', display: 'flex', gap: 'unset' }}>
      <FilterList />
      <div className="filter-section__buttons" style={{ width: '100%' }}>
        <Button onClick={ () => handleApplyButton(filters) } disabled={!showApplyButton} style={{ marginRight: '10px' }}>{buttonText}</Button>
        <a href="#!" role="button">{resetText}</a>
      </div>
    </section>
  )
}

export default Filters;
