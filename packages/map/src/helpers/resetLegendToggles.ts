import cloneDeep from 'lodash/cloneDeep'

export const getResetLegendToggles = runtimeLegend => {
  const legendCopy = cloneDeep(runtimeLegend)

  if (!legendCopy?.items) return legendCopy

  legendCopy.items.forEach(legendItem => {
    delete legendItem.disabled
    delete legendItem.hidden
  })
  legendCopy.disabledAmt = 0

  legendCopy.runtimeDataHash = runtimeLegend.runtimeDataHash

  return legendCopy
}

export const resetLegendToggles = (runtimeLegend, dispatch) => {
  const legendCopy = getResetLegendToggles(runtimeLegend)

  if (!legendCopy?.items) return

  dispatch({ type: 'SET_RUNTIME_LEGEND', payload: legendCopy })
}
