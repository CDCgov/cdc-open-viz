export type Column = {
  name?: string
  label: string
  prefix: string
  suffix: string
  roundToPlace: number
  commas: boolean
  dataTable: boolean
  showInViz: boolean
  startingPoint: string
  series?: string
  tooltips: boolean
  forestPlot: boolean
  forestPlotAlignRight: boolean
  forestPlotStartingPoint: number
}
