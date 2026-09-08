import type { AnyVisualization } from '@cdc/core/types/Visualization'
import type { Table } from '@cdc/core/types/Table'
import { createCoveId } from '@cdc/core/helpers/createCoveId'
import type { CreateCoveIdOptions } from '@cdc/core/helpers/createCoveId'
import { createNewChartConfig } from '@cdc/chart/src/helpers/createNewChartConfig'
import { createNewMapConfig } from '@cdc/map/src/helpers/createNewMapConfig'

export const addVisualization = (type, subType, idOptions?: CreateCoveIdOptions) => {
  if (type === 'filtered-text') {
    throw new Error(
      'Cannot create new filtered-text visualizations. filtered-text is deprecated; use markup-include instead.'
    )
  }

  const modalWillOpen = type !== 'markup-include'
  const newVisualizationConfig: Partial<AnyVisualization> = {
    filters: [],
    filterBehavior: 'Filter Change',
    newViz: type !== 'table',
    openModal: modalWillOpen,
    uid: createCoveId(type, idOptions),
    type
  }

  switch (type) {
    case 'chart':
      return createNewChartConfig(
        {
          ...newVisualizationConfig,
          visualizationType: subType
        },
        { isDashboard: true }
      )
    case 'map':
      return createNewMapConfig({
        ...newVisualizationConfig,
        general: {
          geoType: subType
        }
      })
    case 'data-bite':
      newVisualizationConfig.biteStyle = 'tp5'
      newVisualizationConfig.visualizationType = type
      break
    case 'waffle-chart':
      newVisualizationConfig.visualizationType =
        subType === 'Waffle' ? 'TP5 Waffle' : subType === 'Gauge' ? 'TP5 Gauge' : subType
      newVisualizationConfig.dataFormat = { commas: true }
      break
    case 'table': {
      const tableConfig: Table = {
        label: 'Data Table',
        show: true,
        showDatasetLink: false,
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
    }
    case 'markup-include':
      newVisualizationConfig.visualizationType = type
      break
    case 'dashboardFilters': {
      newVisualizationConfig.sharedFilterIndexes = []
      newVisualizationConfig.visual = {
        grayBackground: false
      }
      newVisualizationConfig.visualizationType = type
      break
    }
    default:
      newVisualizationConfig.visualizationType = type
      break
  }

  return newVisualizationConfig
}
