import { getChartCellValue } from '../helpers/getChartCellValue'
import { getSeriesName } from '../helpers/getSeriesName'
import { getDataSeriesColumns } from '../helpers/getDataSeriesColumns'
import { DownIcon, UpIcon } from './Icons'
import ScreenReaderText from '@cdc/core/components/elements/ScreenReaderText'

type ChartHeaderProps = { data; isVertical; config; setSortBy; sortBy; groupBy?; hasRowType? }

const ChartHeader = ({ data, isVertical, config, setSortBy, sortBy, groupBy, hasRowType }: ChartHeaderProps) => {
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

          return (
            <th
              style={{ minWidth: (config.table.cellMinWidth || 0) + 'px' }}
              key={`col-header-${column}__${index}`}
              tabIndex={0}
              title={text}
              role='columnheader'
              scope='col'
              onClick={() => {
                if (hasRowType) return
                setSortBy({ column, asc: sortBy.column === column ? !sortBy.asc : false, colIndex: index })
              }}
              onKeyDown={e => {
                if (hasRowType) return
                if (e.keyCode === 13) {
                  setSortBy({ column, asc: sortBy.column === column ? !sortBy.asc : false, colIndex: index })
                }
              }}
              className={sortBy.column === column ? (sortBy.asc ? 'sort sort-asc' : 'sort sort-desc') : 'sort'}
              {...(sortBy.column === column ? (sortBy.asc ? { 'aria-sort': 'ascending' } : { 'aria-sort': 'descending' }) : null)}
            >
              {text}
              {column === sortBy.column && <span className={'sort-icon'}>{!sortBy.asc ? <UpIcon /> : <DownIcon />}</span>}
              <button>
                <span className='cdcdataviz-sr-only'>{`Sort by ${text} in ${sortBy.column === column ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'} `} order</span>
              </button>
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
          const notApplicableText = 'Not Applicable'

          const handleHeaderClasses = () => {
            let classes = ['sort']
            if (sortBy.column === text) {
              classes.push('sort-asc')
            } else {
              classes.push('sort-desc')
            }
            return classes.join(' ')
          }

          const ScreenReaderSortByText = () => {
            let columnHeaderText = text
            if (text !== '__series__') {
              columnHeaderText = text
            }

            if (text === '__series__' && !config.table.indexLabel) {
              columnHeaderText = notApplicableText
            }

            if (text === '__series__' && config.table.indexLabel) {
              columnHeaderText = config.table.indexLabel
            }

            return <span className='cdcdataviz-sr-only'>{`Sort by ${columnHeaderText} in ${sortBy.column === text ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'} order`}</span>
          }

          const ColumnHeadingText = () => {
            if (text === '__series__' && config.table.indexLabel) return config.table.indexLabel
            if (text === '__series__' && !config.table.indexLabel) return <ScreenReaderText as='span'>{notApplicableText}</ScreenReaderText>
            return text
          }

          return (
            <th
              style={{ minWidth: (config.table.cellMinWidth || 0) + 'px' }}
              key={`col-header-${text}__${index}`}
              tabIndex={0}
              role='columnheader'
              scope='col'
              onClick={() => {
                setSortBy({ column: text, asc: sortBy.column === text ? !sortBy.asc : false, colIndex: index })
              }}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  setSortBy({ column: text, asc: sortBy.column === text ? !sortBy.asc : false, colIndex: index })
                }
              }}
              className={handleHeaderClasses()}
              {...(sortBy.column === text ? (sortBy.asc ? { 'aria-sort': 'ascending' } : { 'aria-sort': 'descending' }) : null)}
            >
              <ColumnHeadingText />
              {index === sortBy.colIndex && <span className={'sort-icon'}>{!sortBy.asc ? <UpIcon /> : <DownIcon />}</span>}
              <ScreenReaderSortByText />
            </th>
          )
        })}
      </tr>
    )
  }
}

export default ChartHeader
