import type { Runtime } from '@cdc/core/types/Runtime'

export type DendrogramRawRow = Record<string, unknown>

export type DendrogramColumns = {
  node?: string
  parent?: string
  style?: string
  nodeColor?: string
}

export type DendrogramNode = {
  id: string
  parentId: string | null
  label: string
  style: 'solid' | 'dashed'
  color?: string
}

export type DendrogramValidationCode =
  | 'duplicate-node'
  | 'missing-root'
  | 'multiple-roots'
  | 'missing-parent'
  | 'self-parent'
  | 'cycle'
  | 'disconnected'

export type DendrogramValidationError = {
  code: DendrogramValidationCode
  message: string
}

export type DendrogramPreparedData = {
  nodes: DendrogramNode[]
  rootId?: string
  rejectedRowCount: number
  error?: DendrogramValidationError
}

export type DendrogramLayoutNode = DendrogramNode & {
  depth: number
  x: number
  y: number
}

export type DendrogramLayoutLink = {
  id: string
  source: DendrogramLayoutNode
  target: DendrogramLayoutNode
  style: 'solid' | 'dashed'
}

export type DendrogramLayout = {
  nodes: DendrogramLayoutNode[]
  links: DendrogramLayoutLink[]
}

export type DendrogramOrientation = 'horizontal' | 'vertical'

export type DendrogramProps = {
  data: unknown
  width: number
  height: number
  runtime?: Runtime
}
