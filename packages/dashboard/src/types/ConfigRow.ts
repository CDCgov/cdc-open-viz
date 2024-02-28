export type ConfigRow = {
  equalHeight?: boolean
  width: number | null
  widget?: string
  uuid?: string | number
}[] & { uuid?: string | number }
