import { useContext, useMemo } from 'react'
import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'

import './multiconfigtabs.styles.css'
import { updateQueryParam } from '@cdc/core/helpers/queryStringUtils'

const MultiTabs = () => {
  const { config } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)
  const tabs = useMemo<string[]>(
    () => (config.multiDashboards || []).map(({ label }) => label),
    [config.multiDashboards]
  )
  const activeTab = useMemo<number>(() => config.activeDashboard, [config.activeDashboard])

  const load = (indexToSwitchTo: number, e) => {
    e.preventDefault() // some form wrapper is causing this to act as a submit button
    dispatch({ type: 'SWITCH_CONFIG', payload: indexToSwitchTo })
    updateQueryParam('cove-tab', indexToSwitchTo)
  }

  if (!config.multiDashboards) return null
  return (
    <ul className='nav nav-tabs multi-config-tabs mb-4'>
      {tabs.map((tab, index) => (
        <li key={tab + index} className='nav-item'>
          <a
            className={`nav-link${activeTab === index ? ' active' : ''}`}
            aria-current={activeTab === index ? 'page' : null}
            href='#'
            onClick={e => load(index, e)}
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MultiTabs
