import { getChartCellValue } from '../helpers/getChartCellValue'
import { getSeriesName } from '../helpers/getSeriesName'
import { getDataSeriesColumns } from '../helpers/getDataSeriesColumns'
import ScreenReaderText from '@cdc/core/components/elements/ScreenReaderText'
import { SortIcon } from './SortIcon'
import { getNewSortBy } from '../helpers/getNewSortBy'

type ChartHeaderProps = { data; isVertical; config; setSortBy; sortBy; hasRowType?; viewport; rightAlignedCols }

const ChartHeader = ({
  data,
  isVertical,
  config,
  setSortBy,
  sortBy,
  hasRowType,
  viewport,
  rightAlignedCols
}: ChartHeaderProps) => {
  const groupBy = config.table?.groupBy
  if (!data) return
  let dataSeriesColumns = getDataSeriesColumns(config, isVertical, data)
  if (groupBy) {
    let groupHeaderRemoved = dataSeriesColumns.filter(col => col !== groupBy)
    if (groupHeaderRemoved.length != dataSeriesColumns.length) {
      // match was found
      // assign headers with groupHeaderRemoved
      dataSeriesColumns = groupHeaderRemoved
    }
  }

  const ScreenReaderSortByText = ({ text, config, sortBy }) => {
    const notApplicableText = 'Not Applicable'
    let columnHeaderText = `${text} `
    if (text !== '__series__' || text !== '') {
      columnHeaderText = `${text} `
    }

    if ((text === '__series__' || text === '') && !config.table.indexLabel) {
      columnHeaderText = notApplicableText
    }

    if ((text === '__series__' || text === '') && config.table.indexLabel) {
      columnHeaderText = config.table.indexLabel
    }

    if (columnHeaderText === notApplicableText) return

    return (
      <span className='cdcdataviz-sr-only'>{`Press command, modifier, or enter key to sort by ${columnHeaderText} in ${
        sortBy.column !== columnHeaderText ? 'ascending' : sortBy.column === 'desc' ? 'descending' : 'ascending'
      }  order`}</span>
    )
  }

  const ColumnHeadingText = ({ column, text, config }) => {
    if (text === '_pivotedFrom') return ''
    let notApplicableText = 'Not Applicable'
    if (text === '__series__' && config.table.indexLabel) return `${config.table.indexLabel} `
    if (text === '__series__' && !config.table.indexLabel)
      return <ScreenReaderText as='span'>{notApplicableText}</ScreenReaderText>
    return text
  }

  if (isVertical) {
    if (hasRowType) {
      // find the row type column and place it at the beginning of the array
      const rowTypeRegex = /row[_-]?type/i
      const rowTypeIndex = dataSeriesColumns.findIndex(column => rowTypeRegex.test(column))
      if (rowTypeIndex > -1) {
        dataSeriesColumns.splice(rowTypeIndex, 1)
      }
    }

    return (
      <tr>
        {dataSeriesColumns.map((column, index) => {
          const text = getSeriesName(column, config)
          const newSortBy = getNewSortBy(sortBy, column, index)
          const sortByAsc = sortBy.column === column ? sortBy.asc : undefined
          const isSortedCol = column === sortBy.column && !hasRowType

          return (
            <th
              style={{
                minWidth: (config.table.cellMinWidth || 0) + 'px',
                textAlign: rightAlignedCols && rightAlignedCols[index] ? 'right' : '',
                paddingRight: isSortedCol ? '1.3em' : ''
              }}
              key={`col-header-${column}__${index}`}
              tabIndex={0}
              role='columnheader'
              scope='col'
              onClick={() => {
                if (hasRowType) return
                setSortBy(newSortBy)
              }}
              onKeyDown={e => {
                if (hasRowType) return
                if (e.keyCode === 13) {
                  setSortBy(newSortBy)
                }
              }}
              {...(sortBy.column === column
                ? sortBy.asc
                  ? { 'aria-sort': 'ascending' }
                  : { 'aria-sort': 'descending' }
                : null)}
            >
              <ColumnHeadingText text={text} column={column} config={config} />
              {isSortedCol && <SortIcon ascending={sortByAsc} />}
              <ScreenReaderSortByText sortBy={sortBy} config={config} text={text} />
            </th>
          )
        })}
      </tr>
    )
  } else {
    const sliceVal = config.visualizationType === 'Pie' ? 1 : 0
    return (
      <tr>
        {['__series__', ...Object.keys(data)].slice(sliceVal).map((row, index) => {
          let column = config.xAxis?.dataKey
          let text = row !== '__series__' ? getChartCellValue(row, column, config, data) : '__series__'
          const newSortBy = getNewSortBy(sortBy, column, index)
          const sortByAsc = sortBy.colIndex === index ? sortBy.asc : undefined
          const isSortedCol = index === sortBy.colIndex && !hasRowType
          return (
            <th
              style={{
                minWidth: (config.table.cellMinWidth || 0) + 'px',
                textAlign: rightAlignedCols && rightAlignedCols[index] ? 'right' : '',
                paddingRight: isSortedCol ? '1.3em' : ''
              }}
              key={`col-header-${text}__${index}`}
              tabIndex={0}
              role='columnheader'
              scope='col'
              onClick={() => {
                setSortBy(newSortBy)
              }}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  setSortBy(newSortBy)
                }
              }}
              {...(sortBy.column === text
                ? sortBy.asc
                  ? { 'aria-sort': 'ascending' }
                  : { 'aria-sort': 'descending' }
                : null)}
            >
              <ColumnHeadingText text={text} column={column} config={config} />
              {isSortedCol && <SortIcon ascending={sortByAsc} />}

              <ScreenReaderSortByText text={text} config={config} sortBy={sortBy} />
            </th>
          )
        })}
      </tr>
    )
  }
}

export default ChartHeader
