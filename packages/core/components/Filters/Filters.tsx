import { useState, useEffect, useMemo, useRef, useId } from 'react'
import _ from 'lodash'
import parse from 'html-react-parser'

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
import { getUniqueValues } from '@cdc/map/src/helpers'
import { getQueryParams, updateQueryString } from '../../helpers/queryStringUtils'
import { applyQueuedActive } from './helpers/applyQueuedActive'
import Tabs from './components/Tabs'
import Dropdown from './components/Dropdown'
import { publishAnalyticsEvent } from '../../helpers/metrics/helpers'

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

type FilterProps = {
  dimensions?: DimensionsType
  config: Visualization
  setFilters: Function
  standaloneMap?: boolean
  excludedData?: Object[]
  interactionLabel?: string
}

const Filters: React.FC<FilterProps> = ({
  config: visualizationConfig,
  dimensions,
  standaloneMap,
  setFilters,
  excludedData,
  interactionLabel = ''
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
    //if (!filteredData) return []
    return filters.map(filter => filter.active)
  }, [])

  const initialFiltersActive = useMemo(() => {
    const activeFilters = filters.map(filter => filter.active)
    return initialActiveFilters.every(filter => activeFilters.includes(filter))
  }, [filters])

  const changeFilterActive = (index, value) => {
    if (filterBehavior === 'Apply Button') setShowApplyButton(true)

    const newFilters = getChangedFilters([...filters], index, value, filterBehavior)
    setFilters(newFilters)

    publishAnalyticsEvent(
      `${visualizationConfig.type}_filter_changed`,
      'click',
      `${interactionLabel}|key_${newFilters?.[index]?.columnName}|value_${newFilters?.[index]?.active}`,
      visualizationConfig.type
    )
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

    setFilters(newFilters)

    publishAnalyticsEvent(
      `${visualizationConfig.type}_filter_applied`,
      'click',
      `${interactionLabel}|${newFilters.map(f => f.active)}`,
      visualizationConfig.type
    )

    setShowApplyButton(false)
  }

  const handleReset = e => {
    let newFilters = [...filters]
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

    setFilters(newFilters)
    publishAnalyticsEvent(
      `${visualizationConfig.type}_filter_reset`,
      'click',
      `${interactionLabel}`,
      visualizationConfig.type
    )
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
    if (!filters) return []
    if (filters.fromHash) delete filters.fromHash // support for Maps config
    return addValuesToFilters(filters as VizFilter[], visualizationConfig.data)
  }, [filters])

  if (visualizationConfig?.filters?.length === 0) return <></>

  const getClasses = () => {
    const { visualizationType, legend } = visualizationConfig || {}
    const baseClass = 'filters-section'
    const conditionalClass = standaloneMap ? general.headerColor : visualizationType === 'Spark Line' ? null : theme
    const legendClass = legend && !legend.hide && legend.position === 'top' ? 'mb-0' : null

    return [baseClass, conditionalClass, legendClass, 'w-100'].filter(Boolean)
  }

  const getNestedGroup = (singleFilter: VizFilter): string[] => {
    if (singleFilter.filterStyle !== 'nested-dropdown') return []
    return (singleFilter.queuedActive || [singleFilter.active, singleFilter.subGrouping?.active]) as [string, string]
  }

  return (
    <section className={getClasses().join(' ')}>
      {visualizationConfig.filterIntro && (
        <p className='filters-section__intro-text mb-3'>{parse(visualizationConfig.filterIntro)}</p>
      )}
      <div className='d-flex flex-wrap w-100 filters-section__wrapper align-items-end'>
        <>
          {vizFiltersWithValues.map((singleFilter: VizFilter, outerIndex) => {
            if (singleFilter.showDropdown === false) return
            const { label, filterStyle, columnName } = singleFilter as VizFilter
            const [nestedActiveGroup, nestedActiveSubGroup] = getNestedGroup(singleFilter)

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
            const hideLabelMargin = singleFilter.filterStyle === 'tab-simple' && !showDefaultDropdown
            return (
              <div
                className={classList.join(' ')}
                key={outerIndex}
                ref={el => (wrappingFilterRefs.current[columnName] = el)}
              >
                {label && (
                  <label
                    className={`font-weight-bold fw-bold mb-${hideLabelMargin ? '0' : '2'}`}
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
                    updateField={(_section, _subSection, fieldName, value) => {
                      const defaultSelection = singleFilter.defaultValue || [singleFilter.values[0]]
                      const selection = value?.length ? value : defaultSelection
                      changeFilterActive(fieldName, selection)
                    }}
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
                Apply
              </Button>
              <Button secondary disabled={initialFiltersActive} onClick={handleReset}>
                Clear Filters
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
