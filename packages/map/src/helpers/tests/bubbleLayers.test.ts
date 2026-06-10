import { describe, expect, it } from 'vitest'
import { getConfiguredBubbleLayers } from '../bubbleLayers'

describe('bubbleLayers', () => {
  it('uses legacy single-bubble settings when defaults added an empty layers array', () => {
    const config: any = {
      bubble: {
        minBubbleSize: 4,
        maxBubbleSize: 28,
        columns: {
          geo: { name: 'country' },
          primary: { name: 'cases' }
        },
        layers: [
          {
            columns: {
              geo: { name: '' },
              primary: { name: '' }
            }
          }
        ]
      }
    }

    expect(getConfiguredBubbleLayers(config)).toEqual([
      expect.objectContaining({
        minBubbleSize: 4,
        maxBubbleSize: 28,
        columns: {
          geo: { name: 'country' },
          primary: { name: 'cases' }
        }
      })
    ])
  })
})
