import { describe, it, expect } from 'vitest'
import { getCountyTopoSources } from '../getCountyTopoSources'
import usExtendedGeography from '../../components/UsaMap/data/us-extended-geography.json'

describe('getCountyTopoSources', () => {
  const baseTopo = {
    objects: {
      counties: {},
      states: {}
    }
  }

  it('returns only the base topo when territories are hidden', () => {
    const result = getCountyTopoSources(baseTopo, false)
    expect(result).toEqual([baseTopo])
  })

  it('returns base topo and extended geopgrahy when territories are shown', () => {
    const result = getCountyTopoSources(baseTopo, true)
    expect(result).toEqual([baseTopo, usExtendedGeography])
  })
})
