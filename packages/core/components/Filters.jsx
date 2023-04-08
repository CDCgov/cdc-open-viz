import React, { useState, useEffect } from 'react'
import Button from '@cdc/core/components/elements/Button'

// Third Party
import PropTypes from 'prop-types'

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

    if (filterBehavior === 'dropdown' || filterBehavior === 'tab' || filterBehavior === 'pill') {
      setConfig({
        ...config,
        filters: newFilters
      })
    }

    // Charts dropdown
    if (config.type === 'map') {
      setFilteredData(newFilters)
    }

    // Chart dropdown style
    if (config.type !== 'map' && filterBehavior === 'dropdown') {
      setFilteredData(filterData(newFilters, excludedData))
    }

    // Chart Tab style
    if (config.type !== 'map' && filterBehavior === 'tab') {
      setFilteredData(filterData(newFilters, excludedData))
    }

    // Chart Tab style
    if (config.type !== 'map' && filterBehavior === 'pill') {
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

  const typeLookup = {
    dropdown: 'drop down',
    button: 'drop down',
    tab: 'tab',
    pill: 'pill'
  }

  const filterConstants = {
    buttonText: 'Apply Filters',
    resetText: 'Reset All',
    introText: `Using the ${typeLookup[config.filterBehavior]} menu below, make a selection to filter the visualization(s)`
  }

  // prettier-ignore
  return {
    handleApplyButton,
    changeFilterActive,
    announceChange,
    sortAsc,
    sortDesc,
    showApplyButton,
    handleReset,
    filterConstants,
  }
}

const Filters = props => {
  const { config, filteredData } = props

  // prettier-ignore
  const {
    handleApplyButton,
    changeFilterActive,
    announceChange,
    sortAsc,
    sortDesc,
    showApplyButton,
    handleReset,
    filterConstants,
  } = useFilters(props)

  const { filters } = config

  const Filters = props => props.children

  // Exterior Section Wrapper
  Filters.Section = props => (
    <section className={`filters-section ${config.type === 'map' ? config.general.headerColor : config.theme}`} style={{ display: 'block' }}>
      <p>{filterConstants.introText}</p>

      {/* TODO: likely need to wrap this up better. */}
      <div className='filters-section__wrapper' style={{ flexWrap: 'wrap', display: 'flex', gap: '7px 15px', marginTop: '15px' }}>
        {props.children}
      </div>
    </section>
  )

  // Apply/Reset Buttons
  Filters.Buttons = props => {
    return (
      <div className='filter-section__buttons' style={{ width: '100%' }}>
        <Button onClick={() => handleApplyButton(filters)} disabled={!showApplyButton} style={{ marginRight: '10px' }}>
          {filterConstants.buttonText}
        </Button>
        <a href='#!' role='button' onClick={handleReset}>
          {filterConstants.resetText}
        </a>
      </div>
    )
  }

  // Each Filter Dropdown
  Filters.Lists = () => {
    if (config.filters || filteredData) {
      // Here charts is using config.filters where maps is using a runtime value
      let filtersToLoop = config.type === 'map' ? filteredData : config.filters

      const values = []
      const pillValues = []
      const tabValues = []

      // button and dropdown style filters.
      return filtersToLoop.map((singleFilter, outerIndex) => {
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
          const pillClassList = ['pill', singleFilter.active === filterOption ? 'pill--active' : null, config.theme && config.theme]
          const tabClassList = ['tab', singleFilter.active === filterOption && 'tab--active', config.theme && config.theme]

          pillValues.push(
            <div className='pill__wrapper'>
              <button className={pillClassList.join(' ')} onClick={e => changeFilterActive(outerIndex, filterOption)}>
                {filterOption}
              </button>
            </div>
          )

          values.push(
            <option key={index} value={filterOption}>
              {filterOption}
            </option>
          )

          tabValues.push(
            <button className={tabClassList.join(' ')} onClick={e => changeFilterActive(outerIndex, filterOption)}>
              {filterOption}
            </button>
          )
        })

        let DropdownFilters = () => (
          <div className='single-filter' key={outerIndex}>
            <select
              id={`filter-${outerIndex}`}
              className='filter-select'
              data-index='0'
              value={singleFilter.active}
              onChange={e => {
                changeFilterActive(outerIndex, e.target.value)
                announceChange(`Filter ${singleFilter.label} value has been changed to ${e.target.value}, please reference the data table to see updated values.`)
              }}
            >
              {values}
            </select>
          </div>
        )

        if (singleFilter.filterBehavior === 'dropdown') {
          return <DropdownFilters />
        }

        if (singleFilter.filterBehavior === 'button') {
          return (
            <>
              <DropdownFilters />
              <Filters.Buttons filter={singleFilter} />
            </>
          )
        }

        if (singleFilter.filterBehavior === 'pill') {
          return (
            <div className={`single-filters single-filters--${singleFilter.filterBehavior}`} key={outerIndex}>
              {pillValues}
            </div>
          )
        }

        if (singleFilter.filterBehavior === 'tab') {
          return (
            <div className={`single-filters single-filters--${singleFilter.filterBehavior}`} key={outerIndex}>
              {tabValues}
            </div>
          )
        }
      })
    }
  }

  if (config.filters.length === 0 || props.filteredData.length === 0) return
  return (
    <Filters>
      <Filters.Section>
        <Filters.Lists />
      </Filters.Section>
    </Filters>
  )
}

Filters.propTypes = {
  // runtimeFilters in place
  filteredData: PropTypes.array,
  // function for updating the runtime filters
  setFilteredData: PropTypes.func,
  // the full apps config
  config: PropTypes.object,
  // updating function for setting fitlerBehavior
  setConfig: PropTypes.func,
  // exclusions
  excludedData: PropTypes.array,
  // function for filtering the data
  filterData: PropTypes.func
}

export default Filters
