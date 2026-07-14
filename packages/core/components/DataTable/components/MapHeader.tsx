import { useId } from 'react'
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
  const headerIdBase = useId()
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
          const headingId = `${headerIdBase}-heading-${index}`
          const descId = `${headerIdBase}-desc-${index}`
          // Describe what activating the control WILL do next (the pending `getNewSortBy`
          // direction), so the description updates as the sort cycles instead of restating the
          // current state. `asc` true -> ascending, false -> descending, undefined -> clears sort.
          const sortInstruction =
            newSortBy.asc === true
              ? `Sort by ${sortLabel} in ascending order`
              : newSortBy.asc === false
                ? `Sort by ${sortLabel} in descending order`
                : `Remove the sort from ${sortLabel}`
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
              aria-labelledby={headingId}
              aria-describedby={descId}
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
              <span id={headingId}>
                <ColumnHeadingText text={text} config={config} />
              </span>
              <SortIcon ascending={sortByAsc} />
              {/*
                Sort instruction text. It is intentionally aria-hidden so screen readers do NOT
                stop on it while swiping the header, and so it is excluded from the header cell's
                text content that gets re-announced on every associated data cell. It is still
                exposed on purpose: the th references it via aria-describedby, and per the
                accessible description spec a hidden element referenced by aria-describedby is
                still read when the header itself receives focus.
              */}
              <span id={descId} className='cdcdataviz-sr-only' aria-hidden='true'>
                {sortInstruction}
              </span>
            </th>
          )
        })}
    </tr>
  )
}

export default MapHeader
