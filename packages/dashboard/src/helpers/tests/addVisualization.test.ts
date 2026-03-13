import { describe, expect, it, vi } from 'vitest'
import { addVisualization } from '../addVisualization'

describe('addVisualization', () => {
  it('creates chart visual settings with extra theme toggles disabled by default', () => {
    vi.spyOn(Date, 'now').mockReturnValue(12345)

    const visualization = addVisualization('chart', 'Bar')

    expect(visualization).toMatchObject({
      uid: 'chart12345',
      type: 'chart',
      visualizationType: 'Bar',
      visual: {
        border: false,
        borderColorTheme: false,
        accent: false,
        background: false,
        hideBackgroundColor: false
      }
    })
  })
})
