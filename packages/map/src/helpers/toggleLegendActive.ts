import _ from 'lodash'

export const toggleLegendActive = (i: number, legendLabel: string, runtimeLegend, dispatch) => {
  const runtimeLegendCopy = _.cloneDeep(runtimeLegend)

  // Create and toggle the new value
  const newValue = !runtimeLegendCopy.items?.[i].disabled
  runtimeLegendCopy.items[i].disabled = newValue

  const disabledAmt = runtimeLegend.disabledAmt ?? 0

  runtimeLegendCopy['disabledAmt'] = newValue ? disabledAmt + 1 : disabledAmt - 1

  dispatch({ type: 'SET_RUNTIME_LEGEND', payload: runtimeLegendCopy })

  dispatch({
    type: 'SET_ACCESSIBLE_STATUS',
    payload: `Disabled legend item ${legendLabel ?? ''}. Please reference the data table to see updated values.`
  })
}
