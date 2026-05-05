import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import Chart from '../CdcChart'
import heatMapConfig from './_mock/heatmap.json'
import heatMapAverageAgeCategoricalConfig from './_mock/heatmap-average-age-categorical.json'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/HeatMap',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const getTooltipHtmlValues = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('[data-tooltip-html]')).map(
    element => element.getAttribute('data-tooltip-html') || ''
  )

const getSvgTextBox = (svg: SVGSVGElement, value: string) =>
  Array.from(svg.querySelectorAll('text'))
    .find(text => text.textContent === value)
    ?.getBoundingClientRect()

export const HeatMap_Demo: Story = {
  args: {
    config: heatMapConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.visx-heatmap-rect', canvasElement)

    const cells = canvasElement.querySelectorAll('.visx-heatmap-rect')
    const tooltipHtmlValues = getTooltipHtmlValues(canvasElement)
    const firstCell = cells[0]

    expect(cells.length).toBe(9)
    expect(firstCell).toHaveAttribute('tabindex', '0')
    expect(firstCell).toHaveAttribute('aria-label')
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
    const columnLabelBox = getSvgTextBox(chartSvg, 'Urban Core')
    const svgBox = chartSvg.getBoundingClientRect()
    const blockLeft = Math.min(cityLabelBox?.left || firstCellBox.left, firstCellBox.left)
    const blockRight = lastCellBox.right
    const blockCenterDelta = Math.abs((blockLeft + blockRight) / 2 - (svgBox.left + svgBox.width / 2))
    const rowLabelGap = cityLabelBox ? firstCellBox.left - cityLabelBox.right : 0
    const columnLabelGap = columnLabelBox ? firstCellBox.top - columnLabelBox.bottom : 0

    expect(cells.length).toBe(60)
    expect(firstCellAriaLabel).toContain('Community Type: Urban Core')
    expect(firstCellAriaLabel).toContain('City: Atlanta')
    expect(rowLabelGap).toBeGreaterThan(16)
    expect(rowLabelGap).toBeLessThan(80)
    expect(columnLabelGap).toBeGreaterThan(0)
    expect(blockCenterDelta).toBeLessThan(140)
    expect(tooltipHtmlValues.some(html => html.includes('Community Type: Urban Core'))).toBe(true)
    expect(tooltipHtmlValues.some(html => html.includes('Average age: 34'))).toBe(true)
    expect(tooltipHtmlValues.some(html => html.includes('Notes: Dense city center'))).toBe(true)
  }
}

export default meta
