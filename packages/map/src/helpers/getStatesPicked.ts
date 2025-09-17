import { getFilterControllingStatesPicked } from '../components/UsaMap/helpers/map'
import { supportedStatesFipsCodes } from '../data/supported-geos'

export const getStatesPicked = (config, runtimeData) => {
  const stateNames = getFilterControllingStatesPicked(config, runtimeData)
  return stateNames.map(stateName => {
    const matchedStateFips = Object.values(supportedStatesFipsCodes).find(name => name === stateName)
    if (!matchedStateFips) console.error(`State name "${stateName}" not found.`)
    return {
      fipsCode: matchedStateFips,
      stateName
    }
  })
}
