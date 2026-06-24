import { geoMercator } from 'd3-geo'

export type ContinentKey = 'world' | 'africa' | 'europe' | 'asia' | 'north_america' | 'south_america' | 'oceania'

// [minLon, minLat], [maxLon, maxLat]
export const CONTINENT_BOUNDS: Record<ContinentKey, [[number, number], [number, number]]> = {
  world: [
    [-180, -60],
    [180, 80]
  ],
  africa: [
    [-18, -35],
    [52, 38]
  ],
  europe: [
    [-25, 35],
    [45, 72]
  ],
  asia: [
    [26, -10],
    [180, 77]
  ],
  north_america: [
    [-170, 5],
    [-50, 72]
  ],
  south_america: [
    [-82, -56],
    [-34, 13]
  ],
  oceania: [
    [110, -50],
    [180, -5]
  ]
}

export const CONTINENT_OPTIONS = [
  { value: 'world', label: 'World (Default)' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'north_america', label: 'North America' },
  { value: 'south_america', label: 'South America' },
  { value: 'oceania', label: 'Oceania' }
]

const SVG_WIDTH = 880
const SVG_HEIGHT = 500
const SVG_PADDING = 25
const BASE_MERCATOR_SCALE = 153

export function computeAreaPosition(areaKey: string): { coordinates: [number, number]; zoom: number } {
  if (!areaKey || areaKey === 'world') return { coordinates: [0, 30], zoom: 1 }
  const bounds = CONTINENT_BOUNDS[areaKey as ContinentKey]
  if (!bounds) return { coordinates: [0, 30], zoom: 1 }
  const [[minLon, minLat], [maxLon, maxLat]] = bounds
  const bboxFeature = {
    type: 'Feature' as const,
    geometry: {
      type: 'Polygon' as const,
      coordinates: [
        [
          [minLon, minLat],
          [minLon, maxLat],
          [maxLon, maxLat],
          [maxLon, minLat],
          [minLon, minLat]
        ]
      ]
    },
    properties: {}
  }
  const fitted = geoMercator().fitExtent(
    [
      [SVG_PADDING, SVG_PADDING],
      [SVG_WIDTH - SVG_PADDING, SVG_HEIGHT - SVG_PADDING]
    ],
    bboxFeature
  )
  const zoom = fitted.scale() / BASE_MERCATOR_SCALE
  const center = fitted.invert?.([SVG_WIDTH / 2, SVG_HEIGHT / 2])
  if (center && isFinite(center[0]) && isFinite(center[1])) {
    return { coordinates: center as [number, number], zoom }
  }
  return { coordinates: [0, 30], zoom: 1 }
}
