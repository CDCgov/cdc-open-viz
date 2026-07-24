export type SankeyRawRow = Record<string, unknown>

export type SankeyColumns = {
  source?: string
  target?: string
  value?: string
}

export type SankeyPreparedLink = {
  id: string
  source: string
  target: string
  value: number
  rows: SankeyRawRow[]
}

export type SankeyNode = {
  id: string
}

export type SankeyLayoutNode = SankeyNode & {
  depth?: number
  height?: number
  index?: number
  layer?: number
  sourceLinks?: SankeyLayoutLink[]
  targetLinks?: SankeyLayoutLink[]
  value?: number
  x0?: number
  x1?: number
  y0?: number
  y1?: number
}

export type SankeyLayoutLink = Omit<SankeyPreparedLink, 'source' | 'target'> & {
  source: SankeyLayoutNode
  target: SankeyLayoutNode
  width?: number
  y0?: number
  y1?: number
}

export type SankeyPreparedData = {
  links: SankeyPreparedLink[]
  nodes: SankeyNode[]
  rejectedRowCount: number
}

export type SankeyProps = {
  width: number
  height: number
  runtime: any
}
