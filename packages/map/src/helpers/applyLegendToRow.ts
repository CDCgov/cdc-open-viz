import { generateColorsArray } from '@cdc/core/helpers/generateColorsArray'
import { hashObj } from '@cdc/core/helpers/hashObj'
import { DEFAULT_MAP_BACKGROUND, DISABLED_MAP_COLOR } from './constants'
import { mapColorPalettes as colorPalettes } from '@cdc/core/data/colorPalettes'
import { MapConfig } from '../types/MapConfig'
import { type RuntimeLegend } from '../types/runtimeLegend'
import { getColorPaletteMajorVersion } from '@cdc/core/helpers/getColorPaletteMajorVersion'

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
  const color = general.palette?.name ?? 'bluegreenreverse'
  const { showSpecialClassesLast } = legend

  try {
    if (!rowObj) {
      console.error('COVE: No rowObj in applyLegendToRow')
      return null
    }

    if (type === 'navigation') {
      const mapColorPalette =
        colorPalettes[`v${getColorPaletteMajorVersion(config)}`]?.[color] ?? colorPalettes.v1['bluegreenreverse']
      return generateColorsArray(mapColorPalette[3])
    }

    const hash = hashObj(rowObj)

    if (!legendMemo.current.has(hash)) {
      return generateColorsArray(DEFAULT_MAP_BACKGROUND)
    }

    const idx = legendMemo.current.get(hash)!
    const displayIdx = showSpecialClassesLast ? legendSpecialClassLastMemo.current.get(hash) ?? idx : idx
    const legendItem = runtimeLegend.items.find(item => item.bin === idx) ?? runtimeLegend.items[displayIdx]

    // Note: DISABLED_MAP_COLOR is used in UsaMap.County.tsx to check for hidden bubbles. Should be refactored to use the hidden value when that is implemented.
    if (legendItem?.disabled || legendItem?.hidden) {
      return generateColorsArray(DISABLED_MAP_COLOR)
    }

    return generateColorsArray(legendItem?.color, legendItem?.special)
  } catch (e) {
    console.error('COVE: ', e)
    return null
  }
}
