import { useContext, useState } from 'react'
import type { Visualization } from '@cdc/core/types/Visualization'
import Widget from '../Widget'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import { Table } from '@cdc/core/types/Table'
import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'
import { mapDataToConfig } from '../../helpers/mapDataToConfig'
import './visualizations-panel-styles.css'

const addVisualization = (type, subType) => {
  const modalWillOpen = type !== 'markup-include'
  const newVisualizationConfig: Partial<Visualization> = {
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
    case 'data-bite' || 'waffle-chart' || 'filtered-text':
      newVisualizationConfig.visualizationType = type
      break
    case 'table':
      const tableConfig: Table = { label: 'Data Table', show: true, showDownloadUrl: false, showVertical: true, expanded: true, collapsible: true }
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
  const loadConfig = newConfig => dispatch({ type: 'APPLY_CONFIG', payload: [mapDataToConfig(newConfig)] })
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
        <Widget addVisualization={() => addVisualization('filter-dropdowns', '')} type='filter-dropdowns' />
        <Widget addVisualization={() => addVisualization('table', '')} type='table' />
      </div>
      <span className='subheading-3'>Advanced</span>
      <AdvancedEditor
        loadConfig={loadConfig}
        config={config}
        convertStateToConfig={() => undefined}
        onExpandCollapse={() => {
          setAdvancedEditing(!advancedEditing)
        }}
      />
    </div>
  )
}

export default VisualizationsPanel
