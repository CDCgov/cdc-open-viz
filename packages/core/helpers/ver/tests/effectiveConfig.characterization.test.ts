import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { CURRENT_COVE_CONFIG_VERSION } from '../../coveUpdateWorker'
import { prepareEffectiveConfig } from './effective-config/adapters'
import { effectiveConfigCases } from './effective-config/cases'

const fixtureRoot = resolve(process.cwd(), 'helpers/ver/tests/effective-config')
const frozenTime = new Date('2025-01-02T03:04:05.678Z')
const generateFixtures = process.env.COVE_GENERATE_EFFECTIVE_CONFIG_FIXTURES === '1'
const runCharacterization =
  generateFixtures || process.env.COVE_RUN_EFFECTIVE_CONFIG_CHARACTERIZATION === '1'
const describeEffectiveConfig = runCharacterization ? describe : describe.skip

const readFixture = (filename: string) => JSON.parse(readFileSync(resolve(fixtureRoot, filename), 'utf8'))

const normalizeFinalVersion = (config: any) => {
  // Expected files record the JSON boundary used by saved configurations.
  const normalized = JSON.parse(JSON.stringify(config))
  const version = normalized.version
  delete normalized.version
  return { normalized, version }
}

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describeEffectiveConfig('effective config characterization corpus', () => {
  it.each(effectiveConfigCases)('$name', testCase => {
    vi.useFakeTimers()
    vi.setSystemTime(frozenTime)
    let randomCall = 0
    vi.spyOn(Math, 'random').mockImplementation(() => 0.123456789 + randomCall++ * 0.1)

    const loadedInput = readFixture(testCase.input)
    const input = structuredClone(loadedInput)
    const originalInput = structuredClone(input)
    const actual = prepareEffectiveConfig(input, testCase.kind)

    expect(input).toStrictEqual(originalInput)

    const expectedPath = resolve(fixtureRoot, testCase.expected)
    if (generateFixtures) {
      mkdirSync(dirname(expectedPath), { recursive: true })
      writeFileSync(expectedPath, `${JSON.stringify(actual, null, 2)}\n`)
    }

    const expected = readFixture(testCase.expected)
    const normalizedActual = normalizeFinalVersion(actual)
    const normalizedExpected = normalizeFinalVersion(expected)

    expect(normalizedActual.version, 'root.version').toBe(CURRENT_COVE_CONFIG_VERSION)
    expect(normalizedActual.normalized).toStrictEqual(normalizedExpected.normalized)
  })
})
