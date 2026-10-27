import { prepareNetworkData } from './prepareNetworkData'

describe('prepareNetworkData', () => {
  it('aggregates duplicates and reverse pairs for an undirected network', () => {
    const result = prepareNetworkData(
      [
        { from: 'A', to: 'B', amount: '1,200' },
        { from: 'B', to: 'A', amount: 300 }
      ],
      { source: 'from', target: 'to', weight: 'amount' }
    )

    expect(result.links).toEqual([expect.objectContaining({ source: 'A', target: 'B', weight: 1500, rowCount: 2 })])
    expect(result.nodes).toEqual([
      { id: 'A', connectionCount: 1 },
      { id: 'B', connectionCount: 1 }
    ])
  })

  it('keeps reverse pairs distinct for a directed network', () => {
    const result = prepareNetworkData(
      [
        { source: 'A', target: 'B' },
        { source: 'B', target: 'A' }
      ],
      { source: 'source', target: 'target' },
      true
    )

    expect(result.links).toHaveLength(2)
  })

  it('maps per-row link styles and lets dashed win when duplicate links aggregate', () => {
    const result = prepareNetworkData(
      [
        { source: 'A', target: 'B', style: 'solid' },
        { source: 'B', target: 'A', style: 'DASHED' },
        { source: 'B', target: 'C', style: 'unknown' }
      ],
      { source: 'source', target: 'target', style: 'style' }
    )

    expect(result.links).toEqual([
      expect.objectContaining({ source: 'A', target: 'B', style: 'dashed', weight: 2, rowCount: 2 }),
      expect.objectContaining({ source: 'B', target: 'C', style: 'solid' })
    ])
  })

  it('maps source-node colors and keeps the first valid color assigned to a node', () => {
    const result = prepareNetworkData(
      [
        { source: 'A', target: 'B', nodeColor: '#005eaa' },
        { source: 'B', target: 'C', nodeColor: '#4b830d' },
        { source: 'B', target: 'D', nodeColor: '#712177' },
        { source: 'C', target: 'D', nodeColor: 'not-a-color' }
      ],
      {
        source: 'source',
        target: 'target',
        nodeColor: 'nodeColor'
      }
    )

    expect(result.nodes).toEqual([
      { id: 'A', connectionCount: 1, color: '#005eaa' },
      { id: 'B', connectionCount: 3, color: '#4b830d' },
      { id: 'C', connectionCount: 2 },
      { id: 'D', connectionCount: 2 }
    ])
  })

  it('rejects blank endpoints, self-links, and invalid selected weights', () => {
    const result = prepareNetworkData(
      [
        { source: '', target: 'B', weight: 1 },
        { source: 'A', target: 'A', weight: 1 },
        { source: 'A', target: 'B', weight: 0 },
        { source: 'B', target: 'C', weight: 2 }
      ],
      { source: 'source', target: 'target', weight: 'weight' }
    )

    expect(result.rejectedRowCount).toBe(3)
    expect(result.links).toHaveLength(1)
  })

  it('counts malformed rows and rejects non-scalar endpoints and malformed comma weights', () => {
    const result = prepareNetworkData(
      [
        null,
        'not-a-row',
        ['A', 'B'],
        { source: { id: 'A' }, target: 'B', weight: 1 },
        { source: 'A', target: 'B', weight: '12,34' },
        { source: 'A', target: 'B', weight: '1,234.5' }
      ],
      { source: 'source', target: 'target', weight: 'weight' }
    )

    expect(result.rejectedRowCount).toBe(5)
    expect(result.links).toEqual([expect.objectContaining({ source: 'A', target: 'B', weight: 1234.5 })])
  })

  it('keeps endpoint pairs distinct when labels contain delimiter characters', () => {
    const result = prepareNetworkData(
      [
        { source: 'A\u0000B', target: 'C' },
        { source: 'A', target: 'B\u0000C' }
      ],
      { source: 'source', target: 'target' },
      true
    )

    expect(result.links).toHaveLength(2)
  })
})
