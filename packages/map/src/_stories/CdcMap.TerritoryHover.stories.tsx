import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'
import { generateColorsArray } from '@cdc/core/helpers/generateColorsArray'
import CdcMap from '../CdcMap'
import { createNewMapConfig } from '../helpers/createNewMapConfig'
import base from './_mock/equal-number.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Regression Tests/Territory Hover',
  component: CdcMap
}
export default meta
type Story = StoryObj<typeof CdcMap>

const makeConfig = (patterned = false) => {
  const config = createNewMapConfig({
    ...base,
    general: { ...base.general, territoriesAlwaysShow: true },
    data: base.data.filter(row => row.STATE !== 'GU').map(row => ({ ...row, URL: '' }))
  })
  if (patterned) {
    config.map.patterns = [
      {
        dataKey: 'STATE',
        dataValue: 'PR',
        pattern: 'diagonalLines',
        size: 'small',
        color: '#000000',
        label: '',
        contrastCheck: false
      }
    ]
    config.locationHighlighter.enabled = true
    config.locationHighlighter.highlightSelectedLocation = true
  }
  return config
}

const hoverStory = (patterned = false): Story => ({
  args: { config: makeConfig(patterned) },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('svg.US-PR g[data-geo-id="US-PR"]', canvasElement)
    if (patterned) {
      await userEvent.selectOptions(
        within(canvasElement).getByLabelText('Select a location for more information'),
        'US-PR'
      )
    }
    const group = canvasElement.querySelector<SVGGElement>('svg.US-PR g[data-geo-id="US-PR"]')!
    const shape = group.querySelector<SVGPathElement>('path')!
    shape.scrollIntoView({ block: 'center' })
    const bounds = shape.getBoundingClientRect()
    // Synthetic hover can pass even when the browser would hit the outer SVG.
    expect(document.elementFromPoint(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2)).toBe(shape)
    const normalFill = getComputedStyle(shape).fill
    const [, hoverColor, activeColor] = generateColorsArray(normalFill)
    const toRgb = (color: string) => {
      const element = document.createElement('span')
      element.style.color = color
      canvasElement.append(element)
      const rgb = getComputedStyle(element).color
      element.remove()
      return rgb
    }
    const pattern = group.querySelector<SVGPathElement>('path[fill^="url("]')
    const patternFill = pattern?.getAttribute('fill')
    const outline = group.querySelector<SVGPathElement>('.selected-territory-outline')
    const label = group.querySelector('text')!
    const labelFill = getComputedStyle(label).fill

    // Vitest's provider uses a real pointer, which activates CSS :hover/:active.
    // Storybook's standalone interaction panel uses synthetic events instead.
    const browser = '__vitest_browser__' in globalThis ? await import('vitest/browser') : null
    await performAndAssert(
      'Hover territory and show its tooltip',
      () => document.querySelector('[role="tooltip"]')?.textContent ?? '',
      () => (browser ? browser.userEvent.hover(shape) : userEvent.hover(shape)),
      (_before, after) => after.includes('Puerto Rico')
    )
    if (browser) {
      expect(group.matches(':hover')).toBe(true)
      expect(getComputedStyle(shape).fill).toBe(toRgb(hoverColor))
      let pressedFill = ''
      shape.addEventListener(
        'mousedown',
        () => {
          pressedFill = getComputedStyle(shape).fill
        },
        { once: true }
      )
      await browser.userEvent.click(shape)
      expect(pressedFill).toBe(toRgb(activeColor))
      expect(getComputedStyle(shape).fill).toBe(toRgb(hoverColor))
    }
    expect(getComputedStyle(label).fill).toBe(labelFill)
    if (patterned) {
      expect(pattern).not.toBeNull()
      expect(pattern).toHaveAttribute('fill', patternFill!)
      expect(getComputedStyle(pattern!).pointerEvents).toBe('none')
      expect(outline).toHaveAttribute('fill', 'none')
      expect(outline).toHaveAttribute('stroke', '#000000')
    }
    await performAndAssert(
      'Leaving territory restores its base fill',
      () => getComputedStyle(shape).fill,
      () =>
        browser
          ? browser.userEvent.hover(canvasElement.querySelector('h2, h3, .map-container')!)
          : userEvent.unhover(shape),
      (_before, after) => after === normalFill
    )
    const emptyShape = canvasElement.querySelector<SVGPathElement>('svg.US-GU g path')!
    const emptyFill = getComputedStyle(emptyShape).fill
    if (browser) {
      await browser.userEvent.hover(emptyShape)
      expect(getComputedStyle(emptyShape).fill).toBe(emptyFill)
    }
  }
})

export const TerritoryPillHover = hoverStory()
export const PatternedSelectedTerritoryPillHover = hoverStory(true)
