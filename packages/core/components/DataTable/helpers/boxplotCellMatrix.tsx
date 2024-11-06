import { CellMatrix } from '../../Table/types/CellMatrix'

const boxplotCellMatrix = ({ rows, config }): CellMatrix => {
  const resolveName = key => {
    let {
      boxplot: { labels }
    } = config
    const columnLookup = {
      columnMean: labels.mean,
      columnMax: labels.maximum,
      columnMin: labels.minimum,
      columnIqr: labels.iqr,
      columnCategory: 'Category',
      columnMedian: labels.median,
      columnFirstQuartile: labels.q1,
      columnThirdQuartile: labels.q3,
      columnOutliers: labels.outliers,
      values: labels.values,
      columnCount: labels.count,
      columnSd: 'Standard Deviation',
      nonOutlierValues: 'Non Outliers',
      columnLowerBounds: labels.lowerBounds,
      columnUpperBounds: labels.upperBounds
    }

    let resolvedName = columnLookup[key]

    return resolvedName
  }
  let resolveCell = (rowid, plot) => {
    if (Number(rowid) === 0) return true
    if (Number(rowid) === 1) return plot.columnMax
    if (Number(rowid) === 2) return plot.columnThirdQuartile
    if (Number(rowid) === 3) return plot.columnMedian
    if (Number(rowid) === 4) return plot.columnFirstQuartile
    if (Number(rowid) === 5) return plot.columnMin
    if (Number(rowid) === 6) return plot.columnCount
    if (Number(rowid) === 7) return plot.columnSd
    if (Number(rowid) === 8) return plot.columnMean
    if (Number(rowid) === 9) return plot.columnOutliers.length > 0 ? plot.columnOutliers.toString() : '-'
    if (Number(rowid) === 10) return plot.values.length > 0 ? plot.values.toString() : '-'
    return <p>-</p>
  }
  // get list of data keys for each row
  let dataKeys = rows.map(row => {
    return row[0]
  })
  let columns = ['Measures', ...config.boxplot.categories]
  dataKeys.shift() // remove index 0 // we did header column separately
  return dataKeys.map((rowkey, index) => {
    return columns.map((column, colnum) => {
      let cellValue
      if (column === 'Measures') {
        let labelValue = index > 0 ? resolveName(rowkey) : ''
        cellValue = <>{labelValue}</>
      } else {
        cellValue = resolveCell(index, config.boxplot.plots[colnum - 1])
      }
      return cellValue
    })
  })
}

export default boxplotCellMatrix
