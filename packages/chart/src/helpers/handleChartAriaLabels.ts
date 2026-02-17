export const handleChartAriaLabels = state => {
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
    return 'Data visualization container'
  }
}
