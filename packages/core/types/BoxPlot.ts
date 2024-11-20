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
    count: string
    lowerBounds: string
    upperBounds: string
  }
  plotNonOutlierValues: boolean
  plots: [{ columnOutliers: []; columnLowerBounds: number; columnUpperBounds: number }]
  categories: string[]
  geoType: string
  hideOutliers: boolean
  borders: string
}
