import { removeDashboardFilter } from '../removeDashboardFilter'
import { AnyVisualization } from '@cdc/core/types/Visualization'
import _ from 'lodash'

describe('removeDashboardFilter', () => {
  it('should remove the filter and update shared filters and visualizations', () => {
    const index = 1
    const sharedFilters = [
      { id: 1, name: 'Filter 1' },
      { id: 2, name: 'Filter 2' },
      { id: 3, name: 'Filter 3' }
    ]
    const visualizations: Record<string, AnyVisualization> = {
      viz1: {
        type: 'dashboardFilters',
        sharedFilterIndexes: [0, 1, 2]
      },
      viz2: {
        type: 'dashboardFilters',
        sharedFilterIndexes: [1]
      }
    }

    const [newSharedFilters, newVisualizations] = removeDashboardFilter(index, sharedFilters, visualizations)

    expect(newSharedFilters).toEqual([
      { id: 1, name: 'Filter 1' },
      { id: 3, name: 'Filter 3' }
    ])

    expect(newVisualizations).toEqual({
      viz1: {
        type: 'dashboardFilters',
        sharedFilterIndexes: [0, 1]
      },
      viz2: {
        type: 'dashboardFilters',
        sharedFilterIndexes: []
      }
    })
  })

  it('should handle removing the first filter', () => {
    const index = 0
    const sharedFilters = [
      { id: 1, name: 'Filter 1' },
      { id: 2, name: 'Filter 2' },
      { id: 3, name: 'Filter 3' }
    ]
    const visualizations: Record<string, AnyVisualization> = {
      viz1: {
        type: 'dashboardFilters',
        sharedFilterIndexes: [0, 1, 2]
      },
      viz2: {
        type: 'dashboardFilters',
        sharedFilterIndexes: [0]
      }
    }

    const [newSharedFilters, newVisualizations] = removeDashboardFilter(index, sharedFilters, visualizations)

    expect(newSharedFilters).toEqual([
      { id: 2, name: 'Filter 2' },
      { id: 3, name: 'Filter 3' }
    ])

    expect(newVisualizations).toEqual({
      viz1: {
        type: 'dashboardFilters',
        sharedFilterIndexes: [0, 1]
      },
      viz2: {
        type: 'dashboardFilters',
        sharedFilterIndexes: []
      }
    })
  })

  it('should handle removing the last filter', () => {
    const index = 2
    const sharedFilters = [
      { id: 1, name: 'Filter 1' },
      { id: 2, name: 'Filter 2' },
      { id: 3, name: 'Filter 3' }
    ]
    const visualizations: Record<string, AnyVisualization> = {
      viz1: {
        type: 'dashboardFilters',
        sharedFilterIndexes: [0, 1, 2]
      },
      viz2: {
        type: 'dashboardFilters',
        sharedFilterIndexes: [2]
      }
    }

    const [newSharedFilters, newVisualizations] = removeDashboardFilter(index, sharedFilters, visualizations)

    expect(newSharedFilters).toEqual([
      { id: 1, name: 'Filter 1' },
      { id: 2, name: 'Filter 2' }
    ])

    expect(newVisualizations).toEqual({
      viz1: {
        type: 'dashboardFilters',
        sharedFilterIndexes: [0, 1]
      },
      viz2: {
        type: 'dashboardFilters',
        sharedFilterIndexes: []
      }
    })
  })


  it('should handle removing the last filter', () => {
    const sharedFilters = [
      { id: 1, name: 'Filter 1' },
      { id: 2, name: 'Filter 2' },
      { id: 3, name: 'Filter 3' },
      { id: 4, name: 'Filter 4' }
    ]
    const visualizations: Record<string, AnyVisualization> = {
      viz1: {
        type: 'dashboardFilters',
        sharedFilterIndexes: [0, 2, 3]
      }
    }

    const [newSharedFilters, newVisualizations] = removeDashboardFilter(0, sharedFilters, visualizations)

    expect(newSharedFilters).toEqual([
      { id: 2, name: 'Filter 2' },
      { id: 3, name: 'Filter 3' },
      { id: 4, name: 'Filter 4' }
    ])

    expect(newVisualizations).toEqual({
      viz1: {
        type: 'dashboardFilters',
        sharedFilterIndexes: [1, 2]
      }
    })
  })
})
