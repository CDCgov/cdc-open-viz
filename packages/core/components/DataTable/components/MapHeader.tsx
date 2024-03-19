import { DataTableProps } from '../DataTable'
import { DownIcon, UpIcon } from './Icons'
import ScreenReaderText from '../../elements/ScreenReaderText'

type MapHeaderProps = DataTableProps & {
  sortBy: { column; asc }
  setSortBy: Function
}

const ColumnHeadingText = ({ column, text, config }) => {
  let notApplicableText = 'Not Applicable'
  if (text === '__series__' && config.table.indexLabel) return `${config.table.indexLabel} `
  if (text === '__series__' && !config.table.indexLabel) return <ScreenReaderText as='span'>{notApplicableText}</ScreenReaderText>
  return text
}

const MapHeader = ({ columns, config, indexTitle, sortBy, setSortBy }: MapHeaderProps) => {
  return (
    <tr>
      {Object.keys(columns)
        .filter(column => columns[column].dataTable === true && columns[column].name)
        .map((column, index) => {
          let text
          if (column !== 'geo') {
            text = columns[column].label ? columns[column].label : columns[column].name
          } else {
            text = config.type === 'map' ? indexTitle : config.xAxis?.dataKey
          }
          if (config.type === 'map' && (text === undefined || text === '')) {
            text = 'Location'
          }

          return (
            <th
              key={`col-header-${column}__${index}`}
              id={column}
              tabIndex={0}
              role='columnheader'
              scope='col'
              onClick={() => {
                setSortBy({ column, asc: sortBy.column === column ? !sortBy.asc : false })
              }}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  setSortBy({ column, asc: sortBy.column === column ? !sortBy.asc : false })
                }
              }}
              className={sortBy.column === column ? (sortBy.asc ? 'sort sort-asc' : 'sort sort-desc') : 'sort'}
              {...(sortBy.column === column ? (sortBy.asc ? { 'aria-sort': 'ascending' } : { 'aria-sort': 'descending' }) : null)}
            >
              <ColumnHeadingText text={text} config={config} column={column} />
              {sortBy.column === column && <span className={'sort-icon'}>{!sortBy.asc ? <UpIcon /> : <DownIcon />}</span>}
              <span className='cdcdataviz-sr-only'>{`Sort by ${text} in ${sortBy.column === column ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'} order`}</span>
            </th>
          )
        })}
    </tr>
  )
}

export default MapHeader
