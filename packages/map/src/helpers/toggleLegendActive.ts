import _ from 'lodash'

export const toggleLegendActive = (
  i: number,
  legendLabel: string,
  runtimeLegend,
  setRuntimeLegend,
  setAccessibleStatus
) => {
  const runtimeLegendCopy = _.cloneDeep(runtimeLegend)

  // Create and toggle the new value
  const newValue = !runtimeLegendCopy.items?.[i].disabled
  runtimeLegendCopy.items[i].disabled = newValue

  const disabledAmt = runtimeLegend.disabledAmt ?? 0

  runtimeLegendCopy['disabledAmt'] = newValue ? disabledAmt + 1 : disabledAmt - 1

  setRuntimeLegend(runtimeLegendCopy)

  setAccessibleStatus(
    `Disabled legend item ${legendLabel ?? ''}. Please reference the data table to see updated values.`
  )
}
