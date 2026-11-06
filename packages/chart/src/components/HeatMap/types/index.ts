export type HeatMapProps = {
  parentWidth: number
  parentHeight: number
}

export type HeatMapSourceRow = Record<string, any>

export type HeatMapCell = {
  rowKey: string
  rowLabel: string
  xValue: any
  xLabel: string
  value: number | null
  sourceRows: HeatMapSourceRow[]
}

export type HeatMapColumn = {
  key: string
  label: string
  rawValue: any
  bins: HeatMapCell[]
}

export type HeatMapDataGroupRange = {
  min: number
  max: number
  label: string
}

export type TooltipColumn = {
  label: string
  name: string
  options: {
    addColPrefix?: string
    addColSuffix?: string
    addColRoundTo?: number
    addColCommas?: boolean
  }
}

export type ParseDateFn = (value: string, showError?: boolean) => Date
export type FormatDateFn = (value: Date) => string
export type FormatValueFn = (value: number, position?: string) => string
export type FormatCellValueFn = (cell: HeatMapCell) => string

export type HeatMapMargins = {
  top: number
  right: number
  bottom: number
  left: number
}

export type HeatMapLayout = {
  availableWidth: number
  availableHeight: number
  responsiveGridWidth: number
  gridWidth: number
  gridHeight: number
  cellWidth: number
  cellHeight: number
  xOffset: number
  yOffset: number
}

export type HeatMapScrollState = {
  scrollbarSpace: number
  canScrollLeft: boolean
  canScrollRight: boolean
}
