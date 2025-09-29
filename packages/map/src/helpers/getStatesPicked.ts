import { getFilterControllingStatesPicked } from '../components/UsaMap/helpers/map'
import { supportedStatesFipsCodes } from '../data/supported-geos'

export const getStatesPicked = (config, runtimeData) => {
  const stateNames = getFilterControllingStatesPicked(config, runtimeData)
  return stateNames.map(stateName => {
    const fipsCode = Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === stateName)
    if (!fipsCode) console.error(`State name "${stateName}" not found.`)
    return {
      fipsCode,
      stateName
    }
  })
}
