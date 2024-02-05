import { useContext, useMemo } from 'react'
import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'

import './multiconfigtabs.styles.css'

const MultiTabs = () => {
  const { config } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)
  const tabs = useMemo<string[]>(() => (config.multiDashboards || []).map(({ label }) => label), [config.multiDashboards])
  const activeTab = useMemo<number>(() => config.activeDashboard, [config.activeDashboard])

  const load = (indexToSwitchTo: number) => {
    dispatch({ type: 'SWITCH_CONFIG', payload: indexToSwitchTo })
  }

  if (!config.multiDashboards) return null
  return (
    <ul className='nav nav-tabs multi-config-tabs'>
      {tabs.map((tab, index) => (
        <li className='nav-item'>
          <a className={`nav-link${activeTab === index ? ' active' : ''}`} aria-current={activeTab === index ? 'page' : null} href='#' onClick={() => load(index)}>
            {tab}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MultiTabs
