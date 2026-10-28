import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import fixture from './_mock/bubble-tabbed-numeric.json'

export default { title: 'Components/Templates/Map/Bubble Callouts', component: CdcMap } as Meta<typeof CdcMap>
type Story = StoryObj<typeof CdcMap>

const states = [
  'Vermont',
  'New Hampshire',
  'Massachusetts',
  'Rhode Island',
  'Connecticut',
  'New Jersey',
  'Delaware',
  'Maryland',
  'District of Columbia',
  'Texas',
  'California',
  'Washington'
]
const makeStory = (labels = true, reversed = false, variableSizes = false): Story => ({
  args: {
    config: {
      ...fixture,
      general: { ...fixture.general, title: 'US bubble callout placement', displayStateLabels: labels },
      columns: { ...fixture.columns, geo: { name: 'State' }, primary: { name: 'Cases' } },
      filters: [],
      data: (reversed ? [...states].reverse() : states).map(State => ({
        State,
        Cases: variableSizes && State === 'Massachusetts' ? 100 : 10
      })),
      bubble: {
        layers: [
          {
            ...fixture.bubble.layers[0],
            minBubbleSize: 14,
            maxBubbleSize: variableSizes ? 24 : 14,
            staticColor: '#E69F00',
            extraBubbleBorder: true,
            columns: { geo: { name: 'State' }, primary: { name: '' }, size: { name: 'Cases' } }
          }
        ]
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const circles = Array.from(canvasElement.querySelectorAll<SVGCircleElement>('circle.bubble'))
    expect(circles).toHaveLength(states.length)
    const y = circle => Number(circle.getAttribute('cy'))
    const radius = circle => Number(circle.getAttribute('r'))
    circles.slice(1).forEach((circle, index) => {
      const previous = circles[index]
      expect(radius(previous)).toBeGreaterThanOrEqual(radius(circle))
      if (radius(previous) === radius(circle)) expect(y(previous)).toBeLessThanOrEqual(y(circle))
    })
    if (!labels) {
      expect(canvasElement.querySelector('.state-labels-above-bubbles')).toBeNull()
      return
    }
    await document.fonts.ready
    const labelGroup = canvasElement.querySelector('.state-labels-above-bubbles')!
    const svg = circles[0].ownerSVGElement!
    const toSvg = (element: SVGGraphicsElement, x: number, y: number) => {
      const point = svg.createSVGPoint()
      point.x = x
      point.y = y
      return point.matrixTransform(element.getCTM()!).matrixTransform(svg.getCTM()!.inverse())
    }
    for (const abbr of ['VT', 'NH', 'MA', 'RI', 'CT', 'NJ', 'DE', 'MD', 'DC']) {
      const group = abbr === 'DC' ? canvasElement.querySelector('.dc-callout')! : labelGroup
      const text = Array.from(group.querySelectorAll<SVGTextElement>('text')).find(text => text.textContent === abbr)!
      expect(text).toBeTruthy()
      const style = getComputedStyle(text)
      const context = document.createElement('canvas').getContext('2d')!
      context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`
      const metrics = context.measureText(abbr)
      // SVG character positions include baseline alignment; Canvas measures the
      // actual uppercase ink rather than the font's ascender/descender box.
      const baseline = text.getStartPositionOfChar(0).y
      const inkCenterY = baseline + (metrics.actualBoundingBoxDescent - metrics.actualBoundingBoxAscent) / 2
      // Preserve the original start-aligned text at x=4 past the leader endpoint.
      expect(text.getAttribute('x')).toBe('4')
      expect(text.getAttribute('text-anchor')).toBeNull()
      const expectedBubbleCenter = toSvg(text, 4 + text.getComputedTextLength() / 2, inkCenterY)
      expect(
        circles.some(circle => {
          const center = toSvg(circle, Number(circle.getAttribute('cx')), y(circle))
          return Math.abs(center.x - expectedBubbleCenter.x) < 1.5 && Math.abs(center.y - expectedBubbleCenter.y) < 0.5
        }),
        `${abbr}: bubble approximately follows the label center and visible text height`
      ).toBe(true)
    }
    const connectors = canvasElement.querySelector('g[pointer-events="none"] line')
    expect(connectors).toBeTruthy()
    expect(labelGroup.querySelector('line')).toBeNull()
    expect(circles[0].compareDocumentPosition(labelGroup) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  }
})

export const Equal_Size = makeStory()
export const Reversed_Rows = makeStory(true, true)
export const Largest_First = makeStory(true, false, true)
export const Labels_Hidden = makeStory(false)
export const Mobile: Story = {
  ...makeStory(),
  decorators: [
    Story => (
      <div style={{ width: 375, maxWidth: '100%' }}>
        <Story />
      </div>
    )
  ]
}

export const Without_Bubbles: Story = {
  args: {
    ...Equal_Size.args,
    config: { ...Equal_Size.args!.config, bubble: { layers: [] } }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.dc-callout__label', canvasElement)
    for (const abbr of ['VT', 'NH', 'MA', 'RI', 'CT', 'NJ', 'DE', 'MD', 'DC']) {
      const text = Array.from(canvasElement.querySelectorAll<SVGTextElement>('svg[role="img"] text')).find(
        text => text.textContent === abbr
      )!
      expect(text.getAttribute('x')).toBe('4')
      expect(text.getAttribute('text-anchor')).toBeNull()
      expect(text.getAttribute('alignment-baseline')).toBe('middle')
      const anchor = text.transform.baseVal.consolidate()!.matrix
      expect(
        Array.from(text.ownerSVGElement!.querySelectorAll('line')).some(
          line =>
            Math.abs(Number(line.getAttribute('x2')) - anchor.e) < 0.001 &&
            Math.abs(Number(line.getAttribute('y2')) - anchor.f) < 0.001
        )
      ).toBe(true)
    }
  }
}
