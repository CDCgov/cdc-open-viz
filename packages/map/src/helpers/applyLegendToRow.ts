import { hashObj } from './hashObj'
import { generateColorsArray } from './generateColorsArray'
import colorPalettes from '@cdc/core/data/colorPalettes'
import { MapConfig } from '../types/MapConfig'

export const applyLegendToRow = (rowObj: Object, state: MapConfig, legendMemo, runtimeLegend) => {
  try {
    const { legend, general, color } = state

    const validateInputs = () => {
      if (!rowObj) throw new Error('COVE: No rowObj in applyLegendToRow')
      if (!legendMemo) throw new Error('COVE: No legendMemo in applyLegendToRow')
      if (!runtimeLegend) throw new Error('COVE: No runtimeLegend in applyLegendToRow')
    }

    validateInputs()

    // Navigation map changed
    if ('navigation' === general.type) {
      let mapColorPalette = colorPalettes[color] || colorPalettes['bluegreenreverse']
      return generateColorsArray(mapColorPalette[3])
    }

    const hash = hashObj(rowObj)

    if (legendMemo.current.has(hash)) {
      let idx = legendMemo.current.get(hash)
      let disabledIdx = idx

      // Ensure this memo is defined somewhere
      if (legend.showSpecialClassesLast && legendSpecialClassLastMemo?.current) {
        disabledIdx = legendSpecialClassLastMemo.current.get(hash)
      }

      if (runtimeLegend[disabledIdx]?.disabled) return false

      // Safely find the bin color
      const legendBinColor = runtimeLegend.items.find(o => o.bin === idx)?.color
      return generateColorsArray(legendBinColor, runtimeLegend[idx]?.special ?? false)
    }

    // Fail state returns a safe default
    return generateColorsArray('#D4D4D4')
  } catch (e) {
    console.error('COVE: ', e) // eslint-disable-line
  }
}
