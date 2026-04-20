import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import { getMarkupVariableSourceType } from '../../types/MarkupVariable'

const disableExtraChartVisualSettings = config => {
  if (config.type === 'chart') {
    config.visual = {
      ...config.visual,
      border: false,
      borderColorTheme: false,
      accent: false,
      background: false,
      hideBackgroundColor: false
    }
  }
}

const addMarkupIncludeStyle = config => {
  if (config.type === 'markup-include') {
    if (!config.contentEditor) {
      config.contentEditor = {}
    }

    if (!config.contentEditor.style) {
      config.contentEditor.style = 'default'
    }
  }
}

const applyWaffleValueDescriptorDefaults = config => {
  if (
    config.type === 'waffle-chart' &&
    (config.visualizationType === 'Waffle' || config.visualizationType === 'TP5 Waffle')
  ) {
    config.valueDescription = ''
    config.showPercent = true
    config.showDenominator = false
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      applyWaffleValueDescriptorDefaults(visualization)
    })
  }
}

const applyTerritoryMapDefaults = config => {
  if (config.general.territoriesAlwaysShow === undefined) {
    config.general.territoriesAlwaysShow = true
  }
}

const applyMarkupVariableSourceTypes = config => {
  if (!Array.isArray(config.markupVariables)) {
    return
  }

  config.markupVariables = config.markupVariables.map(variable => {
    if (!variable) {
      return variable
    }

    return {
      ...variable,
      sourceType: getMarkupVariableSourceType(variable)
    }
  })
}

const enableFullGeoNameCsvOnLegacyCountyMaps = config => {
  if (config.type === 'map' && config.general?.geoType === 'us-county') {
    config.table = config.table || {}
    config.table.showFullGeoNameInCSV = true
  }
}

const run_4_26_4_migrations = config => {
  disableExtraChartVisualSettings(config)
  addMarkupIncludeStyle(config)
  applyWaffleValueDescriptorDefaults(config)
  applyMarkupVariableSourceTypes(config)
  enableFullGeoNameCsvOnLegacyCountyMaps(config)
  applyTerritoryMapDefaults(config)

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      run_4_26_4_migrations(visualization)
    })
  }
}

const update_4_26_4 = config => {
  const ver = '4.26.4'
  const newConfig = cloneConfig(config)
  run_4_26_4_migrations(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_4
