import React, { useContext, useMemo } from 'react'
import { HeatmapRect } from '@visx/heatmap'
import { formatNumber as formatColumnNumber } from '@cdc/core/helpers/cove/number'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import ConfigContext from '../../../ConfigContext'
import { findColumnConfigByName, getSeriesColumnFormattingParams } from '../../../helpers/seriesColumnSettings'
import {
  buildTooltipHtml,
  buildXLabelLookup,
  getFormattedValueText,
  getHeatMapCellLabel,
  getHeatMapSeriesTooltipEnabled,
  getTooltipColumns
} from '../helpers'
import { EMPTY_VALUE_LABEL, MIN_CELL_VALUE_HEIGHT, MIN_CELL_VALUE_WIDTH } from '../heatmap.constants'
import {
  type FormatCellValueFn,
  type FormatDateFn,
  type FormatValueFn,
  type HeatMapColumn,
  type ParseDateFn
} from '../types'

type HeatMapCellsProps = {
  columns: HeatMapColumn[]
  cellWidth: number
  cellHeight: number
  xOffset: number
  yOffset: number
  gap: number
  colorScale: (value: number) => string
}

const parseRgbColor = (color?: string): [number, number, number] | null => {
  if (!color) return null

  const hexMatch = color.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
  if (hexMatch) {
    const hex = hexMatch[1]
    const normalized =
      hex.length === 3
        ? hex
            .split('')
            .map(character => `${character}${character}`)
            .join('')
        : hex

    return [
      parseInt(normalized.slice(0, 2), 16),
      parseInt(normalized.slice(2, 4), 16),
      parseInt(normalized.slice(4, 6), 16)
    ]
  }

  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i)
  if (!rgbMatch) return null

  return [Number(rgbMatch[1]), Number(rgbMatch[2]), Number(rgbMatch[3])]
}

const getRelativeLuminance = ([red, green, blue]: [number, number, number]) => {
  const [r, g, b] = [red, green, blue].map(channel => {
    const normalized = channel / 255
    return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4)
  })

  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const getContrastRatio = (leftColor: [number, number, number], rightColor: [number, number, number]) => {
  const left = getRelativeLuminance(leftColor)
  const right = getRelativeLuminance(rightColor)
  const lighter = Math.max(left, right)
  const darker = Math.min(left, right)

  return (lighter + 0.05) / (darker + 0.05)
}

const getReadableCellTextColor = (fillColor?: string) => {
  const rgb = parseRgbColor(fillColor)
  if (!rgb) return '#1c1d1f'

  return getContrastRatio(rgb, [28, 29, 31]) >= getContrastRatio(rgb, [255, 255, 255]) ? '#1c1d1f' : '#fff'
}

const HeatMapCells: React.FC<HeatMapCellsProps> = ({
  columns,
  cellWidth,
  cellHeight,
  xOffset,
  yOffset,
  gap,
  colorScale
}) => {
  const { config, parseDate, formatDate, formatTooltipsDate, formatNumber } = useContext(ConfigContext)
  const parseDateValue: ParseDateFn =
    typeof parseDate === 'function'
      ? (value, showError = true) => parseDate(value, showError)
      : value => new Date(value)
  const formatDateValue: FormatDateFn =
    typeof formatDate === 'function' ? value => formatDate(value) : value => value.toISOString()
  const formatTooltipDateValue: FormatDateFn =
    typeof formatTooltipsDate === 'function' && config.tooltips?.dateDisplayFormat
      ? value => formatTooltipsDate(value)
      : formatDateValue
  const formatNumericValue: FormatValueFn =
    typeof formatNumber === 'function'
      ? (value, position = 'left') => String(formatNumber(value, position))
      : value => String(value)
  const xDataKey = config.xAxis?.dataKey
  const heatMapSeries = config.series || []
  const tooltipXLabelLookup = useMemo(
    () => buildXLabelLookup(columns, config.xAxis?.type, formatTooltipDateValue, parseDateValue),
    [columns, config.xAxis?.type, formatTooltipDateValue, parseDateValue]
  )
  const additionalColumns = useMemo(
    () => getTooltipColumns(config, xDataKey, heatMapSeries),
    [config, xDataKey, heatMapSeries]
  )
  const formatHeatMapCellValue: FormatCellValueFn = cell => {
    if (cell.value === null) return EMPTY_VALUE_LABEL

    const columnConfig = findColumnConfigByName(config.columns || {}, cell.rowKey)?.columnConfig
    const formattingParams = getSeriesColumnFormattingParams(columnConfig)

    if (formattingParams) {
      return String(formatColumnNumber(String(cell.value), 'left', false, config as any, formattingParams as any))
    }

    return formatNumericValue(cell.value, 'left')
  }
  const tooltipId = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const showCellValues = Boolean(config.heatmap?.showCellValues)
  const cellTextWidths = new Map<string, number>()

  return (
    <HeatmapRect
      data={columns}
      xScale={columnIndex => columnIndex * cellWidth + xOffset}
      yScale={rowIndex => rowIndex * cellHeight + yOffset}
      binWidth={cellWidth}
      binHeight={cellHeight}
      gap={gap}
      bins={column => column.bins}
      count={bin => (typeof bin.value === 'number' ? bin.value : 0)}
    >
      {heatmap =>
        heatmap.map(columnBins =>
          columnBins.map(bin => {
            const hasValue = typeof bin.bin.value === 'number'
            const xLabel = tooltipXLabelLookup[String(bin.bin.xValue)] || bin.bin.xLabel
            const renderedCellWidth = Math.max(bin.width, 0)
            const renderedCellHeight = Math.max(bin.height, 0)
            const fillColor = hasValue ? colorScale(bin.bin.value as number) : undefined
            const cellFontSize = Math.max(9, Math.min(16, renderedCellHeight * 0.5))
            const cellValueText =
              showCellValues && hasValue ? getFormattedValueText(bin.bin, formatHeatMapCellValue) : ''
            const textWidthKey = `${cellFontSize}:${cellValueText}`
            let cellTextWidth = cellTextWidths.get(textWidthKey)
            if (
              cellValueText &&
              renderedCellWidth >= MIN_CELL_VALUE_WIDTH &&
              renderedCellHeight >= MIN_CELL_VALUE_HEIGHT &&
              cellTextWidth === undefined
            ) {
              cellTextWidth =
                getTextWidth(cellValueText, `bold ${cellFontSize}px Nunito, sans-serif`) ??
                cellValueText.length * cellFontSize * 0.65
              cellTextWidths.set(textWidthKey, cellTextWidth)
            }
            const shouldShowCellValue =
              showCellValues &&
              hasValue &&
              renderedCellWidth >= MIN_CELL_VALUE_WIDTH &&
              renderedCellHeight >= MIN_CELL_VALUE_HEIGHT &&
              (cellTextWidth ?? 0) <= renderedCellWidth - 4

            return (
              <React.Fragment key={`heatmap-cell-${bin.column}-${bin.row}`}>
                <rect
                  className={`visx-heatmap-rect cdc-heatmap__cell${hasValue ? '' : ' cdc-heatmap__cell--empty'}`}
                  role='img'
                  tabIndex={0}
                  aria-label={getHeatMapCellLabel({
                    cell: bin.bin,
                    config,
                    formatNumber: formatHeatMapCellValue,
                    xLabel,
                    xDataKey
                  })}
                  x={bin.x}
                  y={bin.y}
                  width={renderedCellWidth}
                  height={renderedCellHeight}
                  fill={fillColor}
                  data-tooltip-id={tooltipId}
                  data-tooltip-html={buildTooltipHtml({
                    cell: bin.bin,
                    additionalColumns,
                    config,
                    formatNumber: formatHeatMapCellValue,
                    xLabel,
                    xDataKey,
                    showSeriesRows: getHeatMapSeriesTooltipEnabled(config, bin.bin.rowKey)
                  })}
                />
                {shouldShowCellValue && (
                  <text
                    className='cdc-heatmap__cell-value'
                    x={bin.x + renderedCellWidth / 2}
                    y={bin.y + renderedCellHeight / 2}
                    fill={getReadableCellTextColor(fillColor)}
                    fontSize={cellFontSize}
                    textAnchor='middle'
                    dominantBaseline='middle'
                    aria-hidden='true'
                  >
                    {cellValueText}
                  </text>
                )}
              </React.Fragment>
            )
          })
        )
      }
    </HeatmapRect>
  )
}

export default HeatMapCells
