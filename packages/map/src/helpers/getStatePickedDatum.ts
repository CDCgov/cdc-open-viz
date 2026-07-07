import { supportedStatesFipsCodes } from '../data/supported-geos'

const STATE_NAME_TO_FIPS_ALIASES: Record<string, string> = {
  'U S VIRGIN ISLANDS': '78',
  'US VIRGIN ISLANDS': '78',
  'U.S. VIRGIN ISLANDS': '78',
  'VIRGIN ISLANDS': '78',
  VI: '78'
}

const normalizeStateName = (stateName: string) =>
  String(stateName || '')
    .trim()
    .replace(/\s+/g, ' ')
    .toUpperCase()

export const getStateFipsCode = (stateName: string): string | undefined => {
  const normalizedStateName = normalizeStateName(stateName)

  return (
    Object.keys(supportedStatesFipsCodes).find(
      key => normalizeStateName(supportedStatesFipsCodes[key]) === normalizedStateName
    ) || STATE_NAME_TO_FIPS_ALIASES[normalizedStateName]
  )
}

export const getStatePickedDatum = (stateName: string) => {
  const fipsCode = getStateFipsCode(stateName)

  return {
    fipsCode,
    stateName: fipsCode ? supportedStatesFipsCodes[fipsCode] : stateName
  }
}
