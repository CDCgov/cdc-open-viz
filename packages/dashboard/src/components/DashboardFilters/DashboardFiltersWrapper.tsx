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

export type DropdownOptions = Record<'value' | 'text', string>[]

export type APIFilterDropdowns = {
  // null means still loading
  [filtername: string]: null | DropdownOptions
}

type DashboardFiltersProps = {
  apiFilterDropdowns: APIFilterDropdowns
  visualizationConfig: DashboardFilters
  isEditor?: boolean
  setConfig: (config: DashboardFilters) => void
  currentViewport?: ViewPort
}

const DashboardFiltersWrapper: React.FC<DashboardFiltersProps> = ({ apiFilterDropdowns, visualizationConfig, setConfig: updateConfig, currentViewport, isEditor = false }) => {
  const state = useContext(DashboardContext)
  const { config: dashboardConfig, reloadURLData, loadAPIFilters } = state
  const dispatch = useContext(DashboardDispatchContext)

  const applyFilters = () => {
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
        dashboardConfig.sharedFilters.forEach((sharedFilter, index) => {
          if (sharedFilter.queuedActive) {
            dashboardConfig.sharedFilters[index].active = sharedFilter.queuedActive
            delete dashboardConfig.sharedFilters[index].queuedActive

            if (sharedFilter.setByQueryParameter && queryParams[sharedFilter.setByQueryParameter] !== sharedFilter.active) {
              queryParams[sharedFilter.setByQueryParameter] = Array.isArray(sharedFilter.active) ? sharedFilter.active.join(',') : sharedFilter.active
              needsQueryUpdate = true
            }
          }
        })

        if (needsQueryUpdate) {
          updateQueryString(queryParams)
        }
      }

      dispatch({ type: 'SET_SHARED_FILTERS', payload: dashboardConfig.sharedFilters })
      dispatch({ type: 'SET_FILTERED_DATA', payload: getFilteredData(_.cloneDeep(state)) })
      loadAPIFilters(dashboardConfig.sharedFilters)
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
    const newConfig = _.cloneDeep(dashboardConfig)
    let newSharedFilters = changeFilterActive(index, value, newConfig.dashboard.sharedFilters, visualizationConfig)

    if (hasDashboardApplyBehavior(dashboardConfig.visualizations)) {
      const isAutoSelectFilter = visualizationConfig.autoLoad
      const missingFilterSelections = newConfig.dashboard.sharedFilters.some(f => !f.active)
      if (isAutoSelectFilter && !missingFilterSelections) {
        // a dropdown has been selected that doesn't
        // require the Go Button
        loadAPIFilters(newSharedFilters).then(filters => {
          reloadURLData(filters)
        })
      } else {
        newSharedFilters[index].queuedActive = value
        // setData to empty object because we no longer have a data state.
        dispatch({ type: 'SET_DATA', payload: {} })
        dispatch({ type: 'SET_FILTERED_DATA', payload: {} })
        loadAPIFilters(newSharedFilters)
      }
    } else {
      if (newSharedFilters[index].apiFilter) {
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

  return (
    <Layout.VisualizationWrapper config={visualizationConfig} isEditor={isEditor} currentViewport={currentViewport}>
      {isEditor && (
        <Layout.Sidebar displayPanel={displayPanel} isDashboard={true} title={'Configure Dashboard Filters'} onBackClick={onBackClick}>
          <DashboardFiltersEditor updateConfig={updateConfig} vizConfig={visualizationConfig} />
        </Layout.Sidebar>
      )}

      <Layout.Responsive isEditor={isEditor}>
        <div className={`cdc-dashboard-inner-container${isEditor ? ' is-editor' : ''} cove-component__content col-12`}>
          <Filters show={visualizationConfig?.sharedFilterIndexes?.map(Number)} filters={dashboardConfig.dashboard.sharedFilters || []} apiFilterDropdowns={apiFilterDropdowns} handleOnChange={handleOnChange} />
          {visualizationConfig.filterBehavior === FilterBehavior.Apply && !visualizationConfig.autoLoad && <button onClick={applyFilters}>GO!</button>}
        </div>
      </Layout.Responsive>
    </Layout.VisualizationWrapper>
  )
}

export default DashboardFiltersWrapper
