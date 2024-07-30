import { ChartConfig } from './../types/ChartConfig'

export const handleChartTabbing = (config: ChartConfig, legendId: string) => {
  if (!config) return `dataTableSection`
  if (!config.legend?.hide) return legendId
  if (config?.title) return `dataTableSection__${config.title.replace(/\s/g, '')}`
  return `dataTableSection`
}
