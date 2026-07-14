import { useId } from 'react'
import { getChartCellValue } from '../helpers/getChartCellValue'
import { getSeriesName } from '../helpers/getSeriesName'
import { getDataSeriesColumns } from '../helpers/getDataSeriesColumns'
import ScreenReaderText from '@cdc/core/components/elements/ScreenReaderText'
import { SortIcon } from './SortIcon'
import { getNewSortBy } from '../helpers/getNewSortBy'
import parse from 'html-react-parser'
import { ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { publishAnalyticsEvent } from '../../../helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'

const ColumnHeadingText = ({ text, config }: { text: string; config: ChartConfig }) => {
  const notApplicableText = 'Not Applicable'
  if (text === '_pivotedFrom') return ''
  if (text === '__series__') {
    if (config.table.indexLabel) {
      return parse(String(config.table.indexLabel))
    } else {
      return <ScreenReaderText as='span'>{notApplicableText}</ScreenReaderText>
    }
  }

  //  handle any unexpected values
  if (typeof text !== 'string') {
    return parse('')
  }

  return parse(text)
}

type ChartHeaderProps = {
  data
  isVertical
  config
  setSortBy
  sortBy
  hasRowType?
  viewport
  rightAlignedCols
  interactionLabel: string
  dataSeriesColumns?: string[]
}

const ChartHeader = ({
  data,
  isVertical,
  config,
  setSortBy,
  sortBy,
  hasRowType,
  viewport,
  rightAlignedCols,
  interactionLabel,
  dataSeriesColumns: providedDataSeriesColumns
}: ChartHeaderProps) => {
  const headerIdBase = useId()
  const groupBy = config.table?.groupBy
  if (!data) return
  let dataSeriesColumns = [...(providedDataSeriesColumns || getDataSeriesColumns(config, isVertical, data))]
  if (groupBy) {
    let groupHeaderRemoved = dataSeriesColumns.filter(col => col !== groupBy)
    if (groupHeaderRemoved.length != dataSeriesColumns.length) {
      // match was found
      // assign headers with groupHeaderRemoved
      dataSeriesColumns = groupHeaderRemoved
    }
  }

  // Builds the dynamic sort-control instruction text for a column header, or null when the
  // control is not applicable. Returned as a string (not an element) so callers can decide
  // whether to render it and reference it via aria-describedby on the header cell.
  // `nextSortAsc` is the direction that activating the control WILL apply (the `getNewSortBy`
  // result): `true` -> ascending, `false` -> descending, `undefined` -> clears the sort. Using
  // the pending direction keeps the description in sync with what pressing the header does,
  // instead of restating the column's current state.
  const getSortInstructionText = (text, config, nextSortAsc: boolean | undefined): string | null => {
    const notApplicableText = 'Not Applicable'
    let columnHeaderText = `${text}`

    if ((text === '__series__' || text === '') && !config.table.indexLabel) {
      columnHeaderText = notApplicableText
    }

    if ((text === '__series__' || text === '') && config.table.indexLabel) {
      columnHeaderText = config.table.indexLabel
    }

    if (columnHeaderText === notApplicableText) return null

    const action =
      nextSortAsc === true
        ? `sort by ${columnHeaderText} in ascending order`
        : nextSortAsc === false
          ? `sort by ${columnHeaderText} in descending order`
          : `remove the sort from ${columnHeaderText}`

    return `Press command, modifier, or enter key to ${action}`
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
          const headingId = `${headerIdBase}-heading-${index}`
          const descId = `${headerIdBase}-desc-${index}`
          // hasRowType tables are not sortable — omit the instruction so screen readers
          // don't announce a sort action that the click/keydown handler will ignore.
          const sortInstruction = hasRowType ? null : getSortInstructionText(text, config, newSortBy.asc)

          return (
            <th
              style={{
                minWidth: (config.table.cellMinWidth || 0) + 'px',
                textAlign: rightAlignedCols && rightAlignedCols[index] ? 'right' : '',
                paddingRight: '1.8em'
              }}
              key={`col-header-${column}__${index}`}
              tabIndex={hasRowType ? undefined : 0}
              role='columnheader'
              scope='col'
              aria-labelledby={headingId}
              aria-describedby={sortInstruction ? descId : undefined}
              onClick={() => {
                if (hasRowType) return
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
                if (hasRowType) return
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
              {...(!hasRowType && sortBy.column === column
                ? sortBy.asc
                  ? { 'aria-sort': 'ascending' }
                  : { 'aria-sort': 'descending' }
                : null)}
            >
              <span id={headingId}>
                <ColumnHeadingText text={text} config={config} />
              </span>
              <SortIcon ascending={sortByAsc} />
              {sortInstruction && (
                // Sort instruction text. It is intentionally aria-hidden so screen readers do NOT
                // stop on it while swiping the header, and so it is excluded from the header cell's
                // text content that gets re-announced on every associated data cell. It is still
                // exposed on purpose: the th references it via aria-describedby, and per the
                // accessible description spec a hidden element referenced by aria-describedby is
                // still read when the header itself receives focus.
                <span id={descId} className='cdcdataviz-sr-only' aria-hidden='true'>
                  {sortInstruction}
                </span>
              )}
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
          const rightAxisItems = config.series?.filter(item => item?.axis === 'Right') || []
          const rightAxisItemsMap = new Map(rightAxisItems.map(item => [item.dataKey, item]))

          let column = config.xAxis?.dataKey
          let text =
            row !== '__series__' ? getChartCellValue(row, column, config, data, rightAxisItemsMap) : '__series__'
          const newSortBy = getNewSortBy(sortBy, column, index)
          const sortByAsc = sortBy.colIndex === index ? sortBy.asc : undefined
          const headingId = `${headerIdBase}-heading-${index}`
          const descId = `${headerIdBase}-desc-${index}`
          const sortInstruction = getSortInstructionText(text, config, newSortBy.asc)
          return (
            <th
              style={{
                minWidth: (config.table.cellMinWidth || 0) + 'px',
                textAlign: rightAlignedCols && rightAlignedCols[index] ? 'right' : '',
                paddingRight: '1.8em'
              }}
              key={`col-header-${text}__${index}`}
              tabIndex={0}
              role='columnheader'
              scope='col'
              aria-labelledby={headingId}
              aria-describedby={sortInstruction ? descId : undefined}
              onClick={() => {
                if (hasRowType) return
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
              className={sortBy.colIndex === index ? (sortBy.asc ? 'sort sort-asc' : 'sort sort-desc') : 'sort'}
              {...(sortBy.column === text
                ? sortBy.asc
                  ? { 'aria-sort': 'ascending' }
                  : { 'aria-sort': 'descending' }
                : null)}
            >
              <span id={headingId}>
                <ColumnHeadingText text={text} config={config} />
              </span>
              <SortIcon ascending={sortByAsc} />

              {sortInstruction && (
                // Sort instruction text. It is intentionally aria-hidden so screen readers do NOT
                // stop on it while swiping the header, and so it is excluded from the header cell's
                // text content that gets re-announced on every associated data cell. It is still
                // exposed on purpose: the th references it via aria-describedby, and per the
                // accessible description spec a hidden element referenced by aria-describedby is
                // still read when the header itself receives focus. This is why an automated review
                // may flag reading a hidden element — it is deliberate.
                <span id={descId} className='cdcdataviz-sr-only' aria-hidden='true'>
                  {sortInstruction}
                </span>
              )}
            </th>
          )
        })}
      </tr>
    )
  }
}

export default ChartHeader
