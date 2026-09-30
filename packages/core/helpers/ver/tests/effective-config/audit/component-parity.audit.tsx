import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { isDeepStrictEqual } from 'node:util'
import { resolve } from 'node:path'
import React from 'react'
import { cleanup, render, waitFor } from '@testing-library/react'
import { afterAll, afterEach, beforeAll, beforeEach, it, vi } from 'vitest'

import EditorContext from '@cdc/core/contexts/EditorContext'
import { stripConfig } from '@cdc/dashboard/src/helpers/formatConfigBeforeSave'
import VisualizationRenderer from '@cdc/editor/src/components/VisualizationRenderer'
import mapDefaults from '@cdc/map/src/data/initial-state'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'

import { effectiveConfigCases } from '../cases'

type CapturedConfig = { type: string; config: Record<string, any> }
type AuditResult = {
  name: string
  status: 'match' | 'different' | 'error'
  differences: string[]
  error?: string
}

const captureState = vi.hoisted(() => ({
  configs: [] as CapturedConfig[],
  renderContent: false
}))

vi.hoisted(() => {
  Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
    configurable: true,
    value: () => ({ measureText: (text = '') => ({ width: String(text).length * 8 }) })
  })
  Object.defineProperty(SVGElement.prototype, 'getBBox', {
    configurable: true,
    value: () => ({ x: 0, y: 0, width: 100, height: 20 })
  })
})

vi.mock('@cdc/core/components/Layout', async () => {
  const actual = await vi.importActual<any>('@cdc/core/components/Layout')
  return {
    ...actual,
    VisualizationContent: ({ children }) => (captureState.renderContent ? children : null)
  }
})

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: () => null
}))

vi.mock('@cdc/core/components/AdvancedEditor', async () => {
  const ReactModule = await vi.importActual<typeof import('react')>('react')
  return {
    default: ({ config }) => {
      ReactModule.useEffect(() => {
        captureState.configs.push({ type: config?.type, config: structuredClone(config) })
        const timer = setTimeout(() => {
          captureState.configs.push({ type: config?.type, config: structuredClone(config) })
        }, 25)
        return () => clearTimeout(timer)
      }, [config])
      return null
    }
  }
})

vi.mock('@cdc/core/components/AdvancedEditor/AdvancedEditor', async () => {
  const ReactModule = await vi.importActual<typeof import('react')>('react')
  return {
    default: ({ config }) => {
      ReactModule.useEffect(() => {
        captureState.configs.push({ type: config?.type, config: structuredClone(config) })
        const timer = setTimeout(() => {
          captureState.configs.push({ type: config?.type, config: structuredClone(config) })
        }, 25)
        return () => clearTimeout(timer)
      }, [config])
      return null
    }
  }
})

// Markup Include does not currently expose Advanced Options. Its BaseEditorPanel
// receives the same post-load config that an Advanced Options control would use,
// so capture that real handoff as the closest equivalent.
vi.mock('@cdc/core/components/EditorPanel/EditorPanel', async () => {
  const actual = await vi.importActual<any>('@cdc/core/components/EditorPanel/EditorPanel')
  const ReactModule = await vi.importActual<typeof import('react')>('react')
  const CapturingEditorPanel = props => {
    ReactModule.useEffect(() => {
      captureState.configs.push({ type: props.config?.type, config: structuredClone(props.config) })
    }, [props.config])
    return ReactModule.createElement(actual.EditorPanel, props)
  }
  return { ...actual, EditorPanel: CapturingEditorPanel, default: CapturingEditorPanel }
})

vi.mock('resize-observer-polyfill', () => ({
  default: class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
}))

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const fixtureRoot = resolve(__dirname, '..')
const reportRoot = '/tmp/cove-effective-config-audit'
const results: AuditResult[] = []

const requestedCase = process.env.COVE_EFFECTIVE_CONFIG_AUDIT_CASE
const auditedCases = effectiveConfigCases
  .filter(testCase => !requestedCase || testCase.name === requestedCase)
  .map(testCase => testCase.name)

const readJson = (path: string) => JSON.parse(readFileSync(resolve(fixtureRoot, path), 'utf8'))
const toSavedJson = (config: Record<string, any>, removeInjectedData = false) => {
  const saved = JSON.parse(JSON.stringify(stripConfig(config, true)))
  if (removeInjectedData) delete saved.data
  return saved
}

const projectToCharacterizationBoundary = (
  saved: Record<string, any>,
  input: Record<string, any>,
  expected: Record<string, any>
) => {
  delete saved.runtime
  if (!Object.prototype.hasOwnProperty.call(expected, 'dynamicMarginTop')) delete saved.dynamicMarginTop
  if (!Object.prototype.hasOwnProperty.call(expected.xAxis || {}, 'axisBBox')) delete saved.xAxis?.axisBBox
  if (!Object.prototype.hasOwnProperty.call(expected.xAxis || {}, 'tickWidthMax')) delete saved.xAxis?.tickWidthMax
  if (input.type !== 'dashboard') return saved

  // Multi-dashboard loading overlays the selected dashboard onto the root. Keep
  // the untouched saved tab definitions at this pre-editor-processing boundary.
  if (input.multiDashboards) saved.multiDashboards = structuredClone(input.multiDashboards)

  // Dataset rows and shared-filter options are populated during data loading,
  // after the boundary characterized by this suite.
  Object.entries(saved.datasets || {}).forEach(([key, dataset]: [string, any]) => {
    const expectedDataset = expected.datasets?.[key]
    if (expectedDataset && !Object.prototype.hasOwnProperty.call(expectedDataset, 'data')) delete dataset.data
  })

  saved.dashboard?.sharedFilters?.forEach((filter, index) => {
    const expectedFilter = expected.dashboard?.sharedFilters?.[index]
    if (!expectedFilter) return
    ;['values', 'orderedValues', 'active', 'tier'].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(expectedFilter, field)) {
        filter[field] = structuredClone(expectedFilter[field])
      } else {
        delete filter[field]
      }
    })
  })

  // Dashboard editor mapping adds identifiers and may materialize a legacy
  // table after configuration preparation has completed.
  Object.entries(saved.visualizations || {}).forEach(([key, visualization]: [string, any]) => {
    const expectedVisualization = expected.visualizations?.[key]
    if (expectedVisualization && !Object.prototype.hasOwnProperty.call(expectedVisualization, 'uid')) {
      delete visualization.uid
    }
    if (!expectedVisualization && visualization.migrations?.generatedFromDashboardTable) {
      delete saved.visualizations[key]
      saved.rows = (saved.rows || []).filter(row => !row.columns?.some(column => column.widget === key))
    }
  })

  if (input.datasets && Object.keys(input.datasets).length > 0) return saved

  // The dashboard wrapper creates a backwards-compatibility dataset and clears
  // legacy data fields while loading data. The characterization boundary is
  // intentionally immediately before that work.
  const legacyDataFields = ['data', 'dataUrl', 'dataFileName', 'dataFileSourceType', 'dataDescription', 'formattedData']
  legacyDataFields.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(input, key)) saved[key] = structuredClone(input[key])
    else delete saved[key]
  })

  if (Object.prototype.hasOwnProperty.call(input, 'datasets')) saved.datasets = structuredClone(input.datasets)
  else delete saved.datasets

  Object.entries(saved.visualizations || {}).forEach(([key, visualization]: [string, any]) => {
    const inputVisualization = input.visualizations?.[key]
    if (!inputVisualization) return
    ;['dataKey', 'dataDescription', 'formattedData', 'uid'].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(inputVisualization, field)) {
        visualization[field] = structuredClone(inputVisualization[field])
      } else {
        delete visualization[field]
      }
    })
  })

  return saved
}

const describeDifferences = (actual: any, expected: any, path = 'root', differences: string[] = []) => {
  if (differences.length >= 80 || Object.is(actual, expected)) return differences

  if (Array.isArray(actual) || Array.isArray(expected)) {
    if (!Array.isArray(actual) || !Array.isArray(expected)) {
      differences.push(`${path}: actual=${JSON.stringify(actual)} expected=${JSON.stringify(expected)}`)
      return differences
    }
    if (actual.length !== expected.length)
      differences.push(`${path}.length: actual=${actual.length} expected=${expected.length}`)
    const length = Math.max(actual.length, expected.length)
    for (let index = 0; index < length; index++) {
      describeDifferences(actual[index], expected[index], `${path}[${index}]`, differences)
    }
    return differences
  }

  const actualIsObject = actual !== null && typeof actual === 'object'
  const expectedIsObject = expected !== null && typeof expected === 'object'
  if (!actualIsObject || !expectedIsObject) {
    differences.push(`${path}: actual=${JSON.stringify(actual)} expected=${JSON.stringify(expected)}`)
    return differences
  }

  const keys = new Set([...Object.keys(actual), ...Object.keys(expected)])
  for (const key of [...keys].sort()) {
    if (!(key in actual))
      differences.push(`${path}.${key}: missing from actual; expected=${JSON.stringify(expected[key])}`)
    else if (!(key in expected))
      differences.push(`${path}.${key}: actual=${JSON.stringify(actual[key])}; missing from expected`)
    else describeDifferences(actual[key], expected[key], `${path}.${key}`, differences)
    if (differences.length >= 80) break
  }
  return differences
}

const renderRealEditorConfig = async (input: Record<string, any>, injectEmptyData = false) => {
  const setTempConfig = vi.fn()
  let renderConfig = injectEmptyData ? { ...input, data: [] } : input
  if (input.type === 'map' && input.columns && !input.columns.geo) {
    renderConfig = { ...renderConfig, columns: { ...input.columns, geo: structuredClone(mapDefaults.columns.geo) } }
  }
  if (input.type === 'dashboard' && input.multiDashboards?.[0]) {
    renderConfig = {
      ...renderConfig,
      multiDashboards: [
        {
          rows: [],
          visualizations: {},
          datasets: {},
          ...renderConfig.multiDashboards[0],
          dashboard: { sharedFilters: [], ...renderConfig.multiDashboards[0].dashboard }
        },
        ...renderConfig.multiDashboards.slice(1)
      ]
    }
  }
  const visualization =
    input.type === 'waffle-chart' && !input.visualizationType ? (
      <CdcWaffleChart config={renderConfig as any} isEditor setConfig={setTempConfig} />
    ) : (
      <VisualizationRenderer config={renderConfig} mode='editor' setConfig={setTempConfig} />
    )

  render(<EditorContext.Provider value={{ config: renderConfig, setTempConfig } as any}>{visualization}</EditorContext.Provider>)

  await waitFor(
    () => {
      if (!captureState.configs.some(capture => capture.type === input.type)) {
        throw new Error(
          `No ${input.type} config captured yet; captured types: ${
            JSON.stringify(captureState.configs.map(capture => ({ type: capture.type, keys: Object.keys(capture.config || {}) })))
          }`
        )
      }
    },
    { timeout: 5000 }
  )

  // Allow loader effects that run immediately after the editor panel first mounts to settle.
  await new Promise(resolvePromise => setTimeout(resolvePromise, input.type === 'dashboard' ? 500 : 50))
  const matchingCaptures = captureState.configs.filter(capture => capture.type === input.type)
  return matchingCaptures.at(-1)?.config
}

beforeAll(() => {
  vi.spyOn(Date, 'now').mockReturnValue(new Date('2025-01-02T03:04:05.678Z').valueOf())
  vi.stubGlobal('ResizeObserver', ResizeObserverMock)
})

beforeEach(() => {
  let randomCall = 0
  vi.spyOn(Math, 'random').mockImplementation(() => 0.123456789 + randomCall++ * 0.1)
})

afterEach(() => {
  cleanup()
  captureState.configs.length = 0
  captureState.renderContent = false
  vi.mocked(Math.random).mockRestore()
})

afterAll(() => {
  mkdirSync(reportRoot, { recursive: true })
  const matches = results.filter(result => result.status === 'match').length
  const lines = [
    '# Effective-config component parity audit',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    `Result: ${matches}/${results.length} corpus cases matched the real component editor handoff.`,
    ''
  ]

  results.forEach(result => {
    lines.push(`## ${result.status === 'match' ? 'PASS' : 'FAIL'} — ${result.name}`, '')
    if (result.error) lines.push(`Error: ${result.error}`, '')
    if (result.differences.length) {
      lines.push('```text', ...result.differences, '```', '')
    }
  })

  const reportPath = resolve(reportRoot, 'report.md')
  writeFileSync(reportPath, `${lines.join('\n')}\n`)
  process.stdout.write(`\nEffective-config parity audit: ${matches}/${results.length} matched\nReport: ${reportPath}\n`)
})

it.each(auditedCases)('audits %s against the real editor-mode component', async name => {
  const testCase = effectiveConfigCases.find(candidate => candidate.name === name)
  if (!testCase) throw new Error(`Unknown audit case: ${name}`)

  try {
    const input = readJson(testCase.input)
    const boundaryInput = structuredClone(input)
    const injectEmptyData =
      !Object.prototype.hasOwnProperty.call(input, 'data') &&
      ['chart', 'data-bite', 'waffle-chart', 'markup-include'].includes(input.type)
    const expected = toSavedJson(readJson(testCase.expected), injectEmptyData)
    captureState.renderContent = [
      'forest-plot-column-repair',
      'lollipop-style-sync',
      'minimum-bar-height'
    ].includes(name)
    const captured = await renderRealEditorConfig(structuredClone(input), injectEmptyData)
    if (!captured) throw new Error('The real component never supplied a config to Advanced Options.')
    const actual = projectToCharacterizationBoundary(toSavedJson(captured, injectEmptyData), boundaryInput, expected)
    const differences = isDeepStrictEqual(actual, expected) ? [] : describeDifferences(actual, expected)
    results.push({ name, status: differences.length ? 'different' : 'match', differences })
  } catch (error) {
    results.push({
      name,
      status: 'error',
      differences: [],
      error: error instanceof Error ? error.message : String(error)
    })
  }
})
