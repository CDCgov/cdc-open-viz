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

export const moveFootnotesToVizLevel = config => {
  if (config.type === 'dashboard') {
    const rowsWithFootnotes = config.rows.filter(row => row.footnotesId)
    rowsWithFootnotes.forEach(row => {
      const footnotesId = row.footnotesId
      const footnote = _.pick(config.visualizations[footnotesId], ['dataKey', 'dynamicFootnotes', 'staticFootnotes'])
      row.columns.forEach(column => {
        if (!column.widget) return
        const footnotes = config.visualizations[column.widget].footnotes
        if (typeof footnotes === 'string') {
          // move legacy footnotes
          config.visualizations[column.widget].legacyFootnotes = footnotes
        }
        config.visualizations[column.widget].footnotes = footnote
      })
      delete config.visualizations[footnotesId]
      delete row.footnotesId
    })
  }
}

const update_4_25_4 = config => {
  const ver = '4.25.4'
  const newConfig = _.cloneDeep(config)
  makeChartLegendsUnified(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_4
