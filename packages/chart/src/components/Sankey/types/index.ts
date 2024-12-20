export type Link = { source: string; target: string; value: number; id: string }

export type Data = {
  links: Link[]
}

export type SankeyNode = {
  id: string
}

export type SankeyProps = {
  width: number
  height: number
  data: Data
  runtime: any
}
