import { getFilterControllingStatesPicked } from '../components/UsaMap/helpers/map'
import { getStatePickedDatum } from './getStatePickedDatum'

export const getStatesPicked = (config, runtimeData) => {
  const stateNames = getFilterControllingStatesPicked(config, runtimeData)
  return stateNames.map(stateName => {
    const statePickedDatum = getStatePickedDatum(stateName)
    const { fipsCode } = statePickedDatum
    if (!fipsCode) console.error(`State name "${stateName}" not found.`)
    return statePickedDatum
  })
}
