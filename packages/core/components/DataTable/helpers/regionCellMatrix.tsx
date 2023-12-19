import { ReactNode } from 'react'

const regionCellMatrix = ({ config }): ReactNode[][] => {
  return config.regions.map(region => {
    if (config.visualizationType === 'Box Plot') return []
    if (!Object.keys(region).includes('from') || !Object.keys(region).includes('to')) return []
    // region.from and region.to had formatDate(parseDate()) on it
    // but they returned undefined - removed both for now (TT)
    return [region.label, region.from, region.to]
  })
}

export default regionCellMatrix
