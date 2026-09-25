import { fireEvent, render, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CdcChart from '../CdcChartComponent'

vi.mock('@visx/responsive/lib/components/ParentSize', () => ({
  default: ({ children }) => children({ width: 640, height: 420 })
}))

vi.mock('react-tooltip', async () => {
  const React = await vi.importActual<typeof import('react')>('react')
  return { Tooltip: ({ className, variant }) => React.createElement('div', { className, 'data-variant': variant }) }
})

const config = {
  type: 'chart',
  visualizationType: 'Dendrogram',
  title: 'Program hierarchy',
  data: [
    { node: 'Root', parent: '', style: 'solid', nodeColor: '#005eaa' },
    { node: 'Program A', parent: 'Root', style: 'dashed', nodeColor: '#4b830d' },
    { node: 'Program B', parent: 'Root', style: 'solid', nodeColor: '' }
  ],
  enableTooltips: true,
  dendrogram: {
    columns: { node: 'node', parent: 'parent', style: 'style', nodeColor: 'nodeColor' },
    alignment: 'left',
    verticalAlignment: 'top',
    orientation: 'horizontal',
    height: 420,
    nodeRadius: 6,
    nodeColor: '#712177',
    linkColor: '#333333',
    showLabels: true,
    leafSpacing: 40,
    depthSpacing: 140
  },
  table: { show: false }
} as any

describe('CdcChart Dendrogram', () => {
  it('renders accessible styled nodes and links with light tooltips', async () => {
    const { container } = render(<CdcChart config={config} />)

    await waitFor(() => expect(container.querySelectorAll('.dendrogram-chart__node')).toHaveLength(3))
    expect(container.querySelectorAll('.dendrogram-chart__link')).toHaveLength(2)
    expect(container.querySelector('.dendrogram-chart__link--dashed')).toBeInTheDocument()
    expect(container.querySelector('[aria-label^="Program A"] circle')).toHaveAttribute('fill', '#4b830d')
    expect(container.querySelector('[aria-label^="Program B"] circle')).toHaveAttribute('fill', '#712177')
    expect(container.querySelector('.dendrogram-chart__tooltip')).toHaveAttribute('data-variant', 'light')
  })

  it('uses button-only ephemeral zoom and reset', async () => {
    const alignedConfig = {
      ...config,
      dendrogram: { ...config.dendrogram, alignment: 'right', verticalAlignment: 'bottom' }
    }
    const { container } = render(<CdcChart config={alignedConfig} />)
    const viewport = await waitFor(() => {
      const element = container.querySelector('.dendrogram-chart__viewport')
      expect(element).toBeInTheDocument()
      return element!
    })
    const initial = viewport.getAttribute('transform')

    fireEvent.wheel(container.querySelector('.dendrogram-chart')!, { deltaY: -100 })
    expect(viewport.getAttribute('transform')).toBe(initial)
    fireEvent.click(container.querySelector('[aria-label="Zoom in"]')!)
    expect(viewport.getAttribute('transform')).not.toBe(initial)
    fireEvent.click(container.querySelector('[aria-label="Reset view"]')!)
    expect(viewport.getAttribute('transform')).toBe(initial)
  })

  it.each(['horizontal', 'vertical'] as const)(
    'aligns complete %s content bounds left, center, and right',
    async orientation => {
      const withAlignment = alignment => ({
        ...config,
        dendrogram: { ...config.dendrogram, orientation, alignment }
      })
      const getTranslateX = container => {
        const transform = container.querySelector('.dendrogram-chart__viewport')?.getAttribute('transform') || ''
        return Number(transform.match(/^translate\(([^ ]+)/)?.[1])
      }
      const leftChart = render(<CdcChart config={withAlignment('left')} />)
      const centerChart = render(<CdcChart config={withAlignment('center')} />)
      const rightChart = render(<CdcChart config={withAlignment('right')} />)

      await waitFor(() => {
        const left = getTranslateX(leftChart.container)
        const center = getTranslateX(centerChart.container)
        const right = getTranslateX(rightChart.container)

        expect(center).toBeGreaterThan(left)
        expect(right).toBeGreaterThan(center)
      })
    }
  )

  it.each(['horizontal', 'vertical'] as const)(
    'aligns complete %s content bounds top, center, and bottom',
    async orientation => {
      const withAlignment = verticalAlignment => ({
        ...config,
        dendrogram: { ...config.dendrogram, orientation, verticalAlignment }
      })
      const getTranslateY = container => {
        const transform = container.querySelector('.dendrogram-chart__viewport')?.getAttribute('transform') || ''
        return Number(transform.match(/^translate\([^ ]+ ([^)]+)/)?.[1])
      }
      const topChart = render(<CdcChart config={withAlignment('top')} />)
      const centerChart = render(<CdcChart config={withAlignment('center')} />)
      const bottomChart = render(<CdcChart config={withAlignment('bottom')} />)

      await waitFor(() => {
        const top = getTranslateY(topChart.container)
        const center = getTranslateY(centerChart.container)
        const bottom = getTranslateY(bottomChart.container)

        expect(center).toBeGreaterThan(top)
        expect(bottom).toBeGreaterThan(center)
      })
    }
  )

  it('shows actionable hierarchy validation errors', async () => {
    const invalid = { ...config, data: [{ node: 'A', parent: 'Missing' }] }
    const { container } = render(<CdcChart config={invalid} />)

    await waitFor(() => expect(container).toHaveTextContent('references missing parent'))
  })

  it('prompts for stale required mappings and reports duplicate rejections', async () => {
    const stale = {
      ...config,
      dendrogram: { ...config.dendrogram, columns: { ...config.dendrogram.columns, node: 'missing' } }
    }
    const { container, rerender } = render(<CdcChart config={stale} />)
    await waitFor(() => expect(container).toHaveTextContent('columns that exist in the imported data'))

    rerender(
      <CdcChart
        config={{
          ...config,
          data: [
            { node: 'Root', parent: '' },
            { node: 'Root', parent: '' }
          ]
        }}
      />
    )
    await waitFor(() => expect(container).toHaveTextContent('appears more than once'))
    expect(container).toHaveTextContent('1 row(s) were rejected')
  })
})
