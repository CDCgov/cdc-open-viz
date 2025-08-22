import { getFilterControllingStatesPicked } from '../components/UsaMap/helpers/map'
import { supportedStatesFipsCodes } from '../data/supported-geos'

export const getStatesPicked = (config, runtimeData) => {
  const stateNames = getFilterControllingStatesPicked(config, runtimeData)

  return stateNames.map(stateName => ({
    fipsCode: Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === stateName),
    stateName
  }))
}
