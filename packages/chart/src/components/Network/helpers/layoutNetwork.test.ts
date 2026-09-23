import { layoutNetwork } from './layoutNetwork'
import { prepareNetworkData } from './prepareNetworkData'

describe('layoutNetwork', () => {
  const prepared = prepareNetworkData(
    [
      { source: 'A', target: 'B', weight: 1 },
      { source: 'B', target: 'C', weight: 5 },
      { source: 'C', target: 'A', weight: 10 }
    ],
    { source: 'source', target: 'target', weight: 'weight' }
  )
  const options = { width: 480, height: 320, nodeRadius: 8, linkDistance: 80, chargeStrength: -200, showLabels: true }

  it('produces stable coordinates within responsive bounds', () => {
    const first = layoutNetwork(prepared, options)
    const second = layoutNetwork(prepared, options)

    expect(second).toEqual(first)
    first.nodes.forEach(node => {
      expect(node.x).toBeGreaterThanOrEqual(80)
      expect(node.x).toBeLessThanOrEqual(400)
      expect(node.y).toBeGreaterThanOrEqual(20)
      expect(node.y).toBeLessThanOrEqual(300)
    })
  })

  it('scales weighted link widths within fixed bounds', () => {
    const result = layoutNetwork(prepared, options)
    expect(Math.min(...result.links.map(link => link.strokeWidth))).toBeGreaterThanOrEqual(1.5)
    expect(Math.max(...result.links.map(link => link.strokeWidth))).toBeLessThanOrEqual(8)
  })

  it('clamps authored layout values at their supported minimums while allowing zero charge', () => {
    const result = layoutNetwork(prepared, {
      ...options,
      nodeRadius: 0,
      linkDistance: 0,
      chargeStrength: 0,
      showLabels: false
    })

    result.nodes.forEach(node => {
      expect(node.x).toBeGreaterThanOrEqual(10)
      expect(node.x).toBeLessThanOrEqual(470)
    })
    expect(result.links).toHaveLength(3)
  })

  it('keeps nodes in bounds when the authored radius exceeds the viewport', () => {
    const result = layoutNetwork(prepared, { ...options, width: 160, height: 160, nodeRadius: 500 })

    result.nodes.forEach(node => {
      expect(node.x).toBeGreaterThanOrEqual(80)
      expect(node.x).toBeLessThanOrEqual(80)
      expect(node.y).toBeGreaterThanOrEqual(20)
      expect(node.y).toBeLessThanOrEqual(140)
    })
  })
})
