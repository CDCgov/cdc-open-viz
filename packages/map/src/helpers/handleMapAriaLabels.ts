export const handleMapAriaLabels = (state: MapConfig = '', testing = false) => {
  if (testing) console.log(`handleMapAriaLabels Testing On: ${state}`) // eslint-disable-line
  try {
    if (!state.general.geoType) throw Error('handleMapAriaLabels: no geoType found in state')
    const {
      general: { title, geoType, statesPicked }
    } = state
    let ariaLabel = ''
    switch (geoType) {
      case 'world':
        ariaLabel += 'World map'
        break
      case 'us':
        ariaLabel += 'United States map'
        break
      case 'us-county':
        ariaLabel += `United States county map`
        break
      case 'single-state':
        ariaLabel += `${statesPicked.map(sp => sp.stateName).join(', ')} county map`
        break
      case 'us-region':
        ariaLabel += `United States HHS Region map`
        break
      default:
        ariaLabel = 'Data visualization container'
        break
    }

    if (title) {
      ariaLabel += ` with the title: ${title}`
    }

    return ariaLabel
  } catch (e) {
    console.error('COVE: ', e.message) // eslint-disable-line
  }
}
