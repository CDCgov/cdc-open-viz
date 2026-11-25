import { describe, expect, it } from 'vitest'
import { geoCentroid } from 'd3-geo'
import { feature } from 'topojson-client'
import { getBubbleLocation, getBubbleProjection, getPlacedBubbleRows } from '../bubblePlacement'
import { getStateCalloutPosition, stateCallouts } from '../stateCallouts'
import type { BubbleCandidate } from '../bubbleRenderData'
import topology from '../../components/UsaMap/data/us-topo.json'

const projection = getBubbleProjection('us')
const candidate = (uid: string, radius = 14, layerIndex = 0) =>
  ({
    uid,
    sourceRow: { uid, State: uid },
    geoColumnName: 'State',
    radius,
    layerIndex,
    placeOverLabels: true
  } as BubbleCandidate)

const calloutPositions = Object.fromEntries(
  (feature(topology as any, topology.objects.states as any) as any).features.flatMap(geo => {
    const position = getStateCalloutPosition(geo.properties.iso, projection(geoCentroid(geo)))
    return position ? [[geo.properties.iso, position.bubbleCenter]] : []
  })
)

describe('US bubble placement and paint order', () => {
  it.each([undefined, false, '', null, 'true', 1])('uses geography placement without explicit opt-in (%s)', value => {
    const row = { ...candidate('US-MA'), placeOverLabels: value } as BubbleCandidate
    expect(getBubbleLocation(row, 'us', projection, calloutPositions)).toEqual(getBubbleLocation(row, 'us', projection))
  })

  it('places mixed layers independently at geography and callout centers', () => {
    const rows = [candidate('US-MA'), { ...candidate('US-MA', 14, 1), placeOverLabels: false }]
    const placed = getPlacedBubbleRows(rows, 'us', projection, calloutPositions)
    expect(placed[0].location.projectedCoordinates).toEqual(calloutPositions['US-MA'])
    expect(placed[1].location.projectedCoordinates).toEqual(
      getBubbleLocation(rows[1], 'us', projection)!.projectedCoordinates
    )
  })

  it.each(Object.keys(stateCallouts).filter(uid => uid !== 'US-DC'))(
    'places %s at the visible center of its callout text',
    uid => {
      const placed = getBubbleLocation(candidate(uid), 'us', projection, calloutPositions)!
      expect(placed.projectedCoordinates).toEqual(calloutPositions[uid])
      expect(placed.projectedCoordinates).not.toEqual(
        getBubbleLocation(candidate(uid), 'us', projection)!.projectedCoordinates
      )
    }
  )

  it('shares the DC callout center and ignores unsupported or unprojectable callouts', () => {
    const dc = getStateCalloutPosition('US-DC', [100, 200])!
    expect(dc).toEqual({ lineEnd: [158, 242], bubbleCenter: [171.5, 240.7] })
    expect(
      getBubbleLocation(candidate('US-DC'), 'us', projection, { 'US-DC': dc.bubbleCenter })!.projectedCoordinates
    ).toEqual(dc.bubbleCenter)
    expect(getStateCalloutPosition('US-TX', [100, 200])).toBeNull()
    expect(getStateCalloutPosition('US-MA', null)).toBeNull()
  })

  it('scales the bubble correction with font size while leaving text and leaders fixed', () => {
    const desktop = getStateCalloutPosition('US-MD', [100, 200], 13)!
    const mobile = getStateCalloutPosition('US-MD', [100, 200], 16)!
    expect(mobile.lineEnd).toEqual(desktop.lineEnd)
    expect(desktop.lineEnd[1] - desktop.bubbleCenter[1]).toBeCloseTo(1.3)
    expect(mobile.lineEnd[1] - mobile.bubbleCenter[1]).toBeCloseTo(1.6)
  })

  it('uses each abbreviation’s estimated width and scales it with font size', () => {
    const ri = getStateCalloutPosition('US-RI', [100, 200], 13)!
    const ma = getStateCalloutPosition('US-MA', [100, 200], 13)!
    const mobileRi = getStateCalloutPosition('US-RI', [100, 200], 16)!
    expect(ri.bubbleCenter[0] - ri.lineEnd[0]).toBe(10.5)
    expect(ma.bubbleCenter[0] - ma.lineEnd[0]).toBe(14.5)
    expect(mobileRi.bubbleCenter[0] - mobileRi.lineEnd[0]).toBe(12)
  })

  it('leaves ordinary states and explicit coordinates at their geographic positions', () => {
    expect(getBubbleLocation(candidate('US-TX'), 'us', projection, calloutPositions)).toEqual(
      getBubbleLocation(candidate('US-TX'), 'us', projection)
    )
    const explicit = {
      ...candidate('US-MA'),
      usesExplicitCoordinates: true,
      latitudeColumnName: 'lat',
      longitudeColumnName: 'lng',
      sourceRow: { uid: 'US-MA', State: 'Massachusetts', lat: 42, lng: -71 }
    }
    expect(getBubbleLocation(explicit, 'us', projection, calloutPositions)!.projectedCoordinates).toEqual(
      projection([-71, 42])
    )
    expect(getPlacedBubbleRows([candidate('unknown')], 'us', projection)).toEqual([])
  })

  it('preserves layer priority, then largest-first ordering, then displayed Y and state ID', () => {
    const rows = [
      candidate('US-MA'),
      candidate('US-TX', 20),
      candidate('US-RI'),
      candidate('US-CT'),
      candidate('US-NH', 30, 1)
    ]
    const positions = { 'US-MA': [100, 20], 'US-RI': [100, 10], 'US-CT': [100, 20], 'US-TX': [100, 100] } as Record<
      string,
      [number, number]
    >
    const order = data => getPlacedBubbleRows(data, 'us', projection, positions).map(({ row }) => row.uid)
    expect(order(rows)).toEqual(['US-TX', 'US-RI', 'US-CT', 'US-MA', 'US-NH'])
    expect(order([...rows].reverse())).toEqual(order(rows))
    expect(rows[0].uid).toBe('US-MA')
  })

  it('orders equal-size ordinary states top to bottom as well', () => {
    const placed = getPlacedBubbleRows([candidate('US-TX'), candidate('US-WA'), candidate('US-CA')], 'us', projection)
    expect(placed.map(({ row }) => row.uid)).toEqual(['US-WA', 'US-CA', 'US-TX'])
    const y = placed.map(({ location }) => location.projectedCoordinates[1])
    expect(y).toEqual([...y].sort((a, b) => a - b))
  })

  it('retains world-map ordering and positions', () => {
    const world = getBubbleProjection('world')
    const rows = [candidate('USA', 10), candidate('CAN', 20)]
    expect(getPlacedBubbleRows(rows, 'world', world, { USA: [1, 2] }).map(({ row }) => row.uid)).toEqual(['USA', 'CAN'])
    expect(getBubbleLocation(rows[0], 'world', world, { USA: [1, 2] })).toEqual(
      getBubbleLocation(rows[0], 'world', world)
    )
  })
})
