import React, { useState, useEffect } from 'react'
import Button from '@cdc/core/components/elements/Button'

const useFilters = props => {
  const [showApplyButton, setShowApplyButton] = useState(false)

  const { config, setConfig, filteredData, setFilteredData, excludedData, filterData } = props
  const { filterBehavior } = config

  // Editor Panel > Filters > Filter Behavior
  useEffect(() => {
    if (filterBehavior === 'dropdown') setShowApplyButton(false)
    if (filterBehavior === 'button') setShowApplyButton(true)
  }, [filterBehavior])

  const sortAsc = (a, b) => {
    return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
  }

  const sortDesc = (a, b) => {
    return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
  }

  const announceChange = text => {}

  const changeFilterActive = (index, value) => {
    let newFilters = config.type === 'map' ? [...filteredData] : [...config.filters]
    newFilters[index].active = value

    // Used for setting active filter
    if (config.type === 'map') {
      delete newFilters.fromHash
    }

    if (filterBehavior === 'dropdown') {
      setConfig({
        ...config,
        filters: newFilters
      })
    }

    // Charts dropdown
    if (config.type === 'map') {
      setFilteredData(newFilters)
    }

    // Maps dropdown
    if (config.type !== 'map' && filterBehavior === 'dropdown') {
      setFilteredData(filterData(newFilters, excludedData))
    }

    if (filterBehavior === 'button') {
      setShowApplyButton(true)
    }
  }

  const handleApplyButton = newFilters => {
    setConfig({ ...config, filters: newFilters })

    if (config.type === 'map') {
      setFilteredData(newFilters, excludedData)
    } else {
      setFilteredData(filterData(newFilters, excludedData))
    }

    setShowApplyButton(false)
  }

  const handleReset = e => {
    let newFilters = config.filters
    e.preventDefault()

    // reset to first item in values array.
    newFilters.map(filter => {
      filter.active = filter.values[0]
      return null
    })

    if (config.type === 'map') {
      setFilteredData(newFilters, excludedData)
    } else {
      setFilteredData(filterData(newFilters, excludedData))
    }

    setConfig({ ...config, filters: newFilters })
  }

  return { handleApplyButton, changeFilterActive, announceChange, sortAsc, sortDesc, showApplyButton, handleReset }
}

const Filters = props => {
  const { config, filteredData } = props
  const { handleApplyButton, changeFilterActive, announceChange, sortAsc, sortDesc, showApplyButton, handleReset } = useFilters(props)
  const { filters } = config

  const FILTER_CONFIG = {
    buttonText: 'Apply Filters',
    resetText: 'Reset All',
    introText: 'Using the drop-down menu below, make a selection to filter the visualization(s)'
  }

  /**
   * TODO:
   * 1) figure out if using onchange or apply behavior
   */

  const Filters = props => props.children

  // A List of Dropdowns
  Filters.List = () => {
    console.log('filteredData', filteredData)
    if (config.filters || filteredData) {
      // Here charts is using config.filters where maps is using a runtime value
      let filtersToLoop = config.type === 'map' ? filteredData : config.filters

      return filtersToLoop.map((singleFilter, index) => {
        const values = []

        console.log('singleFilter', singleFilter)

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

  Filters.Section = props => (
    <section className={`filters-section`} style={{ display: 'block', width: '100%' }}>
      <p>{FILTER_CONFIG.introText}</p>
      <div className='filters-section__wrapper' style={{ flexWrap: 'wrap', display: 'flex', gap: '7px 15px', marginTop: '15px' }}>
        {props.children}
      </div>
    </section>
  )

  Filters.Buttons = props => {
    if (config.filterBehavior === 'dropdown') return
    if (!config.filters.length) return
    return (
      <div className='filter-section__buttons' style={{ width: '100%' }}>
        <Button onClick={() => handleApplyButton(filters)} disabled={!showApplyButton} style={{ marginRight: '10px' }}>
          {FILTER_CONFIG.buttonText}
        </Button>
        <a href='#!' role='button' onClick={handleReset}>
          {FILTER_CONFIG.resetText}
        </a>
      </div>
    )
  }

  if (config.filters.length === 0 || props.filteredData.length === 0) return
  return (
    <Filters>
      <Filters.Section>
        <Filters.List />
        <Filters.Buttons />
      </Filters.Section>
    </Filters>
  )
}

export default Filters
