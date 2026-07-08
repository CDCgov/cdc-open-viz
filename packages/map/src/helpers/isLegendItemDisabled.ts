import { hashObj } from '@cdc/core/helpers/hashObj'

export const getLegendItemForRow = (
  dataForCheck: any,
  runtimeLegend: any,
  legendMemo: React.MutableRefObject<Map<number, number>>,
  legendSpecialClassLastMemo: React.MutableRefObject<Map<number, number>>,
  config: any
): any => {
  if (!dataForCheck || !runtimeLegend?.items) return null
  const hash = hashObj(dataForCheck)
  if (!legendMemo.current.has(hash)) return null
  const idx = legendMemo.current.get(hash)
  const disabledIdx = config.legend.showSpecialClassesLast ? legendSpecialClassLastMemo.current.get(hash) ?? idx : idx
  return runtimeLegend.items.find(item => item.bin === idx) ?? runtimeLegend.items[disabledIdx] ?? null
}

export const isLegendItemDisabled = (
  dataForCheck: any,
  runtimeLegend: any,
  legendMemo: React.MutableRefObject<Map<number, number>>,
  legendSpecialClassLastMemo: React.MutableRefObject<Map<number, number>>,
  config: any
): boolean => {
  const legendItem = getLegendItemForRow(
    dataForCheck,
    runtimeLegend,
    legendMemo,
    legendSpecialClassLastMemo,
    config
  )

  return legendItem?.disabled || legendItem?.hidden || false
}
