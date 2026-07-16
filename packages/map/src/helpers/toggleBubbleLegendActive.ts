import cloneDeep from 'lodash/cloneDeep'
import type { RuntimeLegend } from '../types/runtimeLegend'

export const toggleBubbleLegendActive = (itemIndex: number, runtimeLegend: RuntimeLegend): RuntimeLegend => {
  const runtimeLegendCopy = cloneDeep(runtimeLegend)
  let items = runtimeLegendCopy.items || []
  const hasExistingHidden = items.some(item => item.hidden === true)

  if (hasExistingHidden) {
    items = items.map((item, index) => {
      if (index === itemIndex) {
        return { ...item, disabled: false, hidden: !item.hidden }
      }
      return { ...item, disabled: false }
    })
  } else {
    items = items.map((item, index) => ({
      ...item,
      disabled: false,
      hidden: index !== itemIndex
    }))
  }

  if (items.every(item => item.hidden === true)) {
    items = items.map(item => ({ ...item, disabled: false, hidden: false }))
  }

  return {
    ...runtimeLegendCopy,
    items,
    disabledAmt: items.filter(item => item.hidden).length
  }
}
