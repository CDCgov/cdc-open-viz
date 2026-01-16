import _ from 'lodash'

export const resetLegendToggles = (runtimeLegend, dispatch) => {
  const legendCopy = _.cloneDeep(runtimeLegend)

  legendCopy.items.forEach(legendItem => {
    delete legendItem.disabled
    delete legendItem.hidden
  })
  legendCopy.disabledAmt = 0

  legendCopy.runtimeDataHash = runtimeLegend.runtimeDataHash

  dispatch({ type: 'SET_RUNTIME_LEGEND', payload: legendCopy })
}
