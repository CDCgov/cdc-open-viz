import { stateFipsToTwoDigit, supportedCounties } from '../data/supported-geos'
import { titleCase } from './titleCase'

export const formatLegendLocation = (key, runtimeLookup) => {
  let formattedName = ''

  const stateName = stateFipsToTwoDigit[key?.substring(0, 2)] || runtimeLookup || ''
  if (stateName) {
    formattedName += stateName
  }

  const countyKeys = Object.keys(supportedCounties)
  if (countyKeys.includes(key)) {
    formattedName += ', ' + titleCase(supportedCounties[key])
  }

  return formattedName
}
