import { DataTableProps } from '../DataTable'
import ScreenReaderText from '../../elements/ScreenReaderText'
import { SortIcon } from './SortIcon'
import parse from 'html-react-parser'
import { getNewSortBy } from '../helpers/getNewSortBy'
import { publishAnalyticsEvent } from '../../../helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import { getMapDataTableColumnKeys } from '../helpers/getMapDataTableColumnKeys'

type MapHeaderProps = DataTableProps & {
  sortBy: { column; asc }
  setSortBy: Function
  interactionLabel: string
}

const ColumnHeadingText = ({ text, config }) => {
  let notApplicableText = 'Not Applicable'
  if (text === '__series__' && config.table.indexLabel) {
    return parse(String(config.table.indexLabel))
  }
  if (text === '__series__' && !config.table.indexLabel) {
    return <ScreenReaderText as='span'>{notApplicableText}</ScreenReaderText>
  }

  if (typeof text !== 'string') {
    return parse('')
  }

  return parse(text)
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
  const orderedColumnKeys = getMapDataTableColumnKeys(columns)

  return (
    <tr>
      {orderedColumnKeys.map((column, index) => {
          let text

          if (column && column !== 'geo') {
            text = columns[column].label ? columns[column].label : columns[column].name
          } else {
            text = config.type === 'map' ? indexTitle : config.xAxis?.dataKey
          }
          if (config.type === 'map' && (text === undefined || text === '')) {
            text = 'Location'
          }
          const sortLabel = typeof text === 'string' ? new DOMParser().parseFromString(text, 'text/html').body.textContent?.trim() || '' : ''
          const newSortBy = getNewSortBy(sortBy, column, index)
          const sortByAsc = sortBy.column === column ? sortBy.asc : undefined
          return (
            <th
              style={{
                minWidth: (config.table.cellMinWidth || 0) + 'px',
                textAlign: rightAlignedCols && rightAlignedCols[index] ? 'right' : '',
                paddingRight: '1.8em'
              }}
              key={`col-header-${column}__${index}`}
              id={column}
              tabIndex={0}
              role='columnheader'
              scope='col'
              onClick={() => {
                publishAnalyticsEvent({
                  vizType: config.type,
                  vizSubType: getVizSubType(config),
                  eventType: `data_table_sort`,
                  eventAction: 'click',
                  eventLabel: interactionLabel,
                  vizTitle: getVizTitle(config),
                  specifics: `column: ${newSortBy.column || 'none'}, order: ${
                    newSortBy.asc === true ? 'asc' : newSortBy.asc === false ? 'desc' : 'none'
                  }`
                })
                setSortBy(newSortBy)
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  publishAnalyticsEvent({
                    vizType: config.type,
                    vizSubType: getVizSubType(config),
                    eventType: `data_table_sort`,
                    eventAction: 'keyboard',
                    eventLabel: interactionLabel,
                    vizTitle: getVizTitle(config),
                    specifics: `column: ${newSortBy.column || 'none'}, order: ${
                      newSortBy.asc === true ? 'asc' : newSortBy.asc === false ? 'desc' : 'none'
                    }`
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
              <span className='cdcdataviz-sr-only'>{`Sort by ${sortLabel} in ${
                sortBy.column === column ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'
              } order`}</span>
            </th>
          )
        })}
    </tr>
  )
}

export default MapHeader
