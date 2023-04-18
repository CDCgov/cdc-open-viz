import React, { useState, useEffect } from 'react'

// CDC
import Button from '@cdc/core/components/elements/Button'

// Third Party
import PropTypes from 'prop-types'

export const filterStyleOptions = ['dropdown', 'pill', 'tab', 'tab bar']
export const filterOrderOptions = [
  {
    label: 'Ascending Alphanumeric',
    value: 'asc'
  },
  {
    label: 'Descending Alphanumeric',
    value: 'desc'
  },
  {
    label: 'Custom',
    value: 'cust'
  }
]

const useFilters = props => {
  const [showApplyButton, setShowApplyButton] = useState(false)

  // Desconstructing: notice, adding more descriptive visualizationConfig name over config
  // visualizationConfig feels more robust for all vis types so that its not confused with config/state/etc.
  const { config: visualizationConfig, setConfig, filteredData, setFilteredData, excludedData, filterData } = props
  const { filters, type, filterBehavior } = visualizationConfig

  const sortAsc = (a, b) => {
    return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
  }

  const sortDesc = (a, b) => {
    return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
  }

  const announceChange = text => {}

  const changeFilterActive = (index, value) => {
    let newFilters = type === 'map' ? [...filteredData] : [...filters]
    newFilters[index].active = value

    // If this is a button filter type show the button.
    if (filterBehavior === 'Apply Button') {
      setShowApplyButton(true)
    }

    // If we're not using the apply button we can set the filters right away.
    // if (config.filterBehavior !== 'Apply Button') {
    setConfig({
      ...visualizationConfig,
      filters: newFilters
    })

    // Used for setting active filter, fromHash breaks the filteredData functionality.
    if (type === 'map' && filterBehavior !== 'Apply Button') {
      setFilteredData(newFilters)
    }

    // If we're on a chart and not using the apply button
    if (type === 'chart' && filterBehavior !== 'Apply Button') {
      setFilteredData(filterData(newFilters, excludedData))
    }
  }

  const handleApplyButton = newFilters => {
    setConfig({ ...visualizationConfig, filters: newFilters })

    if (type === 'map') {
      setFilteredData(newFilters, excludedData)
    }

    if (type === 'chart') {
      setFilteredData(filterData(newFilters, excludedData))
    }

    setShowApplyButton(false)
  }

  const handleReset = e => {
    let newFilters = filters
    e.preventDefault()

    // reset to first item in values array.
    newFilters.map(filter => {
      filter.active = filter.values[0]
      return null
    })

    if (type === 'map') {
      setFilteredData(newFilters, excludedData)
    } else {
      setFilteredData(filterData(newFilters, excludedData))
    }

    setConfig({ ...visualizationConfig, filters: newFilters })
  }

  const filterConstants = {
    buttonText: 'Apply Filters',
    resetText: 'Reset All',
    introText: `Make a selection from the filters to change the visualization information.`,
    applyText: 'Select the apply button to update the visualization information.'
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
    filterStyleOptions
  }
}

const Filters = props => {
  const { config: visualizationConfig, filteredData, dimensions } = props
  const [mobileFilterStyle, setMobileFilterStyle] = useState(false)

  // useFilters hook provides data and logic for handling various filter functions
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

  useEffect(() => {
    if (!dimensions) return
    if (dimensions[0] < 768 && filters?.length > 0) {
      setMobileFilterStyle(true)
    } else {
      setMobileFilterStyle(false)
    }
  }, [dimensions])

  const { filters, type, general, theme, filterBehavior } = visualizationConfig

  const Filters = props => props.children

  const filterSectionClassList = ['filters-section', type === 'map' ? general.headerColor : theme]

  // Exterior Section Wrapper
  Filters.Section = props => {
    return (
      <section className={filterSectionClassList.join(' ')}>
        <p className='filters-section__intro-text'>{filterConstants.introText}</p>
        {filterBehavior === 'Apply Button' && <p>{filterConstants.applyText}</p>}
        <div className='filters-section__wrapper'>{props.children}</div>
      </section>
    )
  }

  // Apply/Reset Buttons
  Filters.ApplyBehavior = props => {
    if (filterBehavior !== 'Apply Button') return
    const applyButtonClasses = [general?.headerColor ? general.headerColor : theme, 'apply']
    return (
      <div className='filters-section__buttons'>
        <Button onClick={() => handleApplyButton(filters)} disabled={!showApplyButton} className={applyButtonClasses.join(' ')}>
          {filterConstants.buttonText}
        </Button>
        <a href='#!' role='button' onClick={handleReset}>
          {filterConstants.resetText}
        </a>
      </div>
    )
  }

  Filters.TabBar = props => {
    const { filter: singleFilter, index: outerIndex } = props
    return (
      <section className='single-filters__tab-bar'>
        {singleFilter.values.map(filter => {
          const buttonClassList = ['button__tab-bar', singleFilter.active === filter ? 'button__tab-bar--active' : '']
          return (
            <button className={buttonClassList.join(' ')} key={filter} onClick={e => changeFilterActive(outerIndex, filter)}>
              {filter}
            </button>
          )
        })}
      </section>
    )
  }

  Filters.Pills = props => props.pills

  Filters.Tabs = props => props.tabs

  Filters.Dropdown = props => {
    const { index: outerIndex, label, active, filters } = props
    return (
      <select
        id={`filter-${outerIndex}`}
        name={label}
        className='filter-select'
        data-index='0'
        value={active}
        onChange={e => {
          changeFilterActive(outerIndex, e.target.value)
          announceChange(`Filter ${label} value has been changed to ${e.target.value}, please reference the data table to see updated values.`)
        }}
      >
        {filters}
      </select>
    )
  }

  // Resolve Filter Styles
  Filters.Style = () => {
    if (filters || filteredData) {
      // Here charts is using config.filters where maps is using a runtime value
      let filtersToLoop = type === 'map' ? filteredData : filters

      // Remove fromHash if it exists on filters to loop so we can loop nicely
      delete filtersToLoop.fromHash

      return filtersToLoop.map((singleFilter, outerIndex) => {
        const values = []
        const pillValues = []
        const tabValues = []
        const tabBarValues = []

        const { order, active, label, filterStyle } = singleFilter

        if (!order || order === '') {
          singleFilter.order = 'asc'
        }

        if (order === 'desc') {
          singleFilter.values = singleFilter.values.sort(sortDesc)
        }

        if (order === 'asc') {
          singleFilter.values = singleFilter.values.sort(sortAsc)
        }

        singleFilter.values.forEach((filterOption, index) => {
          const pillClassList = ['pill', active === filterOption ? 'pill--active' : null, theme && theme]
          const tabClassList = ['tab', active === filterOption && 'tab--active', theme && theme]

          pillValues.push(
            <div className='pill__wrapper'>
              <button className={pillClassList.join(' ')} onClick={e => changeFilterActive(outerIndex, filterOption)} name={label}>
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

          tabBarValues.push(filterOption)
        })

        const classList = ['single-filters', mobileFilterStyle ? 'single-filters--dropdown' : `single-filters--${filterStyle}`]

        return (
          <div className={classList.join(' ')} key={outerIndex}>
            <>
              {label && <label htmlFor={label}>{label}</label>}
              {filterStyle === 'tab' && !mobileFilterStyle && <Filters.Tabs tabs={tabValues} />}
              {filterStyle === 'pill' && !mobileFilterStyle && <Filters.Pills pills={pillValues} />}
              {filterStyle === 'tab bar' && !mobileFilterStyle && <Filters.TabBar filter={singleFilter} index={outerIndex} />}
              {(filterStyle === 'dropdown' || mobileFilterStyle) && <Filters.Dropdown index={outerIndex} label={label} active={active} filters={values} />}
            </>
          </div>
        )
      })
    }
  }

  if (visualizationConfig?.filters?.length === 0 || props?.filteredData?.length === 0) return
  return (
    <Filters>
      <Filters.Section>
        <Filters.Style />
        <Filters.ApplyBehavior />
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
