export type ConfigRow = {
  equalHeight?: boolean
  width: number | null
  toggle?: boolean
  hide?: boolean
  widget?: string
  uuid?: string | number
}[] & { uuid?: string | number }
