import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

const normalizeFilterParents = config => {
  if (config.type === 'dashboard') {
    if (config.dashboard?.sharedFilters) {
      config.dashboard.sharedFilters.forEach(filter => {
        if (filter.type === 'datafilter' && filter.parents && typeof filter.parents === 'string') {
          filter.parents = [filter.parents]
        }
      })
    }
  }
}

const removeOldBrushKeys = config => {
  if (config.type === 'chart') {
    // Remove old brush object entirely - brush feature is new in 4.26.1
    // and any existing brush config is from development/testing
    delete config.brush
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      removeOldBrushKeys(visualization)
    })
  }
}

const migrateTitleStyle = config => {
  // Migrate ALL visualizations to use titleStyle
  // Since titleStyle is new in 4.26.1, any config running this migration won't have it yet
  // so we can unconditionally set it based on whether a title exists
  // - If title exists and is not empty: use 'legacy' (preserve existing appearance)
  // - If title is empty/missing: use 'small' (new default)

  if (config.type === 'dashboard') {
    // Migrate dashboard title
    if (!config.dashboard) config.dashboard = {}
    const hasTitle = config.dashboard.title && config.dashboard.title.trim() !== ''
    config.dashboard.titleStyle = hasTitle ? 'legacy' : 'small'

    // Migrate all visualizations in dashboard
    if (config.visualizations) {
      Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
        migrateTitleStyle(visualization)
      })
    }
  } else if (config.type === 'map') {
    // Map stores titleStyle under general
    if (!config.general) config.general = {}
    const hasTitle = config.general.title && config.general.title.trim() !== ''
    config.general.titleStyle = hasTitle ? 'legacy' : 'small'
  } else if (config.type === 'markup-include') {
    // Markup-include stores titleStyle under contentEditor (same location as title)
    if (!config.contentEditor) config.contentEditor = {}
    const hasTitle = config.contentEditor.title && config.contentEditor.title.trim() !== ''
    config.contentEditor.titleStyle = hasTitle ? 'legacy' : 'small'
  } else if (config.type === 'data-bite' || config.type === 'waffle-chart') {
    // Data bites and waffle charts always use legacy title style - no migration needed
    // The components hardcode 'legacy' for the Title component
  } else if (config.type) {
    // For all other visualization types (chart, filtered-text, etc.)
    // titleStyle is at root level
    const hasTitle = config.title && config.title.trim() !== ''
    config.titleStyle = hasTitle ? 'legacy' : 'small'
  }
}

const migrateAnnotationYToPercentage = config => {
  if (config.annotations && Array.isArray(config.annotations)) {
    config.annotations = config.annotations.map(annotation => {
      if (annotation.y !== undefined) {
        const [savedWidth, savedHeight] = annotation.savedDimensions || []

        if (savedHeight && savedHeight > 0) {
          annotation.y = (annotation.y / savedHeight) * 100
        } else {
          annotation.y = 50
        }
      }

      return annotation
    })
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(visualization => {
      migrateAnnotationYToPercentage(visualization)
    })
  }
}

const update_4_26_1 = config => {
  const ver = '4.26.1'
  const newConfig = cloneConfig(config)
  normalizeFilterParents(newConfig)
  removeOldBrushKeys(newConfig)
  migrateTitleStyle(newConfig)
  migrateAnnotationYToPercentage(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_1
