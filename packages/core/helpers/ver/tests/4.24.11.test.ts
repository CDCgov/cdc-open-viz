import { describe, expect, it } from 'vitest'
import update from '../4.24.11'

describe('4.24.11 color migration marker', () => {
  it('adds the marker while preserving existing bookkeeping and the input', () => {
    const config = { type: 'chart', migrations: { existing: true } }
    const result = update(config)

    expect(result.migrations).toEqual({ existing: true, addColorMigration: true })
    expect(config.migrations).toEqual({ existing: true })
  })

  it('creates bookkeeping when it is absent', () => {
    expect(update({ type: 'chart' }).migrations.addColorMigration).toBe(true)
  })
})
