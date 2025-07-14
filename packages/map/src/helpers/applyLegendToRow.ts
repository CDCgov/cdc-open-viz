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

  const { general, color, legend } = config
  const { type } = general
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

    const hash = String(hashObj(rowObj))

    if (!legendMemo.current.has(hash)) {
      return generateColorsArray()
    }

    const idx = legendMemo.current.get(hash)!

    if (runtimeLegend.items?.[idx]?.disabled) {
      return generateColorsArray()
    }

    // Use the index from legendMemo which should already be updated for reordered items
    const legendItem = runtimeLegend.items?.[idx]
    const legendBinColor = legendItem?.color

    return generateColorsArray(legendBinColor, legendItem?.special)
  } catch (e) {
    console.error('COVE: ', e)
    return null
  }
}
