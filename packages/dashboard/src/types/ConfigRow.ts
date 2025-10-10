import { ConfigureData } from '@cdc/core/types/ConfigureData'

type Col = {
  equalHeight?: boolean
  width: number | null
  hide?: boolean
  widget?: string
  toggleName?: string
  uuid?: string | number
}

export type ConfigRow = {
  columns: Col[]
  expandCollapseAllButtons: boolean
  uuid?: string | number
  toggle?: boolean
  equalHeight?: boolean
  multiVizColumn?: string
  originalMultiVizColumn?: string
} & ConfigureData
