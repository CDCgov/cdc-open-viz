import { useContext, useState } from 'react'
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
import { applyQueuedActive } from '@cdc/core/components/Filters/helpers/applyQueuedActive'
import './dashboardfilter.styles.css'
import { updateChildFilters } from '../../helpers/updateChildFilters'
import { getFipsCode } from '@cdc/map/src/data/supported-geos'

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
  setAPILoading: (loading: boolean) => void
}

const DashboardFiltersWrapper: React.FC<DashboardFiltersProps> = ({
  apiFilterDropdowns,
  visualizationConfig,
  setConfig: updateConfig,
  currentViewport,
  isEditor = false
}) => {
  const state = useContext(DashboardContext)
  const { config: dashboardConfig, reloadURLData, loadAPIFilters, setAPIFilterDropdowns, setAPILoading } = state
  const dispatch = useContext(DashboardDispatchContext)

  const applyFilters = e => {
    e.preventDefault() // prevent form submission
    const dashboardConfig = _.cloneDeep(state.config.dashboard)
    const nonAutoLoadFilterIndexes = Object.values(state.config.visualizations)
      .filter(v => v.type === 'dashboardFilters')
      .reduce((acc, viz: DashboardFilters) => (!viz.autoLoad ? [...acc, viz.sharedFilterIndexes] : acc), [])
    const allRequiredFiltersSelected = !dashboardConfig.sharedFilters.some((filter, filterIndex) => {
      if (nonAutoLoadFilterIndexes.includes(filterIndex)) {
        return !filter.active && !filter.queuedActive
      } else {
        // autoload filters don't need to be selected to apply filters
        return false
      }
    })
    if (allRequiredFiltersSelected) {
      if (hasDashboardApplyBehavior(state.config.visualizations)) {
        const queryParams = getQueryParams()
        let needsQueryUpdate = false
        dashboardConfig.sharedFilters.forEach(sharedFilter => {
          if (sharedFilter.queuedActive) {
            applyQueuedActive(sharedFilter)
            if (
              sharedFilter.setByQueryParameter &&
              queryParams[sharedFilter.setByQueryParameter] !== sharedFilter.active
            ) {
              queryParams[sharedFilter.setByQueryParameter] = Array.isArray(sharedFilter.active)
                ? sharedFilter.active.join(',')
                : sharedFilter.active
              needsQueryUpdate = true
            }
          }
        })

        if (needsQueryUpdate) {
          updateQueryString(queryParams)
        }
      }
      setAPILoading(true)
      dispatch({ type: 'SET_SHARED_FILTERS', payload: dashboardConfig.sharedFilters })
      dispatch({ type: 'SET_FILTERED_DATA', payload: getFilteredData(_.cloneDeep(state)) })
      loadAPIFilters(dashboardConfig.sharedFilters, apiFilterDropdowns)
        .then(newFilters => {
          reloadURLData(newFilters)
        })
        .catch(e => {
          console.error(e)
        })
    } else {
      // TODO noftify of required fields
    }
  }

  const handleOnChange = (index: number, value: string | string[]) => {
    // check if the filter type is a configFilter
    if (dashboardConfig.dashboard.sharedFilters[index].type === 'configFilter') {
      // and then update the shared filters
      const newConfig = _.cloneDeep(dashboardConfig)

      // check the sharedFilters usedBy property to see if the filter is used by any visualizations
      // if it is, then update the data for the visualization
      const visualizationsToCheck = dashboardConfig.dashboard.sharedFilters[index].usedBy

      const lookup = {
        State: 'us',
        County: 'single-state'
      }

      if (visualizationsToCheck) {
        visualizationsToCheck.forEach(vizIndex => {
          const viz = newConfig.visualizations[vizIndex]
          if (dashboardConfig.dashboard.sharedFilters[index].propertyToUpdate === 'focusedState') {
            // get fips code by state name
            const f = getFipsCode(value)
            viz.general.statePicked = { fipsCode: f, stateName: value }
          }
          if (dashboardConfig.dashboard.sharedFilters[index].propertyToUpdate === 'geoType') {
            viz.general.geoType = lookup[value]
          }
        })
      }
      // set config
      dispatch({ type: 'SET_CONFIG', payload: newConfig })
    }

    const newConfig = _.cloneDeep(dashboardConfig)
    let [newSharedFilters, changedFilterIndexes] = changeFilterActive(
      index,
      value,
      newConfig.dashboard.sharedFilters,
      visualizationConfig
    )

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
      if (isAutoSelectFilter && !missingFilterSelections) {
        // a dropdown has been selected that doesn't
        // require the Go Button
        setAPIFilterDropdowns(loadingFilterMemo)
        loadAPIFilters(newSharedFilters, loadingFilterMemo).then(filters => {
          reloadURLData(filters)
        })
      } else {
        newSharedFilters[index].queuedActive = value
        // setData to empty object because we no longer have a data state.
        dispatch({ type: 'SET_DATA', payload: {} })
        dispatch({ type: 'SET_FILTERED_DATA', payload: {} })
        setAPIFilterDropdowns(loadingFilterMemo)
        loadAPIFilters(newSharedFilters, loadingFilterMemo)
      }
    } else {
      if (newSharedFilters[index].type === 'urlfilter' && newSharedFilters[index].apiFilter) {
        reloadURLData(newSharedFilters)
      } else {
        const clonedState = _.cloneDeep(state)
        clonedState.config.dashboard.sharedFilters = newSharedFilters
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
            />
          </div>
        </Layout.Responsive>
      )}
    </Layout.VisualizationWrapper>
  )
}

export default DashboardFiltersWrapper
