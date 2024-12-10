import { shouldLoadUnfilteredDataset } from '../shouldLoadUnfilteredDataset'
import { MultiDashboard } from '../../types/MultiDashboard'
import { DashboardConfig } from '../../types/DashboardConfig'
import { AnyVisualization } from '@cdc/core/types/Visualization'

describe('shouldLoadUnfilteredDataset', () => {
  it('should return false when hasApplyBehavior is true', () => {
    const config: MultiDashboard | DashboardConfig = {
      filterBehavior: 'Apply Button',
      visualizations: {},
      rows: [],
      dashboard: { sharedFilters: [] }
    }
    const datasetKey = 'dataset1'

    const result = shouldLoadUnfilteredDataset(config, datasetKey)

    expect(result).toBe(false)
  })

  it('should return true when the dataset is used by visualizations and not filtered', () => {
    const config: MultiDashboard | DashboardConfig = {
      visualizations: {
        viz1: { dataKey: 'dataset1' } as AnyVisualization
      },
      rows: [],
      dashboard: { sharedFilters: [] }
    }
    const datasetKey = 'dataset1'

    const result = shouldLoadUnfilteredDataset(config, datasetKey)

    expect(result).toBe(true)
  })

  it('should return true when the dataset is used by rows and not filtered', () => {
    const config: MultiDashboard | DashboardConfig = {
      visualizations: {},
      rows: [{ dataKey: 'dataset1' }],
      dashboard: { sharedFilters: [] }
    }
    const datasetKey = 'dataset1'

    const result = shouldLoadUnfilteredDataset(config, datasetKey)

    expect(result).toBe(true)
  })

  it('should return false when the dataset is filtered', () => {
    const config: MultiDashboard | DashboardConfig = {
      visualizations: {
        viz1: { dataKey: 'dataset1' } as AnyVisualization
      },
      rows: [],
      dashboard: {
        sharedFilters: [{ usedBy: ['viz1'] }]
      }
    }
    const datasetKey = 'dataset1'

    const result = shouldLoadUnfilteredDataset(config, datasetKey)

    expect(result).toBe(false)
  })

  it('should return false when the dataset is not used by current tab', () => {
    const config: MultiDashboard | DashboardConfig = {
      visualizations: {
        viz1: { dataKey: 'dataset2' } as AnyVisualization
      },
      rows: [{ dataKey: 'dataset2' }],
      dashboard: { sharedFilters: [] }
    }
    const datasetKey = 'dataset1'

    const result = shouldLoadUnfilteredDataset(config, datasetKey)

    expect(result).toBe(false)
  })
})
