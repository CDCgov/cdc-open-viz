import { ConfigureData } from '@cdc/core/types/ConfigureData'

type Col = {
  equalHeight?: boolean
  width: number | null
  hide?: boolean
  widget?: string
  uuid?: string | number
}

export type ConfigRow = {
  columns: Col[]
  expandCollapseAllButtons: boolean
  uuid?: string | number
  toggle?: boolean
  equalHeight?: boolean
  multiVizColumn?: string
  footnotesId?: string // id for the footnotes in the vizConfig section
} & ConfigureData
