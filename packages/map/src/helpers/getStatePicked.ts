import { getFilterControllingStatePicked } from '../components/UsaMap/helpers/map'
import { supportedStatesFipsCodes } from '../data/supported-geos'

export const getStatePicked = (config, runtimeData) => {
  const stateName = getFilterControllingStatePicked(config, runtimeData)
  const fipsCode = Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === stateName)
  return { stateName, fipsCode }
}
