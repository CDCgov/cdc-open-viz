import Icon from '@cdc/core/components/ui/Icon'
import { AnyVisualization } from '@cdc/core/types/Visualization'

export const iconHash = {
  'data-bite': <Icon display='databite' base />,
  Bar: <Icon display='chartBar' base />,
  'Spark Line': <Icon display='chartLine' />,
  'waffle-chart': <Icon display='grid' base />,
  'markup-include': <Icon display='code' base />,
  Line: <Icon display='chartLine' base />,
  Pie: <Icon display='chartPie' base />,
  us: <Icon display='mapUsa' base />,
  'us-county': <Icon display='mapUsa' base />,
  world: <Icon display='mapWorld' base />,
  'single-state': <Icon display='mapAl' base />,
  gear: <Icon display='gear' base />,
  gearMulti: <Icon display='gearMulti' base />,
  tools: <Icon display='tools' base />,
  'filtered-text': <Icon display='filtered-text' base />,
  dashboardFilters: <Icon display='dashboardFilters' base />,
  table: <Icon display='table' base />,
  Sankey: <Icon display='sankey' base />
}

export const getIcon = (visualization: AnyVisualization) => {
  const { type, visualizationType, general } = visualization
  if (visualizationType) return iconHash[visualizationType]
  if (general?.geoType) {
    // for visualizations, mismatching state and state icon is not desired
    // so instead of showing alabama as the default state icon we show the US icon.
    if (general.geoType === 'single-state') return iconHash['us']
    return iconHash[general.geoType]
  }
  return iconHash[type]
}
