export const handleChartAriaLabels = (state, testing = false) => {
  if (testing) console.log(`handleChartAriaLabels Testing On:`, state) // eslint-disable-line
  try {
    if (!state.visualizationType) throw Error('handleChartAriaLabels: no visualization type found in state')
    let ariaLabel = ''

    if (state.visualizationType) {
      ariaLabel += `${state.visualizationType} chart`
    }

    if (state.title && state.visualizationType) {
      ariaLabel += ` with the title: ${state.title}`
    }

    return ariaLabel
  } catch (e) {
    console.error('COVE: ', e.message) // eslint-disable-line
  }
}
