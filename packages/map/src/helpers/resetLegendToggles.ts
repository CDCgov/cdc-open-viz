import _ from 'lodash'
export const resetLegendToggles = (runtimeLegend, setRuntimeLegend) => {
  const legendCopy = _.cloneDeep(runtimeLegend)

  legendCopy.items.forEach(legendItem => {
    delete legendItem.disabled
  })
  legendCopy.disabledAmt = 0

  legendCopy.runtimeDataHash = runtimeLegend.runtimeDataHash

  setRuntimeLegend(legendCopy)
}
