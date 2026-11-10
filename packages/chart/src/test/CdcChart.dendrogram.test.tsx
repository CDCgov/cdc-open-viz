import { fireEvent, render, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CdcChart from '../CdcChartComponent'
import { layoutDendrogram } from '../components/Dendrogram/helpers/layoutDendrogram'
import { prepareDendrogramData } from '../components/Dendrogram/helpers/prepareDendrogramData'
import { resolveDendrogramLabels } from '../components/Dendrogram/helpers/resolveDendrogramLabels'

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
    orientation: 'horizontal',
    height: 420,
    nodeRadius: 6,
    nodeColor: '#712177',
    linkColor: '#333333',
    leafSpacing: 40,
    depthSpacing: 140
  },
  table: { show: false }
} as any

const expectCompleteBoundsCentered = (container: HTMLElement, orientation: 'horizontal' | 'vertical') => {
  const prepared = prepareDendrogramData(config.data, config.dendrogram.columns)
  const layout = layoutDendrogram(prepared, {
    orientation,
    leafSpacing: config.dendrogram.leafSpacing,
    depthSpacing: config.dendrogram.depthSpacing,
    nodeRadius: config.dendrogram.nodeRadius
  })
  const labels = resolveDendrogramLabels(layout.nodes, layout.links, {
    orientation,
    connectionType: 'curve',
    nodeRadius: config.dendrogram.nodeRadius
  })
  const completeBounds = {
    minX: Math.min(
      ...layout.nodes.map(node => node.x - config.dendrogram.nodeRadius),
      ...labels.map(label => label.bounds.x)
    ),
    maxX: Math.max(
      ...layout.nodes.map(node => node.x + config.dendrogram.nodeRadius),
      ...labels.map(label => label.bounds.x + label.bounds.width)
    ),
    minY: Math.min(
      ...layout.nodes.map(node => node.y - config.dendrogram.nodeRadius),
      ...labels.map(label => label.bounds.y)
    ),
    maxY: Math.max(
      ...layout.nodes.map(node => node.y + config.dendrogram.nodeRadius),
      ...labels.map(label => label.bounds.y + label.bounds.height)
    )
  }
  const svg = container.querySelector('.dendrogram-chart')!
  const [, , width, height] = svg.getAttribute('viewBox')!.split(' ').map(Number)
  const transform = container.querySelector('.dendrogram-chart__viewport')!.getAttribute('transform')!
  const translation = transform.match(/^translate\(([-\d.]+) ([-\d.]+)\)/)!
  const offsetX = Number(translation[1]) - width / 2
  const offsetY = Number(translation[2]) - height / 2

  expect((completeBounds.minX + completeBounds.maxX) / 2 + offsetX).toBeCloseTo(width / 2)
  expect((completeBounds.minY + completeBounds.maxY) / 2 + offsetY).toBeCloseTo(height / 2)
}

describe('CdcChart Dendrogram', () => {
  it('renders accessible styled nodes and links with light tooltips', async () => {
    const { container } = render(<CdcChart config={config} />)

    await waitFor(() => expect(container.querySelectorAll('.dendrogram-chart__node')).toHaveLength(3))
    expect(container.querySelectorAll('.dendrogram-chart__viewport .dendrogram-chart__link')).toHaveLength(2)
    expect(container.querySelector('.dendrogram-chart__viewport .dendrogram-chart__link--dashed')).toBeInTheDocument()
    expect(container.querySelector('[aria-label^="Program A"] circle')).toHaveAttribute('fill', '#4b830d')
    expect(container.querySelector('[aria-label^="Program B"] circle')).toHaveAttribute('fill', '#712177')
    expect(container.querySelector('.dendrogram-chart__tooltip')).toHaveAttribute('data-variant', 'light')
    const linkKey = container.querySelector('[aria-label="Link styles"]')!
    expect(container.querySelector('.dendrogram-chart__container')).toHaveStyle({ height: '420px' })
    expect(container.querySelector('.dendrogram-chart__plot')).not.toContainElement(linkKey)
    expect(container.querySelector('.dendrogram-chart')).toHaveAttribute('viewBox', '0 0 640 388')
    expect(linkKey).toHaveTextContent('Solid')
    expect(linkKey).toHaveTextContent('Dashed')
    expect(linkKey.querySelectorAll('line')).toHaveLength(2)
    expect(linkKey.querySelectorAll('line')[0]).toHaveClass('dendrogram-chart__link')
    expect(linkKey.querySelectorAll('line')[0]).not.toHaveClass('dendrogram-chart__link--dashed')
    expect(linkKey.querySelectorAll('line')[1]).toHaveClass('dendrogram-chart__link', 'dendrogram-chart__link--dashed')
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
    'centers complete resolved %s bounds initially and after Reset',
    async orientation => {
      const { container } = render(
        <CdcChart config={{ ...config, dendrogram: { ...config.dendrogram, orientation } }} />
      )
      await waitFor(() => expect(container.querySelector('.dendrogram-chart__viewport')).toBeInTheDocument())

      expectCompleteBoundsCentered(container, orientation)
      fireEvent.click(container.querySelector('[aria-label="Zoom in"]')!)
      fireEvent.click(container.querySelector('[aria-label="Reset view"]')!)
      expectCompleteBoundsCentered(container, orientation)
    }
  )

  it('ignores legacy alignment and label visibility fields', async () => {
    const defaultChart = render(<CdcChart config={config} />)
    const legacyChart = render(
      <CdcChart
        config={{
          ...config,
          dendrogram: {
            ...config.dendrogram,
            alignment: 'right',
            verticalAlignment: 'bottom',
            showLabels: false
          }
        }}
      />
    )

    await waitFor(() => {
      const defaultTransform = defaultChart.container
        .querySelector('.dendrogram-chart__viewport')
        ?.getAttribute('transform')
      const legacyTransform = legacyChart.container
        .querySelector('.dendrogram-chart__viewport')
        ?.getAttribute('transform')

      expect(defaultTransform).toBeTruthy()
      expect(defaultTransform).toBe(legacyTransform)
      expect(legacyChart.container.querySelectorAll('.dendrogram-chart__label')).toHaveLength(config.data.length)
    })
  })

  it.each([
    ['curve', 'C', 0],
    ['line', 'L', 1],
    ['elbow', 'L', 3]
  ] as const)('renders %s parent-child connections', async (connectionType, command, commandCount) => {
    const { container } = render(
      <CdcChart config={{ ...config, dendrogram: { ...config.dendrogram, connectionType } }} />
    )

    await waitFor(() => {
      const path =
        container.querySelector('.dendrogram-chart__viewport .dendrogram-chart__link')?.getAttribute('d') || ''
      expect(path).toContain(command)
      if (command === 'L') expect(path.split('L')).toHaveLength(commandCount + 1)
    })
  })

  it('omits the link-style key when no style column is mapped', async () => {
    const { container } = render(
      <CdcChart
        config={{
          ...config,
          dendrogram: { ...config.dendrogram, columns: { ...config.dendrogram.columns, style: '' } }
        }}
      />
    )

    await waitFor(() => expect(container.querySelector('.dendrogram-chart')).toBeInTheDocument())
    expect(container.querySelector('[aria-label="Link styles"]')).not.toBeInTheDocument()
  })

  it('uses trimmed custom link captions and falls back for blank values', async () => {
    const { container } = render(
      <CdcChart
        config={{
          ...config,
          dendrogram: {
            ...config.dendrogram,
            linkStyleLabels: { solid: ' Established ', dashed: '   ' }
          }
        }}
      />
    )

    await waitFor(() => expect(container.querySelector('[aria-label="Link styles"]')).toBeInTheDocument())
    expect(container.querySelector('[aria-label="Link styles"]')).toHaveTextContent('Established')
    expect(container.querySelector('[aria-label="Link styles"]')).toHaveTextContent('Dashed')

    const fallbackChart = render(
      <CdcChart
        config={{
          ...config,
          dendrogram: { ...config.dendrogram, linkStyleLabels: { dashed: 'Provisional' } }
        }}
      />
    )
    await waitFor(() => {
      expect(fallbackChart.container.querySelector('[aria-label="Link styles"]')).toHaveTextContent('Solid')
      expect(fallbackChart.container.querySelector('[aria-label="Link styles"]')).toHaveTextContent('Provisional')
    })

    const malformedChart = render(
      <CdcChart
        config={{
          ...config,
          dendrogram: {
            ...config.dendrogram,
            linkStyleLabels: { solid: 42, dashed: null }
          }
        }}
      />
    )
    await waitFor(() => {
      expect(malformedChart.container.querySelector('[aria-label="Link styles"]')).toHaveTextContent('Solid')
      expect(malformedChart.container.querySelector('[aria-label="Link styles"]')).toHaveTextContent('Dashed')
    })
  })

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
