import { describe, expect, it } from 'vitest'
import { feature } from 'topojson-client'
import worldTopo from '../../../WorldMap/data/world-topo.json'
import { buildFreelyAssociatedStatesTopoFromWorld, type FreelyAssociatedStatesTopology } from '../map'

describe('buildFreelyAssociatedStatesTopoFromWorld', () => {
  it('borrows FAS geometries from world-topo and remaps them to county-map IDs', () => {
    const topo = buildFreelyAssociatedStatesTopoFromWorld()
    const states = feature(topo as FreelyAssociatedStatesTopology, topo.objects.states).features
    const fipsIds = states
      .filter(stateFeature => ['US-FM', 'US-MH', 'US-PW'].includes(stateFeature.id))
      .map(stateFeature => stateFeature.id)
      .sort()

    expect(fipsIds).toEqual(['US-FM', 'US-MH', 'US-PW'])
  })

  it('uses the same world-topo geometry for Micronesia that the world map already trusts', () => {
    const borrowedTopo = buildFreelyAssociatedStatesTopoFromWorld()
    const borrowedFeatures = feature(
      borrowedTopo as FreelyAssociatedStatesTopology,
      borrowedTopo.objects.states
    ).features
    const borrowedMicronesia = borrowedFeatures.find(geo => geo.id === 'US-FM')
    const worldFeatures = feature(worldTopo, worldTopo.objects.Cove_World_Map_2026_corr).features
    const micronesia = worldFeatures.find(geo => geo.properties?.SHORT_FORM === 'Micronesia, Federated States of')

    expect(micronesia).toBeDefined()
    expect(borrowedMicronesia).toBeDefined()
    expect(micronesia?.geometry.type).toBe('MultiPolygon')
    expect(borrowedMicronesia?.geometry.coordinates[0][0][0][0]).toBe(micronesia?.geometry.coordinates[0][0][0][0])
    expect(borrowedMicronesia?.geometry.coordinates[0][0][0][1]).toBe(micronesia?.geometry.coordinates[0][0][0][1])
  })
})
