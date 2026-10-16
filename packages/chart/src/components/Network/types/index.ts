import type { Runtime } from '@cdc/core/types/Runtime'

export type NetworkRawRow = Record<string, unknown>

export type NetworkColumns = {
  source?: string
  target?: string
  weight?: string
  style?: string
  nodeColor?: string
}

export type NetworkNode = {
  id: string
  connectionCount: number
  color?: string
}

export type NetworkLink = {
  id: string
  source: string
  target: string
  weight: number
  rowCount: number
  style: 'solid' | 'dashed'
}

export type NetworkPreparedData = {
  nodes: NetworkNode[]
  links: NetworkLink[]
  rejectedRowCount: number
  hasWeights: boolean
}

export type NetworkLayoutNode = NetworkNode & {
  x: number
  y: number
}

export type NetworkLayoutLink = Omit<NetworkLink, 'source' | 'target'> & {
  source: NetworkLayoutNode
  target: NetworkLayoutNode
  strokeWidth: number
}

export type NetworkLayout = {
  nodes: NetworkLayoutNode[]
  links: NetworkLayoutLink[]
}

export type NetworkProps = {
  data: unknown
  width: number
  height: number
  runtime?: Runtime
}
