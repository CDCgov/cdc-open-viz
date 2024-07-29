import { useState, useEffect } from 'react'
import { useId } from 'react'

// CDC
import Button from './elements/Button'
import { getQueryParams, updateQueryString } from '../helpers/queryStringUtils'

// Third Party
import PropTypes from 'prop-types'
import MultiSelect from './MultiSelect'
import { Visualization } from '../types/Visualization'
import { MultiSelectFilter, VizFilter } from '../types/VizFilter'
import { filterVizData } from '../helpers/filterVizData'
import { addValuesToFilters } from '../helpers/addValuesToFilters'

export const filterStyleOptions = ['dropdown', 'pill', 'tab', 'tab bar', 'multi-select']

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

export const handleSorting = singleFilter => {
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

const hasStandardFilterBehavior = ['chart', 'table']

export const useFilters = props => {
  const [showApplyButton, setShowApplyButton] = useState(false)

  // Desconstructing: notice, adding more descriptive visualizationConfig name over config
  // visualizationConfig feels more robust for all vis types so that its not confused with config/state/etc.
  const { config: visualizationConfig, setConfig, filteredData, setFilteredData, excludedData, getUniqueValues } = props
  const { type, data } = visualizationConfig

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

    const filtersCopy = hasStandardFilterBehavior.includes(visualizationConfig.type) ? [...visualizationConfig.filters] : [...filteredData]
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
    const newFilters = visualizationConfig.type === 'map' ? [...filteredData] : [...visualizationConfig.filters]

    if (visualizationConfig.filterBehavior === 'Apply Button') {
      newFilters[index].queuedActive = value
      setShowApplyButton(true)
    } else {
      const newFilter = newFilters[index]
      newFilter.active = value

      const queryParams = getQueryParams()
      if (newFilter.setByQueryParameter && queryParams[newFilter.setByQueryParameter] !== newFilter.active) {
        queryParams[newFilter.setByQueryParameter] = newFilter.active
        updateQueryString(queryParams)
      }
    }

    
    
    if(!visualizationConfig.dynamicSeries) {
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
    if (hasStandardFilterBehavior.includes(visualizationConfig.type) && visualizationConfig.filterBehavior === 'Filter Change') {
      const newFilteredData = filterVizData(newFilters, excludedData)
      setFilteredData(newFilteredData)

      if(visualizationConfig.dynamicSeries){
        const runtime = visualizationConfig.runtime || {}
        runtime.series = []
        runtime.seriesLabels = {}
        runtime.seriesLabelsAll = []
  
        if(newFilteredData && newFilteredData.length && newFilteredData.length > 0){
          Object.keys(newFilteredData[0]).forEach(seriesKey => {
            if(seriesKey !== visualizationConfig.xAxis.dataKey && newFilteredData[0][seriesKey] && visualizationConfig.filters?.filter(filter => filter.columnName === seriesKey).length === 0){
              runtime.series.push({
                "dataKey": seriesKey
              })
            }
          })
        }
  
        runtime.seriesKeys = runtime.series
          ? runtime.series.map(series => {
              runtime.seriesLabels[series.dataKey] = series.name || series.label || series.dataKey
              runtime.seriesLabelsAll.push(series.name || series.dataKey)
              return series.dataKey
            })
          : []
  
          setConfig({
            ...visualizationConfig,
            filters: newFilters,
            runtime
          })
      }
    }
  }

  const handleApplyButton = newFilters => {
    let needsQueryUpdate = false
    const queryParams = getQueryParams()
    newFilters.forEach(newFilter => {
      if (newFilter.queuedActive) {
        newFilter.active = newFilter.queuedActive
        delete newFilter.queuedActive
        if (newFilter.setByQueryParameter && queryParams[newFilter.setByQueryParameter] !== newFilter.active) {
          queryParams[newFilter.setByQueryParameter] = newFilter.active
          needsQueryUpdate = true
        }
      }
    })
    if (needsQueryUpdate) {
      updateQueryString(queryParams)
    }

    setConfig({ ...visualizationConfig, filters: newFilters })

    if (type === 'map') {
      setFilteredData(newFilters, excludedData)
    }

    if (hasStandardFilterBehavior.includes(visualizationConfig.type)) {
      setFilteredData(filterVizData(newFilters, excludedData))
    }

    setShowApplyButton(false)
  }

  const handleReset = e => {
    let newFilters = [...visualizationConfig.filters]
    e.preventDefault()

    // reset to first item in values array.
    let needsQueryUpdate = false
    const queryParams = getQueryParams()
    newFilters.forEach((filter, i) => {
      if (!filter.values || filter.values.length === 0) {
        filter.values = getUniqueValues(data, filter.columnName)
      }
      newFilters[i].active = handleSorting(filter).values[0]

      if (filter.setByQueryParameter && queryParams[filter.setByQueryParameter] !== filter.active) {
        queryParams[filter.setByQueryParameter] = filter.active
        needsQueryUpdate = true
      }
    })

    if (needsQueryUpdate) {
      updateQueryString(queryParams)
    }

    setConfig({ ...visualizationConfig, filters: newFilters })

    if (type === 'map') {
      setFilteredData(newFilters, excludedData)
    } else {
      setFilteredData(filterVizData(newFilters, excludedData))
    }
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
    showApplyButton,
    handleReset,
    filterConstants,
    filterStyleOptions,
    filterOrderOptions,
    handleFilterOrder,
    handleSorting
  }
}

type FilterProps = {
  filteredData
  dimensions
  config: Visualization
}

const Filters = (props: FilterProps) => {
  const { config: visualizationConfig, filteredData, dimensions } = props
  const { filters, type, general, theme, filterBehavior } = visualizationConfig
  const [mobileFilterStyle, setMobileFilterStyle] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<EventTarget>(null)
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
      const el = document.getElementById(selectedFilter.id)
      if (el) el.focus()
    }
  }, [changeFilterActive, selectedFilter])

  const Filters = props => props.children

  const filterSectionClassList = ['filters-section', type === 'map' ? general.headerColor : visualizationConfig?.visualizationType === 'Spark Line' ? null : theme]
  // Exterior Section Wrapper
  Filters.Section = ({ children }) => {
    return (
      visualizationConfig?.filters && (
        <section className={filterSectionClassList.join(' ')}>
          <p className='filters-section__intro-text'>
            {filters?.some(f => f.active) ? filterConstants.introText : ''} {visualizationConfig.filterBehavior === 'Apply Button' && filterConstants.applyText}
          </p>
          <div className='filters-section__wrapper'>{children}</div>
        </section>
      )
    )
  }

  // Apply/Reset Buttons
  Filters.ApplyBehavior = () => {
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
        aria-label={`Filter by ${label}`}
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

      return addValuesToFilters<VizFilter>(filtersToLoop, visualizationConfig.data).map((singleFilter: VizFilter, outerIndex) => {
        if (singleFilter.showDropdown === false) return

        const values = []
        const pillValues = []
        const tabValues = []
        const tabBarValues = []

        const { active, queuedActive, label, filterStyle } = singleFilter as VizFilter

        handleSorting(singleFilter)

        singleFilter.values?.forEach((filterOption, index) => {
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
            <option key={index} value={filterOption} aria-label={filterOption}>
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
              {label && <label htmlFor={`filter-${outerIndex}`}>{label}</label>}
              {filterStyle === 'tab' && !mobileFilterStyle && <Filters.Tabs tabs={tabValues} />}
              {filterStyle === 'pill' && !mobileFilterStyle && <Filters.Pills pills={pillValues} />}
              {filterStyle === 'tab bar' && !mobileFilterStyle && <Filters.TabBar filter={singleFilter} index={outerIndex} />}
              {(filterStyle === 'dropdown' || mobileFilterStyle) && <Filters.Dropdown filter={singleFilter} index={outerIndex} label={label} active={queuedActive || active} filters={values} />}
              {filterStyle === 'multi-select' && (
                <MultiSelect
                  options={singleFilter.values.map(v => ({ value: v, label: v }))}
                  fieldName={outerIndex}
                  updateField={(_section, _subSection, fieldName, value) => changeFilterActive(fieldName, value)}
                  selected={singleFilter.active as string[]}
                  limit={(singleFilter as MultiSelectFilter).selectLimit || 5}
                />
              )}
            </>
          </div>
        )
      })
    }
  }

  if (visualizationConfig?.filters?.length === 0) return
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
  dimensions: PropTypes.array
}

export default Filters
