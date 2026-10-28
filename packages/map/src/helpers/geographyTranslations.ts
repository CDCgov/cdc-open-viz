import { supportedStates, supportedTerritories } from '../data/supported-geos'

const SPANISH_TRANSLATIONS: Record<string, string> = {
  'US-AL': 'Alabama',
  'US-AK': 'Alaska',
  'US-AZ': 'Arizona',
  'US-AR': 'Arkansas',
  'US-CA': 'California',
  'US-CO': 'Colorado',
  'US-CT': 'Connecticut',
  'US-DC': 'Distrito de Columbia',
  'US-DE': 'Delaware',
  'US-FL': 'Florida',
  'US-GA': 'Georgia',
  'US-HI': 'Hawái',
  'US-ID': 'Idaho',
  'US-IL': 'Illinois',
  'US-IN': 'Indiana',
  'US-IA': 'Iowa',
  'US-KS': 'Kansas',
  'US-KY': 'Kentucky',
  'US-LA': 'Luisiana',
  'US-ME': 'Maine',
  'US-MD': 'Maryland',
  'US-MA': 'Massachusetts',
  'US-MI': 'Míchigan',
  'US-MN': 'Minnesota',
  'US-MS': 'Misisipi',
  'US-MO': 'Misuri',
  'US-MT': 'Montana',
  'US-NE': 'Nebraska',
  'US-NV': 'Nevada',
  'US-NH': 'Nuevo Hampshire',
  'US-NJ': 'Nueva Jersey',
  'US-NM': 'Nuevo México',
  'US-NY': 'Nueva York',
  'US-NC': 'Carolina del Norte',
  'US-ND': 'Dakota del Norte',
  'US-OH': 'Ohio',
  'US-OK': 'Oklahoma',
  'US-OR': 'Oregón',
  'US-PA': 'Pensilvania',
  'US-RI': 'Rhode Island',
  'US-SC': 'Carolina del Sur',
  'US-SD': 'Dakota del Sur',
  'US-TN': 'Tennessee',
  'US-TX': 'Texas',
  'US-UT': 'Utah',
  'US-VT': 'Vermont',
  'US-VA': 'Virginia',
  'US-WA': 'Washington',
  'US-WV': 'Virginia Occidental',
  'US-WI': 'Wisconsin',
  'US-WY': 'Wyoming',
  'US-AS': 'Samoa Americana',
  'US-GU': 'Guam',
  'US-PR': 'Puerto Rico',
  'US-VI': 'Islas Vírgenes de los EE. UU.',
  'US-MP': 'Islas Marianas del Norte',
  'US-FM': 'Micronesia',
  'US-PW': 'Palaos',
  'US-MH': 'Islas Marshall'
}

export const normalizeGeographyName = (value: unknown): string =>
  String(value ?? '')
    .trim()
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.’']/g, '')
    .replace(/\s+/g, ' ')

const englishNameToUid = new Map<string, string>()
Object.entries({ ...supportedStates, ...supportedTerritories }).forEach(([uid, names]) => {
  names.forEach(name => englishNameToUid.set(normalizeGeographyName(name), uid))
})

const spanishNameToUid = new Map<string, string>()
Object.entries(SPANISH_TRANSLATIONS).forEach(([uid, name]) => spanishNameToUid.set(normalizeGeographyName(name), uid))

export const getSpanishGeographyName = (uid: string): string | undefined => SPANISH_TRANSLATIONS[uid]

export const getLocalizedGeographyName = (uid: string, locale?: string): string | undefined =>
  locale?.toLowerCase().startsWith('es') ? getSpanishGeographyName(uid) : undefined

export const getGeographyUidAlias = (value: unknown): string | undefined => {
  const normalized = normalizeGeographyName(value)
  return englishNameToUid.get(normalized) || spanishNameToUid.get(normalized)
}
