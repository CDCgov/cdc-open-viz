import type { DendrogramLayoutLink, DendrogramLayoutNode, DendrogramOrientation } from '../types'

export type DendrogramLabelAnchor = 'top' | 'right' | 'bottom' | 'left'

export type DendrogramLabelBounds = {
  x: number
  y: number
  width: number
  height: number
}

export type DendrogramLabelPlacement = {
  nodeId: string
  anchor: DendrogramLabelAnchor
  x: number
  y: number
  textAnchor: 'start' | 'middle' | 'end'
  dominantBaseline: 'hanging'
  bounds: DendrogramLabelBounds
}

export type DendrogramLabelResolutionDiagnostics = {
  nodeChecks: number
  linkChecks: number
  linkConflicts: number
  labelChecks: number
}

type ResolveOptions = {
  orientation: DendrogramOrientation
  connectionType: 'curve' | 'line' | 'elbow'
  nodeRadius: number
  labelHeight?: number
  labelGap?: number
  curveTolerance?: number
}

type Point = { x: number; y: number }
type Segment = { linkId: string; start: Point; end: Point; bounds: DendrogramLabelBounds }
type NodeObstacle = { nodeId: string; bounds: DendrogramLabelBounds }
type Bounded = { bounds: DendrogramLabelBounds }

type BoundsTree<T extends Bounded> = {
  bounds: DendrogramLabelBounds
  items?: T[]
  left?: BoundsTree<T>
  right?: BoundsTree<T>
}

const INDEX_LEAF_SIZE = 8
const LABEL_GRID_SIZE = 64
const CURVE_TOLERANCE = 0.5
const MAX_CURVE_DEPTH = 12
const MAX_GRID_CELLS_PER_ITEM = 256

const getBounds = (start: Point, end: Point): DendrogramLabelBounds => ({
  x: Math.min(start.x, end.x),
  y: Math.min(start.y, end.y),
  width: Math.abs(end.x - start.x),
  height: Math.abs(end.y - start.y)
})

const combineBounds = <T extends Bounded>(items: T[]): DendrogramLabelBounds => {
  const first = items[0].bounds
  return items.slice(1).reduce(
    (result, item) => ({
      x: Math.min(result.x, item.bounds.x),
      y: Math.min(result.y, item.bounds.y),
      width: Math.max(result.x + result.width, item.bounds.x + item.bounds.width) - Math.min(result.x, item.bounds.x),
      height: Math.max(result.y + result.height, item.bounds.y + item.bounds.height) - Math.min(result.y, item.bounds.y)
    }),
    { ...first }
  )
}

const boundsMayIntersect = (a: DendrogramLabelBounds, b: DendrogramLabelBounds) =>
  a.x <= b.x + b.width && a.x + a.width >= b.x && a.y <= b.y + b.height && a.y + a.height >= b.y

const boundsIntersect = (a: DendrogramLabelBounds, b: DendrogramLabelBounds) =>
  a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y

const expandBounds = (bounds: DendrogramLabelBounds, amount: number): DendrogramLabelBounds => ({
  x: bounds.x - amount,
  y: bounds.y - amount,
  width: bounds.width + amount * 2,
  height: bounds.height + amount * 2
})

const buildBoundsTree = <T extends Bounded>(items: T[]): BoundsTree<T> | undefined => {
  if (!items.length) return undefined
  const bounds = combineBounds(items)
  if (items.length <= INDEX_LEAF_SIZE) return { bounds, items }

  const axis = bounds.width >= bounds.height ? 'x' : 'y'
  const sorted = [...items].sort((a, b) => {
    const aCenter = a.bounds[axis] + a.bounds[axis === 'x' ? 'width' : 'height'] / 2
    const bCenter = b.bounds[axis] + b.bounds[axis === 'x' ? 'width' : 'height'] / 2
    return aCenter - bCenter
  })
  const midpoint = Math.floor(sorted.length / 2)
  return {
    bounds,
    left: buildBoundsTree(sorted.slice(0, midpoint)),
    right: buildBoundsTree(sorted.slice(midpoint))
  }
}

const queryBoundsTree = <T extends Bounded>(tree: BoundsTree<T> | undefined, bounds: DendrogramLabelBounds): T[] => {
  if (!tree || !boundsMayIntersect(tree.bounds, bounds)) return []
  if (tree.items) return tree.items.filter(item => boundsMayIntersect(item.bounds, bounds))
  return [...queryBoundsTree(tree.left, bounds), ...queryBoundsTree(tree.right, bounds)]
}

class BoundsGrid<T extends Bounded> {
  private cells = new Map<string, T[]>()
  private globalItems: T[] = []
  private items: T[] = []

  add(item: T) {
    this.items.push(item)
    const range = this.getCellRange(item.bounds)
    if (range.cellCount > MAX_GRID_CELLS_PER_ITEM) {
      this.globalItems.push(item)
      return
    }
    this.getCellKeys(range).forEach(key => {
      const cell = this.cells.get(key)
      if (cell) cell.push(item)
      else this.cells.set(key, [item])
    })
  }

  query(bounds: DendrogramLabelBounds) {
    const range = this.getCellRange(bounds)
    if (range.cellCount > MAX_GRID_CELLS_PER_ITEM) {
      return this.items.filter(item => boundsMayIntersect(item.bounds, bounds))
    }
    const found = new Set<T>()
    this.globalItems.forEach(item => found.add(item))
    this.getCellKeys(range).forEach(key => this.cells.get(key)?.forEach(item => found.add(item)))
    return [...found].filter(item => boundsMayIntersect(item.bounds, bounds))
  }

  private getCellRange(bounds: DendrogramLabelBounds) {
    const minimumX = Math.floor(bounds.x / LABEL_GRID_SIZE)
    const maximumX = Math.floor((bounds.x + bounds.width) / LABEL_GRID_SIZE)
    const minimumY = Math.floor(bounds.y / LABEL_GRID_SIZE)
    const maximumY = Math.floor((bounds.y + bounds.height) / LABEL_GRID_SIZE)
    return {
      minimumX,
      maximumX,
      minimumY,
      maximumY,
      cellCount: (maximumX - minimumX + 1) * (maximumY - minimumY + 1)
    }
  }

  private getCellKeys(range: ReturnType<BoundsGrid<T>['getCellRange']>) {
    const keys: string[] = []
    for (let x = range.minimumX; x <= range.maximumX; x += 1) {
      for (let y = range.minimumY; y <= range.maximumY; y += 1) keys.push(`${x}:${y}`)
    }
    return keys
  }
}

const pointInBounds = (point: Point, bounds: DendrogramLabelBounds) =>
  point.x >= bounds.x &&
  point.x <= bounds.x + bounds.width &&
  point.y >= bounds.y &&
  point.y <= bounds.y + bounds.height

const segmentIntersectsBounds = (segment: Segment, bounds: DendrogramLabelBounds) => {
  if (!boundsMayIntersect(segment.bounds, bounds)) return false
  if (pointInBounds(segment.start, bounds) || pointInBounds(segment.end, bounds)) return true

  const dx = segment.end.x - segment.start.x
  const dy = segment.end.y - segment.start.y
  const p = [-dx, dx, -dy, dy]
  const q = [
    segment.start.x - bounds.x,
    bounds.x + bounds.width - segment.start.x,
    segment.start.y - bounds.y,
    bounds.y + bounds.height - segment.start.y
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

const midpoint = (a: Point, b: Point): Point => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 })

const distanceFromLine = (point: Point, start: Point, end: Point) => {
  const dx = end.x - start.x
  const dy = end.y - start.y
  if (dx === 0 && dy === 0) return Math.hypot(point.x - start.x, point.y - start.y)
  return Math.abs(dy * point.x - dx * point.y + end.x * start.y - end.y * start.x) / Math.hypot(dx, dy)
}

const addAdaptiveCurveSegments = (
  start: Point,
  firstControl: Point,
  secondControl: Point,
  end: Point,
  segments: Segment[],
  linkId: string,
  tolerance: number,
  depth = 0
) => {
  const flatness = Math.max(distanceFromLine(firstControl, start, end), distanceFromLine(secondControl, start, end))
  if (flatness <= tolerance || depth >= MAX_CURVE_DEPTH) {
    segments.push({ linkId, start, end, bounds: getBounds(start, end) })
    return
  }

  const startToFirst = midpoint(start, firstControl)
  const firstToSecond = midpoint(firstControl, secondControl)
  const secondToEnd = midpoint(secondControl, end)
  const leftControl = midpoint(startToFirst, firstToSecond)
  const rightControl = midpoint(firstToSecond, secondToEnd)
  const split = midpoint(leftControl, rightControl)
  addAdaptiveCurveSegments(start, startToFirst, leftControl, split, segments, linkId, tolerance, depth + 1)
  addAdaptiveCurveSegments(split, rightControl, secondToEnd, end, segments, linkId, tolerance, depth + 1)
}

const getLinkSegments = (
  link: DendrogramLayoutLink,
  orientation: DendrogramOrientation,
  connectionType: ResolveOptions['connectionType'],
  curveTolerance: number
): Segment[] => {
  const { source, target } = link
  if (connectionType === 'line') {
    return [{ linkId: link.id, start: source, end: target, bounds: getBounds(source, target) }]
  }

  if (connectionType === 'elbow') {
    const points =
      orientation === 'vertical'
        ? [source, { x: source.x, y: (source.y + target.y) / 2 }, { x: target.x, y: (source.y + target.y) / 2 }, target]
        : [source, { x: (source.x + target.x) / 2, y: source.y }, { x: (source.x + target.x) / 2, y: target.y }, target]
    return points.slice(1).map((point, index) => ({
      linkId: link.id,
      start: points[index],
      end: point,
      bounds: getBounds(points[index], point)
    }))
  }

  const firstControl =
    orientation === 'vertical'
      ? { x: source.x, y: (source.y + target.y) / 2 }
      : { x: (source.x + target.x) / 2, y: source.y }
  const secondControl =
    orientation === 'vertical'
      ? { x: target.x, y: (source.y + target.y) / 2 }
      : { x: (source.x + target.x) / 2, y: target.y }
  const segments: Segment[] = []
  addAdaptiveCurveSegments(source, firstControl, secondControl, target, segments, link.id, curveTolerance)
  return segments
}

const getSegments = (
  links: DendrogramLayoutLink[],
  orientation: DendrogramOrientation,
  connectionType: ResolveOptions['connectionType'],
  curveTolerance: number
) => links.flatMap(link => getLinkSegments(link, orientation, connectionType, curveTolerance))

export const estimateDendrogramLabelWidth = (label: string) =>
  Math.max(
    1,
    Array.from(label).reduce((width, character) => {
      if (/\s/.test(character)) return width + 4
      if (/[ilI1.,'|!:;]/.test(character)) return width + 3.5
      if (/[MW@#%&]/.test(character)) return width + 12
      return width + (character.codePointAt(0)! > 0x7f ? 12 : 7.5)
    }, 0)
  )

const getCandidates = (
  node: DendrogramLayoutNode,
  width: number,
  height: number,
  nodeRadius: number,
  gap: number,
  orientation: DendrogramOrientation
): DendrogramLabelPlacement[] => {
  const definitions: Record<
    DendrogramLabelAnchor,
    Omit<DendrogramLabelPlacement, 'nodeId' | 'anchor' | 'dominantBaseline'>
  > = {
    top: {
      x: 0,
      y: -nodeRadius - gap - height,
      textAnchor: 'middle',
      bounds: { x: node.x - width / 2, y: node.y - nodeRadius - gap - height, width, height }
    },
    right: {
      x: nodeRadius + gap,
      y: -height / 2,
      textAnchor: 'start',
      bounds: { x: node.x + nodeRadius + gap, y: node.y - height / 2, width, height }
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
  const priority: DendrogramLabelAnchor[] =
    orientation === 'horizontal' ? ['right', 'top', 'bottom', 'left'] : ['bottom', 'right', 'left', 'top']

  return priority.map(anchor => ({
    nodeId: node.id,
    anchor,
    dominantBaseline: 'hanging',
    ...definitions[anchor]
  }))
}

export const resolveDendrogramLabelsWithDiagnostics = (
  nodes: DendrogramLayoutNode[],
  links: DendrogramLayoutLink[],
  options: ResolveOptions
): { placements: DendrogramLabelPlacement[]; diagnostics: DendrogramLabelResolutionDiagnostics } => {
  const labelHeight = options.labelHeight ?? 14
  const labelGap = options.labelGap ?? 5
  const nodeRadius = Math.max(2, options.nodeRadius)
  const curveTolerance = Math.max(0.01, options.curveTolerance ?? CURVE_TOLERANCE)
  const segments = getSegments(links, options.orientation, options.connectionType, curveTolerance)
  const nodeBounds: NodeObstacle[] = nodes.map(node => ({
    nodeId: node.id,
    bounds: {
      x: node.x - nodeRadius,
      y: node.y - nodeRadius,
      width: nodeRadius * 2,
      height: nodeRadius * 2
    }
  }))
  const nodeIndex = buildBoundsTree(nodeBounds)
  const segmentIndex = buildBoundsTree(segments)
  const labelIndex = new BoundsGrid<DendrogramLabelPlacement>()
  const placements: DendrogramLabelPlacement[] = []
  const diagnostics: DendrogramLabelResolutionDiagnostics = {
    nodeChecks: 0,
    linkChecks: 0,
    linkConflicts: 0,
    labelChecks: 0
  }

  nodes.forEach(node => {
    const width = estimateDendrogramLabelWidth(node.label)
    const candidates = getCandidates(node, width, labelHeight, nodeRadius, labelGap, options.orientation)
    let bestCandidate = candidates[0]
    let bestScore = Infinity

    candidates.forEach((candidate, priority) => {
      const linkCollisionBounds = expandBounds(candidate.bounds, curveTolerance + 1)
      const nearbyNodes = queryBoundsTree(nodeIndex, candidate.bounds)
      const nearbySegments = queryBoundsTree(segmentIndex, linkCollisionBounds)
      const nearbyLabels = labelIndex.query(candidate.bounds)
      diagnostics.nodeChecks += nearbyNodes.length
      diagnostics.linkChecks += nearbySegments.length
      diagnostics.labelChecks += nearbyLabels.length

      const nodeConflicts = nearbyNodes.filter(
        obstacle => obstacle.nodeId !== node.id && boundsIntersect(candidate.bounds, obstacle.bounds)
      ).length
      const linkConflicts = new Set(
        nearbySegments
          .filter(segment => segmentIntersectsBounds(segment, linkCollisionBounds))
          .map(segment => segment.linkId)
      ).size
      diagnostics.linkConflicts += linkConflicts
      const labelConflicts = nearbyLabels.filter(placement =>
        boundsIntersect(candidate.bounds, placement.bounds)
      ).length
      const score = nodeConflicts * 10000 + labelConflicts * 10000 + linkConflicts * 100 + priority

      if (score < bestScore) {
        bestCandidate = candidate
        bestScore = score
      }
    })

    placements.push(bestCandidate)
    labelIndex.add(bestCandidate)
  })

  return { placements, diagnostics }
}

export const resolveDendrogramLabels = (
  nodes: DendrogramLayoutNode[],
  links: DendrogramLayoutLink[],
  options: ResolveOptions
) => resolveDendrogramLabelsWithDiagnostics(nodes, links, options).placements
