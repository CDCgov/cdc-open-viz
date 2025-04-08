import { useState, useEffect, useMemo, useRef, useId } from 'react'
import _ from 'lodash'

// CDC
import Button from '../elements/Button'
import MultiSelect from '../MultiSelect'
import { Visualization } from '../../types/Visualization'
import { MultiSelectFilter, VizFilter } from '../../types/VizFilter'
import { addValuesToFilters } from '../../helpers/addValuesToFilters'
import { DimensionsType } from '../../types/Dimensions'
import NestedDropdown from '../NestedDropdown'
import { getNestedOptions } from './helpers/getNestedOptions'
import { getWrappingStatuses } from './helpers/filterWrapping'
import { handleSorting } from './helpers/handleSorting'
import { getChangedFilters } from './helpers/getChangedFilters'
import { getNewRuntime } from './helpers/getNewRuntime'
import { filterVizData } from '../../helpers/filterVizData'
import { getQueryParams, updateQueryString } from '../../helpers/queryStringUtils'
import { applyQueuedActive } from './helpers/applyQueuedActive'
import Tabs from './components/Tabs'
import Dropdown from './components/Dropdown'

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

const BUTTON_TEXT = {
  apply: 'Apply',
  resetText: 'Clear Filters'
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
  excludedData?: Object[]
  getUniqueValues: Function
}

const Filters: React.FC<FilterProps> = ({
  config: visualizationConfig,
  filteredData,
  dimensions,
  standaloneMap,
  setConfig,
  setFilteredData,
  excludedData,
  getUniqueValues
}) => {
  const { filters, general, theme, filterBehavior } = visualizationConfig
  const [showApplyButton, setShowApplyButton] = useState(false)
  // Handle Wrapping Filters
  const [wrappingFilters, setWrappingFilters] = useState<
    Record<string, { highestWrappedWidth: number; isDropdown: boolean }>
  >({})

  const wrappingFilterRefs = useRef({})

  useEffect(() => {
    const filterWrappingStatusesToUpdate = getWrappingStatuses(wrappingFilterRefs, wrappingFilters, filters)

    if (filterWrappingStatusesToUpdate.length) {
      const validStatuses = filterWrappingStatusesToUpdate.filter(Boolean) as [string, any][]
      setWrappingFilters({ ...wrappingFilters, ...Object.fromEntries(validStatuses) })
    }
  }, [filters, dimensions?.[0]])
  // end of Handle Wrapping Filters

  const initialActiveFilters = useMemo(() => {
    if (!filteredData) return []
    return filters.map(filter => filter.active)
  }, [])

  const initialFiltersActive = useMemo(() => {
    const activeFilters = filters.map(filter => filter.active)
    return initialActiveFilters.every(filter => activeFilters.includes(filter))
  }, [filters])

  const changeFilterActive = (index, value) => {
    let newFilters = standaloneMap ? [...filteredData] : [...visualizationConfig.filters]

    newFilters = getChangedFilters(newFilters, index, value, visualizationConfig.filterBehavior)
    if (visualizationConfig.filterBehavior === 'Apply Button') setShowApplyButton(true)

    if (!visualizationConfig.dynamicSeries) {
      const _newFilters = addValuesToFilters(newFilters, excludedData)
      setConfig({
        ...visualizationConfig,
        filters: _newFilters
      })
    }

    if (visualizationConfig.filterBehavior === 'Filter Change') {
      if (standaloneMap) {
        setFilteredData(newFilters)
      } else {
        const newFilteredData = filterVizData(newFilters, excludedData)
        setFilteredData(newFilteredData)

        if (visualizationConfig.dynamicSeries) {
          const runtime = getNewRuntime(visualizationConfig, newFilteredData)
          setConfig({
            ...visualizationConfig,
            filters: newFilters,
            runtime
          })
        }
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
        filter.values = getUniqueValues(visualizationConfig.data, filter.columnName)
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

  const mobileFilterStyle = useMemo(() => {
    if (!dimensions) return false
    const [width] = dimensions
    const isMobile = Number(width) < 768
    const isTabSimple = filters?.some(filter => filter.filterStyle === VIZ_FILTER_STYLE.tabSimple)

    return isMobile && filters?.length && !isTabSimple
  }, [dimensions?.[0]])

  const vizFiltersWithValues = useMemo(() => {
    // Here charts is using config.filters where maps is using a runtime value
    let vizfilters = standaloneMap ? filteredData : filters
    if (!vizfilters) return []
    if (vizfilters.fromHash) delete vizfilters.fromHash // support for Maps config
    return addValuesToFilters(vizfilters as VizFilter[], visualizationConfig.data)
  }, [filters, filteredData])

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
      <div className='d-flex flex-wrap w-100 filters-section__wrapper align-items-end'>
        <>
          {vizFiltersWithValues.map((singleFilter: VizFilter, outerIndex) => {
            if (singleFilter.showDropdown === false) return
            const { label, filterStyle, columnName } = singleFilter as VizFilter

            handleSorting(singleFilter)

            const classList = [
              'single-filters',
              'form-group',
              mobileFilterStyle ? 'single-filters--dropdown' : `single-filters--${filterStyle}`
            ]
            const mobileExempt = ['nested-dropdown', 'multi-select', VIZ_FILTER_STYLE.tabSimple].includes(filterStyle)
            const { isDropdown } = wrappingFilters[columnName] || {}
            const showDefaultDropdown =
              ((filterStyle === 'dropdown' || mobileFilterStyle) && !mobileExempt) || isDropdown
            const [nestedActiveGroup, nestedActiveSubGroup] = useMemo<string[]>(() => {
              if (filterStyle !== 'nested-dropdown') return []
              return (singleFilter.queuedActive || [singleFilter.active, singleFilter.subGrouping?.active]) as [
                string,
                string
              ]
            }, [singleFilter])
            const hideLabelMargin = singleFilter.filterStyle === 'tab-simple' && !showDefaultDropdown
            return (
              <div
                className={classList.join(' ')}
                key={outerIndex}
                ref={el => (wrappingFilterRefs.current[columnName] = el)}
              >
                {label && (
                  <label
                    className={`font-weight-bold mb-${hideLabelMargin ? '0' : '2'}`}
                    htmlFor={`filter-${outerIndex}`}
                  >
                    {label}
                  </label>
                )}
                {showDefaultDropdown && (
                  <Dropdown
                    filter={singleFilter}
                    index={outerIndex}
                    label={label}
                    changeFilterActive={changeFilterActive}
                  />
                )}
                {['tab', 'tab bar', 'pill'].includes(filterStyle) && !mobileFilterStyle && (
                  <Tabs
                    filter={singleFilter}
                    index={outerIndex}
                    changeFilterActive={changeFilterActive}
                    theme={theme}
                  />
                )}
                {filterStyle === 'tab-simple' && !showDefaultDropdown && (
                  <Tabs
                    filter={singleFilter}
                    index={outerIndex}
                    changeFilterActive={changeFilterActive}
                    theme={theme}
                  />
                )}

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
              </div>
            )
          })}
          {filterBehavior === 'Apply Button' ? (
            <div className='filters-section__buttons'>
              <Button
                onClick={e => {
                  handleApplyButton(filters)
                }}
                disabled={!showApplyButton}
                className={[general?.headerColor ? general.headerColor : theme, 'apply', 'me-2'].join(' ')}
              >
                {BUTTON_TEXT.apply}
              </Button>
              <Button secondary disabled={initialFiltersActive} onClick={handleReset}>
                {BUTTON_TEXT.resetText}
              </Button>
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
