import { generateColorsArray, hashObj } from '../helpers'
import colorPalettes from '@cdc/core/data/colorPalettes'
import { MapConfig } from '../types/MapConfig'
import { type RuntimeLegend } from '../types/runtimeLegend'

type Memo<T> = { current: Map<string, T> }

export const applyLegendToRow = (
  rowObj: Record<string, any>,
  config: MapConfig,
  runtimeLegend: RuntimeLegend,
  legendMemo: Memo<number>,
  legendSpecialClassLastMemo: Memo<number>
): string[] => {
  if (!config) return null

  const { general, legend } = config
  const { type } = general
  const { name: color } = general.palette
  const { showSpecialClassesLast } = legend

  try {
    if (!rowObj) {
      console.error('COVE: No rowObj in applyLegendToRow')
      return null
    }

    if (type === 'navigation') {
      const mapColorPalette = colorPalettes[color] ?? colorPalettes['bluegreenreverse']
      return generateColorsArray(mapColorPalette[3])
    }

    const hash = hashObj(rowObj)

    if (!legendMemo.current.has(hash)) {
      return generateColorsArray()
    }

    const idx = legendMemo.current.get(hash)!
    const disabledIdx = showSpecialClassesLast ? legendSpecialClassLastMemo.current.get(hash) ?? idx : idx

    if (runtimeLegend.items?.[disabledIdx]?.disabled) {
      return generateColorsArray()
    }

    const legendBinColor = runtimeLegend.items.find(o => o.bin === idx)?.color
    return generateColorsArray(legendBinColor, runtimeLegend.items[idx]?.special)
  } catch (e) {
    console.error('COVE: ', e)
    return null
  }
}
