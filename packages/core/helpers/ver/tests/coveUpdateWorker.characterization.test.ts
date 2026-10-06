import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { CURRENT_COVE_CONFIG_VERSION, coveUpdateWorker } from '../../coveUpdateWorker'
import { migrationCharacterizationCases } from './migration-characterization/cases'

const fixtureRoot = resolve(process.cwd(), 'helpers/ver/tests/migration-characterization')
const frozenTime = new Date('2025-01-02T03:04:05.678Z')
const generateFixtures = process.env.COVE_GENERATE_MIGRATION_FIXTURES === '1'

const readFixture = (folder: 'inputs' | 'expected', filename: string) =>
  JSON.parse(readFileSync(resolve(fixtureRoot, folder, filename), 'utf8'))

const normalizeWorkerVersions = (config: any, path = 'root') => {
  const normalized = structuredClone(config)
  const versions: Array<{ path: string; version: unknown }> = []

  const visit = (dashboard: any, dashboardPath: string) => {
    versions.push({ path: dashboardPath, version: dashboard.version })
    delete dashboard.version
    dashboard.multiDashboards?.forEach((subDashboard: any, index: number) => {
      visit(subDashboard, `${dashboardPath}.multiDashboards[${index}]`)
    })
  }

  visit(normalized, path)
  return { normalized, versions }
}

const expectCurrentWorkerVersions = (versions: Array<{ path: string; version: unknown }>) => {
  versions.forEach(({ path, version }) => {
    expect(version, `${path}.version`).toBe(CURRENT_COVE_CONFIG_VERSION)
  })
}

const expectDataRestoredExactly = (migrated: any, original: any) => {
  expect(migrated.data).toEqual(original.data)
  expect(migrated.formattedData).toEqual(original.formattedData)
  expect(migrated.originalFormattedData).toEqual(original.originalFormattedData)
  expect(migrated.yAxisDomainData).toEqual(original.yAxisDomainData)
  expect(migrated.datasets['root-dataset'].data).toEqual(original.datasets['root-dataset'].data)
  expect(migrated.visualizations.chart.data).toEqual(original.visualizations.chart.data)
  expect(migrated.visualizations.chart.datasets['visualization-dataset'].data).toEqual(
    original.visualizations.chart.datasets['visualization-dataset'].data
  )
  expect(migrated.multiDashboards[0].data).toEqual(original.multiDashboards[0].data)
}

afterEach(() => {
  vi.useRealTimers()
})

describe('coveUpdateWorker characterization corpus', () => {
  it.each(migrationCharacterizationCases)('$name', testCase => {
    vi.useFakeTimers()
    vi.setSystemTime(frozenTime)

    const loadedInput = readFixture('inputs', testCase.input)
    const input = structuredClone(loadedInput)
    const originalInput = structuredClone(input)
    const migrated = coveUpdateWorker(input)

    if (generateFixtures) {
      writeFileSync(resolve(fixtureRoot, 'expected', testCase.expected), `${JSON.stringify(migrated, null, 2)}\n`)
    }
    const expected = readFixture('expected', testCase.expected)

    expect(input).toEqual(originalInput)

    const normalizedActual = normalizeWorkerVersions(migrated)
    const normalizedExpected = normalizeWorkerVersions(expected)
    expectCurrentWorkerVersions(normalizedActual.versions)
    expect(normalizedActual.normalized).toEqual(normalizedExpected.normalized)
  })

  it('restores stripped data exactly', () => {
    vi.useFakeTimers()
    vi.setSystemTime(frozenTime)

    const loadedInput = readFixture('inputs', 'data-restoration.json')
    const input = structuredClone(loadedInput)
    const originalInput = structuredClone(input)

    const migrated = coveUpdateWorker(input)

    expect(input).toEqual(originalInput)
    expectDataRestoredExactly(migrated, originalInput)
  })
})
