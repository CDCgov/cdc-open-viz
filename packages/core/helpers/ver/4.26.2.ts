import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

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
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      migrateAnnotationYToPercentage(visualization)
    })
  }
}

const migrateAnnotationDataModel = config => {
  if (config.annotations && Array.isArray(config.annotations)) {
    config.annotations = config.annotations.map(annotation => {
      // Set all existing annotations to fixed mode
      annotation.anchorMode = 'fixed'

      // Rename xKey -> dataX
      if (annotation.xKey !== undefined) {
        annotation.dataX = annotation.xKey
        delete annotation.xKey
      }

      // Delete yKey entirely (Y will be calculated dynamically in data mode)
      delete annotation.yKey

      // Delete deprecated properties
      delete annotation.snapToNearestPoint
      delete annotation.originalX
      delete annotation.originalDX
      delete annotation.originalY

      return annotation
    })
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      migrateAnnotationDataModel(visualization)
    })
  }
}

const update_4_26_2 = config => {
  const ver = '4.26.2'
  const newConfig = cloneConfig(config)
  migrateAnnotationYToPercentage(newConfig)
  migrateAnnotationDataModel(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_2
