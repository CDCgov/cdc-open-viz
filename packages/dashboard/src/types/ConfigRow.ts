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
  uuid?: string | number
  toggle?: boolean
  equalHeight?: boolean
  multiVizColumn?: string
} & ConfigureData
