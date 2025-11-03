export type TerritoryShape = {
  handleShapeClick: () => void
  backgroundColor: string
  dataTooltipHtml: string
  dataTooltipId: string
  hasPattern: boolean
  label: string
  stroke: string
  strokeColor: string
  strokeWidth: number
  territory: string
  territoryData: object
  textColor: string
  svgStyle?: React.CSSProperties
  getSyncProps?: (geoKey: string) => any
  syncHandlers?: {
    onMouseEnter: (geoKey: string, clientY: number) => void
    onMouseLeave: () => void
  }
}
