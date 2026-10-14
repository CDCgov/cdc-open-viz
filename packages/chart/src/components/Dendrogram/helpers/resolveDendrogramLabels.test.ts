import type { DendrogramLayoutLink, DendrogramLayoutNode } from '../types'
import { layoutDendrogram } from './layoutDendrogram'
import { prepareDendrogramData } from './prepareDendrogramData'
import {
  estimateDendrogramLabelWidth,
  resolveDendrogramLabels,
  resolveDendrogramLabelsWithDiagnostics
} from './resolveDendrogramLabels'

const makeNode = (id: string, x: number, y: number, depth = 0): DendrogramLayoutNode => ({
  id,
  parentId: depth ? 'root' : null,
  label: id,
  style: 'solid',
  depth,
  x,
  y
})

const makeLink = (source: DendrogramLayoutNode, target: DendrogramLayoutNode): DendrogramLayoutLink => ({
  id: `${source.id}-${target.id}`,
  source,
  target,
  style: 'solid'
})

describe('resolveDendrogramLabels', () => {
  it('moves an internal horizontal label away from its outgoing connector', () => {
    const root = makeNode('A long root label', 20, 40)
    const child = makeNode('Child', 160, 40, 1)
    const placements = resolveDendrogramLabels([root, child], [makeLink(root, child)], {
      orientation: 'horizontal',
      connectionType: 'line',
      nodeRadius: 6
    })

    expect(placements.find(placement => placement.nodeId === root.id)?.anchor).toBe('top')
    expect(placements.find(placement => placement.nodeId === child.id)?.anchor).toBe('right')
  })

  it('moves an internal vertical label away from its outgoing connector', () => {
    const root = makeNode('A long root label', 40, 20)
    const child = makeNode('Child', 40, 160, 1)
    const placements = resolveDendrogramLabels([root, child], [makeLink(root, child)], {
      orientation: 'vertical',
      connectionType: 'curve',
      nodeRadius: 6
    })

    expect(placements.find(placement => placement.nodeId === root.id)?.anchor).toBe('right')
    expect(placements.find(placement => placement.nodeId === child.id)?.anchor).toBe('bottom')
  })

  it('avoids previously placed label bounds when another candidate is available', () => {
    const first = makeNode('Long first label', 40, 40)
    const second = makeNode('Long second label', 40, 50)
    const placements = resolveDendrogramLabels([first, second], [], {
      orientation: 'horizontal',
      connectionType: 'elbow',
      nodeRadius: 2
    })

    expect(placements[0].anchor).toBe('right')
    expect(placements[1].anchor).not.toBe('right')
  })

  it('uses stable orientation priority when every candidate conflicts', () => {
    const target = makeNode('Target', 100, 100)
    const blockers = [
      makeNode('top', 100, 75),
      makeNode('right', 145, 100),
      makeNode('bottom', 100, 125),
      makeNode('left', 55, 100)
    ]
    const options = {
      orientation: 'horizontal' as const,
      connectionType: 'line' as const,
      nodeRadius: 20,
      characterWidth: 7,
      labelHeight: 14,
      labelGap: 0
    }

    const first = resolveDendrogramLabels([target, ...blockers], [], options)
    const second = resolveDendrogramLabels([target, ...blockers], [], options)

    expect(second).toEqual(first)
    expect(first[0].anchor).toBe('right')
  })

  it('does not mutate layout input', () => {
    const root = makeNode('Root', 20, 20)
    const child = makeNode('Child', 160, 20, 1)
    const nodes = [root, child]
    const links = [makeLink(root, child)]
    const before = structuredClone({ nodes, links })

    resolveDendrogramLabels(nodes, links, {
      orientation: 'horizontal',
      connectionType: 'curve',
      nodeRadius: 6
    })

    expect({ nodes, links }).toEqual(before)
  })

  it('uses conservative deterministic estimates for wide and non-ASCII glyphs', () => {
    expect(estimateDendrogramLabelWidth('MMMM')).toBeGreaterThan(estimateDendrogramLabelWidth('iiii'))
    expect(estimateDendrogramLabelWidth('健康')).toBeGreaterThan(estimateDendrogramLabelWidth('ii'))
    expect(estimateDendrogramLabelWidth('健康')).toBeGreaterThanOrEqual(24)
    expect(estimateDendrogramLabelWidth('🙂')).toBeGreaterThanOrEqual(12)
    expect(estimateDendrogramLabelWidth('A🙂')).toBe(estimateDendrogramLabelWidth('A🙂'))
  })

  it('detects a curved connector crossing a candidate label box', () => {
    const labeled = makeNode('Crossing label', 90, 100)
    const source = makeNode('Source', 0, 0)
    const target = makeNode('Target', 200, 200, 1)
    const placements = resolveDendrogramLabels([labeled, source, target], [makeLink(source, target)], {
      orientation: 'horizontal',
      connectionType: 'curve',
      nodeRadius: 6
    })

    expect(placements[0].anchor).not.toBe('right')
  })

  it('spatially prefilters a large tree while preserving deterministic output', () => {
    const rowCount = 1023
    const prepared = prepareDendrogramData(
      Array.from({ length: rowCount }, (_, index) => ({
        id: `node-${index}`,
        parentId: index === 0 ? '' : `node-${Math.floor((index - 1) / 2)}`
      })),
      { node: 'id', parent: 'parentId' }
    )
    const layout = layoutDendrogram(prepared, {
      orientation: 'horizontal',
      leafSpacing: 20,
      depthSpacing: 100,
      nodeRadius: 4
    })
    const options = { orientation: 'horizontal' as const, connectionType: 'curve' as const, nodeRadius: 4 }
    const first = resolveDendrogramLabelsWithDiagnostics(layout.nodes, layout.links, options)
    const second = resolveDendrogramLabelsWithDiagnostics(layout.nodes, layout.links, options)
    const bruteForceChecks = layout.nodes.length * layout.nodes.length * 4

    expect(first.placements).toHaveLength(rowCount)
    expect(second).toEqual(first)
    expect(first.diagnostics.nodeChecks).toBeLessThan(bruteForceChecks / 20)
    expect(first.diagnostics.labelChecks).toBeLessThan(bruteForceChecks / 20)
    expect(first.diagnostics.linkChecks).toBeLessThan(bruteForceChecks / 4)
  })

  it('counts connector conflicts by link identity regardless of subdivision density', () => {
    const labeled = makeNode('Crossing label', 90, 100)
    const source = makeNode('Source', 0, 0)
    const target = makeNode('Target', 200, 200, 1)
    const nodes = [labeled, source, target]
    const links = [makeLink(source, target)]
    const baseOptions = {
      orientation: 'horizontal' as const,
      connectionType: 'curve' as const,
      nodeRadius: 6
    }
    const coarse = resolveDendrogramLabelsWithDiagnostics(nodes, links, { ...baseOptions, curveTolerance: 2 })
    const dense = resolveDendrogramLabelsWithDiagnostics(nodes, links, { ...baseOptions, curveTolerance: 0.01 })

    expect(dense.diagnostics.linkChecks).toBeGreaterThan(coarse.diagnostics.linkChecks)
    expect(dense.diagnostics.linkConflicts).toBe(coarse.diagnostics.linkConflicts)
    expect(dense.placements).toEqual(coarse.placements)
  })

  it('handles labels spanning far more cells than the spatial-grid cap', () => {
    const extremelyLongLabel = 'W'.repeat(100_000)
    const nodes = [makeNode(extremelyLongLabel, 20, 20), makeNode('Nearby', 20, 40)]
    const options = { orientation: 'horizontal' as const, connectionType: 'line' as const, nodeRadius: 4 }
    const first = resolveDendrogramLabelsWithDiagnostics(nodes, [], options)
    const second = resolveDendrogramLabelsWithDiagnostics(nodes, [], options)

    expect(first.placements).toHaveLength(2)
    expect(first.placements[0].bounds.width).toBe(1_200_000)
    expect(second).toEqual(first)
  })
})
