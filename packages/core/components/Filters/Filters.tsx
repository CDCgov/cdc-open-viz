import { useState, useEffect, useMemo, useRef, useId } from 'react'
import _ from 'lodash'

// CDC
import Button from '../elements/Button'
import { getQueryParams, updateQueryString } from '../../helpers/queryStringUtils'
import MultiSelect from '../MultiSelect'
import { Visualization } from '../../types/Visualization'
import { MultiSelectFilter, OrderBy, VizFilter } from '../../types/VizFilter'
import { filterVizData } from '../../helpers/filterVizData'
import { addValuesToFilters } from '../../helpers/addValuesToFilters'
import { DimensionsType } from '../../types/Dimensions'
import NestedDropdown from '../NestedDropdown'
import { getNestedOptions } from './helpers/getNestedOptions'
import { applyQueuedActive } from './helpers/applyQueuedActive'
import { handleSorting } from './helpers/handleSorting'
import { getWrappingStatuses } from './helpers/filterWrapping'

export const VIZ_FILTER_STYLE = {
  dropdown: 'dropdown',
  nestedDropdown: 'nested-dropdown',
  pill: 'pill',
  tab: 'tab',
  tabSimple: 'tab-simple',
  tabBar: 'tab bar',
  multiSelect: 'multi-select'
} as const

export type VizFilterStyle = (typeof VIZ_FILTER_STYLE)[keyof typeof VIZ_FILTER_STYLE]

export const filterStyleOptions = Object.values(VIZ_FILTER_STYLE)

export const filterOrderOptions: { label: string; value: OrderBy }[] = [
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
  },
  { label: 'Order By Data Column', value: 'column' }
]

export const useFilters = props => {
  const [showApplyButton, setShowApplyButton] = useState(false)

  // Desconstructing: notice, adding more descriptive visualizationConfig name over config
  // visualizationConfig feels more robust for all vis types so that its not confused with config/state/etc.
  const {
    config: visualizationConfig,
    setConfig,
    filteredData,
    setFilteredData,
    excludedData,
    getUniqueValues,
    standaloneMap
  } = props
  const { data } = visualizationConfig

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

    const filtersCopy = !standaloneMap ? [...visualizationConfig.filters] : [...filteredData]
    const filterItem = { ...filtersCopy[filterIndex] }

    // Overwrite filterItem.values since thats what we map through in the editor panel
    filterItem.values = updatedValues
    filterItem.orderedValues = updatedValues
    if (!filterItem.active) filterItem.active = updatedValues[0]
    filterItem.order = 'cust'

    // Update the filters
    filtersCopy[filterIndex] = filterItem

    if (standaloneMap) {
      setFilteredData(filtersCopy)
    }

    setConfig({ ...visualizationConfig, filters: filtersCopy })
  }

  const changeFilterActive = (index, value) => {
    let newFilters = standaloneMap ? [...filteredData] : [...visualizationConfig.filters]

    const newFilter = newFilters[index]
    if (visualizationConfig.filterBehavior === 'Apply Button') {
      newFilter.queuedActive = value
      setShowApplyButton(true)
    } else {
      if (newFilter.filterStyle !== 'nested-dropdown') {
        newFilter.active = value
      } else {
        newFilter.active = value[0]
        newFilter.subGrouping.active = value[1]
      }

      const queryParams = getQueryParams()
      if (newFilter.setByQueryParameter && queryParams[newFilter.setByQueryParameter] !== newFilter.active) {
        queryParams[newFilter.setByQueryParameter] = newFilter.active
        updateQueryString(queryParams)
      }
      if (
        newFilter?.subGrouping?.setByQueryParameter &&
        queryParams[newFilter?.subGrouping?.setByQueryParameter] !== newFilter?.subGrouping.active
      ) {
        queryParams[newFilter?.subGrouping?.setByQueryParameter] = newFilter.subGrouping.active
        updateQueryString(queryParams)
      }
      setFilteredData(newFilters)
    }

    if (!visualizationConfig.dynamicSeries) {
      newFilters = addValuesToFilters(newFilters, excludedData)
      setConfig({
        ...visualizationConfig,
        filters: newFilters
      })
    }

    // Used for setting active filter, fromHash breaks the filteredData functionality.
    if (standaloneMap && visualizationConfig.filterBehavior === 'Filter Change') {
      setFilteredData(newFilters)
    }

    // If we're on a chart and not using the apply button
    if (!standaloneMap && visualizationConfig.filterBehavior === 'Filter Change') {
      const newFilteredData = filterVizData(newFilters, excludedData)
      setFilteredData(newFilteredData)

      if (visualizationConfig.dynamicSeries) {
        const runtime = visualizationConfig.runtime || {}
        runtime.series = []
        runtime.seriesLabels = {}
        runtime.seriesLabelsAll = []

        if (newFilteredData && newFilteredData.length && newFilteredData.length > 0) {
          Object.keys(newFilteredData[0]).forEach(seriesKey => {
            if (
              seriesKey !== visualizationConfig.xAxis.dataKey &&
              newFilteredData[0][seriesKey] &&
              (!visualizationConfig.filters ||
                visualizationConfig.filters?.filter(filter => filter.columnName === seriesKey).length === 0) &&
              (!visualizationConfig.columns || Object.keys(visualizationConfig.columns).indexOf(seriesKey) === -1)
            ) {
              runtime.series.push({
                dataKey: seriesKey,
                type: visualizationConfig.dynamicSeriesType,
                lineType: visualizationConfig.dynamicSeriesLineType,
                tooltip: true
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
        applyQueuedActive(newFilter)
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

    if (standaloneMap) {
      setFilteredData(newFilters, excludedData)
    } else {
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

    if (standaloneMap) {
      setFilteredData(newFilters, excludedData)
    } else {
      setFilteredData(filterVizData(newFilters, excludedData))
    }
  }

  const filterConstants = {
    buttonText: 'Apply Filters',
    resetText: 'Reset All'
  }

  // prettier-ignore
  return {
    handleApplyButton,
    changeFilterActive,
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
  filteredData: Object[]
  dimensions: DimensionsType
  config: Visualization
  // function for updating the runtime filters
  setFilteredData: Function
  // updating function for setting fitlerBehavior
  setConfig: Function
  standaloneMap?: boolean
}

const Filters = (props: FilterProps) => {
  const { config: visualizationConfig, filteredData, dimensions, standaloneMap } = props
  const { filters, general, theme, filterBehavior } = visualizationConfig
  const [mobileFilterStyle, setMobileFilterStyle] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<EventTarget>(null)
  const [wrappingFilters, setWrappingFilters] = useState({})
  const id = useId()

  const wrappingFilterRefs = useRef({})
  const filterWrappingStatusesToUpdate = getWrappingStatuses(wrappingFilterRefs, wrappingFilters, filters)

  if (filterWrappingStatusesToUpdate.length) {
    const validStatuses = filterWrappingStatusesToUpdate.filter(Boolean) as [string, any][]
    setWrappingFilters({ ...wrappingFilters, ...Object.fromEntries(validStatuses) })
  }

  // useFilters hook provides data and logic for handling various filter functions
  // prettier-ignore
  const {
    handleApplyButton,
    changeFilterActive,
    showApplyButton,
    handleReset,
    filterConstants,
    handleSorting
  } = useFilters(props)

  useEffect(() => {
    if (!dimensions) return
    const [width] = dimensions

    const isMobile = Number(width) < 768
    const isTabSimple = filters?.some(filter => filter.filterStyle === VIZ_FILTER_STYLE.tabSimple)

    const defaultToMobile = isMobile && filters?.length && !isTabSimple

    setMobileFilterStyle(defaultToMobile)
  }, [dimensions])

  useEffect(() => {
    const noLongerTabSimple = Object.keys(wrappingFilters).filter(columnName => {
      const filter = filters.find(filter => filter.columnName === columnName)
      if (!filter) return false
      return filter.filterStyle !== VIZ_FILTER_STYLE.tabSimple
    })

    if (!noLongerTabSimple.length) return

    setWrappingFilters(
      Object.fromEntries(
        Object.entries(wrappingFilters).filter(([columnName]) => !noLongerTabSimple.includes(columnName))
      )
    )
  }, [filters])

  useEffect(() => {
    if (selectedFilter) {
      const el = document.getElementById(selectedFilter.id)
      if (el) el.focus()
    }
  }, [changeFilterActive, selectedFilter])

  const TabBar = props => {
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

  const Dropdown = props => {
    const { index: outerIndex, label, active, filters } = props
    return (
      <select
        id={`filter-${outerIndex}`}
        name={label}
        aria-label={`Filter by ${label}`}
        className='cove-form-select'
        data-index='0'
        value={active}
        onChange={e => {
          changeFilterActive(outerIndex, e.target.value)
        }}
      >
        {filters}
      </select>
    )
  }

  const vizFiltersWithValues = useMemo(() => {
    // Here charts is using config.filters where maps is using a runtime value
    let vizfilters = standaloneMap ? filteredData : filters
    if (!vizfilters) return []
    if (vizfilters.fromHash) delete vizfilters.fromHash // support for Maps config
    return addValuesToFilters(vizfilters as VizFilter[], visualizationConfig.data)
  }, [filters, filteredData])

  // Resolve Filter Styles
  const Style = () => {
    return vizFiltersWithValues.map((singleFilter: VizFilter, outerIndex) => {
      if (singleFilter.showDropdown === false) return

      const DropdownOptions = []
      const Pills = []
      const Tabs = []
      const isTabSimple = singleFilter.filterStyle === 'tab-simple'

      const { active, queuedActive, label, filterStyle, columnName } = singleFilter as VizFilter
      const { isDropdown } = wrappingFilters[columnName] || {}

      handleSorting(singleFilter)
      singleFilter.values?.forEach((filterOption, index) => {
        const isActive = active === filterOption

        const pillClassList = ['pill', isActive ? 'pill--active' : null, theme && theme]
        const tabClassList = ['tab', isActive && 'tab--active', theme && theme, isTabSimple && 'tab--simple']

        Pills.push(
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

        DropdownOptions.push(
          <option key={index} value={filterOption} aria-label={filterOption}>
            {singleFilter.labels && singleFilter.labels[filterOption]
              ? singleFilter.labels[filterOption]
              : filterOption}
          </option>
        )

        Tabs.push(
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
      })

      const classList = [
        'single-filters',
        'form-group',
        mobileFilterStyle ? 'single-filters--dropdown' : `single-filters--${filterStyle}`
      ]
      const mobileExempt = ['nested-dropdown', 'multi-select', VIZ_FILTER_STYLE.tabSimple].includes(filterStyle)
      const showDefaultDropdown = ((filterStyle === 'dropdown' || mobileFilterStyle) && !mobileExempt) || isDropdown
      const [nestedActiveGroup, nestedActiveSubGroup] = useMemo<string[]>(() => {
        if (filterStyle !== 'nested-dropdown') return []
        return (singleFilter.queuedActive || [singleFilter.active, singleFilter.subGrouping?.active]) as [
          string,
          string
        ]
      }, [singleFilter])
      const hideLabelMargin = isTabSimple && !showDefaultDropdown
      return (
        <div className={classList.join(' ')} key={outerIndex} ref={el => (wrappingFilterRefs.current[columnName] = el)}>
          <>
            {label && (
              <label className={`font-weight-bold mb-${hideLabelMargin ? '0' : '2'}`} htmlFor={`filter-${outerIndex}`}>
                {label}
              </label>
            )}
            {filterStyle === 'tab' && !mobileFilterStyle && Tabs}
            {filterStyle === 'tab-simple' && !showDefaultDropdown && (
              <div className='tab-simple-container d-flex w-100'>{Tabs}</div>
            )}
            {filterStyle === 'pill' && !mobileFilterStyle && Pills}
            {filterStyle === 'tab bar' && !mobileFilterStyle && <TabBar filter={singleFilter} index={outerIndex} />}
            {filterStyle === 'multi-select' && (
              <MultiSelect
                options={singleFilter.values.map(v => ({ value: v, label: v }))}
                fieldName={outerIndex}
                updateField={(_section, _subSection, fieldName, value) => changeFilterActive(fieldName, value)}
                selected={singleFilter.active as string[]}
                limit={(singleFilter as MultiSelectFilter).selectLimit || 5}
              />
            )}
            {filterStyle === 'nested-dropdown' && (
              <NestedDropdown
                activeGroup={nestedActiveGroup}
                activeSubGroup={nestedActiveSubGroup}
                filterIndex={outerIndex}
                options={getNestedOptions(singleFilter)}
                listLabel={label}
                handleSelectedItems={value => changeFilterActive(outerIndex, value)}
              />
            )}
            {showDefaultDropdown && (
              <Dropdown
                filter={singleFilter}
                index={outerIndex}
                label={label}
                active={queuedActive || active}
                filters={DropdownOptions}
              />
            )}
          </>
        </div>
      )
    })
  }

  if (visualizationConfig?.filters?.length === 0) return

  const getClasses = () => {
    const { visualizationType, legend } = visualizationConfig || {}
    const baseClass = 'filters-section'
    const conditionalClass = standaloneMap ? general.headerColor : visualizationType === 'Spark Line' ? null : theme
    const legendClass = legend && !legend.hide && legend.position === 'top' ? 'mb-0' : null

    return [baseClass, conditionalClass, legendClass, 'w-100'].filter(Boolean)
  }

  return (
    <section className={getClasses().join(' ')}>
      {visualizationConfig.filterIntro && (
        <p className='filters-section__intro-text mb-3'>{visualizationConfig.filterIntro}</p>
      )}
      <div className='d-flex flex-wrap w-100 mb-4 pb-2 filters-section__wrapper'>
        {' '}
        <>
          <Style />
          {filterBehavior === 'Apply Button' ? (
            <div className='filters-section__buttons'>
              <Button
                onClick={e => {
                  handleApplyButton(filters)
                }}
                disabled={!showApplyButton}
                className={[general?.headerColor ? general.headerColor : theme, 'apply'].join(' ')}
              >
                {filterConstants.buttonText}
              </Button>
              <a href='#!' role='button' onClick={handleReset}>
                {filterConstants.resetText}
              </a>
            </div>
          ) : (
            <></>
          )}
        </>
      </div>
    </section>
  )
}

export default Filters
