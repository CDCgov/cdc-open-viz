import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import { expect, userEvent, waitFor, within } from 'storybook/test'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Series Color Assignments',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const assignedColors = {
  alpha: '#0057B7',
  bravo: '#D94E5F',
  charlie: '#5A8E3F'
}

const normalizeColor = (color: string) => {
  const swatch = document.createElement('div')
  swatch.style.color = color
  document.body.appendChild(swatch)
  const normalized = getComputedStyle(swatch).color
  swatch.remove()
  return normalized
}

const getVisiblePointColorsBySeries = (canvasElement: HTMLElement) => {
  const groups = Array.from(canvasElement.querySelectorAll('.line-chart-group .visx-glyph-group')) as SVGGElement[]
  const colorsBySeries = new Map<string, Set<string>>()

  groups.forEach(group => {
    const seriesIndex = group.getAttribute('data-seriesindex')
    const glyph = group.querySelector('[fill]') as SVGElement | null
    const fill = glyph?.getAttribute('fill')

    if (!seriesIndex || !fill || fill === 'transparent') return

    const seriesColors = colorsBySeries.get(seriesIndex) || new Set<string>()
    seriesColors.add(normalizeColor(fill))
    colorsBySeries.set(seriesIndex, seriesColors)
  })

  return colorsBySeries
}

const expectVisibleSeriesColors = async (
  canvasElement: HTMLElement,
  expected: Array<[seriesIndex: string, color: string]>
) => {
  await waitFor(() => {
    const colorsBySeries = getVisiblePointColorsBySeries(canvasElement)
    const expectedSeries = expected.map(([seriesIndex]) => seriesIndex)

    expect(Array.from(colorsBySeries.keys()).sort()).toEqual(expectedSeries.sort())

    expected.forEach(([seriesIndex, color]) => {
      expect(Array.from(colorsBySeries.get(seriesIndex) || [])).toEqual([normalizeColor(color)])
    })
  })
}

const expectLegendLabels = async (canvasElement: HTMLElement, expectedLabels: string[]) => {
  await waitFor(() => {
    const labels = Array.from(canvasElement.querySelectorAll('.legend-container [role="button"]')).map(item =>
      item.textContent?.trim()
    )

    expect(labels).toEqual(expectedLabels)
  })
}

const config = {
  type: 'chart',
  version: '4.26.5',
  title: 'Series Color Assignments With Filtered Series',
  visualizationType: 'Line',
  visualizationSubType: 'regular',
  orientation: 'vertical',
  filterBehavior: 'Filter Change',
  lineDatapointStyle: 'always show',
  lineDatapointColor: 'Same as Line',
  general: {
    palette: {
      name: 'qualitative_standard',
      version: '2.0',
      colorAssignmentMode: 'by-value',
      colorAssignments: [
        { key: 'alpha', color: assignedColors.alpha },
        { key: 'bravo', color: assignedColors.bravo },
        { key: 'charlie', color: assignedColors.charlie }
      ]
    }
  },
  legend: {
    hide: false,
    behavior: 'isolate',
    dynamicLegend: false,
    position: 'top',
    style: 'circles',
    unified: false
  },
  xAxis: {
    dataKey: 'week',
    type: 'date-time',
    dateParseFormat: '%Y-%m-%d',
    dateDisplayFormat: '%b. %-d',
    label: 'Week',
    sortDates: false
  },
  yAxis: {
    label: 'Rate',
    min: '0',
    max: '50',
    numTicks: '5',
    gridLines: true
  },
  visual: {
    lineDatapointSymbol: 'none',
    verticalHoverLine: false,
    horizontalHoverLine: false
  },
  tooltips: {
    singleSeries: false
  },
  series: [
    { dataKey: 'alpha', name: 'Alpha', type: 'Line', axis: 'Left', tooltip: true },
    { dataKey: 'bravo', name: 'Bravo', type: 'Line', axis: 'Left', tooltip: true },
    { dataKey: 'charlie', name: 'Charlie', type: 'Line', axis: 'Left', tooltip: true }
  ],
  filters: [
    {
      values: ['Alpha + Bravo', 'Bravo + Charlie'],
      filterStyle: 'dropdown',
      id: 1726688167657,
      columnName: 'view',
      active: 'Alpha + Bravo',
      label: 'Visible series'
    }
  ],
  data: [
    { week: '2024-01-01', view: 'Alpha + Bravo', alpha: 12, bravo: 20, charlie: null },
    { week: '2024-01-08', view: 'Alpha + Bravo', alpha: 16, bravo: 23, charlie: null },
    { week: '2024-01-15', view: 'Alpha + Bravo', alpha: 21, bravo: 28, charlie: null },
    { week: '2024-01-22', view: 'Alpha + Bravo', alpha: 26, bravo: 31, charlie: null },
    { week: '2024-01-01', view: 'Bravo + Charlie', alpha: null, bravo: 20, charlie: 30 },
    { week: '2024-01-08', view: 'Bravo + Charlie', alpha: null, bravo: 23, charlie: 34 },
    { week: '2024-01-15', view: 'Bravo + Charlie', alpha: null, bravo: 28, charlie: 39 },
    { week: '2024-01-22', view: 'Bravo + Charlie', alpha: null, bravo: 31, charlie: 43 }
  ],
  dataDescription: {
    horizontal: false,
    series: false
  }
}

export const FilteredSeriesKeepAssignedColors: Story = {
  args: {
    config,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await expectVisibleSeriesColors(canvasElement, [
      ['0', assignedColors.alpha],
      ['1', assignedColors.bravo]
    ])
    await expectLegendLabels(canvasElement, ['Alpha', 'Bravo'])

    const canvas = within(canvasElement)
    const filter = canvas.getByLabelText(/filter by visible series/i) as HTMLSelectElement
    await userEvent.selectOptions(filter, 'Bravo + Charlie')

    await expectVisibleSeriesColors(canvasElement, [
      ['1', assignedColors.bravo],
      ['2', assignedColors.charlie]
    ])
    await expectLegendLabels(canvasElement, ['Bravo', 'Charlie'])
  }
}

export default meta
