import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force'
import type { NetworkLayout, NetworkLayoutLink, NetworkLayoutNode, NetworkPreparedData } from '../types'

type LayoutOptions = {
  width: number
  height: number
  nodeRadius: number
  linkDistance: number
  chargeStrength: number
  showLabels: boolean
}

const seededRandom = () => {
  let seed = 0x2f6e2b1
  return () => {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0
    return seed / 4294967296
  }
}

export const resolveNetworkNodeRadius = (radius: number, width: number, height: number, showLabels: boolean) => {
  const parsedRadius = Number(radius)
  const requestedRadius = Math.max(2, Number.isFinite(parsedRadius) ? parsedRadius : 8)
  const maxRadius = Math.max(2, Math.min(width / 2 - (showLabels ? 72 : 8), height / 2 - 12))
  return Math.min(requestedRadius, maxRadius)
}

export const layoutNetwork = (prepared: NetworkPreparedData, options: LayoutOptions): NetworkLayout => {
  const width = Math.max(160, Number(options.width) || 640)
  const height = Math.max(160, Number(options.height) || 500)
  const radius = resolveNetworkNodeRadius(options.nodeRadius, width, height, options.showLabels)
  const horizontalPadding = radius + (options.showLabels ? 72 : 8)
  const verticalPadding = radius + 12
  const usableWidth = Math.max(1, width - horizontalPadding * 2)
  const usableHeight = Math.max(1, height - verticalPadding * 2)
  const nodes: NetworkLayoutNode[] = prepared.nodes.map((node, index) => {
    const angle = (Math.PI * 2 * index) / Math.max(prepared.nodes.length, 1) - Math.PI / 2
    return {
      ...node,
      x: width / 2 + Math.cos(angle) * usableWidth * 0.32,
      y: height / 2 + Math.sin(angle) * usableHeight * 0.32
    }
  })
  const links = prepared.links.map(link => ({ ...link })) as unknown as NetworkLayoutLink[]

  if (nodes.length) {
    const simulation = forceSimulation(nodes)
      .randomSource(seededRandom())
      .force(
        'link',
        forceLink<NetworkLayoutNode, NetworkLayoutLink>(links)
          .id(node => node.id)
          .distance(Math.max(20, Number.isFinite(Number(options.linkDistance)) ? Number(options.linkDistance) : 90))
      )
      .force(
        'charge',
        forceManyBody().strength(
          Number.isFinite(Number(options.chargeStrength)) ? Number(options.chargeStrength) : -240
        )
      )
      .force('center', forceCenter(width / 2, height / 2))
      .force('collide', forceCollide(radius + 5))
      .stop()

    for (let tick = 0; tick < 300; tick += 1) simulation.tick()
    simulation.stop()
  }

  nodes.forEach(node => {
    const x = Number(node.x)
    const y = Number(node.y)
    node.x = Math.min(width - horizontalPadding, Math.max(horizontalPadding, Number.isFinite(x) ? x : width / 2))
    node.y = Math.min(height - verticalPadding, Math.max(verticalPadding, Number.isFinite(y) ? y : height / 2))
  })

  const weights = prepared.links.map(link => link.weight)
  const minWeight = Math.min(...weights)
  const maxWeight = Math.max(...weights)
  const getStrokeWidth = (weight: number) =>
    !prepared.hasWeights || minWeight === maxWeight ? 2 : 1.5 + ((weight - minWeight) / (maxWeight - minWeight)) * 6.5

  links.forEach(link => {
    link.strokeWidth = getStrokeWidth(link.weight)
  })

  return { nodes, links }
}
