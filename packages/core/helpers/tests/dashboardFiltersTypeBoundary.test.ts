import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const repoRoot = path.resolve(__dirname, '../../../..')

const readSource = (relativePath: string) => fs.readFileSync(path.join(repoRoot, relativePath), 'utf8')

const getTypeFiles = (dir: string): string[] => {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const entryPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return getTypeFiles(entryPath)
    if (!entry.name.endsWith('.ts')) return []
    return [entryPath]
  })
}

describe('dashboard filters type boundary', () => {
  it('keeps core type definitions independent from the dashboard package', () => {
    const coreTypesDir = path.join(repoRoot, 'packages/core/types')
    const offenders = getTypeFiles(coreTypesDir)
      .filter(filePath => readSource(path.relative(repoRoot, filePath)).includes('@cdc/dashboard'))
      .map(filePath => path.relative(repoRoot, filePath))

    expect(offenders).toEqual([])
  })

  it('does not keep a dashboard-owned DashboardFilters type shim', () => {
    const dashboardFiltersPath = path.join(repoRoot, 'packages/dashboard/src/types/DashboardFilters.ts')

    expect(fs.existsSync(dashboardFiltersPath)).toBe(false)
  })
})
