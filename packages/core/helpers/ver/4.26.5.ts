import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

const normalizeMarkupTagName = (value: string): string => {
  const normalized = value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  return normalized || 'filtered-text'
}

const getDataRowsForValidation = config => {
  if (Array.isArray(config.formattedData) && config.formattedData.length) return config.formattedData
  if (Array.isArray(config.data) && config.data.length) return config.data
  return []
}

const canUseTextColumn = (config, textColumn: string): boolean => {
  const dataRows = getDataRowsForValidation(config)
  if (!dataRows.length) return true
  return dataRows.some(row => row && Object.prototype.hasOwnProperty.call(row, textColumn))
}

const getFilteredTextConditions = config => {
  if (!Array.isArray(config.filters)) return []

  return config.filters
    .filter(filter => filter?.columnName && filter.columnValue !== undefined && filter.columnValue !== null)
    .map(filter => ({
      columnName: filter.columnName,
      isOrIsNotEqualTo: 'is',
      value: String(filter.columnValue)
    }))
}

const migrateFilteredText = config => {
  if (config.type !== 'filtered-text') return

  const textColumn = typeof config.textColumn === 'string' ? config.textColumn.trim() : ''
  const hasUsableTextColumn = !!textColumn && canUseTextColumn(config, textColumn)
  const tagName = normalizeMarkupTagName(textColumn)
  const tag = `{{${tagName}}}`
  const conditions = getFilteredTextConditions(config)

  console.info(
    `[COVE migration 4.26.5] Migrating filtered-text config to markup-include${
      config.uid ? ` (uid: ${config.uid})` : ''
    }${textColumn ? ` using textColumn "${textColumn}"` : ' without a usable textColumn'}.`
  )

  const contentEditor = {
    ...(config.contentEditor || {}),
    inlineHTML: hasUsableTextColumn
      ? tag
      : '<p>Filtered text could not be migrated because its textColumn is missing or unavailable.</p>',
    showHeader: true,
    srcUrl: '',
    style: 'default',
    title: config.title || config.contentEditor?.title || '',
    titleStyle: config.titleStyle || config.contentEditor?.titleStyle || 'small',
    useInlineHTML: true
  }

  config.type = 'markup-include'
  config.visualizationType = 'markup-include'
  config.contentEditor = contentEditor
  config.filters = []
  config.enableMarkupVariables = true
  config.markupVariables = hasUsableTextColumn
    ? [
        {
          sourceType: 'column',
          outputType: 'value',
          columnName: textColumn,
          conditions,
          name: textColumn,
          tag,
          selectionMode: 'first'
        }
      ]
    : []

  delete config.title
  delete config.textColumn
}

const applyYAxisTitlePlacement = config => {
  if (config.type === 'chart') {
    config.yAxis = config.yAxis || {}

    if (!config.yAxis.titlePlacement) {
      config.yAxis.titlePlacement = 'side'
    }
  }
}

const run_4_26_5_migrations = config => {
  applyYAxisTitlePlacement(config)
  migrateFilteredText(config)

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      run_4_26_5_migrations(visualization)
    })
  }
}

const update_4_26_5 = config => {
  const ver = '4.26.5'
  const newConfig = cloneConfig(config)
  run_4_26_5_migrations(newConfig)
  newConfig.version = ver
  return newConfig
}

export { applyYAxisTitlePlacement, migrateFilteredText }
export default update_4_26_5
