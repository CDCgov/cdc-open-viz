import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  performAndAssert,
  waitForAbsence,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'

import Chart from '../CdcChartComponent'
import dendrogramConfig from '../../examples/dendrogram.json'
import deviationBarConfig from '../../examples/feature/deviation/planet-deviation-config.json'
import forestPlotConfig from '../../examples/feature/forest-plot/forest-plot.json'
import networkConfig from '../../examples/network.json'
import radarConfig from '../../examples/radar-chart-simple.json'
import heatMapConfig from './_mock/heatmap-average-age-categorical.json'
import lollipopConfig from './_mock/lollipop.json'
import pairedBarConfig from './_mock/paired-bar.json'
import pieConfig from './_mock/pie_config.json'
import sankeyConfig from './_mock/sankey_mock.json'
import scatterPlotConfig from './_mock/scatterplot_mock.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Required Fields',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const getRequiredAlertText = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('.chart-required-fields-alerts .alert-info'))
    .map(alert => alert.textContent?.trim() || '')
    .join(' ')

const expectStructuredRequiredFields = (
  canvasElement: HTMLElement,
  expectedFields: Array<{ section: string; field: string }>
) => {
  const alerts = Array.from(canvasElement.querySelectorAll('.chart-required-fields-alerts .alert-info'))
  expect(alerts).toHaveLength(expectedFields.length)
  expectedFields.forEach(({ section, field }, index) => {
    expect(alerts[index]).toHaveTextContent(`Missing field: ${field}. More information`)
    expect(
      within(alerts[index] as HTMLElement).getByRole('button', {
        name: `Open ${section} and focus ${field}`
      })
    ).toBeVisible()
  })
}

const assertAlertNavigates = async (
  canvasElement: HTMLElement,
  section: string,
  field: string,
  target: string,
  sectionTarget = target
) => {
  const canvas = within(canvasElement)
  const link = canvas.getByRole('button', { name: `Open ${section} and focus ${field}` })

  await performAndAssert(
    `The ${field} alert opens its editor section and focuses the field`,
    () => ({
      expanded:
        canvasElement
          .querySelector(`[data-required-field-section="${sectionTarget}"]`)
          ?.getAttribute('aria-expanded') === 'true',
      focused: document.activeElement?.getAttribute('data-required-field-control'),
      panelVisible: !canvasElement.querySelector('.editor-panel__toggle.collapsed')
    }),
    async () => userEvent.click(link),
    (_before, after) => after.expanded && after.focused === target && after.panelVisible
  )
}

export const CompletesDataSeries: Story = {
  args: {
    config: {
      ...scatterPlotConfig,
      newViz: true,
      series: [],
      xAxis: { ...scatterPlotConfig.xAxis, dataKey: '' }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('.alert-info', canvasElement)

    expectStructuredRequiredFields(canvasElement, [
      { section: 'Data Series', field: 'Add Data Series' },
      { section: 'Date/Category Axis', field: 'Data Key' }
    ])
    expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()
    expect(canvas.queryByText("I'm Done")).not.toBeInTheDocument()
    expect(canvasElement.querySelector('.alert-info button[aria-label="Close"]')).toBeNull()

    await assertAlertNavigates(canvasElement, 'Data Series', 'Add Data Series', 'data-series')

    const seriesSelect = canvasElement.querySelector('[data-required-field-control="data-series"]') as HTMLSelectElement
    await performAndAssert(
      'Completing the series requirement leaves only the category-axis alert',
      () => getRequiredAlertText(canvasElement),
      async () => userEvent.selectOptions(seriesSelect, 'y1'),
      (before, after) =>
        before.includes('Add Data Series') &&
        before.includes('Data Key') &&
        !after.includes('Add Data Series') &&
        after.includes('Data Key')
    )
    expectStructuredRequiredFields(canvasElement, [{ section: 'Date/Category Axis', field: 'Data Key' }])
  }
}

export const CompletesCategoryAxis: Story = {
  args: {
    config: {
      ...scatterPlotConfig,
      newViz: true,
      series: scatterPlotConfig.series.map(series => ({ ...series })),
      xAxis: { ...scatterPlotConfig.xAxis, dataKey: '' }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('.alert-info', canvasElement)

    expectStructuredRequiredFields(canvasElement, [{ section: 'Date/Category Axis', field: 'Data Key' }])
    await userEvent.click(canvas.getByTitle('Collapse Editor'))
    expect(canvas.getByTitle('Expand Editor')).toBeVisible()
    await assertAlertNavigates(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis')

    const dataKeySelect = canvasElement.querySelector(
      '[data-required-field-control="date-category-axis"]'
    ) as HTMLSelectElement
    await performAndAssert(
      'Completing the final requirement renders the chart automatically',
      () => ({
        alert: getRequiredAlertText(canvasElement),
        hasChart: Boolean(canvasElement.querySelector('.tooltip-boundary svg[role="img"], svg.linear'))
      }),
      async () => userEvent.selectOptions(dataKeySelect, 'x'),
      (before, after) => Boolean(before.alert) && !after.alert && after.hasChart
    )

    await assertVisualizationRendered(canvasElement)
  }
}

export const PieDataColumnRequired: Story = {
  args: {
    config: {
      ...pieConfig,
      yAxis: { ...pieConfig.yAxis, dataKey: '' },
      xAxis: { ...pieConfig.xAxis }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('.alert-info', canvasElement)
    expectStructuredRequiredFields(canvasElement, [{ section: 'Data Format', field: 'Data Column' }])
    await assertAlertNavigates(canvasElement, 'Data Format', 'Data Column', 'pie-data-column')
  }
}

export const PieSegmentLabelsRequired: Story = {
  args: {
    config: {
      ...pieConfig,
      yAxis: { ...pieConfig.yAxis },
      xAxis: { ...pieConfig.xAxis, dataKey: '' }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('.alert-info', canvasElement)
    expectStructuredRequiredFields(canvasElement, [{ section: 'Segments', field: 'Segment Labels' }])
    await assertAlertNavigates(canvasElement, 'Segments', 'Segment Labels', 'pie-segments')
  }
}

export const HeatMapRequiredFields: Story = {
  args: {
    config: {
      ...heatMapConfig,
      series: [],
      xAxis: { ...heatMapConfig.xAxis, dataKey: '' }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('.alert-info', canvasElement)
    expectStructuredRequiredFields(canvasElement, [
      { section: 'Data Series', field: 'Add Data Series' },
      { section: 'Date/Category Axis', field: 'Data Key' }
    ])
    expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()
  }
}

export const HeatMapDataSeriesNavigation: Story = {
  args: {
    config: {
      ...heatMapConfig,
      series: [],
      xAxis: { ...heatMapConfig.xAxis }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('.alert-info', canvasElement)
    expectStructuredRequiredFields(canvasElement, [{ section: 'Data Series', field: 'Add Data Series' }])
    await assertAlertNavigates(canvasElement, 'Data Series', 'Add Data Series', 'data-series')
  }
}

export const HeatMapCategoryAxisNavigation: Story = {
  args: {
    config: {
      ...heatMapConfig,
      series: heatMapConfig.series.map(series => ({ ...series })),
      xAxis: { ...heatMapConfig.xAxis, dataKey: '' }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('.alert-info', canvasElement)
    expectStructuredRequiredFields(canvasElement, [{ section: 'Date/Category Axis', field: 'Data Key' }])
    await assertAlertNavigates(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis')
  }
}

export const RadarCategoryColumnRequired: Story = {
  args: {
    config: {
      ...radarConfig,
      series: radarConfig.series.map(series => ({ ...series })),
      xAxis: { ...radarConfig.xAxis, dataKey: '' }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('.alert-info', canvasElement)
    const radarSettingsButton = canvasElement.querySelector('[data-required-field-section="radar-category"]')
    expect(radarSettingsButton?.querySelector('.warning-icon')).toBeInTheDocument()
    expectStructuredRequiredFields(canvasElement, [{ section: 'Radar Chart Settings', field: 'Category Column' }])
    await assertAlertNavigates(canvasElement, 'Radar Chart Settings', 'Category Column', 'radar-category')

    expect(radarConfig.series).toHaveLength(6)
    const categorySelect = canvasElement.querySelector(
      '[data-required-field-control="radar-category"]'
    ) as HTMLSelectElement
    await performAndAssert(
      'Selecting the sample category renders Radar without the existing minimum-dimensions error',
      () => ({
        hasRadar: Boolean(canvasElement.querySelector('svg.radar-chart')),
        hasDimensionsError: canvasElement.textContent?.includes('Radar chart requires at least 3 dimensions'),
        hasWarningIcon: Boolean(radarSettingsButton?.querySelector('.warning-icon'))
      }),
      async () => userEvent.selectOptions(categorySelect, 'Program'),
      (_before, after) => after.hasRadar && !after.hasDimensionsError && !after.hasWarningIcon
    )
  }
}

export const RadarMinimumDataSeriesRequired: Story = {
  args: {
    config: {
      ...radarConfig,
      series: radarConfig.series.slice(0, 2).map(series => ({ ...series })),
      xAxis: { ...radarConfig.xAxis }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('.alert-info', canvasElement)
    const dataSeriesButton = canvasElement.querySelector('[data-required-field-section="data-series"]')
    expect(dataSeriesButton?.querySelector('.warning-icon')).toBeInTheDocument()
    expectStructuredRequiredFields(canvasElement, [{ section: 'Data Series', field: 'At Least 3 Data Series' }])
    await assertAlertNavigates(canvasElement, 'Data Series', 'At Least 3 Data Series', 'data-series')
    expect(canvasElement.querySelector('.radar-chart-error')).toBeNull()
  }
}

export const RadarRuntimeKeepsExistingMinimumDimensionsError: Story = {
  args: {
    config: {
      ...radarConfig,
      series: radarConfig.series.slice(0, 2).map(series => ({ ...series })),
      xAxis: { ...radarConfig.xAxis }
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('.radar-chart-error', canvasElement)
    expect(canvasElement).toHaveTextContent(
      'Radar chart requires at least 3 dimensions. Please add more series in the configuration.'
    )
    expect(canvasElement.querySelector('.alert-info')).toBeNull()
  }
}

export const LollipopExactlyOneSeriesRequired: Story = {
  args: {
    config: {
      ...lollipopConfig,
      series: [
        ...lollipopConfig.series.map(series => ({ ...series })),
        { ...lollipopConfig.series[0], dataKey: 'Vehicle' }
      ]
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForEditor(within(canvasElement))
    await waitForPresence('.alert-info', canvasElement)

    const dataSeriesButton = canvasElement.querySelector('[data-required-field-section="data-series"]')
    expect(dataSeriesButton?.querySelector('.warning-icon')).toBeInTheDocument()
    expectStructuredRequiredFields(canvasElement, [{ section: 'Data Series', field: 'Exactly 1 Data Series' }])
    await assertAlertNavigates(canvasElement, 'Data Series', 'Exactly 1 Data Series', 'data-series')
    expect(canvasElement).toHaveTextContent('Select exactly one data series for a lollipop chart.')
  }
}

export const PairedBarExactlyTwoSeriesRequired: Story = {
  args: {
    config: {
      ...pairedBarConfig,
      series: [
        ...pairedBarConfig.series.map(series => ({ ...series })),
        { ...pairedBarConfig.series[0], dataKey: 'Additional Series' }
      ]
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForEditor(within(canvasElement))
    await waitForPresence('.alert-info', canvasElement)

    const dataSeriesButton = canvasElement.querySelector('[data-required-field-section="data-series"]')
    expect(dataSeriesButton?.querySelector('.warning-icon')).toBeInTheDocument()
    expectStructuredRequiredFields(canvasElement, [{ section: 'Data Series', field: 'Exactly 2 Data Series' }])
    await assertAlertNavigates(canvasElement, 'Data Series', 'Exactly 2 Data Series', 'data-series')
    expect(canvasElement).toHaveTextContent('Select two data series for paired bar chart (e.g., Male and Female).')
  }
}

export const DeviationBarExactlyOneSeriesRequired: Story = {
  args: {
    config: {
      ...deviationBarConfig,
      dataUrl: '',
      data: [
        { name: 'Mercury', Radius: 2440, Diameter: 4880 },
        { name: 'Earth', Radius: 6371, Diameter: 12742 }
      ],
      series: [
        ...deviationBarConfig.series.map(series => ({ ...series })),
        { ...deviationBarConfig.series[0], dataKey: 'Diameter' }
      ]
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForEditor(within(canvasElement))
    await waitForPresence('.alert-info', canvasElement)

    const dataSeriesButton = canvasElement.querySelector('[data-required-field-section="data-series"]')
    expect(dataSeriesButton?.querySelector('.warning-icon')).toBeInTheDocument()
    expectStructuredRequiredFields(canvasElement, [{ section: 'Data Series', field: 'Exactly 1 Data Series' }])
    await assertAlertNavigates(canvasElement, 'Data Series', 'Exactly 1 Data Series', 'data-series')
    expect(canvasElement).toHaveTextContent('Select exactly one data series for a deviation bar chart.')
  }
}

export const ForestPlotRequiredFields: Story = {
  args: {
    config: {
      ...forestPlotConfig,
      xAxis: { ...forestPlotConfig.xAxis, dataKey: '' },
      forestPlot: {
        ...forestPlotConfig.forestPlot,
        type: '',
        estimateField: '',
        lower: '',
        upper: ''
      }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForEditor(within(canvasElement))
    await waitForPresence('.alert-info', canvasElement)

    const forestPlotButton = canvasElement.querySelector('[data-required-field-section="forest-plot-settings"]')
    expect(forestPlotButton?.querySelector('.warning-icon')).toBeInTheDocument()
    expectStructuredRequiredFields(canvasElement, [
      { section: 'Forest Plot Settings', field: 'Study Column' },
      { section: 'Forest Plot Settings', field: 'Forest Plot Type' },
      { section: 'Forest Plot Settings', field: 'Point Estimate Column' },
      { section: 'Forest Plot Settings', field: 'Lower CI Column' },
      { section: 'Forest Plot Settings', field: 'Upper CI Column' }
    ])

    await assertAlertNavigates(
      canvasElement,
      'Forest Plot Settings',
      'Study Column',
      'forest-study',
      'forest-plot-settings'
    )
    await assertAlertNavigates(
      canvasElement,
      'Forest Plot Settings',
      'Forest Plot Type',
      'forest-type',
      'forest-plot-settings'
    )
    await assertAlertNavigates(
      canvasElement,
      'Forest Plot Settings',
      'Point Estimate Column',
      'forest-estimate',
      'forest-plot-settings'
    )
    await assertAlertNavigates(
      canvasElement,
      'Forest Plot Settings',
      'Lower CI Column',
      'forest-lower',
      'forest-plot-settings'
    )
    await assertAlertNavigates(
      canvasElement,
      'Forest Plot Settings',
      'Upper CI Column',
      'forest-upper',
      'forest-plot-settings'
    )
  }
}

export const SankeyRequiredColumns: Story = {
  args: {
    config: {
      ...sankeyConfig,
      sankey: { ...sankeyConfig.sankey, columns: { source: 'source', target: 'target', value: 'value' } }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForEditor(within(canvasElement))
    await waitForPresence('.alert-info', canvasElement)

    const sankeyButton = canvasElement.querySelector('[data-required-field-section="sankey-columns"]')
    expect(sankeyButton?.querySelector('.warning-icon')).toBeInTheDocument()
    expectStructuredRequiredFields(canvasElement, [
      { section: 'Sankey', field: 'Source Column' },
      { section: 'Sankey', field: 'Target Column' },
      { section: 'Sankey', field: 'Value Column' }
    ])

    await assertAlertNavigates(canvasElement, 'Sankey', 'Source Column', 'sankey-source', 'sankey-columns')
    await assertAlertNavigates(canvasElement, 'Sankey', 'Target Column', 'sankey-target', 'sankey-columns')
    await assertAlertNavigates(canvasElement, 'Sankey', 'Value Column', 'sankey-value', 'sankey-columns')
  }
}

export const SankeyCompletesRequiredColumns: Story = {
  args: {
    config: {
      ...sankeyConfig,
      sankey: { ...sankeyConfig.sankey, columns: { source: 'source', target: 'target', value: 'value' } }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForEditor(within(canvasElement))
    await waitForPresence('.alert-info', canvasElement)
    const sankeyButton = canvasElement.querySelector('[data-required-field-section="sankey-columns"]')

    await performAndAssert(
      'Completing the Sankey mappings clears the guidance and renders the diagram',
      () => ({
        alertCount: canvasElement.querySelectorAll('.chart-required-fields-alerts .alert-info').length,
        hasWarningIcon: Boolean(sankeyButton?.querySelector('.warning-icon')),
        hasDiagram: Boolean(canvasElement.querySelector('.sankey-chart__diagram'))
      }),
      async () => {
        await userEvent.selectOptions(
          canvasElement.querySelector('[data-required-field-control="sankey-source"]') as HTMLSelectElement,
          'example_source'
        )
        await userEvent.selectOptions(
          canvasElement.querySelector('[data-required-field-control="sankey-target"]') as HTMLSelectElement,
          'example_target'
        )
        await userEvent.selectOptions(
          canvasElement.querySelector('[data-required-field-control="sankey-value"]') as HTMLSelectElement,
          'example_value'
        )
      },
      (before, after) =>
        before.alertCount === 3 &&
        before.hasWarningIcon &&
        after.alertCount === 0 &&
        !after.hasWarningIcon &&
        after.hasDiagram
    )
  }
}

export const SankeyRuntimeKeepsExistingEmptyState: Story = {
  args: {
    config: {
      ...sankeyConfig,
      sankey: { ...sankeyConfig.sankey, columns: { source: 'source', target: 'target', value: 'value' } }
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('.sankey-chart--empty', canvasElement)
    expect(canvasElement.querySelector('.alert-info')).toBeNull()
  }
}

export const NetworkRequiredFields: Story = {
  args: {
    config: {
      ...networkConfig,
      network: { ...networkConfig.network, columns: { ...networkConfig.network.columns, source: 'from', target: 'to' } }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForEditor(within(canvasElement))
    await waitForPresence('.alert-info', canvasElement)

    const networkButton = canvasElement.querySelector('[data-required-field-section="network-columns"]')
    expect(networkButton?.querySelector('.warning-icon')).toBeInTheDocument()
    expectStructuredRequiredFields(canvasElement, [
      { section: 'Network', field: 'Source Column' },
      { section: 'Network', field: 'Target Column' }
    ])

    await assertAlertNavigates(canvasElement, 'Network', 'Source Column', 'network-source', 'network-columns')
    await assertAlertNavigates(canvasElement, 'Network', 'Target Column', 'network-target', 'network-columns')

    await performAndAssert(
      'Completing the Network mappings clears the guidance and renders the graph',
      () => ({
        alertCount: canvasElement.querySelectorAll('.chart-required-fields-alerts .alert-info').length,
        hasWarningIcon: Boolean(networkButton?.querySelector('.warning-icon')),
        hasGraph: Boolean(canvasElement.querySelector('.network-chart'))
      }),
      async () => {
        await userEvent.selectOptions(
          canvasElement.querySelector('[data-required-field-control="network-source"]') as HTMLSelectElement,
          'source'
        )
        await userEvent.selectOptions(
          canvasElement.querySelector('[data-required-field-control="network-target"]') as HTMLSelectElement,
          'target'
        )
      },
      (before, after) =>
        before.alertCount === 2 &&
        before.hasWarningIcon &&
        after.alertCount === 0 &&
        !after.hasWarningIcon &&
        after.hasGraph
    )
  }
}

export const DendrogramRequiredFields: Story = {
  args: {
    config: {
      ...dendrogramConfig,
      data: [
        { id: 'Public Health', parentId: '' },
        { id: 'Programs', parentId: 'Public Health' },
        { id: 'Clinics', parentId: 'Programs' }
      ],
      dendrogram: {
        ...dendrogramConfig.dendrogram,
        columns: { node: 'node', parent: 'parent' }
      }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await waitForEditor(within(canvasElement))
    await waitForPresence('.alert-info', canvasElement)

    const dendrogramButton = canvasElement.querySelector('[data-required-field-section="dendrogram-columns"]')
    expect(dendrogramButton?.querySelector('.warning-icon')).toBeInTheDocument()
    expectStructuredRequiredFields(canvasElement, [
      { section: 'Dendrogram', field: 'Node ID Column' },
      { section: 'Dendrogram', field: 'Parent ID Column' }
    ])
    expect(canvasElement.querySelector('.dendrogram-chart')).toBeNull()

    await assertAlertNavigates(canvasElement, 'Dendrogram', 'Node ID Column', 'dendrogram-node', 'dendrogram-columns')
    await assertAlertNavigates(
      canvasElement,
      'Dendrogram',
      'Parent ID Column',
      'dendrogram-parent',
      'dendrogram-columns'
    )

    await performAndAssert(
      'Completing the Node ID mapping leaves only the Parent ID requirement',
      () => ({
        alertText: getRequiredAlertText(canvasElement),
        hasWarningIcon: Boolean(dendrogramButton?.querySelector('.warning-icon')),
        hasDendrogram: Boolean(canvasElement.querySelector('.dendrogram-chart'))
      }),
      async () =>
        userEvent.selectOptions(
          canvasElement.querySelector('[data-required-field-control="dendrogram-node"]') as HTMLSelectElement,
          'id'
        ),
      (before, after) =>
        before.alertText.includes('Node ID Column') &&
        before.alertText.includes('Parent ID Column') &&
        !after.alertText.includes('Node ID Column') &&
        after.alertText.includes('Parent ID Column') &&
        after.hasWarningIcon &&
        !after.hasDendrogram
    )

    expectStructuredRequiredFields(canvasElement, [{ section: 'Dendrogram', field: 'Parent ID Column' }])

    await performAndAssert(
      'Completing both Dendrogram mappings clears the guidance and renders the diagram',
      () => ({
        alertCount: canvasElement.querySelectorAll('.chart-required-fields-alerts .alert-info').length,
        hasWarningIcon: Boolean(dendrogramButton?.querySelector('.warning-icon')),
        hasDendrogram: Boolean(canvasElement.querySelector('.dendrogram-chart'))
      }),
      async () =>
        userEvent.selectOptions(
          canvasElement.querySelector('[data-required-field-control="dendrogram-parent"]') as HTMLSelectElement,
          'parentId'
        ),
      (before, after) =>
        before.alertCount === 1 &&
        before.hasWarningIcon &&
        after.alertCount === 0 &&
        !after.hasWarningIcon &&
        after.hasDendrogram
    )

    await assertVisualizationRendered(canvasElement)
  }
}

export const RuntimeDoesNotExposeDirections: Story = {
  args: {
    config: {
      ...scatterPlotConfig,
      series: [],
      xAxis: { ...scatterPlotConfig.xAxis, dataKey: '' }
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await waitForAbsence('.loading', canvasElement)
    expect(canvasElement.querySelector('.alert-info')).toBeNull()
    expect(canvasElement.querySelector('.tooltip-boundary svg[role="img"], svg.linear')).toBeNull()
  }
}

export default meta
