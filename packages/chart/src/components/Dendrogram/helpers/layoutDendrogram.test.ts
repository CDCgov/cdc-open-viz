import { layoutDendrogram } from './layoutDendrogram'
import { prepareDendrogramData } from './prepareDendrogramData'

describe('layoutDendrogram', () => {
  const prepared = prepareDendrogramData(
    [
      { id: 'root', parentId: '' },
      { id: 'branch-b', parentId: 'root' },
      { id: 'branch-a', parentId: 'root' },
      { id: 'leaf', parentId: 'branch-a', linkStyle: 'dashed' }
    ],
    { node: 'id', parent: 'parentId', style: 'linkStyle' }
  )
  const options = { orientation: 'horizontal' as const, leafSpacing: 50, depthSpacing: 100, nodeRadius: 6 }

  it('produces stable deterministic coordinates and one link per non-root node', () => {
    const first = layoutDendrogram(prepared, options)
    const second = layoutDendrogram(prepared, options)

    expect(second).toEqual(first)
    expect(first.nodes).toHaveLength(4)
    expect(first.links).toHaveLength(3)
    expect(first.nodes.find(node => node.id === 'root')?.depth).toBe(0)
    expect(first.nodes.find(node => node.id === 'leaf')?.depth).toBe(2)
    expect(first.links.find(link => link.target.id === 'leaf')?.style).toBe('dashed')
  })

  it('uses depth on the x-axis horizontally and on the y-axis vertically', () => {
    const horizontal = layoutDendrogram(prepared, options)
    const vertical = layoutDendrogram(prepared, { ...options, orientation: 'vertical' })
    const horizontalRoot = horizontal.nodes.find(node => node.id === 'root')!
    const horizontalLeaf = horizontal.nodes.find(node => node.id === 'leaf')!
    const verticalRoot = vertical.nodes.find(node => node.id === 'root')!
    const verticalLeaf = vertical.nodes.find(node => node.id === 'leaf')!

    expect(horizontalLeaf.x - horizontalRoot.x).toBe(200)
    expect(verticalLeaf.y - verticalRoot.y).toBe(200)
    expect(verticalLeaf.x).toBe(horizontalLeaf.y)
    expect(verticalLeaf.y).toBe(horizontalLeaf.x)
  })

  it('honors leaf and depth spacing while clamping unsafe values', () => {
    const regular = layoutDendrogram(prepared, options)
    const expanded = layoutDendrogram(prepared, { ...options, leafSpacing: 80, depthSpacing: 140 })
    const clamped = layoutDendrogram(prepared, { ...options, leafSpacing: 0, depthSpacing: 0, nodeRadius: 0 })

    expect(Math.max(...expanded.nodes.map(node => node.x))).toBeGreaterThan(
      Math.max(...regular.nodes.map(node => node.x))
    )
    expect(Math.max(...expanded.nodes.map(node => node.y))).toBeGreaterThan(
      Math.max(...regular.nodes.map(node => node.y))
    )
    expect(Math.min(...clamped.nodes.map(node => node.x))).toBeGreaterThanOrEqual(14)
    expect(Math.min(...clamped.nodes.map(node => node.y))).toBeGreaterThanOrEqual(14)
  })

  it('handles a one-node hierarchy and returns no layout for invalid input', () => {
    const oneNode = prepareDendrogramData([{ id: 'root', parentId: '' }], { node: 'id', parent: 'parentId' })
    const invalid = prepareDendrogramData(
      [
        { id: 'root', parentId: '' },
        { id: 'child', parentId: 'missing' }
      ],
      { node: 'id', parent: 'parentId' }
    )

    expect(layoutDendrogram(oneNode, options)).toEqual({
      nodes: [expect.objectContaining({ id: 'root', x: 18, y: 18 })],
      links: []
    })
    expect(layoutDendrogram(invalid, options)).toEqual({ nodes: [], links: [] })
  })

  it('does not mutate prepared hierarchy data', () => {
    const before = structuredClone(prepared)
    layoutDendrogram(prepared, options)
    expect(prepared).toEqual(before)
  })

  it('preserves authored sibling order and safely lays out wide hierarchies', () => {
    const ordered = layoutDendrogram(prepared, options)
    expect(ordered.nodes.find(node => node.id === 'branch-b')!.y).toBeLessThan(
      ordered.nodes.find(node => node.id === 'branch-a')!.y
    )

    const wide = prepareDendrogramData(
      [
        { id: 'root', parentId: '' },
        ...Array.from({ length: 10000 }, (_, i) => ({ id: `leaf-${i}`, parentId: 'root' }))
      ],
      { node: 'id', parent: 'parentId' }
    )
    expect(() => layoutDendrogram(wide, { ...options, leafSpacing: Number.MAX_VALUE })).not.toThrow()
  })
})
