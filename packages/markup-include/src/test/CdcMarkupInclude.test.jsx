import path from 'path'
import { testStandaloneBuild } from '@cdc/core/helpers/tests/testStandaloneBuild.ts'
import { describe, it, expect } from 'vitest'

describe('Markup Include', () => {
  it('Can be built in isolation', async () => {
    const pkgDir = path.join(__dirname, '..')
    const result = testStandaloneBuild(pkgDir)
    expect(result).toBe(true)
  })
})
