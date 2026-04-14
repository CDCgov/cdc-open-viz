import usExtendedGeography from '../components/UsaMap/data/us-extended-geography.json'

export const getCountyTopoSources = <T>(response: T, showTerritories: boolean) => {
  return showTerritories ? [response, usExtendedGeography] : [response]
}
