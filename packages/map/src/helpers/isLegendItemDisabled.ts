import { hashObj } from './hashObj'

export const isLegendItemDisabled = (
  dataForCheck: any,
  runtimeLegend: any,
  legendMemo: React.MutableRefObject<Map<number, number>>,
  legendSpecialClassLastMemo: React.MutableRefObject<Map<number, number>>,
  config: any
): boolean => {
  if (!dataForCheck || !runtimeLegend?.items) return false
  const hash = hashObj(dataForCheck)
  if (!legendMemo.current.has(hash)) return false
  const idx = legendMemo.current.get(hash)
  const disabledIdx = config.legend.showSpecialClassesLast
    ? legendSpecialClassLastMemo.current.get(hash) ?? idx
    : idx
  return runtimeLegend.items[disabledIdx]?.disabled || false
}