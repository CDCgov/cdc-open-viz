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

// Renders the sort instruction description span, exposed via aria-describedby on the header cell.
// Intentionally aria-hidden to exclude from header swiping and data cell re-announcements, while
// still readable on header focus per the accessible description spec. An automated review may flag
// reading a hidden element — this is deliberate.
export const SortInstructionDescription = ({ descId, sortInstruction }: { descId: string; sortInstruction: string | null }) => {
  if (!sortInstruction) return null
  return (
    <span id={descId} className='cdcdataviz-sr-only' aria-hidden='true'>
      {sortInstruction}
    </span>
  )
}

// Strips HTML tags from a value and returns plain text. Returns '' for
// non-string or empty input, ensuring sort instructions are never built
// from raw markup or undefined values.
const toPlainText = (value: unknown): string => {
  if (value === null || value === undefined) return ''

  // Preserve primitive header labels (e.g., numeric axis values), but avoid turning objects/React nodes
  // into "[object Object]".
  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') return String(value)

  if (typeof value !== 'string' || !value) return ''
  return new DOMParser().parseFromString(value, 'text/html').body.textContent?.trim() ?? ''
}

// Builds the dynamic sort-control instruction text for a column header, or null when the
// control is not applicable. Returned as a string (not an element) so callers can decide
// whether to render it and reference it via aria-describedby on the header cell.
// `nextSortAsc` is the direction that activating the control WILL apply (the `getNewSortBy`
// result): `true` -> ascending, `false` -> descending, `undefined` -> clears the sort. Using
// the pending direction keeps the description in sync with what pressing the header does,
// instead of restating the column's current state.
const getSortInstructionText = (text: string, config: ChartConfig, nextSortAsc: boolean | undefined): string | null => {
  let columnHeaderText: string

  if (text === '__series__' || text === '') {
    if (!config.table.indexLabel) return null
    columnHeaderText = toPlainText(config.table.indexLabel)
  } else {
    columnHeaderText = toPlainText(text)
  }

  // If the label reduces to empty after stripping markup (or was non-string), bail out.
  if (!columnHeaderText) return null

  const action =
    nextSortAsc === true
      ? `sort by ${columnHeaderText} in ascending order`
      : nextSortAsc === false
        ? `sort by ${columnHeaderText} in descending order`
        : `remove the sort from ${columnHeaderText}`

  return `Press command, modifier, or enter key to ${action}`
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
              key={`col-header-${column}`}
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
              <SortInstructionDescription descId={descId} sortInstruction={sortInstruction} />
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
              key={`col-header-${row}`}
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
              className={sortBy.colIndex === index ? (sortBy.asc ? 'sort sort-asc' : 'sort sort-desc') : 'sort'}
              {...(!hasRowType && sortBy.colIndex === index
                ? sortBy.asc
                  ? { 'aria-sort': 'ascending' }
                  : { 'aria-sort': 'descending' }
                : null)}
            >
              <span id={headingId}>
                <ColumnHeadingText text={text} config={config} />
              </span>
              <SortIcon ascending={sortByAsc} />
              <SortInstructionDescription descId={descId} sortInstruction={sortInstruction} />
            </th>
          )
        })}
      </tr>
    )
  }
}

export default ChartHeader
