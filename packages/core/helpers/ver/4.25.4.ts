import _ from 'lodash'

export const makeChartLegendsUnified = config => {
  if (config.type === 'chart') {
    config.legend = config.legend || {}
    config.legend.unified = true
  } else if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      makeChartLegendsUnified(visualization)
    })
  }
}

const migrateTableGeneralSettings = config => {
  if (config.type === 'map') {
    if (config.general.showFullGeoNameInCSV) {
      config.table.showFullGeoNameInCSV = config.general.showFullGeoNameInCSV
    }
    delete config.general.showFullGeoNameInCSV
    return config
  }
}

const hasMultipleWidgetColumns = row => {
  const multipleColumns = row.columns.filter(column => column.widget).length > 1
  return multipleColumns && !row.toggle
}

const newMarkupIncludeVisualization = (uid, footnotes) => {
  return {
    filters: [],
    filterBehavior: 'Filter Change',
    footnotes,
    uid,
    type: 'markup-include',
    visualizationType: 'markup-include',
    contentEditor: {
      inlineHTML: '',
      markupVariables: [],
      showHeader: false,
      srcUrl: '',
      title: '',
      useInlineHTML: false
    },
    theme: 'theme-blue',
    visual: {
      border: false,
      accent: false,
      background: false,
      hideBackgroundColor: false,
      borderColorTheme: false
    }
  }
}

const makeNewRow = uuid => {
  return { columns: [{ width: 12, widget: uuid }] }
}

export const moveFootnotesToVizLevel = config => {
  if (config.type === 'dashboard') {
    const newRowsToAdd = [
      /*old row index*/
      /*new row object*/
    ]
    config.rows.forEach((row, index) => {
      if (!row.footnotesId) return
      const makeNewFootnotesRow = hasMultipleWidgetColumns(row)
      const footnotesId = row.footnotesId
      const footnote = _.pick(config.visualizations[footnotesId], ['dataKey', 'dynamicFootnotes', 'staticFootnotes'])
      if (makeNewFootnotesRow) {
        const uuid = `markup-include-${Date.now()}${index}`
        const newRow = makeNewRow(uuid)
        const newFootnotesViz = newMarkupIncludeVisualization(uuid, footnote)
        config.visualizations[uuid] = newFootnotesViz
        newRowsToAdd.push([index, newRow])
      } else {
        row.columns.forEach(column => {
          if (!column.widget) return
          const footnotes = config.visualizations[column.widget].footnotes
          if (typeof footnotes === 'string') {
            // move legacy footnotes
            config.visualizations[column.widget].legacyFootnotes = footnotes
          }
          config.visualizations[column.widget].footnotes = footnote
        })
      }

      delete config.visualizations[footnotesId]
      delete row.footnotesId
    })
    if (newRowsToAdd.length) {
      newRowsToAdd.forEach(([oldRowIndex, newRow]) => {
        config.rows.splice(oldRowIndex + 1, 0, newRow)
      })
    }
  }
}

const update_4_25_4 = config => {
  const ver = '4.25.4'
  const newConfig = _.cloneDeep(config)
  makeChartLegendsUnified(newConfig)
  migrateTableGeneralSettings(newConfig)
  moveFootnotesToVizLevel(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_4
