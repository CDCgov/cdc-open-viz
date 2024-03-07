import { getChartCellValue } from '../helpers/getChartCellValue'
import { getSeriesName } from '../helpers/getSeriesName'
import { getDataSeriesColumns } from '../helpers/getDataSeriesColumns'
import { DownIcon, UpIcon } from './Icons'
import { FaSort } from 'react-icons/fa'

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

          return (
            <th
              style={{ minWidth: (config.table.cellMinWidth || 0) + 'px' }}
              key={`col-header-${text}__${index}`}
              tabIndex={0}
              title={text}
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
              className={sortBy.column === text ? (sortBy.asc ? 'sort sort-asc' : 'sort sort-desc') : 'sort'}
              {...(sortBy.column === text ? (sortBy.asc ? { 'aria-sort': 'ascending' } : { 'aria-sort': 'descending' }) : null)}
            >
              {text === '__series__' ? '' : text}
              {/* empty div replicates style of old button */}
              <div style={{ display: 'inline-block', margin: '0 0 0 12px' }} tabIndex={-1}></div>
              <FaSort
                role='button'
                className='cdcdataviz-sr-only-focusable'
                tabIndex={0}
                onKeyDown={e => {
                  console.log(sortBy)
                  if (e.keyCode === 13) {
                    e.preventDefault()

                    setSortBy({ column: text, asc: sortBy.column === text ? !sortBy.asc : false, colIndex: index })
                  }
                }}
              />
              <span className='cdcdataviz-sr-only'>{`The data table is currently sorted by the following column: ${String(sortBy.column)}.`}</span>
              <span className='cdcdataviz-sr-only'>{`Press enter to sort by ${text} in ${sortBy.column === text ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'} order`}</span>
              {index === sortBy.colIndex && <span className={'sort-icon'}>{!sortBy.asc ? <UpIcon /> : <DownIcon />}</span>}
            </th>
          )
        })}
      </tr>
    )
  }
}

export default ChartHeader
