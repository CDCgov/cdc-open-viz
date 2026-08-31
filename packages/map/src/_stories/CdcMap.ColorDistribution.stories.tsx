import React, { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import {
  divergentColorDistribution,
  mapV1ColorDistribution,
  qualitativeStandardColorDistribution,
  v2ColorDistribution
} from '@cdc/core/helpers/palettes/colorDistributions'
import CdcMap from '../CdcMap'
import type { DataRow, MapConfig } from '../types/MapConfig'
import OutbreakMapConfig from './_mock/outbreak-map_10_26_23.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Legend/Color Distribution',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof CdcMap>
type Distribution = '1.0' | '2.0'

const BIN_OPTIONS = Array.from({ length: 9 }, (_, index) => index + 1)
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

const MISSING_STATE_ROWS = ['Delaware', 'Hawaii', 'New Mexico'].map(State => ({
  State,
  Web_Map_Calc: '1 to 49'
}))
const OUTBREAK_VALUE_ORDER = ['1 to 49', '50 to 199', '200 to 499', '500 to 999', '1000 to 3999', '4000 to 6999']

const rankedRows = [...OutbreakMapConfig.data, ...MISSING_STATE_ROWS].sort((a, b) => {
  const valueDifference = OUTBREAK_VALUE_ORDER.indexOf(a.Web_Map_Calc) - OUTBREAK_VALUE_ORDER.indexOf(b.Web_Map_Calc)

  return valueDifference || a.State.localeCompare(b.State)
})

const getDistributionIndices = (binCount: number, distribution: Distribution, palette: Palette) => {
  if (distribution === '1.0') {
    return palette === 'qualitative_standard'
      ? Array.from({ length: binCount }, (_, index) => index)
      : mapV1ColorDistribution[binCount]
  }

  if (palette === 'qualitative_standard') return qualitativeStandardColorDistribution[binCount]
  if (palette.includes('divergent')) return divergentColorDistribution[binCount]

  return v2ColorDistribution[binCount]
}

const getDisplayedPaletteIndices = (
  distributionIndices: number[],
  distribution: Distribution,
  palette: Palette,
  isReversed: boolean
) => {
  if (!isReversed) return distributionIndices

  return distribution === '2.0' && palette === 'qualitative_standard'
    ? [...distributionIndices].reverse()
    : distributionIndices.map(paletteIndex => 8 - paletteIndex)
}

const createConfig = (
  binCount: number,
  distribution: Distribution,
  palette: Palette,
  isReversed: boolean
): MapConfig => {
  const config = cloneConfig(OutbreakMapConfig) as MapConfig
  const distributionIndices = getDistributionIndices(binCount, distribution, palette)
  const displayedPaletteIndices = getDisplayedPaletteIndices(distributionIndices, distribution, palette, isReversed)
  const categoryValues = displayedPaletteIndices.map(paletteIndex => paletteIndex + 1)

  config.data = rankedRows.map((row, rank) => {
    const binIndex = Math.min(binCount - 1, Math.floor((rank * binCount) / rankedRows.length))

    return {
      ...row,
      Web_Map_Calc: categoryValues[binIndex]
    }
  }) as DataRow[]
  config.general.title = 'Outbreak map'
  config.general.hideUnselectedStates = false
  config.general.statesPicked = []
  config.general.palette.name = isReversed ? `${palette}reverse` : palette
  config.general.palette.isReversed = isReversed
  config.general.palette.distributionVersion = distribution
  config.columns.primary.label = 'Color bin'
  config.legend.type = 'category'
  config.legend.numberOfItems = binCount
  config.legend.title = 'Palette color index'
  config.legend.categoryValuesOrder = categoryValues
  config.legend.specialClasses = []

  return config
}

const ColorDistributionHarness = () => {
  const [binCount, setBinCount] = useState(6)
  const [distribution, setDistribution] = useState<Distribution>('1.0')
  const [palette, setPalette] = useState<Palette>('sequential_blue')
  const [isReversed, setIsReversed] = useState(false)
  const config = useMemo(
    () => createConfig(binCount, distribution, palette, isReversed),
    [binCount, distribution, palette, isReversed]
  )

  return (
    <div style={{ padding: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem', maxWidth: 720 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <label htmlFor='color-distribution-palette' style={{ display: 'block', fontWeight: 700, marginBottom: 4 }}>
              Palette
            </label>
            <select
              id='color-distribution-palette'
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
              htmlFor='color-distribution-bin-count'
              style={{ display: 'block', fontWeight: 700, marginBottom: 4 }}
            >
              Number of bins
            </label>
            <select
              id='color-distribution-bin-count'
              value={binCount}
              onChange={event => setBinCount(Number(event.target.value))}
              style={{ minWidth: 120 }}
            >
              {BIN_OPTIONS.map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor='color-distribution-version' style={{ display: 'block', fontWeight: 700, marginBottom: 4 }}>
              Color distribution
            </label>
            <select
              id='color-distribution-version'
              value={distribution}
              onChange={event => setDistribution(event.target.value as Distribution)}
              style={{ minWidth: 120 }}
            >
              <option value='1.0'>1.0</option>
              <option value='2.0'>2.0</option>
            </select>
          </div>

          <div>
            <label htmlFor='color-distribution-reverse' style={{ display: 'block', fontWeight: 700, marginBottom: 4 }}>
              Reversed
            </label>
            <select
              id='color-distribution-reverse'
              value={isReversed ? 'yes' : 'no'}
              onChange={event => setIsReversed(event.target.value === 'yes')}
              style={{ minWidth: 120 }}
            >
              <option value='no'>No</option>
              <option value='yes'>Yes</option>
            </select>
          </div>
        </div>
      </div>

      <CdcMap key={`${palette}-${distribution}-${binCount}-${isReversed}`} config={config} />
    </div>
  )
}

export const Outbreak_Map: Story = {
  render: () => <ColorDistributionHarness />
}
