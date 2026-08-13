import { useContext, useState } from 'react'
import Widget from '../Widget/Widget'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import EditorContext from '@cdc/core/contexts/EditorContext'
import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'
import { addVisualization } from '../../helpers/addVisualization'
import { mapDataToConfig } from '../../helpers/mapDataToConfig'
import './visualizations-panel-styles.css'
import { MultiDashboardConfig } from '../../types/MultiDashboard'
import { stripConfig } from '../../helpers/formatConfigBeforeSave'

const VisualizationsPanel = () => {
  const [advancedEditing, setAdvancedEditing] = useState(false)
  const { config } = useContext(DashboardContext)
  const editorContext = useContext(EditorContext)
  const dispatch = useContext(DashboardDispatchContext)
  const createVisualization = (type, subType) =>
    addVisualization(type, subType, { existingIds: Object.keys(config.visualizations || {}) })
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
  const hasModernStylesAction = Boolean(editorContext.modernStylesAction)
  return (
    <div
      className={`visualizations-panel${advancedEditing ? ' advanced-editor' : ''}${
        hasModernStylesAction ? ' has-modern-styles-action' : ''
      }`}
    >
      <p style={{ fontSize: '16px' }}>Click and drag an item onto the grid to add it to your dashboard.</p>
      <span className='subheading-3'>Chart</span>
      <div className='drag-grid'>
        <Widget addVisualization={() => createVisualization('chart', 'Bar')} type='Bar' />
        <Widget addVisualization={() => createVisualization('chart', 'Line')} type='Line' />
        <Widget addVisualization={() => createVisualization('chart', 'Pie')} type='Pie' />
        <Widget addVisualization={() => createVisualization('chart', 'Sankey')} type='Sankey' />
      </div>
      <span className='subheading-3'>Map</span>
      <div className='drag-grid'>
        <Widget addVisualization={() => createVisualization('map', 'us')} type='us' />
        <Widget addVisualization={() => createVisualization('map', 'world')} type='world' />
        <Widget addVisualization={() => createVisualization('map', 'single-state')} type='single-state' />
      </div>
      <span className='subheading-3'>Misc.</span>
      <div className='drag-grid'>
        <Widget addVisualization={() => createVisualization('data-bite', '')} type='data-bite' />
        <Widget addVisualization={() => createVisualization('waffle-chart', 'Waffle')} type='waffle-chart' />
        <Widget addVisualization={() => createVisualization('markup-include', '')} type='markup-include' />
        <Widget addVisualization={() => createVisualization('dashboardFilters', '')} type='dashboardFilters' />
        <Widget addVisualization={() => createVisualization('table', '')} type='table' />
      </div>
      {hasModernStylesAction && (
        <div className='modern-styles-sidebar-action modern-styles-sidebar-action--dashboard'>
          <button
            className='modern-styles-sidebar-action__button'
            type='button'
            onClick={editorContext.modernStylesAction.onClick}
          >
            <span className='modern-styles-sidebar-action__label'>{editorContext.modernStylesAction.label}</span>
            <span className='modern-styles-sidebar-action__icon' aria-hidden='true'>
              &rarr;
            </span>
          </button>
        </div>
      )}
      <AdvancedEditor
        loadConfig={loadConfig}
        config={config}
        convertStateToConfig={() => undefined}
        stripConfig={cfg => stripConfig(cfg)}
        onExpandCollapse={() => {
          setAdvancedEditing(!advancedEditing)
        }}
      />
    </div>
  )
}

export default VisualizationsPanel
