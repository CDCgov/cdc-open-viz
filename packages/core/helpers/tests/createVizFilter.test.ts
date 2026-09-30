import { describe, expect, it, vi } from 'vitest'
import { createVizFilter } from '../createVizFilter'

describe('createVizFilter', () => {
  it('creates visualization filters with a stable id and the historical default style', () => {
    vi.spyOn(Date, 'now').mockReturnValue(12345)

    expect(createVizFilter()).toMatchObject({ id: 12345, filterStyle: 'dropdown', values: [] })
  })

  it('preserves an explicitly authored filter style', () => {
    expect(createVizFilter({ filterStyle: 'multi-select' })).toMatchObject({ filterStyle: 'multi-select' })
  })
})
