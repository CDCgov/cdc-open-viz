import { useState } from 'react'
import chroma from 'chroma-js'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'
import EditorContext from '@cdc/core/contexts/EditorContext'
import { outlinedTextColor } from '@cdc/core/helpers/cove/accessibility'
import stateCoordinates from '../data/state-coordinates'
import { geoAlbersUsa } from 'd3-geo'
import { SVG_WIDTH, SVG_HEIGHT } from '../helpers/constants'
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
            placeOverLabels: true,
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

const placementLabel = 'Position small-state bubbles over labels'
const darkBubble = '#023F91'
const defaultConfig = {
  ...Equal_Size.args!.config,
  general: { ...Equal_Size.args!.config.general, displayAsHex: false },
  bubble: {
    layers: Equal_Size.args!.config.bubble.layers.map(({ placeOverLabels, ...layer }) => ({
      ...layer,
      staticColor: darkBubble
    }))
  }
}
const bubbleFor = (element: HTMLElement, state: string) =>
  element.querySelector<SVGCircleElement>(`circle.bubble[data-tooltip-html*="${state}"]`)!
const bubblePosition = (element: HTMLElement, state = 'Massachusetts') => {
  const bubble = bubbleFor(element, state)
  return [Number(bubble.getAttribute('cx')), Number(bubble.getAttribute('cy'))]
}
const stateText = (element: HTMLElement, abbreviation: string) =>
  Array.from(element.querySelectorAll<SVGTextElement>('svg[role="img"] text')).find(
    text => text.textContent === abbreviation
  )!

export const Geography_By_Default: Story = {
  args: { config: defaultConfig },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const projection = geoAlbersUsa().translate([SVG_WIDTH / 2, SVG_HEIGHT / 2])
    for (const uid of ['US-MA', 'US-MD', 'US-DC']) {
      const state = stateCoordinates[uid]
      const position = projection([Number(state.Longitude), Number(state.Latitude)])!
      const actual = bubblePosition(canvasElement, state.Name)
      expect(actual[0]).toBeCloseTo(position[0])
      expect(actual[1]).toBeCloseTo(position[1])
      expect(getComputedStyle(stateText(canvasElement, uid.slice(3))).fill).toBe(
        getComputedStyle(stateText(canvasElement, 'MA')).fill
      )
    }
    expect(chroma(stateText(canvasElement, 'MA').style.fill).hex()).toBe(
      chroma(outlinedTextColor('#FFFFFF').textColor).hex()
    )
    expect(chroma(stateText(canvasElement, 'TX').style.fill).hex()).toBe(
      chroma(outlinedTextColor(darkBubble).textColor).hex()
    )
  }
}

const ReloadableCalloutMap = ({ config }) => {
  const [saved, setSaved] = useState(config)
  const [loaded, setLoaded] = useState(config)
  const [revision, setRevision] = useState(0)
  return (
    <EditorContext.Provider value={{ setTempConfig: setSaved } as any}>
      <button
        onClick={() => {
          setLoaded(JSON.parse(JSON.stringify(saved)))
          setRevision(revision + 1)
        }}
      >
        Reload saved map
      </button>
      <output data-testid='saved-placement'>{String(saved.bubble.layers[0].placeOverLabels)}</output>
      <CdcMap key={revision} config={loaded} isEditor />
    </EditorContext.Provider>
  )
}

export const Editor_Placement_And_Reload: Story = {
  args: { config: defaultConfig, isEditor: true },
  render: args => <ReloadableCalloutMap config={args.config} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const openLayerVisual = async () => {
      await openAccordion(canvas, 'Bubble Layers')
      const layerButton = canvas.getByRole('button', { name: /^Layer 1/ })
      if (layerButton.getAttribute('aria-expanded') !== 'true') await userEvent.click(layerButton)
      const layer = within(layerButton.closest('.series-item') as HTMLElement)
      const visual = layer.getByRole('button', { name: 'Visual', exact: true })
      if (visual.getAttribute('aria-expanded') !== 'true') await userEvent.click(visual)
    }
    await waitForEditor(canvas)
    await waitForPresence('circle.bubble', canvasElement)
    const geography = bubblePosition(canvasElement)
    await openLayerVisual()
    expect(canvas.getByRole('checkbox', { name: placementLabel })).not.toBeChecked()
    await performAndAssert(
      'Move bubbles from geography to outside labels',
      () => bubblePosition(canvasElement)[0],
      () => userEvent.click(canvas.getByRole('checkbox', { name: placementLabel })),
      (_before, after) => Math.abs(after - geography[0]) > 20
    )
    const callout = bubblePosition(canvasElement)
    expect(chroma(stateText(canvasElement, 'MA').style.fill).hex()).toBe(
      chroma(outlinedTextColor(darkBubble).textColor).hex()
    )
    expect(canvas.getByTestId('saved-placement').textContent).toBe('true')
    await userEvent.click(canvas.getByRole('button', { name: 'Reload saved map' }))
    await waitForEditor(canvas)
    await waitForPresence('circle.bubble', canvasElement)
    expect(bubblePosition(canvasElement)).toEqual(callout)
    await openAccordion(canvas, 'Type')
    await performAndAssert(
      'Hiding labels temporarily restores geography placement',
      () => bubblePosition(canvasElement)[0],
      () => userEvent.click(canvas.getByRole('checkbox', { name: /Show state labels/ })),
      (_before, after) => Math.abs(after - geography[0]) < 0.001
    )
    await openLayerVisual()
    expect(canvas.queryByRole('checkbox', { name: placementLabel })).not.toBeInTheDocument()
    expect(canvas.getByTestId('saved-placement').textContent).toBe('true')
    await openAccordion(canvas, 'Type')
    await performAndAssert(
      'Showing labels restores the saved callout preference',
      () => bubblePosition(canvasElement)[0],
      () => userEvent.click(canvas.getByRole('checkbox', { name: /Show state labels/ })),
      (_before, after) => Math.abs(after - callout[0]) < 0.001
    )
    await openLayerVisual()
    await performAndAssert(
      'Opt out restores geography placement and normal callout contrast',
      () => bubblePosition(canvasElement)[0],
      () => userEvent.click(canvas.getByRole('checkbox', { name: placementLabel })),
      (_before, after) => Math.abs(after - geography[0]) < 0.001
    )
    expect(chroma(stateText(canvasElement, 'MA').style.fill).hex()).toBe(
      chroma(outlinedTextColor('#FFFFFF').textColor).hex()
    )
    expect(canvas.getByTestId('saved-placement').textContent).toBe('false')
    await userEvent.click(canvas.getByRole('button', { name: 'Reload saved map' }))
    await waitForEditor(canvas)
    await waitForPresence('circle.bubble', canvasElement)
    expect(bubblePosition(canvasElement)).toEqual(geography)
    await openLayerVisual()
    expect(canvas.getByRole('checkbox', { name: placementLabel })).not.toBeChecked()
  }
}
