import { fireEvent, render, waitFor } from '@testing-library/react'
import { afterAll, describe, expect, it, vi } from 'vitest'
import CdcChart from '../CdcChartComponent'

const dataTableProps = vi.hoisted(() => {
  const originalGetContext = Object.getOwnPropertyDescriptor(
    (globalThis as any).HTMLCanvasElement.prototype,
    'getContext'
  )
  Object.defineProperty((globalThis as any).HTMLCanvasElement.prototype, 'getContext', {
    configurable: true,
    value: () => ({ measureText: (text = '') => ({ width: String(text).length * 8 }) })
  })

  return { calls: [] as any[], originalGetContext }
})

afterAll(() => {
  if (dataTableProps.originalGetContext) {
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', dataTableProps.originalGetContext)
  }
})

vi.mock('@visx/responsive/lib/components/ParentSize', () => ({
  default: ({ children }) => children({ width: 640, height: 420 })
}))

vi.mock('react-tooltip', async () => {
  const React = await vi.importActual<typeof import('react')>('react')
  return {
    Tooltip: ({ className, variant }) =>
      React.createElement('div', { className, 'data-testid': 'react-tooltip', 'data-variant': variant })
  }
})

vi.mock('@cdc/core/components/DataTable', async () => {
  const React = await vi.importActual<typeof import('react')>('react')
  return {
    default: props => {
      dataTableProps.calls.push(props)
      return React.createElement('div', { 'data-testid': 'network-data-table' })
    }
  }
})

const getConfig = (overrides = {}) =>
  ({
    type: 'chart',
    visualizationType: 'Network',
    title: 'Partner Network',
    data: [
      { source: 'A', target: 'B', weight: 2, style: 'solid', nodeColor: '#005eaa' },
      { source: 'B', target: 'A', weight: 3, style: 'dashed', nodeColor: '#4b830d' },
      { source: 'B', target: 'C', weight: 1, style: 'solid', nodeColor: '#4b830d' }
    ],
    enableTooltips: true,
    network: {
      columns: {
        source: 'source',
        target: 'target',
        weight: 'weight',
        style: 'style',
        nodeColor: 'nodeColor'
      },
      directed: false,
      height: 420,
      nodeRadius: 8,
      nodeColor: '#712177',
      linkColor: '#333333',
      showLabels: true,
      linkDistance: 90,
      chargeStrength: -240,
      rotation: 0,
      scale: 1,
      offsetX: 0,
      offsetY: 0
    },
    table: { show: true, expanded: true, label: 'Data Table' },
    ...overrides
  } as any)

describe('CdcChart Network', () => {
  it('renders aggregated accessible nodes and links and preserves raw rows for the table', async () => {
    dataTableProps.calls.length = 0
    const { container } = render(<CdcChart config={getConfig()} interactionLabel='network-test' />)

    await waitFor(() => expect(container.querySelectorAll('.network-chart__node')).toHaveLength(3))
    expect(container.querySelectorAll('.network-chart__link')).toHaveLength(2)
    expect(container.querySelector('.network-chart__node')).toHaveAttribute('tabindex', '0')
    expect(container.querySelector('.network-chart__node')).toHaveAttribute('aria-label')
    const link = container.querySelector('.network-chart__link-group')
    expect(link).toHaveAttribute('data-tooltip-content')
    expect(container.querySelector('.network-chart__tooltip')).toHaveAttribute('data-variant', 'light')
    expect(container.querySelector('[aria-label^="A,"] circle')).toHaveAttribute('fill', '#005eaa')
    expect(container.querySelector('[aria-label^="B,"] circle')).toHaveAttribute('fill', '#4b830d')
    expect(container.querySelector('[aria-label^="C,"] circle')).toHaveAttribute('fill', '#712177')
    await waitFor(() => expect(dataTableProps.calls.at(-1)?.runtimeData).toHaveLength(3))
  })

  it('shows an actionable state when every row is invalid', async () => {
    const { container } = render(
      <CdcChart
        config={getConfig({ data: [{ source: 'A', target: 'A', weight: 0 }], table: { show: false } })}
        interactionLabel='network-invalid-test'
      />
    )

    await waitFor(() => expect(container).toHaveTextContent('No valid connections are available'))
    expect(container).toHaveTextContent('1 row(s) were rejected')
  })

  it('renders link styles from the selected data column', async () => {
    const { container } = render(<CdcChart config={getConfig()} />)

    await waitFor(() => expect(container.querySelectorAll('.network-chart__link')).toHaveLength(2))
    const dashedLink = container.querySelector('[aria-label*="A and B, dashed link"] .network-chart__link')
    const solidLink = container.querySelector('[aria-label*="B and C, solid link"] .network-chart__link')
    expect(dashedLink).toHaveClass('network-chart__link--dashed')
    expect(solidLink).not.toHaveClass('network-chart__link--dashed')
  })

  it('clamps invalid authored heights and creates unique ids per chart instance', async () => {
    const { container } = render(
      <>
        <CdcChart config={getConfig({ network: { ...getConfig().network, height: -10 } })} />
        <CdcChart config={getConfig({ network: { ...getConfig().network, height: -10 } })} />
      </>
    )

    await waitFor(() => expect(container.querySelectorAll('.network-chart')).toHaveLength(2))
    expect(Array.from(container.querySelectorAll('.network-chart__container'))).toEqual([
      expect.objectContaining({ style: expect.objectContaining({ height: '160px' }) }),
      expect.objectContaining({ style: expect.objectContaining({ height: '160px' }) })
    ])
    const markerIds = Array.from(container.querySelectorAll('marker')).map(marker => marker.id)
    expect(new Set(markerIds).size).toBe(2)
  })

  it('starts from the authored view and keeps end-user view changes ephemeral', async () => {
    const config = getConfig({
      network: { ...getConfig().network, rotation: 30, scale: 1.5, offsetX: 20, offsetY: -10 }
    })
    const { container } = render(<CdcChart config={config} />)

    const viewport = await waitFor(() => {
      const element = container.querySelector('.network-chart__viewport')
      expect(element).toBeInTheDocument()
      return element
    })
    const authoredTransform = viewport.getAttribute('transform')
    expect(authoredTransform).toContain('rotate(30) scale(1.5)')

    fireEvent.wheel(container.querySelector('.network-chart')!, { deltaY: -100 })
    expect(viewport.getAttribute('transform')).toBe(authoredTransform)

    fireEvent.click(container.querySelector('[aria-label="Zoom in"]')!)
    expect(viewport.getAttribute('transform')).not.toBe(authoredTransform)
    expect(config.network.scale).toBe(1.5)

    fireEvent.click(container.querySelector('[aria-label="Rotate right"]')!)
    expect(viewport.getAttribute('transform')).toContain('rotate(45)')
    expect(config.network.rotation).toBe(30)

    fireEvent.click(container.querySelector('[aria-label="Reset view"]')!)
    expect(viewport.getAttribute('transform')).toBe(authoredTransform)
  })

  it('constrains extreme view offsets to the graph bounds', async () => {
    const config = getConfig({
      network: { ...getConfig().network, offsetX: 10_000, offsetY: 10_000 }
    })
    const { container } = render(<CdcChart config={config} />)
    const viewport = await waitFor(() => {
      const element = container.querySelector('.network-chart__viewport')
      expect(element).toBeInTheDocument()
      return element
    })
    const transform = viewport.getAttribute('transform') || ''
    const [, translatedX, translatedY] = transform.match(/^translate\(([^ ]+) ([^)]+)\)/) || []
    expect(Number(translatedX)).toBeGreaterThanOrEqual(0)
    expect(Number(translatedX)).toBeLessThanOrEqual(640)
    expect(Number(translatedY)).toBeGreaterThanOrEqual(0)
    expect(Number(translatedY)).toBeLessThanOrEqual(420)
    expect(transform).not.toContain('10000')
  })
})
