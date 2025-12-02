import { useContext, useState, useRef } from 'react'
import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'
import Filters from './DashboardFilters'
import { changeFilterActive } from '../../helpers/changeFilterActive'
import _ from 'lodash'
import { FilterBehavior } from '../../helpers/FilterBehavior'
import { getFilteredData } from '../../helpers/getFilteredData'
import { DashboardFilters } from '../../types/DashboardFilters'
import { getQueryParams, updateQueryString } from '@cdc/core/helpers/queryStringUtils'
import Layout from '@cdc/core/components/Layout'
import DashboardFiltersEditor from './DashboardFiltersEditor'
import { ViewPort } from '@cdc/core/types/ViewPort'
import { hasDashboardApplyBehavior } from '../../helpers/hasDashboardApplyBehavior'
import * as apiFilterHelpers from '../../helpers/apiFilterHelpers'
import * as filterResetHelpers from '../../helpers/filterResetHelpers'
import { applyQueuedActive } from '@cdc/core/components/Filters/helpers/applyQueuedActive'
import './dashboardfilter.styles.css'
import { updateChildFilters } from '../../helpers/updateChildFilters'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'

type SubOptions = { subOptions?: Record<'value' | 'text', string>[] }

export type DropdownOptions = (Record<'value' | 'text', string> & SubOptions)[]

/** the cached dropdown options for each filter */
export type APIFilterDropdowns = {
  // null means still loading
  [dropdownsKey: string]: null | DropdownOptions
}

type DashboardFiltersProps = {
  apiFilterDropdowns: APIFilterDropdowns
  visualizationConfig: DashboardFilters
  isEditor?: boolean
  setConfig: (config: DashboardFilters) => void
  currentViewport?: ViewPort
  interactionLabel: string
}

const DashboardFiltersWrapper: React.FC<DashboardFiltersProps> = ({
  apiFilterDropdowns,
  visualizationConfig,
  setConfig: updateConfig,
  currentViewport,
  isEditor = false,
  interactionLabel = ''
}) => {
  const state = useContext(DashboardContext)
  const { config: dashboardConfig, reloadURLData, loadAPIFilters, setAPIFilterDropdowns, setAPILoading } = state
  const dispatch = useContext(DashboardDispatchContext)

  // Track filter version to prevent stale async updates from overwriting cleared filters
  const filterVersionRef = useRef(0)

  const applyFilters = e => {
    e.preventDefault() // prevent form submission

    // Increment version to invalidate any pending async filter operations from handleOnChange
    filterVersionRef.current += 1

    const dashboardConfig = {
      ...state.config.dashboard,
      sharedFilters: [...state.config.dashboard.sharedFilters] // Only clone the array we need to modify
    }

    const nonAutoLoadFilterIndexes = Object.values(state.config.visualizations)
      .filter(v => v.type === 'dashboardFilters')
      .reduce((acc, viz: DashboardFilters) => (!viz.autoLoad ? [...acc, ...viz.sharedFilterIndexes] : acc), [])
    const allRequiredFiltersSelected = !dashboardConfig.sharedFilters.some((filter, filterIndex) => {
      if (nonAutoLoadFilterIndexes.includes(filterIndex)) {
        const activeValue = filter.queuedActive || filter.active
        // Check if filter is not selected OR is set to its reset label
        const isNotSelected = !activeValue || (filter.resetLabel && activeValue === filter.resetLabel)
        return isNotSelected
      } else {
        // autoload filters don't need to be selected to apply filters
        return false
      }
    })
    if (allRequiredFiltersSelected) {
      const hasApplyBehavior = hasDashboardApplyBehavior(state.config.visualizations)
      if (hasApplyBehavior) {
        const queryParams = getQueryParams()
        let needsQueryUpdate = false
        dashboardConfig.sharedFilters.forEach(sharedFilter => {
          if (sharedFilter.queuedActive) applyQueuedActive(sharedFilter)
          if (
            sharedFilter.setByQueryParameter &&
            queryParams[sharedFilter.setByQueryParameter] !== sharedFilter.active
          ) {
            queryParams[sharedFilter.setByQueryParameter] = Array.isArray(sharedFilter.active)
              ? sharedFilter.active.join(',')
              : sharedFilter.active
            needsQueryUpdate = true
          }
        })

        if (needsQueryUpdate) {
          updateQueryString(queryParams)
        }
      }
      setAPILoading(true)
      dispatch({ type: 'SET_SHARED_FILTERS', payload: dashboardConfig.sharedFilters })

      // Capture current version for this operation
      const operationVersion = filterVersionRef.current
      const isStale = () => filterVersionRef.current !== operationVersion

      loadAPIFilters(dashboardConfig.sharedFilters, apiFilterDropdowns, undefined, undefined, isStale)
        .then(async newFilters => {
          // Skip if operation is stale
          if (isStale()) {
            return
          }

          // First try to reload URL data (for filters that actually change the API call)
          await reloadURLData(newFilters)

          // Set filters applied AFTER data is loaded to prevent "no data" flash
          if (hasApplyBehavior) {
            dispatch({ type: 'SET_FILTERS_APPLIED', payload: true })
          }
          setAPILoading(false)
        })
        .catch(e => {
          console.error(e)
          setAPILoading(false)
        })
    } else {
      // TODO noftify of required fields
    }
  }

  const handleReset = e => {
    e.preventDefault()

    // Increment version to invalidate any pending async filter operations
    filterVersionRef.current += 1

    const dashboardConfig = {
      ...state.config.dashboard,
      sharedFilters: _.cloneDeep(state.config.dashboard.sharedFilters)
    }

    const queryParams = getQueryParams()
    let needsQueryUpdate = false

    // Reset each filter to empty/resetLabel state (forceEmpty = true)
    dashboardConfig.sharedFilters.forEach((filter, i) => {
      const resetValue = filterResetHelpers.getFilterResetValue(filter, apiFilterDropdowns, true)
      filterResetHelpers.resetFilterToValue(dashboardConfig.sharedFilters[i], resetValue, apiFilterDropdowns)

      // Update query parameters if needed
      if (
        filter.setByQueryParameter &&
        queryParams[filter.setByQueryParameter] !== dashboardConfig.sharedFilters[i].active
      ) {
        queryParams[filter.setByQueryParameter] = dashboardConfig.sharedFilters[i].active
        needsQueryUpdate = true
      }
    })

    if (needsQueryUpdate) {
      updateQueryString(queryParams)
    }

    // Clear dropdown cache for child filters that depend on parents
    const updatedDropdowns = filterResetHelpers.clearChildFilterDropdowns(
      dashboardConfig.sharedFilters,
      apiFilterDropdowns
    )
    setAPIFilterDropdowns(updatedDropdowns)

    dispatch({ type: 'SET_SHARED_FILTERS', payload: dashboardConfig.sharedFilters })

    // Reset filtersApplied state to false when clearing filters
    dispatch({ type: 'SET_FILTERS_APPLIED', payload: false })

    // Update filtered data immediately after resetting filters
    // Use the updated dashboardConfig filters instead of state
    const clonedState = {
      ...state,
      config: {
        ...state.config,
        dashboard: {
          ...state.config.dashboard,
          sharedFilters: dashboardConfig.sharedFilters
        }
      }
    }
    const newFilteredData = getFilteredData(clonedState)
    dispatch({ type: 'SET_FILTERED_DATA', payload: newFilteredData })

    publishAnalyticsEvent({
      vizType: dashboardConfig.type,
      vizSubType: getVizSubType(dashboardConfig),
      eventType: `dashboard_filter_reset`,
      eventAction: 'click',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(dashboardConfig)
    })
  }

  const handleOnChange = (index: number, value: string | string[]) => {
    const newConfig = {
      ...dashboardConfig,
      dashboard: {
        ...dashboardConfig.dashboard,
        sharedFilters: [...dashboardConfig.dashboard.sharedFilters] // Only clone the array we modify
      }
    }

    let [newSharedFilters, changedFilterIndexes] = changeFilterActive(
      index,
      value,
      newConfig.dashboard.sharedFilters,
      visualizationConfig
    )

    publishAnalyticsEvent({
      vizType: dashboardConfig.type,
      vizSubType: getVizSubType(dashboardConfig),
      eventType: `dashboard_filter_changed`,
      eventAction: 'change',
      eventLabel: `${interactionLabel}`,
      vizTitle: getVizTitle(dashboardConfig),
      specifics: `key: ${newConfig.dashboard.sharedFilters[index]?.columnName || 'unknown'}, value: ${value}`
    })

    // sets the active filter option that the user just selected.
    dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })

    if (hasDashboardApplyBehavior(dashboardConfig.visualizations)) {
      const isAutoSelectFilter = visualizationConfig.autoLoad
      const missingFilterSelections = newConfig.dashboard.sharedFilters.some(f => !f.active)
      const apiEndpoints = newSharedFilters.filter(f => f.apiFilter).map(f => f.apiFilter.apiEndpoint)
      const loadingFilterMemo = apiFilterHelpers.getLoadingFilterMemo(
        apiEndpoints,
        apiFilterDropdowns,
        changedFilterIndexes
      )
      // Capture current version for this operation
      const operationVersion = filterVersionRef.current
      const isStale = () => filterVersionRef.current !== operationVersion

      if (isAutoSelectFilter && !missingFilterSelections) {
        // a dropdown has been selected that doesn't
        // require the Go Button
        setAPIFilterDropdowns(loadingFilterMemo)
        loadAPIFilters(newSharedFilters, loadingFilterMemo, undefined, undefined, isStale).then(filters => {
          if (!isStale()) {
            reloadURLData(filters)
          }
        })
      } else {
        newSharedFilters[index].queuedActive = value

        // Don't clear data immediately - keep existing data until new data loads
        // Only update the filter dropdowns and prepare for reload
        setAPIFilterDropdowns(loadingFilterMemo)
        loadAPIFilters(newSharedFilters, loadingFilterMemo, undefined, undefined, isStale)
      }
    } else {
      if (newSharedFilters[index].type === 'urlfilter' && newSharedFilters[index].apiFilter) {
        reloadURLData(newSharedFilters)
      } else {
        const clonedState = {
          ...state,
          config: {
            ...state.config,
            dashboard: {
              ...state.config.dashboard,
              sharedFilters: newSharedFilters
            }
          }
        }
        const newFilteredData = getFilteredData(clonedState)
        dispatch({ type: 'SET_FILTERED_DATA', payload: newFilteredData })
        dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
      }
    }
  }
  const [displayPanel, setDisplayPanel] = useState(true)
  const onBackClick = () => {
    setDisplayPanel(!displayPanel)
    updateConfig({
      ...visualizationConfig,
      showEditorPanel: !displayPanel
    })
  }

  // if all of the filters are hidden filters don't display the VisualizationWrapper
  const filters = visualizationConfig?.sharedFilterIndexes
    ?.map(Number)
    .map(filterIndex => dashboardConfig.dashboard.sharedFilters[filterIndex])

  const displayNone = filters.length ? filters.every(filter => filter.showDropdown === false) : false
  if (displayNone && !isEditor) return <></>
  return (
    <Layout.VisualizationWrapper config={visualizationConfig} isEditor={isEditor} currentViewport={currentViewport}>
      {isEditor && (
        <Layout.Sidebar
          displayPanel={displayPanel}
          isDashboard={true}
          title={'Configure Dashboard Filters'}
          onBackClick={onBackClick}
        >
          <DashboardFiltersEditor updateConfig={updateConfig} vizConfig={visualizationConfig} />
        </Layout.Sidebar>
      )}

      {!displayNone && (
        <Layout.Responsive isEditor={isEditor}>
          <div
            className={`${
              isEditor ? ' is-editor' : ''
            } cove-component__content col-12 cove-dashboard-filters-container`}
          >
            <Filters
              show={visualizationConfig?.sharedFilterIndexes?.map(Number)}
              filters={updateChildFilters(dashboardConfig.dashboard.sharedFilters, state.data) || []}
              apiFilterDropdowns={apiFilterDropdowns}
              handleOnChange={handleOnChange}
              showSubmit={visualizationConfig.filterBehavior === FilterBehavior.Apply && !visualizationConfig.autoLoad}
              applyFilters={applyFilters}
              applyFiltersButtonText={visualizationConfig.applyFiltersButtonText}
              handleReset={
                visualizationConfig.filterBehavior === FilterBehavior.Apply &&
                (visualizationConfig.showClearButton ?? true)
                  ? handleReset
                  : undefined
              }
            />
          </div>
        </Layout.Responsive>
      )}
    </Layout.VisualizationWrapper>
  )
}

export default DashboardFiltersWrapper
