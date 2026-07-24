import { describe, expect, it } from 'vitest'
import { toggleBubbleLegendActive } from '../toggleBubbleLegendActive'

const createRuntimeLegend = () => ({
  items: [{ value: 'COVID-19' }, { value: 'Influenza' }, { value: 'Measles' }]
})

describe('toggleBubbleLegendActive', () => {
  it('hides unclicked bubble legend items when one item is clicked', () => {
    const result = toggleBubbleLegendActive(0, createRuntimeLegend())

    expect(result.disabledAmt).toBe(2)
    expect(result.items).toMatchObject([
      { value: 'COVID-19', disabled: false, hidden: false },
      { value: 'Influenza', disabled: false, hidden: true },
      { value: 'Measles', disabled: false, hidden: true }
    ])
  })

  it('can add another hidden item back to the visible bubble set', () => {
    const runtimeLegend = toggleBubbleLegendActive(0, createRuntimeLegend())
    const result = toggleBubbleLegendActive(1, runtimeLegend)

    expect(result.disabledAmt).toBe(1)
    expect(result.items).toMatchObject([
      { value: 'COVID-19', disabled: false, hidden: false },
      { value: 'Influenza', disabled: false, hidden: false },
      { value: 'Measles', disabled: false, hidden: true }
    ])
  })

  it('restores all bubble legend items when the last visible item is toggled off', () => {
    const runtimeLegend = toggleBubbleLegendActive(0, createRuntimeLegend())
    const result = toggleBubbleLegendActive(0, runtimeLegend)

    expect(result.disabledAmt).toBe(0)
    expect(result.items).toMatchObject([
      { value: 'COVID-19', disabled: false, hidden: false },
      { value: 'Influenza', disabled: false, hidden: false },
      { value: 'Measles', disabled: false, hidden: false }
    ])
  })
})
