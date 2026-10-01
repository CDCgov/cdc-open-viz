import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import Chart from '../CdcChart'
import heatMapAverageAgeCategoricalConfig from './_mock/heatmap-average-age-categorical.json'
import heatMapSparseAggregationConfig from '../../examples/feature/heatmap/sparse-aggregation.json'
import heatMapCellValuesBottomAxisConfig from '../../examples/feature/heatmap/cell-values-bottom-axis.json'
import heatMapCalendarConfig from '../../examples/feature/heatmap/calendar-heatmap.json'
import { assertVisualizationRendered, performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/HeatMap',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const heatMapTopYAxisLabelConfig = {
  ...heatMapAverageAgeCategoricalConfig,
  yAxis: {
    ...heatMapAverageAgeCategoricalConfig.yAxis,
    titlePlacement: 'top'
  }
}

const heatMapHorizontalScrollConfig = {
  ...heatMapCalendarConfig,
  title: 'Scrollable Calendar HeatMap',
  heatmap: {
    ...heatMapCalendarConfig.heatmap,
    horizontalScroll: true,
    minColumnWidth: 44
  }
}

const heatMapHorizontalScrollBottomAxisConfig = {
  ...heatMapAverageAgeCategoricalConfig,
  title: 'Scrollable Bottom Axis HeatMap',
  data: heatMapAverageAgeCategoricalConfig.data.map((row, index) =>
    index === 0 ? { ...row, communityType: 'Extremely Long Urban Community Classification' } : row
  ),
  xAxis: {
    ...heatMapAverageAgeCategoricalConfig.xAxis,
    tickRotation: 45
  },
  yAxis: {
    ...heatMapAverageAgeCategoricalConfig.yAxis,
    label: 'Geographic region category',
    titlePlacement: 'top'
  },
  heatmap: {
    ...heatMapAverageAgeCategoricalConfig.heatmap,
    horizontalScroll: true,
    minColumnWidth: 220,
    rowLabelGap: 18,
    xAxisPosition: 'bottom'
  }
}

const getTooltipHtmlValues = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('[data-tooltip-html]')).map(
    element => element.getAttribute('data-tooltip-html') || ''
  )

const getSvgTextBox = (svg: SVGSVGElement, value: string) =>
  Array.from(svg.querySelectorAll('text'))
    .find(text => text.textContent === value)
    ?.getBoundingClientRect()

const getSvgText = (svg: SVGSVGElement, value: string) =>
  Array.from(svg.querySelectorAll('text')).find(text => text.textContent === value)

const getTranslateY = (element: Element | null | undefined) => {
  const transform = element?.getAttribute('transform') || ''
  const match = transform.match(/translate\([^,]+,\s*([^)]+)\)/)
  return match ? Number(match[1]) : 0
}

const getElementBox = (canvasElement: HTMLElement, selector: string) =>
  canvasElement.querySelector(selector)?.getBoundingClientRect()

export const HeatMap_Demo: Story = {
  args: {
    config: heatMapSparseAggregationConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.visx-heatmap-rect', canvasElement)

    const cells = canvasElement.querySelectorAll('.visx-heatmap-rect')
    const tooltipHtmlValues = getTooltipHtmlValues(canvasElement)
    const firstCell = cells[0]
    const legendBox = getElementBox(canvasElement, '.cdc-heatmap__legend')
    const heatMapBox = getElementBox(canvasElement, '.cdc-heatmap')
    const dataTableBox = getElementBox(canvasElement, '.data-table-container')
    const tableGap = (dataTableBox?.top || 0) - (heatMapBox?.bottom || 0)

    expect(cells.length).toBe(9)
    expect(firstCell).toHaveAttribute('tabindex', '0')
    expect(firstCell).toHaveAttribute('aria-label')
    expect(legendBox?.bottom).toBeLessThanOrEqual((heatMapBox?.top || 0) + 2)
    expect(tableGap).toBeGreaterThanOrEqual(0)
    expect(tableGap).toBeLessThan(80)
    expect(tooltipHtmlValues.some(html => html.includes('tooltip-heading'))).toBe(true)
    expect(tooltipHtmlValues.some(html => html.includes('Aggregated Rows: 2'))).toBe(true)
    expect(tooltipHtmlValues.some(html => html.includes('Notes: Multiple values'))).toBe(true)
    expect(tooltipHtmlValues.some(html => html.includes('No data'))).toBe(true)
  }
}

export const HeatMap_Average_Age_Categorical_Demo: Story = {
  args: {
    config: heatMapAverageAgeCategoricalConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.visx-heatmap-rect', canvasElement)

    const cells = canvasElement.querySelectorAll('.visx-heatmap-rect')
    const tooltipHtmlValues = getTooltipHtmlValues(canvasElement)
    const firstCell = cells[0]
    const firstCellAriaLabel = firstCell.getAttribute('aria-label') || ''
    const chartSvg = firstCell.ownerSVGElement as SVGSVGElement
    const firstCellBox = firstCell.getBoundingClientRect()
    const lastCellBox = cells[cells.length - 1].getBoundingClientRect()
    const cityLabelBox = getSvgTextBox(chartSvg, 'Atlanta')
    const rowAxisTitle = getSvgText(chartSvg, 'City')
    const columnLabelBox = getSvgTextBox(chartSvg, 'Urban Core')
    const xAxisLine = chartSvg.querySelector('.cdc-heatmap__x-axis-line')
    const svgBox = chartSvg.getBoundingClientRect()
    const blockLeft = Math.min(cityLabelBox?.left || firstCellBox.left, firstCellBox.left)
    const blockRight = lastCellBox.right
    const blockCenterDelta = Math.abs((blockLeft + blockRight) / 2 - (svgBox.left + svgBox.width / 2))
    const columnLabelGap = columnLabelBox ? firstCellBox.top - columnLabelBox.bottom : 0

    expect(cells.length).toBe(60)
    expect(firstCellAriaLabel).toContain('Community Type: Urban Core')
    expect(firstCellAriaLabel).toContain('City: Atlanta')
    expect(Number(firstCell.getAttribute('x'))).toBe(Number(xAxisLine?.getAttribute('x1')))
    expect(columnLabelGap).toBeGreaterThan(0)
    expect(rowAxisTitle?.getAttribute('transform')).toContain('rotate(-90)')
    expect(columnLabelBox?.top).toBeGreaterThanOrEqual(svgBox.top - 1)
    expect(blockCenterDelta).toBeLessThan(140)
    expect(tooltipHtmlValues.some(html => html.includes('Community Type: Urban Core'))).toBe(true)
    expect(tooltipHtmlValues.some(html => html.includes('Average age: 34'))).toBe(true)
    expect(tooltipHtmlValues.some(html => html.includes('Notes: Dense city center'))).toBe(true)
  }
}

export const HeatMap_Top_Y_Axis_Label_Demo: Story = {
  args: {
    config: heatMapTopYAxisLabelConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.visx-heatmap-rect', canvasElement)

    const chartSvg = canvasElement.querySelector('.cdc-heatmap__svg') as SVGSVGElement
    const rowAxisTitle = getSvgText(chartSvg, 'City')
    const columnAxisTitle = getSvgText(chartSvg, 'Community Type')

    expect(rowAxisTitle?.getAttribute('transform')).toBeNull()
    expect(rowAxisTitle?.getAttribute('y')).toBe(columnAxisTitle?.getAttribute('y'))
  }
}

export const HeatMap_Cell_Values_And_Binned_Legend: Story = {
  args: {
    config: heatMapCellValuesBottomAxisConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.visx-heatmap-rect', canvasElement)
    await waitForPresence('.cdc-heatmap__cell-value', canvasElement)

    const cellValues = canvasElement.querySelectorAll('.cdc-heatmap__cell-value')
    const legendItems = canvasElement.querySelectorAll('.cdc-heatmap__legend .legend-item')
    const legendBox = getElementBox(canvasElement, '.cdc-heatmap__legend')
    const heatMapBox = getElementBox(canvasElement, '.cdc-heatmap')
    const dataTableBox = getElementBox(canvasElement, '.data-table-container')
    const tableGap = (dataTableBox?.top || 0) - (legendBox?.bottom || 0)

    expect(canvasElement.querySelectorAll('.visx-heatmap-rect').length).toBe(20)
    expect(canvasElement.querySelector('.visx-axis-bottom')).toBeTruthy()
    expect(heatMapBox?.bottom).toBeLessThanOrEqual((legendBox?.top || 0) + 2)
    expect(tableGap).toBeGreaterThanOrEqual(0)
    expect(tableGap).toBeLessThan(80)
    expect(cellValues.length).toBeGreaterThan(0)
    expect(legendItems.length).toBeGreaterThan(0)
  }
}

export const HeatMap_Calendar_Demo: Story = {
  args: {
    config: heatMapCalendarConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.visx-heatmap-rect', canvasElement)

    const cells = Array.from(canvasElement.querySelectorAll('.visx-heatmap-rect'))
    const chartSvg = cells[0].ownerSVGElement as SVGSVGElement
    const rowAxisTitle = getSvgText(chartSvg, 'Month')
    const gridTop = Math.min(...cells.map(cell => Number(cell.getAttribute('y'))))
    const gridBottom = Math.max(
      ...cells.map(cell => Number(cell.getAttribute('y')) + Number(cell.getAttribute('height')))
    )
    const gridCenter = (gridTop + gridBottom) / 2

    expect(cells.length).toBe(372)
    expect(rowAxisTitle?.getAttribute('transform')).toContain('rotate(-90)')
    expect(Math.abs(getTranslateY(rowAxisTitle) - gridCenter)).toBeLessThanOrEqual(1)
  }
}

export const HeatMap_Horizontal_Scroll_Demo: Story = {
  args: {
    config: heatMapHorizontalScrollConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.cdc-heatmap__scroll-area', canvasElement)

    const scrollArea = canvasElement.querySelector('.cdc-heatmap__scroll-area') as HTMLElement
    const fixedAxis = canvasElement.querySelector('.cdc-heatmap__fixed-axis-svg')
    const fixedXAxisTitle = canvasElement.querySelector('.cdc-heatmap__fixed-x-title text') as SVGTextElement
    const firstCell = scrollArea.querySelector('.visx-heatmap-rect') as SVGRectElement

    expect(scrollArea).toHaveAttribute('role', 'region')
    expect(scrollArea).toHaveAttribute('tabindex', '0')
    expect(scrollArea.scrollLeft).toBe(0)
    expect(scrollArea.scrollWidth).toBeGreaterThan(scrollArea.clientWidth)
    expect(fixedAxis).toBeTruthy()
    expect(scrollArea.contains(fixedAxis)).toBe(false)

    await performAndAssert(
      'HeatMap horizontal scrolling',
      () => ({
        scrollLeft: scrollArea.scrollLeft,
        cellLeft: firstCell.getBoundingClientRect().left,
        fixedAxisLeft: fixedAxis?.getBoundingClientRect().left || 0,
        fixedTitleLeft: fixedXAxisTitle.getBoundingClientRect().left
      }),
      () => {
        scrollArea.scrollLeft = Math.min(200, scrollArea.scrollWidth - scrollArea.clientWidth)
        scrollArea.dispatchEvent(new Event('scroll'))
      },
      (before, after) =>
        after.scrollLeft > before.scrollLeft &&
        after.cellLeft < before.cellLeft &&
        Math.abs(after.fixedAxisLeft - before.fixedAxisLeft) < 1 &&
        Math.abs(after.fixedTitleLeft - before.fixedTitleLeft) < 1
    )
  }
}

export const HeatMap_Horizontal_Scroll_Bottom_Axis_Demo: Story = {
  args: {
    config: heatMapHorizontalScrollBottomAxisConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.cdc-heatmap__scroll-area', canvasElement)

    const scrollArea = canvasElement.querySelector('.cdc-heatmap__scroll-area') as HTMLElement
    const firstCell = scrollArea.querySelector('.visx-heatmap-rect') as SVGRectElement
    const firstTickLabel = scrollArea.querySelector('.visx-axis-bottom .visx-axis-tick text') as SVGTextElement
    const xAxisLine = scrollArea.querySelector('.cdc-heatmap__x-axis-line')
    const fixedAxis = canvasElement.querySelector('.cdc-heatmap__fixed-axis-svg') as SVGSVGElement
    const scrollAreaBox = scrollArea.getBoundingClientRect()
    const firstCellBox = firstCell.getBoundingClientRect()
    const firstTickLabelBox = firstTickLabel.getBoundingClientRect()

    expect(canvasElement.querySelector('.visx-axis-bottom')).toBeTruthy()
    expect(Number(firstCell.getAttribute('x'))).toBeGreaterThan(18)
    expect(firstCellBox.left).toBeLessThan(scrollAreaBox.right)
    expect(firstTickLabelBox.left).toBeGreaterThanOrEqual(scrollAreaBox.left - 1)
    expect(xAxisLine).toHaveAttribute('x1', '0')
    expect(getComputedStyle(fixedAxis).overflow).toBe('visible')
  }
}

export default meta
