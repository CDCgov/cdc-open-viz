import { DataTableProps } from '../DataTable'
import ScreenReaderText from '../../elements/ScreenReaderText'
import { SortIcon } from './SortIcon'
import { getNewSortBy } from '../helpers/getNewSortBy'
import { publishAnalyticsEvent } from '../../../helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import { COVE_VISUALIZATION_TYPES } from '../../../helpers/metrics/types'

interface MapHeaderProps extends DataTableProps {
  sortBy: { column; asc }
  setSortBy: Function
  interactionLabel: string
  rightAlignedCols: boolean[]
}

const ColumnHeadingText = ({ text, config }) => {
  let notApplicableText = 'Not Applicable'
  if (text === '__series__' && config.table.indexLabel) return `${config.table.indexLabel} `
  if (text === '__series__' && !config.table.indexLabel)
    return <ScreenReaderText as='span'>{notApplicableText}</ScreenReaderText>
  return text
}

const MapHeader = ({
  columns,
  config,
  indexTitle,
  sortBy,
  setSortBy,
  rightAlignedCols,
  interactionLabel = ''
}: MapHeaderProps) => {
  return (
    <tr>
      {Object.keys(columns)
        .filter(column => columns[column].dataTable === true && columns[column].name)
        .map((column, index) => {
          let text
          if (column && column !== 'geo') {
            text = columns[column].label ? columns[column].label : columns[column].name
          } else {
            text = config.type === 'map' ? indexTitle : config.xAxis?.dataKey
          }
          if (config.type === 'map' && (text === undefined || text === '')) {
            text = 'Location'
          }
          const newSortBy = getNewSortBy(sortBy, column, index)
          const sortByAsc = sortBy.column === column ? sortBy.asc : undefined
          return (
            <th
              style={{
                minWidth: (config.table.cellMinWidth || 0) + 'px',
                textAlign: rightAlignedCols && rightAlignedCols[index] ? 'right' : 'left',
                paddingRight: '1.3em'
              }}
              key={`col-header-${column}__${index}`}
              id={column}
              tabIndex={0}
              role='columnheader'
              scope='col'
              onClick={() => {
                publishAnalyticsEvent({
                  vizType: config.type as COVE_VISUALIZATION_TYPES,
                  vizSubType: getVizSubType(config),
                  eventType: `data_table_sort`,
                  eventAction: 'click',
                  eventLabel: interactionLabel,
                  vizTitle: getVizTitle(config),
                  specifics: `column: ${newSortBy.column || 'none'}, order: ${newSortBy.asc === true ? 'asc' : newSortBy.asc === false ? 'desc' : 'none'}`
                })
                setSortBy(newSortBy)
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  publishAnalyticsEvent({
                    vizType: config.type as COVE_VISUALIZATION_TYPES,
                    vizSubType: getVizSubType(config),
                    eventType: `data_table_sort`,
                    eventAction: 'keyboard',
                    eventLabel: interactionLabel,
                    vizTitle: getVizTitle(config),
                    specifics: `column: ${newSortBy.column || 'none'}, order: ${newSortBy.asc === true ? 'asc' : newSortBy.asc === false ? 'desc' : 'none'}`
                  })
                  setSortBy(newSortBy)
                }
              }}
              className={sortBy.column === column ? (sortBy.asc ? 'sort sort-asc' : 'sort sort-desc') : 'sort'}
              {...(sortBy.column === column
                ? sortBy.asc
                  ? { 'aria-sort': 'ascending' }
                  : { 'aria-sort': 'descending' }
                : null)}
            >
              <ColumnHeadingText text={text} config={config} />
              <SortIcon ascending={sortByAsc} />
              <span className='cdcdataviz-sr-only'>{`Sort by ${text} in ${sortBy.column === column ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'
                } order`}</span>
            </th>
          )
        })}
    </tr >
  )
}

export default MapHeader
