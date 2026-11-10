import type { NetworkLayoutLink, NetworkLayoutNode } from '../types'
import { estimateNetworkLabelWidth, resolveNetworkLabels } from './resolveNetworkLabels'

const makeNode = (id: string, x: number, y: number): NetworkLayoutNode => ({
  id,
  connectionCount: 1,
  x,
  y
})

const makeLink = (source: NetworkLayoutNode, target: NetworkLayoutNode, strokeWidth = 2): NetworkLayoutLink => ({
  id: `${source.id}-${target.id}`,
  source,
  target,
  weight: 1,
  rowCount: 1,
  style: 'solid',
  strokeWidth
})

describe('resolveNetworkLabels', () => {
  it('moves a label away from a straight connector', () => {
    const labeled = makeNode('A long label', 40, 40)
    const target = makeNode('Target', 160, 40)

    const placements = resolveNetworkLabels([labeled, target], [makeLink(labeled, target)], { nodeRadius: 6 })

    expect(placements[0].anchor).toBe('top')
  })

  it('avoids another node when a conflict-free candidate is available', () => {
    const labeled = makeNode('Long label', 40, 40)
    const blocker = makeNode('Blocker', 85, 40)

    const placements = resolveNetworkLabels([labeled, blocker], [], { nodeRadius: 15 })

    expect(placements[0].anchor).toBe('top')
  })

  it('avoids previously placed label bounds', () => {
    const first = makeNode('Long first label', 40, 40)
    const second = makeNode('Long second label', 40, 50)

    const placements = resolveNetworkLabels([first, second], [], { nodeRadius: 2 })

    expect(placements[0].anchor).toBe('right')
    expect(placements[1].anchor).not.toBe('right')
  })

  it('keeps labels inside the viewport when a clear in-bounds placement is available', () => {
    const labeled = makeNode('Long label', 100, 10)
    const source = makeNode('Source', 0, 10)
    const target = makeNode('Target', 160, 10)

    const [placement] = resolveNetworkLabels([labeled, source, target], [makeLink(source, target)], {
      nodeRadius: 6,
      width: 160,
      height: 100
    })

    expect(placement.anchor).toBe('bottom')
    expect(placement.bounds.y).toBeGreaterThanOrEqual(0)
    expect(placement.bounds.y + placement.bounds.height).toBeLessThanOrEqual(100)
    expect(placement.bounds.x).toBeGreaterThanOrEqual(0)
    expect(placement.bounds.x + placement.bounds.width).toBeLessThanOrEqual(160)
  })

  it('uses the lowest-conflict stable priority when every candidate is blocked', () => {
    const target = makeNode('Target', 100, 100)
    const blockers = [
      makeNode('top', 100, 70),
      makeNode('right', 145, 100),
      makeNode('bottom', 100, 130),
      makeNode('left', 55, 100)
    ]
    const options = { nodeRadius: 20, labelHeight: 16, labelGap: 0 }

    const first = resolveNetworkLabels([target, ...blockers], [], options)
    const second = resolveNetworkLabels([target, ...blockers], [], options)

    expect(second).toEqual(first)
    expect(first[0].anchor).toBe('right')
  })

  it('accounts for weighted connector stroke width', () => {
    const labeled = makeNode('Wide line', 50, 83)
    const source = makeNode('Source', 0, 100)
    const target = makeNode('Target', 200, 100)
    const thinPlacement = resolveNetworkLabels([labeled, source, target], [makeLink(source, target, 2)], {
      nodeRadius: 6
    })
    const weightedPlacement = resolveNetworkLabels([labeled, source, target], [makeLink(source, target, 16)], {
      nodeRadius: 6
    })

    expect(thinPlacement[0].anchor).toBe('right')
    expect(weightedPlacement[0].anchor).not.toBe('right')
  })

  it('uses conservative deterministic estimates for long and Unicode labels', () => {
    const longLabel = 'Network label '.repeat(40)

    expect(estimateNetworkLabelWidth('MMMM')).toBeGreaterThan(estimateNetworkLabelWidth('iiii'))
    expect(estimateNetworkLabelWidth('健康')).toBeGreaterThanOrEqual(24)
    expect(estimateNetworkLabelWidth('🙂')).toBeGreaterThanOrEqual(12)
    expect(estimateNetworkLabelWidth(longLabel)).toBe(estimateNetworkLabelWidth(longLabel))
    expect(resolveNetworkLabels([makeNode(longLabel, 20, 20)], [], { nodeRadius: 4 })[0].bounds.width).toBe(
      estimateNetworkLabelWidth(longLabel)
    )
  })

  it('does not mutate nodes, links, or options', () => {
    const source = makeNode('Source', 20, 20)
    const target = makeNode('Target', 160, 20)
    const nodes = [source, target]
    const links = [makeLink(source, target, 8)]
    const options = { nodeRadius: 6, labelHeight: 16, labelGap: 5 }
    const before = structuredClone({ nodes, links, options })

    resolveNetworkLabels(nodes, links, options)

    expect({ nodes, links, options }).toEqual(before)
  })

  it('reserves the rendered line box for the 16px label font', () => {
    const [placement] = resolveNetworkLabels([makeNode('Label', 20, 20)], [], { nodeRadius: 4 })

    expect(placement.bounds.height).toBe(18)
  })
})
