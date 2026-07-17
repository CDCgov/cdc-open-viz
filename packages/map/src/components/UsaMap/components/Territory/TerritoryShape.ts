import type { BubbleRenderRow } from '../../../../helpers/bubbleRenderData'

export type TerritoryShape = {
  bubbleRenderRows?: BubbleRenderRow[]
  bubbleRadiusScale?: number
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
  mapId?: string
  svgStyle?: React.CSSProperties
  getSyncProps?: (geoKey: string) => any
  syncHandlers?: {
    onMouseEnter: (geoKey: string, clientY: number) => void
    onMouseLeave: () => void
  }
}
