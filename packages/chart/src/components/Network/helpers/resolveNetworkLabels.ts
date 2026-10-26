import type { NetworkLayoutLink, NetworkLayoutNode } from '../types'

export type NetworkLabelAnchor = 'top' | 'right' | 'bottom' | 'left'

export type NetworkLabelBounds = {
  x: number
  y: number
  width: number
  height: number
}

export type NetworkLabelPlacement = {
  nodeId: string
  anchor: NetworkLabelAnchor
  x: number
  y: number
  textAnchor: 'start' | 'middle' | 'end'
  dominantBaseline: 'hanging'
  bounds: NetworkLabelBounds
}

type ResolveOptions = {
  nodeRadius: number
  width?: number
  height?: number
  labelHeight?: number
  labelGap?: number
}

type Point = { x: number; y: number }

// A 16px SVG font has an approximately 18px rendered line box in supported browsers.
const LABEL_HEIGHT = 18
const LABEL_GAP = 5
const LINK_CLEARANCE = 1

const boundsMayIntersect = (a: NetworkLabelBounds, b: NetworkLabelBounds) =>
  a.x <= b.x + b.width && a.x + a.width >= b.x && a.y <= b.y + b.height && a.y + a.height >= b.y

const boundsIntersect = (a: NetworkLabelBounds, b: NetworkLabelBounds) =>
  a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y

const expandBounds = (bounds: NetworkLabelBounds, amount: number): NetworkLabelBounds => ({
  x: bounds.x - amount,
  y: bounds.y - amount,
  width: bounds.width + amount * 2,
  height: bounds.height + amount * 2
})

const getSegmentBounds = (start: Point, end: Point, padding: number): NetworkLabelBounds =>
  expandBounds(
    {
      x: Math.min(start.x, end.x),
      y: Math.min(start.y, end.y),
      width: Math.abs(end.x - start.x),
      height: Math.abs(end.y - start.y)
    },
    padding
  )

const pointInBounds = (point: Point, bounds: NetworkLabelBounds) =>
  point.x >= bounds.x &&
  point.x <= bounds.x + bounds.width &&
  point.y >= bounds.y &&
  point.y <= bounds.y + bounds.height

const segmentIntersectsBounds = (start: Point, end: Point, bounds: NetworkLabelBounds) => {
  if (!boundsMayIntersect(getSegmentBounds(start, end, 0), bounds)) return false
  if (pointInBounds(start, bounds) || pointInBounds(end, bounds)) return true

  const dx = end.x - start.x
  const dy = end.y - start.y
  const p = [-dx, dx, -dy, dy]
  const q = [
    start.x - bounds.x,
    bounds.x + bounds.width - start.x,
    start.y - bounds.y,
    bounds.y + bounds.height - start.y
  ]
  let minimum = 0
  let maximum = 1

  for (let index = 0; index < p.length; index += 1) {
    if (p[index] === 0) {
      if (q[index] < 0) return false
      continue
    }
    const ratio = q[index] / p[index]
    if (p[index] < 0) minimum = Math.max(minimum, ratio)
    else maximum = Math.min(maximum, ratio)
    if (minimum > maximum) return false
  }

  return true
}

export const estimateNetworkLabelWidth = (label: string) =>
  Math.max(
    1,
    Array.from(label).reduce((width, character) => {
      if (/\s/.test(character)) return width + 5.5
      if (/[ilI1.,'|!:;]/.test(character)) return width + 4.75
      if (/[MW@#%&]/.test(character)) return width + 16
      return width + (character.codePointAt(0)! > 0x7f ? 16 : 10)
    }, 0)
  )

const getCandidates = (
  node: NetworkLayoutNode,
  width: number,
  height: number,
  nodeRadius: number,
  gap: number
): NetworkLabelPlacement[] => {
  const definitions: Record<
    NetworkLabelAnchor,
    Omit<NetworkLabelPlacement, 'nodeId' | 'anchor' | 'dominantBaseline'>
  > = {
    right: {
      x: nodeRadius + gap,
      y: -height / 2,
      textAnchor: 'start',
      bounds: { x: node.x + nodeRadius + gap, y: node.y - height / 2, width, height }
    },
    top: {
      x: 0,
      y: -nodeRadius - gap - height,
      textAnchor: 'middle',
      bounds: { x: node.x - width / 2, y: node.y - nodeRadius - gap - height, width, height }
    },
    bottom: {
      x: 0,
      y: nodeRadius + gap,
      textAnchor: 'middle',
      bounds: { x: node.x - width / 2, y: node.y + nodeRadius + gap, width, height }
    },
    left: {
      x: -nodeRadius - gap,
      y: -height / 2,
      textAnchor: 'end',
      bounds: { x: node.x - nodeRadius - gap - width, y: node.y - height / 2, width, height }
    }
  }

  return (['right', 'top', 'bottom', 'left'] as const).map(anchor => ({
    nodeId: node.id,
    anchor,
    dominantBaseline: 'hanging',
    ...definitions[anchor]
  }))
}

export const resolveNetworkLabels = (
  nodes: NetworkLayoutNode[],
  links: NetworkLayoutLink[],
  options: ResolveOptions
): NetworkLabelPlacement[] => {
  const nodeRadius = Math.max(2, Number.isFinite(options.nodeRadius) ? options.nodeRadius : 2)
  const width = Number.isFinite(options.width) ? options.width : undefined
  const height = Number.isFinite(options.height) ? options.height : undefined
  const labelHeight = Math.max(1, Number.isFinite(options.labelHeight) ? options.labelHeight! : LABEL_HEIGHT)
  const labelGap = Math.max(0, Number.isFinite(options.labelGap) ? options.labelGap! : LABEL_GAP)
  const nodeObstacles = nodes.map(node => ({
    nodeId: node.id,
    bounds: {
      x: node.x - nodeRadius,
      y: node.y - nodeRadius,
      width: nodeRadius * 2,
      height: nodeRadius * 2
    }
  }))
  const linkObstacles = links.map(link => {
    const padding = Math.max(0, Number.isFinite(link.strokeWidth) ? link.strokeWidth / 2 : 0) + LINK_CLEARANCE
    return {
      start: { x: link.source.x, y: link.source.y },
      end: { x: link.target.x, y: link.target.y },
      padding,
      bounds: getSegmentBounds(link.source, link.target, padding)
    }
  })
  const placements: NetworkLabelPlacement[] = []

  nodes.forEach(node => {
    const candidates = getCandidates(node, estimateNetworkLabelWidth(node.id), labelHeight, nodeRadius, labelGap)
    let bestCandidate = candidates[0]
    let bestScore = Infinity

    candidates.forEach((candidate, priority) => {
      const nodeConflicts = nodeObstacles.filter(
        obstacle => obstacle.nodeId !== node.id && boundsIntersect(candidate.bounds, obstacle.bounds)
      ).length
      const labelConflicts = placements.filter(placement => boundsIntersect(candidate.bounds, placement.bounds)).length
      const linkConflicts = linkObstacles.filter(
        link =>
          boundsMayIntersect(candidate.bounds, link.bounds) &&
          segmentIntersectsBounds(link.start, link.end, expandBounds(candidate.bounds, link.padding))
      ).length
      const outsideViewport =
        width !== undefined &&
        height !== undefined &&
        (candidate.bounds.x < 0 ||
          candidate.bounds.y < 0 ||
          candidate.bounds.x + candidate.bounds.width > width ||
          candidate.bounds.y + candidate.bounds.height > height)
      const score =
        (outsideViewport ? 1_000_000_000 : 0) +
        nodeConflicts * 10000 +
        labelConflicts * 10000 +
        linkConflicts * 100 +
        priority

      if (score < bestScore) {
        bestCandidate = candidate
        bestScore = score
      }
    })

    placements.push(bestCandidate)
  })

  return placements
}
