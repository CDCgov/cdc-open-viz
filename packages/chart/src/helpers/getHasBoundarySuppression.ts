import pick from 'lodash/pick'
import values from 'lodash/values'
import { ChartConfig } from '../types/ChartConfig'

type GetHasBoundarySuppressionProps = {
  rows?: Object[]
  config: ChartConfig
}

export const getHasBoundarySuppression = ({ rows, config }: GetHasBoundarySuppressionProps) => {
  if (!Array.isArray(rows) || rows.length === 0) return false
  const suppressionRules = config.preliminaryData?.filter(({ type, style }) => type === 'suppression' && style) || []
  if (!suppressionRules.length) return false

  const boundaryRows = [rows[0], rows[rows.length - 1]].filter(Boolean)

  return boundaryRows.some(item =>
    suppressionRules.some(({ column, value }) => {
      const seriesValues = values(pick(item, config.runtime?.seriesKeys))
      const dynamicCategory = config.series[0]?.dynamicCategory
      const match = column ? item[column] === value : seriesValues.includes(value)
      const dynamic = dynamicCategory && (item[dynamicCategory] === column || !column)

      return Boolean(match || dynamic)
    })
  )
}
