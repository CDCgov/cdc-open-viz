import { stratify } from '@visx/hierarchy'
import { cluster } from 'd3-hierarchy'

import type { DendrogramLayout, DendrogramLayoutNode, DendrogramOrientation, DendrogramPreparedData } from '../types'

type LayoutOptions = {
  orientation: DendrogramOrientation
  leafSpacing: number
  depthSpacing: number
  nodeRadius: number
}

const getPositiveNumber = (value: unknown, fallback: number, minimum: number, maximum: number) => {
  const parsed = Number(value)
  return Math.min(maximum, Math.max(minimum, Number.isFinite(parsed) ? parsed : fallback))
}

export const layoutDendrogram = (prepared: DendrogramPreparedData, options: LayoutOptions): DendrogramLayout => {
  if (!prepared.rootId || prepared.error || !prepared.nodes.length) return { nodes: [], links: [] }

  const leafSpacing = getPositiveNumber(options.leafSpacing, 40, 12, 10000)
  const depthSpacing = getPositiveNumber(options.depthSpacing, 140, 24, 10000)
  const nodeRadius = getPositiveNumber(options.nodeRadius, 6, 2, 1000)
  const root = stratify<(typeof prepared.nodes)[number]>()
    .id(node => node.id)
    .parentId(node => node.parentId)(prepared.nodes)

  cluster<(typeof prepared.nodes)[number]>().nodeSize([leafSpacing, depthSpacing])(root)

  const descendants = root.descendants()
  const minimumCrossAxis = descendants.reduce((minimum, node) => Math.min(minimum, node.x), Infinity)
  const padding = nodeRadius + 12
  const nodes = descendants.map(node => {
    const depthPosition = node.y + padding
    const leafPosition = node.x - minimumCrossAxis + padding
    const x = options.orientation === 'vertical' ? leafPosition : depthPosition
    const y = options.orientation === 'vertical' ? depthPosition : leafPosition
    return {
      ...node.data,
      depth: node.depth,
      x,
      y
    } satisfies DendrogramLayoutNode
  })
  const nodesById = new Map(nodes.map(node => [node.id, node]))
  const links = nodes
    .filter(node => node.parentId !== null)
    .map(node => ({
      id: JSON.stringify([node.parentId, node.id]),
      source: nodesById.get(node.parentId!)!,
      target: node,
      style: node.style
    }))

  return { nodes, links }
}
