import pick from 'lodash/pick'
import cloneConfig from '../cloneConfig'

const hasMultipleWidgetColumns = row => {
  const multipleColumns = row.columns.filter(column => column.widget).length > 1
  return multipleColumns && !row.toggle
}

const newMarkupIncludeVisualization = (uid, footnotes) => ({
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
})

const makeNewRow = uuid => ({ columns: [{ width: 12, widget: uuid }] })

export const moveFootnotesToVizLevel = config => {
  if (config.type !== 'dashboard') return

  const newRowsToAdd = []
  config.rows.forEach((row, index) => {
    if (!row.footnotesId) return
    const makeNewFootnotesRow = hasMultipleWidgetColumns(row)
    const footnotesId = row.footnotesId
    const footnote = pick(config.visualizations[footnotesId], ['dataKey', 'dynamicFootnotes', 'staticFootnotes'])
    if (makeNewFootnotesRow) {
      const uuid = `markup-include-${Date.now()}${index}`
      const newRow = makeNewRow(uuid)
      config.visualizations[uuid] = newMarkupIncludeVisualization(uuid, footnote)
      newRowsToAdd.push([index, newRow])
    } else {
      row.columns.forEach(column => {
        if (!column.widget) return
        const footnotes = config.visualizations[column.widget].footnotes
        if (typeof footnotes === 'string') config.visualizations[column.widget].legacyFootnotes = footnotes
        config.visualizations[column.widget].footnotes = footnote
      })
    }

    delete config.visualizations[footnotesId]
    delete row.footnotesId
  })
  newRowsToAdd.forEach(([oldRowIndex, newRow]) => config.rows.splice(oldRowIndex + 1, 0, newRow))
}

const update_4_25_4_1 = config => {
  const newConfig = cloneConfig(config)
  moveFootnotesToVizLevel(newConfig)
  newConfig.version = '4.25.4-1'
  return newConfig
}

export default update_4_25_4_1
