import _ from 'lodash'
import { ChartConfig } from '../types/ChartConfig'

type GetHasBoundarySuppressionProps = {
  rows?: Object[]
  config: ChartConfig
}

export const getHasBoundarySuppression = ({ rows, config }: GetHasBoundarySuppressionProps) => {
  if (!Array.isArray(rows) || rows.length === 0) return false
  const suppressionRules = config.preliminaryData?.filter(({ type, style }) => type === 'suppression' && style) || []
  if (!suppressionRules.length) return false

  return rows.some((item, index, array) => {
    if (index !== 0 && index !== array.length - 1) return false

    return suppressionRules.some(({ column, value }) => {
      const values = _.values(_.pick(item, config.runtime?.seriesKeys))
      const dynamicCategory = config.series[0]?.dynamicCategory
      const match = column ? item[column] === value : values.includes(value)
      const dynamic = dynamicCategory && (item[dynamicCategory] === column || !column)

      return Boolean(match || dynamic)
    })
  })
}
