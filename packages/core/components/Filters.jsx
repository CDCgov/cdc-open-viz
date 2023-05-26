import React, { useState, useEffect, useRef } from 'react'
import { useId } from 'react'

// CDC
import Button from '@cdc/core/components/elements/Button'

// Third Party
import PropTypes from 'prop-types'

export const useFilters = props => {
  const [showApplyButton, setShowApplyButton] = useState(false)

  // Desconstructing: notice, adding more descriptive visualizationConfig name over config
  // visualizationConfig feels more robust for all vis types so that its not confused with config/state/etc.
  const { config: visualizationConfig, setConfig, filteredData, setFilteredData, excludedData, filterData } = props
  const { type, filterBehavior, filters } = visualizationConfig

  const filterStyleOptions = ['dropdown', 'pill', 'tab', 'tab bar']

  const filterOrderOptions = [
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

  /**
   * Re-orders a filter based on two indices and updates the runtime filters array and filters state
   * @param {number} idx1 - The index of the original position of the filter value.
   * @param {number} idx2 - The index of the new position for the filter value.
   * @param {number} filterIndex - The index of the filter item within the array of filter items.
   * @param {object} filter - The filter item itself, which contains an array of filter values.
   * @return {void} None. This function only updates the state of the component.
   *
   * @modifies {object} - The filter object passed in as a parameter
   * @modifies {array} - The filteredData state if visualizationConfig.type equals 'map'
   * @modifies {object} - The visualizationConfig state
   */
  const handleFilterOrder = (idx1, idx2, filterIndex, filter) => {
    // Create a shallow copy of the filter values array & update position of the values
    const updatedValues = [...filter.values]
    const [movedItem] = updatedValues.splice(idx1, 1)
    updatedValues.splice(idx2, 0, movedItem)

    const filtersCopy = visualizationConfig.type === 'chart' ? [...visualizationConfig.filters] : [...filteredData]
    const filterItem = { ...filtersCopy[filterIndex] }

    // Overwrite filterItem.values since thats what we map through in the editor panel
    filterItem.values = updatedValues
    filterItem.orderedValues = updatedValues
    filterItem.active = updatedValues[0]
    filterItem.order = 'cust'

    // Update the filters
    filtersCopy[filterIndex] = filterItem

    if (visualizationConfig.type === 'map') {
      setFilteredData(filtersCopy)
    }

    setConfig({ ...visualizationConfig, filters: filtersCopy })
  }

  const announceChange = text => {}

  const changeFilterActive = (index, value) => {
    let newFilters = visualizationConfig.type === 'map' ? [...filteredData] : [...visualizationConfig.filters]

    newFilters[index].active = value
    setConfig({ ...visualizationConfig })

    // If this is a button filter type show the button.
    if (visualizationConfig.filterBehavior === 'Apply Button') {
      setShowApplyButton(true)
    }

    // If we're not using the apply button we can set the filters right away.
    if (visualizationConfig.filterBehavior !== 'Apply Button') {
      setConfig({
        ...visualizationConfig,
        filters: newFilters
      })
    }

    // Used for setting active filter, fromHash breaks the filteredData functionality.
    if (visualizationConfig.type === 'map' && visualizationConfig.filterBehavior === 'Filter Change') {
      setFilteredData(newFilters)
    }

    // If we're on a chart and not using the apply button
    if (visualizationConfig.type === 'chart' && visualizationConfig.filterBehavior === 'Filter Change') {
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
    let newFilters = [...visualizationConfig.filters]
    e.preventDefault()

    // reset to first item in values array.
    newFilters.map(filter => {
      filter = handleSorting(filter)
      filter.active = filter.values[0]
      return filter
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

  const handleSorting = singleFilter => {
    const { order } = singleFilter

    const sortAsc = (a, b) => {
      return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
    }

    const sortDesc = (a, b) => {
      return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
    }

    if (!order || order === '') {
      singleFilter.order = 'asc'
    }

    if (order === 'desc') {
      singleFilter.values = singleFilter.values.sort(sortDesc)
    }

    if (order === 'asc') {
      singleFilter.values = singleFilter.values.sort(sortAsc)
    }
    return singleFilter
  }

  // prettier-ignore
  return {
    handleApplyButton,
    changeFilterActive,
    announceChange,
    showApplyButton,
    handleReset,
    filterConstants,
    filterStyleOptions,
    filterOrderOptions,
    handleFilterOrder,
    handleSorting
  }
}

const Filters = props => {
  const { config: visualizationConfig, filteredData, dimensions } = props
  const { filters, type, general, theme, filterBehavior } = visualizationConfig
  const [mobileFilterStyle, setMobileFilterStyle] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('')
  const id = useId()

  // useFilters hook provides data and logic for handling various filter functions
  // prettier-ignore
  const {
    handleApplyButton,
    changeFilterActive,
    announceChange,
    showApplyButton,
    handleReset,
    filterConstants,
    handleSorting
  } = useFilters(props)

  useEffect(() => {
    if (!dimensions) return
    if (dimensions[0] < 768 && filters?.length > 0) {
      setMobileFilterStyle(true)
    } else {
      setMobileFilterStyle(false)
    }
  }, [dimensions])

  useEffect(() => {
    if (selectedFilter) {
      let el = document.getElementById(selectedFilter.id)
      if (el) el.focus()
    }
  }, [changeFilterActive, selectedFilter])

  const Filters = props => props.children

  const filterSectionClassList = ['filters-section', type === 'map' ? general.headerColor : theme]

  // Exterior Section Wrapper
  Filters.Section = props => {
    return (
      <section className={filterSectionClassList.join(' ')}>
        <p className='filters-section__intro-text'>
          {filterConstants.introText} {visualizationConfig.filterBehavior === 'Apply Button' && filterConstants.applyText}
        </p>
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
        {singleFilter.values.map((filter, index) => {
          const buttonClassList = ['button__tab-bar', singleFilter.active === filter ? 'button__tab-bar--active' : '']
          return (
            <button
              id={`${filter}-${outerIndex}-${index}-${id}`}
              className={buttonClassList.join(' ')}
              key={filter}
              onClick={e => {
                changeFilterActive(outerIndex, filter)
                setSelectedFilter(e.target)
              }}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  changeFilterActive(outerIndex, filter)
                  setSelectedFilter(e.target)
                }
              }}
            >
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
        if(singleFilter.showDropdown === false) return

        const values = []
        const pillValues = []
        const tabValues = []
        const tabBarValues = []

        const { active, label, filterStyle } = singleFilter

        handleSorting(singleFilter)

        singleFilter.values.forEach((filterOption, index) => {
          const pillClassList = ['pill', active === filterOption ? 'pill--active' : null, theme && theme]
          const tabClassList = ['tab', active === filterOption && 'tab--active', theme && theme]

          pillValues.push(
            <div className='pill__wrapper' key={`pill-${index}`}>
              <button
                id={`${filterOption}-${outerIndex}-${index}-${id}`}
                className={pillClassList.join(' ')}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    changeFilterActive(outerIndex, filterOption)
                    setSelectedFilter(e.target)
                  }
                }}
                onClick={e => {
                  changeFilterActive(outerIndex, filterOption)
                  setSelectedFilter(e.target)
                }}
                name={label}
              >
                {filterOption}
              </button>
            </div>
          )

          values.push(
            <option key={index} value={filterOption}>
              {singleFilter.labels && singleFilter.labels[filterOption] ? singleFilter.labels[filterOption] : filterOption}
            </option>
          )

          tabValues.push(
            <button
              id={`${filterOption}-${outerIndex}-${index}-${id}`}
              className={tabClassList.join(' ')}
              onClick={e => {
                changeFilterActive(outerIndex, filterOption)
                setSelectedFilter(e.target)
              }}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  changeFilterActive(outerIndex, filterOption)
                  setSelectedFilter(e.target)
                }
              }}
            >
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
