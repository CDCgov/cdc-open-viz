import { useContext } from 'react'
import ConfigContext from '../context'
import { generateColorsArray, hashObj } from '../helpers'
import colorPalettes from '@cdc/core/data/colorPalettes'

export const useApplyLegendToRow = (legendMemo, legendSpecialClassLastMemo) => {
  const { state, runtimeLegend } = useContext(ConfigContext)

  const { general, color, legend } = state
  const { type } = general
  const { showSpecialClassesLast } = legend

  return rowObj => {
    try {
      if (!rowObj) throw Error('COVE: No rowObj in applyLegendToRow')

      // Navigation map changed
      if ('navigation' === type) {
        let mapColorPalette = colorPalettes[color] ?? colorPalettes['bluegreenreverse']
        return generateColorsArray(mapColorPalette[3])
      }

      let hash = hashObj(rowObj)

      if (legendMemo.current.has(hash)) {
        let idx = legendMemo.current.get(hash)
        let disabledIdx = idx

        if (showSpecialClassesLast) {
          disabledIdx = legendSpecialClassLastMemo.current.get(hash)
        }
        if (runtimeLegend.items?.[disabledIdx]?.disabled) return generateColorsArray()

        // changed to use bin prop to get color instead of idx
        // bc we re-order legend when showSpecialClassesLast is checked
        let legendBinColor = runtimeLegend.items.find(o => o.bin === idx)?.color
        return generateColorsArray(legendBinColor, runtimeLegend[idx]?.special)
      }

      // Fail state
      return generateColorsArray()
    } catch (e) {
      console.error('COVE: ', e) // eslint-disable-line
    }
  }
}

export default useApplyLegendToRow
