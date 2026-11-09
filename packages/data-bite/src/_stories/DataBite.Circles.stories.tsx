import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import DataBite from '../CdcDataBite'
import { waitForPresence } from '@cdc/core/helpers/testing'

const meta: Meta<typeof DataBite> = {
  title: 'Components/Templates/Data Bite/TP5 Circles',
  component: DataBite,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof DataBite>

const config = (
  circleStyle: 'light' | 'dark',
  whiteBackground: boolean,
  useWrap: boolean,
  value = 123,
  circleFontSize = 36
) => ({
  type: 'data-bite',
  biteStyle: 'tp5',
  title: 'Title',
  biteBody: 'A short message describing the statistic and its context.',
  dataColumn: 'value',
  dataFunction: 'Pass Through',
  data: [{ value }],
  dataFormat: { prefix: '', suffix: '', commas: true, roundToPlace: 0 },
  visual: { showTitle: true, circleStyle, circleFontSize, whiteBackground, useWrap }
})

export const MockupCombinations: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
        gap: 24,
        padding: 16,
        maxWidth: 920
      }}
    >
      <DataBite config={config('dark', false, true)} />
      <DataBite config={config('light', true, false)} />
      <DataBite config={config('dark', true, false)} />
      <DataBite config={config('light', false, true)} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await waitForPresence('.cdc-callout__value-circle', canvasElement)
    const circles = canvasElement.querySelectorAll<HTMLElement>('.cdc-callout__value-circle')
    expect(circles).toHaveLength(4)
    for (const circle of circles) {
      expect(circle.getBoundingClientRect().width).toBe(128)
      expect(circle.getBoundingClientRect().height).toBe(128)
      const value = circle.querySelector<HTMLElement>('.cdc-callout__value')!
      expect(getComputedStyle(value).whiteSpace).toBe('nowrap')
    }

    const assertCircleColors = () => {
      for (const circle of circles) {
        const dark = circle.classList.contains('cdc-callout__value-circle--dark')
        const style = getComputedStyle(circle)
        const value = circle.querySelector<HTMLElement>('.cdc-callout__value')!
        expect(style.borderTopColor).toBe(dark ? 'rgb(223, 242, 246)' : 'rgb(0, 129, 161)')
        expect(style.backgroundColor).toBe(dark ? 'rgb(0, 129, 161)' : 'rgb(239, 249, 250)')
        expect(getComputedStyle(value).color).toBe(dark ? 'rgb(244, 251, 252)' : 'rgb(0, 129, 161)')
      }
    }

    assertCircleColors()
    // Standalone COVE must provide the same colors without the host's TP5 stylesheet.
    const tp5Stylesheet = canvasElement.ownerDocument.querySelector<HTMLLinkElement>(
      'link[href*="/TemplatePackage/5.0/css/app.min.css"]'
    )!
    expect(tp5Stylesheet).not.toBeNull()
    const wasDisabled = tp5Stylesheet.disabled
    try {
      tp5Stylesheet.disabled = true
      assertCircleColors()
    } finally {
      tp5Stylesheet.disabled = wasDisabled
    }
  }
}

export const NarrowLongValue: Story = {
  render: () => (
    <div style={{ width: 280, padding: 16 }}>
      <DataBite config={config('light', true, false, 1234567, 20)} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await waitForPresence('.cdc-callout__value-circle', canvasElement)
    const circle = canvasElement.querySelector<HTMLElement>('.cdc-callout__value-circle')!
    const value = circle.querySelector<HTMLElement>('.cdc-callout__value')!
    expect(value.textContent).toBe('1,234,567')
    expect(getComputedStyle(value).fontSize).toBe('20px')
    expect(value.getBoundingClientRect().width).toBeLessThanOrEqual(circle.clientWidth)
    const message = canvasElement.querySelector<HTMLElement>('.cdc-callout__content-slot')!
    expect(message.getBoundingClientRect().top).toBeGreaterThanOrEqual(circle.getBoundingClientRect().bottom)
  }
}

export const ResponsiveBoundary: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {[480, 481].map(width => (
        <div key={width} data-testid={`circle-width-${width}`} style={{ width }}>
          <DataBite config={config('light', true, false)} />
        </div>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    await waitForPresence('.cdc-callout__value-circle', canvasElement)
    for (const width of [480, 481]) {
      const card = canvasElement.querySelector(`[data-testid="circle-width-${width}"]`)!
      const circle = card.querySelector('.cdc-callout__value-circle')!.getBoundingClientRect()
      const message = card.querySelector('.cdc-callout__content-slot')!.getBoundingClientRect()
      if (width === 480) {
        expect(message.top).toBeGreaterThanOrEqual(circle.bottom)
      } else {
        expect(message.left).toBeGreaterThanOrEqual(circle.right)
        expect(message.top).toBeLessThan(circle.bottom)
      }
    }
  }
}
