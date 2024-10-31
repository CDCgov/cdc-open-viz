export type BoxPlot = {
  tableData: Object[]
  labels: {
    mean: string
    maximum: string
    minimum: string
    iqr: string
    median: string
    q1: string
    q3: string
    outliers: string
    values: string
    total: string
    lowerBounds: string
    upperBounds: string
  }
  plotNonOutlierValues: boolean
  plots: []
  categories: string[]
  firstQuartilePercentage: number
  geoType: string
}
