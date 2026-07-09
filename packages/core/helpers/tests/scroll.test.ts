import { describe, expect, it } from 'vitest'
import { ensureElementVisibleInScrollContainer } from '../cove/scroll'

const mockRect = (element: Element, rect: Partial<DOMRect>) => {
  element.getBoundingClientRect = () =>
    ({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      toJSON: () => ({}),
      ...rect
    }) as DOMRect
}

describe('ensureElementVisibleInScrollContainer', () => {
  it('does nothing when the element or container is missing', () => {
    const element = document.createElement('div')
    const container = document.createElement('div')
    container.scrollTop = 20

    expect(() => ensureElementVisibleInScrollContainer(null, container)).not.toThrow()
    expect(() => ensureElementVisibleInScrollContainer(element, null)).not.toThrow()
    expect(container.scrollTop).toBe(20)
  })

  it('scrolls upward when the element is above the visible range', () => {
    const element = document.createElement('div')
    const container = document.createElement('div')
    container.scrollTop = 50

    mockRect(container, { top: 100, bottom: 200 })
    mockRect(element, { top: 80, bottom: 120 })

    ensureElementVisibleInScrollContainer(element, container)

    expect(container.scrollTop).toBe(30)
  })

  it('scrolls downward when the element is below the visible range', () => {
    const element = document.createElement('div')
    const container = document.createElement('div')
    container.scrollTop = 50

    mockRect(container, { top: 100, bottom: 200 })
    mockRect(element, { top: 180, bottom: 230 })

    ensureElementVisibleInScrollContainer(element, container)

    expect(container.scrollTop).toBe(80)
  })

  it('does not scroll when the element is already fully visible', () => {
    const element = document.createElement('div')
    const container = document.createElement('div')
    container.scrollTop = 50

    mockRect(container, { top: 100, bottom: 200 })
    mockRect(element, { top: 120, bottom: 180 })

    ensureElementVisibleInScrollContainer(element, container)

    expect(container.scrollTop).toBe(50)
  })

  it('respects top and bottom offsets', () => {
    const elementAbove = document.createElement('div')
    const containerAbove = document.createElement('div')
    containerAbove.scrollTop = 50

    mockRect(containerAbove, { top: 100, bottom: 200 })
    mockRect(elementAbove, { top: 115, bottom: 150 })

    ensureElementVisibleInScrollContainer(elementAbove, containerAbove, 30)

    expect(containerAbove.scrollTop).toBe(35)

    const elementBelow = document.createElement('div')
    const containerBelow = document.createElement('div')
    containerBelow.scrollTop = 50

    mockRect(containerBelow, { top: 100, bottom: 200 })
    mockRect(elementBelow, { top: 150, bottom: 190 })

    ensureElementVisibleInScrollContainer(elementBelow, containerBelow, 0, 20)

    expect(containerBelow.scrollTop).toBe(60)
  })
})
