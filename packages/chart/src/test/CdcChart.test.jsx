import path from 'node:path'
import { testStandaloneBuild } from '@cdc/core/helpers/tests/testStandaloneBuild.ts'
import { describe, it, expect } from 'vitest'

describe('Chart', () => {
  it('Can be built in isolation', async () => {
    const pkgDir = path.join(__dirname, '..')
    const result = await testStandaloneBuild(pkgDir)
    expect(result).toBe(true)
  }, 300000)
})
