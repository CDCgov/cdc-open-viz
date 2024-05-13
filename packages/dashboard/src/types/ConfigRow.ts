import { ConfigureData } from '@cdc/core/types/ConfigureData'
import Footnotes from '@cdc/core/types/Footnotes'

type Col = {
  equalHeight?: boolean
  width: number | null
  hide?: boolean
  widget?: string
  uuid?: string | number
}

export type ConfigRow = {
  columns: Col[]
  uuid?: string | number
  toggle?: boolean
  equalHeight?: boolean
  multiVizColumn?: string
  footnotesId?: string // id for the footnotes in the vizConfig section
} & ConfigureData
