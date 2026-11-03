import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'
import CountyDotDensityPrototype from './dotDensity/CountyDotDensityPrototype'

const meta: Meta<typeof CountyDotDensityPrototype> = {
  title: 'Components/Templates/Map/Dot Density Prototype',
  component: CountyDotDensityPrototype,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'County-only Canvas experiment using COVE’s bundled TopoJSON, composite Albers projection, and D3 zoom. Use Controls to change geography, dot value, radius, or seed. Data is synthetic; dots are reproducible approximate locations. The 100,000-dot budget rejects excessive requests rather than silently thinning dots. This is not a production map config option.'
      }
    }
  },
  args: { geography: '04', dotValue: 1000, dotRadius: 1.25, seed: 42, empty: false },
  argTypes: {
    geography: { control: 'select', options: ['04', '06', 'all'] },
    dotValue: { control: { type: 'number', min: 1, step: 100 } },
    dotRadius: { control: { type: 'range', min: 0.5, max: 3, step: 0.25 } },
    seed: { control: { type: 'number', step: 1 } }
  }
}
export default meta
type Story = StoryObj<typeof CountyDotDensityPrototype>

const readMap = (root: HTMLElement) => {
  const canvas = root.querySelector('canvas')!
  return {
    count: Number(canvas.dataset.drawnDots),
    scale: Number(canvas.dataset.zoomScale),
    x: Number(canvas.dataset.zoomX),
    width: canvas.getBoundingClientRect().width,
    signature: canvas.dataset.positionSignature,
    pixels: canvas.toDataURL()
  }
}

export const Arizona: Story = {
  play: async ({ canvasElement }) => {
    await waitForPresence('canvas[data-drawn-dots]', canvasElement)
    const canvas = within(canvasElement)
    const original = readMap(canvasElement)
    expect(original.count).toBeGreaterThan(0)
    expect(original.signature).toContain('04013:')
    await performAndAssert(
      'Zoom changes Canvas output while geographic positions remain stable',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Zoom in', exact: true })),
      (before, after) =>
        after.scale > before.scale &&
        after.pixels !== before.pixels &&
        after.signature === before.signature &&
        after.count === before.count
    )
    await performAndAssert(
      'Reset restores the original Canvas output',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Reset zoom' })),
      (_, after) => after.scale === 1 && after.pixels === original.pixels
    )
    await userEvent.click(canvas.getByText('County totals (15 counties)'))
    expect(canvas.getByRole('cell', { name: '04013' })).toBeVisible()
  }
}

export const Nationwide: Story = { args: { geography: 'all', dotValue: 5000 } }
export const DenseArizona: Story = { args: { dotValue: 100 } }
export const California: Story = { args: { geography: '06' } }
export const ResizeAfterZoom: Story = {
  play: async ({ canvasElement }) => {
    await waitForPresence('canvas[data-drawn-dots]', canvasElement)
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Zoom in', exact: true }))
    const beforeResize = readMap(canvasElement)
    const container = canvasElement.querySelector('main')!
    await performAndAssert(
      'Resize preserves map-space translation and geographic positions',
      () => readMap(canvasElement),
      async () => {
        container.style.width = '600px'
      },
      (before, after) =>
        after.width < before.width && Math.abs(after.x - before.x) < 0.001 && after.signature === before.signature
    )
    await performAndAssert(
      'Next zoom stays centered after resizing',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Zoom in', exact: true })),
      (_, after) => after.scale === 2.25 && Math.abs(after.x - (beforeResize.x * 1.5 - 240)) < 0.001
    )
    container.style.width = ''
  }
}
export const Empty: Story = {
  args: { empty: true },
  play: async ({ canvasElement }) => {
    await waitForPresence('canvas[data-drawn-dots="0"]', canvasElement)
    expect(within(canvasElement).getByRole('status')).toHaveTextContent('No data to display')
  }
}
export const BudgetExceeded: Story = {
  args: { geography: 'all', dotValue: 1 },
  play: async ({ canvasElement }) => {
    await waitForPresence('canvas[data-drawn-dots="0"]', canvasElement)
    expect(within(canvasElement).getByRole('status')).toHaveTextContent('Increase the dot value')
  }
}
