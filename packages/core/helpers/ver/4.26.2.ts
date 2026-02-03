import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

const migrateAnnotationDimensions = config => {
  if (config.annotations && Array.isArray(config.annotations)) {
    // Calculate chart area height for Y conversion (matches calcInitialHeight)
    const isHorizontal = config.orientation === 'horizontal'
    const chartAreaHeight = isHorizontal
      ? Number(config.heights?.horizontal) || 750 // default horizontal height
      : Number(config.heights?.vertical) || 300 // default vertical height

    config.annotations = config.annotations.map(annotation => {
      if (annotation.y !== undefined && chartAreaHeight > 0) {
        // Convert Y from pixels to percentage using the chart area height
        annotation.y = (annotation.y / chartAreaHeight) * 100
      } else {
        annotation.y = 50
      }

      // Delete savedDimensions to preserve old dx/dy behavior (fixed pixel offsets).
      // The scaling function falls back to raw dx/dy when savedDimensions is missing.
      // Once user drags the annotation, savedDimensions will be set with current chart
      // dimensions, enabling responsive scaling from that point forward.
      delete annotation.savedDimensions

      return annotation
    })
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      migrateAnnotationDimensions(visualization)
    })
  }
}

const migrateAnnotationDataModel = config => {
  if (config.annotations && Array.isArray(config.annotations)) {
    config.annotations = config.annotations.map(annotation => {
      // Set all existing annotations to fixed mode
      annotation.anchorMode = 'fixed'

      // Delete xKey entirely - old format stored timestamps for dates,
      // but new dataX expects raw data values. Format is incompatible.
      // User can re-enable data mode which will set fresh dataX value.
      delete annotation.xKey

      // Delete yKey entirely (Y will be calculated dynamically in data mode)
      delete annotation.yKey

      // Delete empty seriesKey - it would cause yScale(undefined) errors in data mode
      if (!annotation.seriesKey) {
        delete annotation.seriesKey
      }

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
  migrateAnnotationDimensions(newConfig)
  migrateAnnotationDataModel(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_2
