import { useContext, useState } from 'react'
import Widget from '../Widget/Widget'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'
import { addVisualization } from '../../helpers/addVisualization'
import { mapDataToConfig } from '../../helpers/mapDataToConfig'
import './visualizations-panel-styles.css'
import { MultiDashboardConfig } from '../../types/MultiDashboard'
import { stripConfig } from '../../helpers/formatConfigBeforeSave'

const VisualizationsPanel = () => {
  const [advancedEditing, setAdvancedEditing] = useState(false)
  const { config, isEditor } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)
  const loadConfig = incomingConfig => {
    const newConfig = !incomingConfig.multiDashboards
      ? incomingConfig
      : ({
          ...config,
          ...incomingConfig,
          ...incomingConfig.multiDashboards[config.activeDashboard],
          activeDashboard: config.activeDashboard
        } as MultiDashboardConfig)

    dispatch({ type: 'APPLY_CONFIG', payload: [mapDataToConfig(newConfig)] })
  }
  return (
    <div className={`visualizations-panel${advancedEditing ? ' advanced-editor' : ''}`}>
      <p style={{ fontSize: '14px' }}>Click and drag an item onto the grid to add it to your dashboard.</p>
      <span className='subheading-3'>Chart</span>
      <div className='drag-grid'>
        <Widget addVisualization={() => addVisualization('chart', 'Bar')} type='Bar' />
        <Widget addVisualization={() => addVisualization('chart', 'Line')} type='Line' />
        <Widget addVisualization={() => addVisualization('chart', 'Pie')} type='Pie' />
        <Widget addVisualization={() => addVisualization('chart', 'Sankey')} type='Sankey' />
      </div>
      <span className='subheading-3'>Map</span>
      <div className='drag-grid'>
        <Widget addVisualization={() => addVisualization('map', 'us')} type='us' />
        <Widget addVisualization={() => addVisualization('map', 'world')} type='world' />
        <Widget addVisualization={() => addVisualization('map', 'single-state')} type='single-state' />
      </div>
      <span className='subheading-3'>Misc.</span>
      <div className='drag-grid'>
        <Widget addVisualization={() => addVisualization('data-bite', '')} type='data-bite' />
        <Widget addVisualization={() => addVisualization('waffle-chart', '')} type='waffle-chart' />
        <Widget addVisualization={() => addVisualization('markup-include', '')} type='markup-include' />
        <Widget addVisualization={() => addVisualization('filtered-text', '')} type='filtered-text' />
        <Widget addVisualization={() => addVisualization('dashboardFilters', '')} type='dashboardFilters' />
        <Widget addVisualization={() => addVisualization('table', '')} type='table' />
      </div>
      <AdvancedEditor
        loadConfig={loadConfig}
        config={config}
        convertStateToConfig={() => undefined}
        stripConfig={cfg => stripConfig(cfg, isEditor)}
        onExpandCollapse={() => {
          setAdvancedEditing(!advancedEditing)
        }}
      />
    </div>
  )
}

export default VisualizationsPanel
