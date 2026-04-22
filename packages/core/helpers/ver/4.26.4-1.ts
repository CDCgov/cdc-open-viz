import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import { getMarkupVariableSourceType } from '../../types/MarkupVariable'

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

const fixWaffleType = config => {
  if (config.type === 'waffle-chart' && config.visualizationType === 'waffle-chart') {
    config.visualizationType = 'Waffle'
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
}

const applyTerritoryMapDefaults = config => {
  if (config.type !== 'map' || !config.general) return
  if (config.general.geoType === 'us-county') {
    config.migrations = config.migrations || {}
    if (config.migrations.preserveDataBackedCountyTerritories === undefined) {
      config.migrations.preserveDataBackedCountyTerritories = true
    }
  }
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

const run_4_26_4_1_migrations = config => {
  fixWaffleType(config)
  addMarkupIncludeStyle(config)
  applyWaffleValueDescriptorDefaults(config)
  applyMarkupVariableSourceTypes(config)
  enableFullGeoNameCsvOnLegacyCountyMaps(config)
  applyTerritoryMapDefaults(config)

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      run_4_26_4_1_migrations(visualization)
    })
  }
}

const update_4_26_4_1 = config => {
  const ver = '4.26.4-1'
  const newConfig = cloneConfig(config)
  run_4_26_4_1_migrations(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_4_1
