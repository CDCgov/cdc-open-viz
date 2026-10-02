import Papa from 'papaparse'
import { describe, expect, it } from 'vitest'
import { supportedStates, supportedTerritories } from './supported-geos'
import supportedStatesCSV from './supported-states.csv?raw'

const CSV_FIELDS = ['id', 'name', 'abbreviation', 'group', 'aliases']
const REQUIRED_FIELDS = ['id', 'name', 'abbreviation', 'group']
const EXPECTED_STATE_IDS = [
  'US-AL',
  'US-AK',
  'US-AZ',
  'US-AR',
  'US-CA',
  'US-CO',
  'US-CT',
  'US-DC',
  'US-DE',
  'US-FL',
  'US-GA',
  'US-HI',
  'US-ID',
  'US-IL',
  'US-IN',
  'US-IA',
  'US-KS',
  'US-KY',
  'US-LA',
  'US-ME',
  'US-MD',
  'US-MA',
  'US-MI',
  'US-MN',
  'US-MS',
  'US-MO',
  'US-MT',
  'US-NE',
  'US-NV',
  'US-NH',
  'US-NJ',
  'US-NM',
  'US-NY',
  'US-NC',
  'US-ND',
  'US-OH',
  'US-OK',
  'US-OR',
  'US-PA',
  'US-RI',
  'US-SC',
  'US-SD',
  'US-TN',
  'US-TX',
  'US-UT',
  'US-VT',
  'US-VA',
  'US-WA',
  'US-WV',
  'US-WI',
  'US-WY'
]
const EXPECTED_TERRITORY_IDS = ['US-AS', 'US-GU', 'US-PR', 'US-VI', 'US-MP', 'US-FM', 'US-PW', 'US-MH']
const EXPECTED_TERRITORIES = {
  'US-AS': ['AMERICAN SAMOA', 'AS'],
  'US-GU': ['GUAM', 'GU'],
  'US-PR': ['PUERTO RICO', 'PR'],
  'US-VI': ['U.S. VIRGIN ISLANDS', 'VI', 'US VIRGIN ISLANDS', 'VIRGIN ISLANDS'],
  'US-MP': [
    'NORTHERN MARIANA ISLANDS',
    'MP',
    'CNMI',
    'NORTHERN MARIANAS',
    'COMMONWEALTH OF NORTHERN MARIANA ISLANDS',
    'COMMONWEALTH OF THE NORTHERN MARIANA ISLANDS',
    'COMMONWEALTH OF THE NORTHERN MARIANA ISLANDS (CNMI)'
  ],
  'US-FM': ['MICRONESIA', 'FM', 'Federated States of Micronesia'],
  'US-PW': ['PALAU', 'PW'],
  'US-MH': ['MARSHALL ISLANDS', 'MH', 'RMI']
}

const parsedCSV = Papa.parse(supportedStatesCSV, {
  header: true,
  skipEmptyLines: 'greedy'
})

describe('supported state and territory geographies', () => {
  it('loads all supported geographies from CSV in the existing order', () => {
    expect(parsedCSV.errors).toEqual([])
    expect(parsedCSV.data).toHaveLength(59)
    expect(parsedCSV.data.map(row => row.id)).toEqual([...EXPECTED_STATE_IDS, ...EXPECTED_TERRITORY_IDS])
    expect(Object.keys(supportedStates)).toEqual(EXPECTED_STATE_IDS)
    expect(Object.keys(supportedTerritories)).toEqual(EXPECTED_TERRITORY_IDS)
  })

  it('preserves representative state and district lookup values', () => {
    expect(supportedStates['US-AL']).toEqual(['ALABAMA', 'AL'])
    expect(supportedStates['US-DC']).toEqual(['DISTRICT OF COLUMBIA', 'DC'])
    expect(supportedStates['US-WY']).toEqual(['WYOMING', 'WY'])
  })

  it('preserves all territory and freely associated state aliases', () => {
    expect(supportedTerritories).toEqual(EXPECTED_TERRITORIES)
  })

  it('provides every required field with unique identifiers', () => {
    expect(parsedCSV.meta.fields).toEqual(CSV_FIELDS)

    parsedCSV.data.forEach(row => {
      REQUIRED_FIELDS.forEach(field => expect(row[field]).toBeTruthy())
    })

    const geographyIds = parsedCSV.data.map(row => row.id)
    expect(new Set(geographyIds).size).toBe(geographyIds.length)
  })

  it('groups states, territories, and freely associated states without mixing their exports', () => {
    const idsByGroup = group => parsedCSV.data.filter(row => row.group === group).map(row => row.id)

    expect(idsByGroup('state')).toEqual(EXPECTED_STATE_IDS)
    expect(idsByGroup('territory')).toEqual(['US-AS', 'US-GU', 'US-PR', 'US-VI', 'US-MP'])
    expect(idsByGroup('freely-associated-state')).toEqual(['US-FM', 'US-PW', 'US-MH'])
    expect(EXPECTED_TERRITORY_IDS.filter(id => id in supportedStates)).toEqual([])
    expect(EXPECTED_STATE_IDS.filter(id => id in supportedTerritories)).toEqual([])
  })
})
