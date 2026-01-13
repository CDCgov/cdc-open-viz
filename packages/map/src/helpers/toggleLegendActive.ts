import _ from 'lodash'

export const toggleLegendActive = (i: number, legendLabel: string, runtimeLegend, dispatch, legendBehavior) => {
  let runtimeLegendCopy = _.cloneDeep(runtimeLegend)
  let items = runtimeLegendCopy.items || []
  let disabledAmt = runtimeLegendCopy.disabledAmt || 0
  const behavior = (legendBehavior || 'highlight').toLowerCase()

  // "Isolate" behavior that exclusively shows only the clicked item
  if (behavior === 'isolate') {
    // With an existing hidden item, just toggle the item clicked on
    const hasExistingHidden = items.some(item => item.hidden === true)
    if (hasExistingHidden) {
      items = items.map((item, index) => {
        if (index === i) {
          return { ...item, hidden: !item.hidden }
        }
        return item
      })

      // When no existing hidden items, isolate to only the clicked item
    } else {
      items = items.map((item, index) => {
        if (index !== i) {
          return { ...item, hidden: true }
        }
        return { ...item, hidden: false }
      })
    }

    // In any case, prevent all items from being hidden and have them all enabled instead
    if (items.every(item => item.hidden === true)) {
      items = items.map(item => ({ ...item, hidden: false }))
    }

    disabledAmt = items.filter(item => item.hidden).length

    // Default "Highlight" behavior where other items are dimmed or grayed out
  } else {
    if (behavior !== 'highlight') {
      console.warn(`Unknown legend behavior: ${legendBehavior}. Defaulting to 'highlight'.`)
    }

    // With an existing disabled item, just toggle the item clicked on
    const hasExistingDisabled = items.some(item => item.disabled === true)
    if (hasExistingDisabled) {
      items = items.map((item, index) => {
        if (index === i) {
          return { ...item, disabled: !item.disabled }
        }
        return item
      })

      // When no existing disabled items, enable only (highlight) the clicked item
    } else {
      items = items.map((item, index) => {
        if (index !== i) {
          return { ...item, disabled: true }
        }
        return { ...item, disabled: false }
      })
    }

    // In any case, prevent all items from being disabled and have them all enabled instead
    if (items.every(item => item.disabled === true)) {
      items = items.map(item => ({ ...item, disabled: false }))
    }

    disabledAmt = items.filter(item => item.disabled).length
  }

  // Set results

  runtimeLegendCopy.items = items
  runtimeLegendCopy['disabledAmt'] = disabledAmt

  dispatch({ type: 'SET_RUNTIME_LEGEND', payload: runtimeLegendCopy })

  dispatch({
    type: 'SET_ACCESSIBLE_STATUS',
    payload: `${behavior === 'highlight' ? 'Highlighted' : 'Isolated'} legend item ${
      legendLabel ?? ''
    }. Please reference the data table to see updated values.`
  })
}
