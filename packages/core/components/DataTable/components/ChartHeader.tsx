import { getChartCellValue } from '../helpers/getChartCellValue'
import { getSeriesName } from '../helpers/getSeriesName'
import { getDataSeriesColumns } from '../helpers/getDataSeriesColumns'
import { DownIcon, UpIcon } from './Icons'

type ChartHeaderProps = { data; isVertical; config; runtimeData; setSortBy; sortBy; groupBy? }

const ChartHeader = ({ data, isVertical, config, runtimeData, setSortBy, sortBy, groupBy }: ChartHeaderProps) => {
  if (!data) return
  let dataSeriesColumns = getDataSeriesColumns(config, isVertical, runtimeData)
  if (groupBy) {
    let sorted = dataSeriesColumns.filter(col => col !== groupBy)
    if (sorted.length != dataSeriesColumns.length) {
      // match was found
      // make the groupBy column the first column
      dataSeriesColumns = [groupBy, ...sorted]
    }
  }
  if (isVertical) {
    return (
      <tr>
        {dataSeriesColumns.map((column, index) => {
          const text = getSeriesName(column, config)

          return (
            <th
              key={`col-header-${column}__${index}`}
              tabIndex={0}
              title={text}
              role='columnheader'
              scope='col'
              onClick={() => {
                setSortBy({ column, asc: sortBy.column === column ? !sortBy.asc : false, colIndex: index })
              }}
              onKeyDown={e => {
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
        {['__series__', ...Object.keys(runtimeData)].slice(sliceVal).map((row, index) => {
          let column = config.xAxis?.dataKey
          let text = row !== '__series__' ? getChartCellValue(row, column, config, runtimeData) : '__series__'
          return (
            <th
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
              {index === sortBy.colIndex && <span className={'sort-icon'}>{!sortBy.asc ? <UpIcon /> : <DownIcon />}</span>}
              <button>
                <span className='cdcdataviz-sr-only'>{`Sort by ${text} in ${sortBy.column === text ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'} `} order</span>
              </button>
            </th>
          )
        })}
      </tr>
    )
  }
}

export default ChartHeader
