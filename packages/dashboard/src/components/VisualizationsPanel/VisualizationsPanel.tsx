import { useContext, useState } from 'react'
import { type BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import Widget from '../Widget/Widget'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import { Table } from '@cdc/core/types/Table'
import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'
import { mapDataToConfig } from '../../helpers/mapDataToConfig'
import './visualizations-panel-styles.css'
import { MultiDashboardConfig } from '../../types/MultiDashboard'
import { stripConfig } from '../../helpers/formatConfigBeforeSave'

const addVisualization = (type, subType) => {
  const modalWillOpen = type !== 'markup-include'
  const newVisualizationConfig: Partial<BaseVisualizationConfig> & Record<string, any> = {
    filters: [],
    filterBehavior: 'Filter Change',
    newViz: type !== 'table',
    openModal: modalWillOpen,
    uid: type + Date.now(),
    type
  }

  switch (type) {
    case 'chart':
      newVisualizationConfig.visualizationType = subType
      break
    case 'map':
      newVisualizationConfig.general = {}
      newVisualizationConfig.general.geoType = subType
      break
    case 'data-bite':
    case 'waffle-chart':
    case 'filtered-text':
      newVisualizationConfig.visualizationType = type
      break
    case 'table':
      const tableConfig: Table = {
        label: 'Data Table',
        show: true,
        showDownloadUrl: false,
        showVertical: true,
        expanded: true,
        collapsible: true
      }
      newVisualizationConfig.table = tableConfig
      newVisualizationConfig.columns = {}
      newVisualizationConfig.dataFormat = {}
      newVisualizationConfig.visualizationType = type
      break
    case 'markup-include':
      newVisualizationConfig.contentEditor = {
        inlineHTML: '<h2>Inline HTML</h2>',
        markupVariables: [],
        showHeader: true,
        srcUrl: '#example',
        title: 'Markup Include',
        useInlineHTML: true
      }
      newVisualizationConfig.theme = 'theme-blue'
      newVisualizationConfig.visual = {
        border: false,
        accent: false,
        background: false,
        hideBackgroundColor: false,
        borderColorTheme: false
      }
      newVisualizationConfig.showEditorPanel = true
      newVisualizationConfig.visualizationType = type

      break
    case 'dashboardFilters': {
      newVisualizationConfig.sharedFilterIndexes = []
      newVisualizationConfig.visualizationType = type
      break
    }
    default:
      newVisualizationConfig.visualizationType = type
      break
  }

  return newVisualizationConfig
}

const VisualizationsPanel = () => {
  const [advancedEditing, setAdvancedEditing] = useState(false)
  const { config } = useContext(DashboardContext)
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
        <Widget addVisualization={() => addVisualization('chart', 'Bar')} type='Bar' title='Bar Chart' />
        <Widget addVisualization={() => addVisualization('chart', 'Line')} type='Line' title='Line Chart' />
        <Widget addVisualization={() => addVisualization('chart', 'Pie')} type='Pie' title='Pie Chart' />
        <Widget addVisualization={() => addVisualization('chart', 'Sankey')} type='Sankey' title='Sankey Chart' />
      </div>
      <span className='subheading-3'>Map</span>
      <div className='drag-grid'>
        <Widget addVisualization={() => addVisualization('map', 'us')} type='us' title='US Map' />
        <Widget addVisualization={() => addVisualization('map', 'world')} type='world' title='World Map' />
        <Widget
          addVisualization={() => addVisualization('map', 'single-state')}
          type='single-state'
          title='State Map'
        />
      </div>
      <span className='subheading-3'>Misc.</span>
      <div className='drag-grid'>
        <Widget addVisualization={() => addVisualization('data-bite', '')} type='data-bite' title='Data Bite' />
        <Widget
          addVisualization={() => addVisualization('waffle-chart', '')}
          type='waffle-chart'
          title='Waffle Chart'
        />
        <Widget
          addVisualization={() => addVisualization('markup-include', '')}
          type='markup-include'
          title='Markup Include'
        />
        <Widget
          addVisualization={() => addVisualization('filtered-text', '')}
          type='filtered-text'
          title='Filtered Text'
        />
        <Widget
          addVisualization={() => addVisualization('dashboardFilters', '')}
          type='dashboardFilters'
          title='Dashboard Filters'
        />
        <Widget addVisualization={() => addVisualization('table', '')} type='table' title='Data Table' />
      </div>
      <AdvancedEditor
        loadConfig={loadConfig}
        config={config}
        convertStateToConfig={() => undefined}
        stripConfig={stripConfig}
        onExpandCollapse={() => {
          setAdvancedEditing(!advancedEditing)
        }}
      />
    </div>
  )
}

export default VisualizationsPanel
