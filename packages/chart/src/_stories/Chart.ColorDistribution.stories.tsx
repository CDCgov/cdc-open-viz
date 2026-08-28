import React, { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import Chart from '../CdcChart'
import type { ChartConfig } from '../types/ChartConfig'
import BarChartConfig from './_mock/editor-tests/bar-chart-test.json'
import PieChartConfig from './_mock/pie_custom_colors.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Color Distribution',
  component: Chart,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Chart>

const ITEM_OPTIONS = Array.from({ length: 9 }, (_, index) => index + 1)
const PALETTE_GROUPS = [
  {
    label: 'Sequential',
    options: [
      { label: 'Blue', value: 'sequential_blue' },
      { label: 'Teal', value: 'sequential_teal' },
      { label: 'Purple', value: 'sequential_purple' },
      { label: 'Orange', value: 'sequential_orange' },
      { label: 'Green', value: 'sequential_green' }
    ]
  },
  {
    label: 'Divergent',
    options: [
      { label: 'Blue–Cyan', value: 'divergent_blue_cyan' },
      { label: 'Blue–Purple', value: 'divergent_blue_purple' },
      { label: 'Green–Orange', value: 'divergent_green_orange' },
      { label: 'Blue–Orange', value: 'divergent_blue_orange' }
    ]
  },
  {
    label: 'Colorblind Safe',
    options: [{ label: 'Qualitative Standard', value: 'qualitative_standard' }]
  }
] as const

type Palette = (typeof PALETTE_GROUPS)[number]['options'][number]['value']
type DistributionVersion = '1.0' | '2.0'

const createConfig = (itemCount: number, palette: Palette, distributionVersion: DistributionVersion): ChartConfig => {
  const config = cloneConfig(BarChartConfig) as ChartConfig
  const series = Array.from({ length: itemCount }, (_, index) => ({
    axis: 'Left',
    dataKey: `item_${index + 1}`,
    name: `Item ${index + 1}`,
    tooltip: true,
    type: 'Bar'
  }))

  config.version = '4.26.8'
  config.title = 'Bar chart color distribution'
  config.animate = false
  config.barThickness = 0.8
  config.general.palette = {
    isReversed: false,
    name: palette,
    version: '2.0',
    distributionVersion
  }
  config.series = series
  config.data = [
    series.reduce(
      (row, item) => ({
        ...row,
        [item.dataKey]: 75
      }),
      { Category: 'Items' }
    )
  ]
  config.xAxis.axisPadding = 20
  config.xAxis.label = ''
  config.yAxis.hideAxis = true
  config.yAxis.hideLabel = true
  config.yAxis.hideTicks = true
  config.yAxis.label = ''
  config.legend.position = 'top'
  config.table.show = false
  config.visual.accent = false
  config.visual.border = false

  return config
}

const ColorDistributionHarness = () => {
  const [palette, setPalette] = useState<Palette>('qualitative_standard')
  const [itemCount, setItemCount] = useState(3)
  const [distributionVersion, setDistributionVersion] = useState<DistributionVersion>('1.0')
  const config = useMemo(
    () => createConfig(itemCount, palette, distributionVersion),
    [itemCount, palette, distributionVersion]
  )

  return (
    <div style={{ padding: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem', maxWidth: 720 }}>
        <div>
          <label
            htmlFor='chart-color-distribution-palette'
            style={{ display: 'block', fontWeight: 700, marginBottom: 4 }}
          >
            Palette
          </label>
          <select
            id='chart-color-distribution-palette'
            value={palette}
            onChange={event => setPalette(event.target.value as Palette)}
            style={{ minWidth: 120 }}
          >
            {PALETTE_GROUPS.map(group => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor='chart-color-distribution-item-count'
            style={{ display: 'block', fontWeight: 700, marginBottom: 4 }}
          >
            Number of items
          </label>
          <select
            id='chart-color-distribution-item-count'
            value={itemCount}
            onChange={event => setItemCount(Number(event.target.value))}
            style={{ minWidth: 120 }}
          >
            {ITEM_OPTIONS.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor='chart-color-distribution-version'
            style={{ display: 'block', fontWeight: 700, marginBottom: 4 }}
          >
            Distribution
          </label>
          <select
            id='chart-color-distribution-version'
            value={distributionVersion}
            onChange={event => setDistributionVersion(event.target.value as DistributionVersion)}
            style={{ minWidth: 120 }}
          >
            <option value='1.0'>1.0</option>
            <option value='2.0'>2.0</option>
          </select>
        </div>
      </div>

      <Chart key={`${palette}-${itemCount}-${distributionVersion}`} config={config} isEditor={false} />
    </div>
  )
}

export const Bar_Chart: Story = {
  render: () => <ColorDistributionHarness />
}

const createPieConfig = (
  sliceCount: number,
  palette: Palette,
  distributionVersion: DistributionVersion
): ChartConfig => {
  const config = cloneConfig(PieChartConfig) as ChartConfig
  const data = Array.from({ length: sliceCount }, (_, index) => ({
    [config.xAxis.dataKey]: `Slice ${index + 1}`,
    [config.yAxis.dataKey]: 10 - index
  }))

  config.version = '4.26.8'
  config.title = ''
  config.showTitle = false
  config.introText = ''
  config.animate = false
  config.general.palette = {
    name: palette,
    version: '2.0',
    distributionVersion,
    isReversed: false
  }
  config.data = data
  config.formattedData = data
  config.legend.hide = false
  config.legend.label = ''
  config.legend.description = ''
  config.legend.position = 'top'
  config.table.show = false
  config.visual.accent = false
  config.visual.border = false

  return config
}

const PieColorDistributionHarness = () => {
  const [palette, setPalette] = useState<Palette>('sequential_blue')
  const [sliceCount, setSliceCount] = useState(3)
  const [distributionVersion, setDistributionVersion] = useState<DistributionVersion>('1.0')
  const config = useMemo(
    () => createPieConfig(sliceCount, palette, distributionVersion),
    [sliceCount, palette, distributionVersion]
  )

  return (
    <div style={{ padding: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem', maxWidth: 720 }}>
        <div>
          <label
            htmlFor='pie-color-distribution-palette'
            style={{ display: 'block', fontWeight: 700, marginBottom: 4 }}
          >
            Palette
          </label>
          <select
            id='pie-color-distribution-palette'
            value={palette}
            onChange={event => setPalette(event.target.value as Palette)}
            style={{ minWidth: 120 }}
          >
            {PALETTE_GROUPS.map(group => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor='pie-color-distribution-slice-count'
            style={{ display: 'block', fontWeight: 700, marginBottom: 4 }}
          >
            Number of slices
          </label>
          <select
            id='pie-color-distribution-slice-count'
            value={sliceCount}
            onChange={event => setSliceCount(Number(event.target.value))}
            style={{ minWidth: 120 }}
          >
            {ITEM_OPTIONS.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor='pie-color-distribution-version'
            style={{ display: 'block', fontWeight: 700, marginBottom: 4 }}
          >
            Distribution
          </label>
          <select
            id='pie-color-distribution-version'
            value={distributionVersion}
            onChange={event => setDistributionVersion(event.target.value as DistributionVersion)}
            style={{ minWidth: 120 }}
          >
            <option value='1.0'>1.0</option>
            <option value='2.0'>2.0</option>
          </select>
        </div>
      </div>

      <Chart key={`${palette}-${sliceCount}-${distributionVersion}`} config={config} isEditor={false} />
    </div>
  )
}

export const Pie_Chart: Story = {
  name: 'Pie Chart',
  render: () => <PieColorDistributionHarness />
}
