/**
 * Vega Import Stories
 *
 * Each story imports a Vega/Vega-Lite JSON config, converts it to a COVE config
 * via the Vega importer pipeline, and renders the resulting chart or map.
 *
 * Play functions verify that each conversion renders without errors.
 */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect, waitFor } from 'storybook/test'

import Chart from '@cdc/chart/src/CdcChart'
import CdcMap from '@cdc/map/src/CdcMap'
import { maybeConvertVega } from '@cdc/core/helpers/vegaConfigImport'

// --- Import Vega fixture JSON files (alphabetical by filename) ---
import vegaBarsWithLine from './vega-fixtures/bars-with-line.json'
import vegaBars from './vega-fixtures/bars.json'
import vegaComboBarRollingMean from './vega-fixtures/combo-bar-rolling-mean.json'
import vegaCombo from './vega-fixtures/combo.json'
import vegaGroupedHorizontalBars from './vega-fixtures/grouped-horizontal-bars.json'
import vegaGroupedHorizontalBars2 from './vega-fixtures/grouped-horizontal-bars2.json'
import vegaHorizontalBar from './vega-fixtures/horizontal-bar.json'
import vegaHorizontalBarsWithBadColors from './vega-fixtures/horizontal-bars-with-bad-colors.json'
import vegaHorizontalBars2 from './vega-fixtures/horizontal-bars2.json'
import vegaLines from './vega-fixtures/lines.json'
import vegaMeaslesBars from './vega-fixtures/measles-bars.json'
import vegaMeaslesMap from './vega-fixtures/measles-map.json'
import vegaMeaslesStackedBars from './vega-fixtures/measles-stacked-bars.json'
import vegaMultiDataset from './vega-fixtures/multi-dataset.json'
import vegaNoData from './vega-fixtures/no-data.json'
import vegaPieChart from './vega-fixtures/pie-chart.json'
import vegaRepeatSpec from './vega-fixtures/repeat-spec.json'
import vegaStackedArea from './vega-fixtures/stacked-area.json'
import vegaStackedBarWithRect from './vega-fixtures/stacked-bar-with-rect.json'
import vegaStackedBars from './vega-fixtures/stacked-bars.json'
import vegaStackedBarsWithLine from './vega-fixtures/stacked-bars-with-line.json'
import vegaStackedHorizontalBars from './vega-fixtures/stacked-horizontal-bars.json'
import vegaWarningCombo from './vega-fixtures/warning-combo.json'
import vegaWarningScatterAndLine from './vega-fixtures/warning-scatter-and-line.json'

// --- Convert all configs at module evaluation time (top-level await) ---
// Ordered alphabetically by original filename
const fixtures: Record<string, any> = {
  barsWithLine: vegaBarsWithLine,
  bars: vegaBars,
  comboBarRollingMean: vegaComboBarRollingMean,
  combo: vegaCombo,
  groupedHorizontalBars: vegaGroupedHorizontalBars,
  groupedHorizontalBars2: vegaGroupedHorizontalBars2,
  horizontalBar: vegaHorizontalBar,
  horizontalBarsWithBadColors: vegaHorizontalBarsWithBadColors,
  horizontalBars2: vegaHorizontalBars2,
  lines: vegaLines,
  measlesBars: vegaMeaslesBars,
  measlesMap: vegaMeaslesMap,
  measlesStackedBars: vegaMeaslesStackedBars,
  multiDataset: vegaMultiDataset,
  noData: vegaNoData,
  pieChart: vegaPieChart,
  repeatSpec: vegaRepeatSpec,
  stackedArea: vegaStackedArea,
  stackedBarWithRect: vegaStackedBarWithRect,
  stackedBars: vegaStackedBars,
  stackedBarsWithLine: vegaStackedBarsWithLine,
  stackedHorizontalBars: vegaStackedHorizontalBars,
  warningCombo: vegaWarningCombo,
  warningScatterAndLine: vegaWarningScatterAndLine
}

const convertedConfigs: Record<string, any> = {}
const conversionErrors: Record<string, string[]> = {}
const conversionWarnings: Record<string, string[]> = {}

for (const [key, vegaJson] of Object.entries(fixtures)) {
  // Capture console warnings/errors during conversion
  const warnings: string[] = []
  const errors: string[] = []

  const originalWarn = console.warn
  const originalError = console.error

  console.warn = (...args: any[]) => {
    const message = args.map(arg => (typeof arg === 'string' ? arg : JSON.stringify(arg))).join(' ')
    warnings.push(message)
  }

  console.error = (...args: any[]) => {
    const message = args.map(arg => (typeof arg === 'string' ? arg : JSON.stringify(arg))).join(' ')
    errors.push(message)
  }

  try {
    convertedConfigs[key] = await maybeConvertVega({ ...vegaJson })
  } catch (err) {
    console.error(`Failed to convert ${key}:`, err)
    convertedConfigs[key] = null
  }

  console.warn = originalWarn
  console.error = originalError

  conversionErrors[key] = [...warnings, ...errors]
  conversionWarnings[key] = warnings
}

// --- Storybook meta ---
const meta: Meta = {
  title: 'Regression Tests/Vega Importer',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!autodocs']
}

export default meta

// --- Shared play function: verify the chart/map rendered ---
const assertRendered = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  await waitFor(
    () => {
      const coveModule = canvasElement.querySelector('.cdc-open-viz-module')
      expect(coveModule).toBeTruthy()
    },
    { timeout: 15000 }
  )

  // Verify an SVG was rendered
  const svgs = canvasElement.querySelectorAll('svg')
  expect(svgs.length).toBeGreaterThan(0)
}

// --- Shared play function: verify error configs failed properly ---
const assertConversionFailed =
  (expectedErrorPattern: string | RegExp) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // Wait a bit for any async operations to complete
    await new Promise(resolve => setTimeout(resolve, 500))

    // Verify error message is displayed
    const errorElement = canvasElement.querySelector('[data-testid="error"]')
    expect(errorElement).toBeTruthy()
    expect(errorElement?.textContent).toContain('failed to convert')

    // Verify the specific error message appears
    const errorMessages = canvasElement.querySelector('[data-testid="error-messages"]')
    expect(errorMessages).toBeTruthy()

    const errorText = errorMessages?.textContent || ''
    if (typeof expectedErrorPattern === 'string') {
      expect(errorText).toContain(expectedErrorPattern)
    } else {
      expect(expectedErrorPattern.test(errorText)).toBe(true)
    }

    // Verify no visualization rendered
    const coveModule = canvasElement.querySelector('.cdc-open-viz-module')
    expect(coveModule).toBeNull()
  }

// --- Helper to build a chart story ---
const chartStory = (key: string): StoryObj => ({
  render: () => {
    const config = convertedConfigs[key]
    if (!config) return <div data-testid='error'>Config "{key}" failed to convert</div>
    return <Chart config={{ ...config }} isEditor={false} />
  },
  play: assertRendered
})

// --- Helper to build a map story ---
const mapStory = (key: string): StoryObj => ({
  render: () => {
    const config = convertedConfigs[key]
    if (!config) return <div data-testid='error'>Config "{key}" failed to convert</div>
    return <CdcMap config={{ ...config }} />
  },
  play: assertRendered
})

// --- Helper to build an error story (expects conversion to fail) ---
const errorStory = (key: string, expectedErrorPattern: string | RegExp): StoryObj => ({
  render: () => {
    const config = convertedConfigs[key]
    const errorMessages = conversionErrors[key] || []

    if (!config) {
      return (
        <div style={{ padding: '20px', fontFamily: 'monospace' }}>
          <div data-testid='error' style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '10px' }}>
            ✓ Config "{key}" failed to convert (expected)
          </div>
          <div
            data-testid='error-messages'
            style={{
              backgroundColor: '#f5f5f5',
              padding: '15px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          >
            <strong>Error Messages:</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              {errorMessages.map((msg, i) => (
                <li key={i} style={{ marginBottom: '5px' }}>
                  {msg}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }

    return (
      <div data-testid='unexpected-success' style={{ padding: '20px', color: '#c41e3a', fontWeight: 'bold' }}>
        ⚠️ Config "{key}" unexpectedly succeeded - this should have failed!
      </div>
    )
  },
  play: assertConversionFailed(expectedErrorPattern)
})

// --- Helper to build a warning story (renders with warnings) ---
const warningStory = (
  key: string,
  Component: typeof Chart | typeof CdcMap,
  expectedWarningPattern: string | RegExp
): StoryObj => ({
  render: () => {
    const config = convertedConfigs[key]
    const warnings = conversionWarnings[key] || []

    if (!config) {
      return <div data-testid='error'>Config "{key}" failed to convert</div>
    }

    return (
      <div>
        {warnings.length > 0 && (
          <div
            data-testid='warnings'
            style={{
              backgroundColor: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '4px',
              padding: '15px',
              margin: '20px',
              fontFamily: 'monospace',
              fontSize: '14px'
            }}
          >
            <div style={{ color: '#856404', fontWeight: 'bold', marginBottom: '10px' }}>⚠️ Conversion Warnings:</div>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#856404' }}>
              {warnings.map((msg, i) => (
                <li key={i} style={{ marginBottom: '5px' }}>
                  {msg}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Component config={{ ...config }} isEditor={false} />
      </div>
    )
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // Verify warnings were captured
    const warningsElement = canvasElement.querySelector('[data-testid="warnings"]')
    expect(warningsElement).toBeTruthy()

    // Verify the warning contains the expected text
    const warningText = warningsElement?.textContent || ''

    if (typeof expectedWarningPattern === 'string') {
      expect(warningText).toContain(expectedWarningPattern)
    } else {
      expect(expectedWarningPattern.test(warningText)).toBe(true)
    }

    // Verify the visualization still rendered
    await assertRendered({ canvasElement })
  }
})

// ============================================================================
// Stories — alphabetical by original filename
// ============================================================================

// bars-with-line.json
export const BarsWithLine: StoryObj = chartStory('barsWithLine')

// bars.json
export const Bars: StoryObj = chartStory('bars')

// combo-bar-rolling-mean.json
export const ComboBarRollingMean: StoryObj = chartStory('comboBarRollingMean')

// combo.json
export const Combo: StoryObj = chartStory('combo')

// grouped-horizontal-bars.json
export const GroupedHorizontalBars: StoryObj = chartStory('groupedHorizontalBars')

// grouped-horizontal-bars2.json
export const GroupedHorizontalBars2: StoryObj = chartStory('groupedHorizontalBars2')

// horizontal-bar.json
export const HorizontalBar: StoryObj = chartStory('horizontalBar')

// horizontal-bars-with-bad-colors.json
export const HorizontalBarsWithBadColors: StoryObj = chartStory('horizontalBarsWithBadColors')

// horizontal-bars2.json
export const HorizontalBars2: StoryObj = chartStory('horizontalBars2')

// lines.json
export const Lines: StoryObj = chartStory('lines')

// measles-bars.json
export const MeaslesBars: StoryObj = chartStory('measlesBars')

// measles-map.json
export const MeaslesMap: StoryObj = mapStory('measlesMap')

// measles-stacked-bars.json
export const MeaslesStackedBars: StoryObj = chartStory('measlesStackedBars')

// multi-dataset.json
export const MultiDataset: StoryObj = chartStory('multiDataset')

// stacked-area.json
export const StackedArea: StoryObj = chartStory('stackedArea')

// stacked-bar-with-rect.json
export const StackedBarWithRect: StoryObj = chartStory('stackedBarWithRect')

// stacked-bars.json
export const StackedBars: StoryObj = chartStory('stackedBars')

// stacked-horizontal-bars.json
export const StackedHorizontalBars: StoryObj = chartStory('stackedHorizontalBars')

// ============================================================================
// Error Test Stories (Expected to Fail)
// ============================================================================

// no-data.json - Config references external data URL instead of embedded data
export const NoDataErrorTests: StoryObj = errorStory('noData', 'No data was found')

// pie-chart.json - Pie charts are not supported by COVE's Vega importer
export const PieChartErrorTests: StoryObj = errorStory(
  'pieChart',
  /could not find a COVE chart type|Supported marks are/
)

// repeat-spec.json - Vega-Lite repeat/spec operators are not supported
export const RepeatSpecErrorTests: StoryObj = errorStory('repeatSpec', /does not support.*repeat\/spec operator/)

// stacked-bars-with-line.json - Complex combinations may not be supported
export const StackedBarsWithLineErrorTests: StoryObj = errorStory(
  'stackedBarsWithLine',
  /one of them appears to be stacked/
)

// ============================================================================
// Warning Test Stories (Render with Warnings)
// ============================================================================

// warning-combo.json - Combo chart with multiple mark types
export const WarningComboTests: StoryObj = warningStory('warningCombo', Chart, 'only support these types of marks')

// warning-scatter-and-line.json - Scatter plot with line
export const WarningScatterAndLineTests: StoryObj = warningStory(
  'warningScatterAndLine',
  Chart,
  'only support these types of marks'
)
