import { render } from '@testing-library/react'
import { vi } from 'vitest'

import ConfigContext from '../context'
import CityList from './CityList'

vi.mock('../context/LegendMemoContext', () => ({
  useLegendMemoContext: () => ({
    legendMemo: { current: new Map() },
    legendSpecialClassLastMemo: { current: new Map() }
  })
}))

vi.mock('../helpers/applyLegendToRow', () => ({
  applyLegendToRow: () => ['#0056b3']
}))

vi.mock('../helpers/isLegendItemDisabled', () => ({
  isLegendItemDisabled: () => false
}))

vi.mock('../hooks/useGeoClickHandler', () => ({
  default: () => ({ geoClickHandler: vi.fn() })
}))

vi.mock('../hooks/useApplyTooltipsToGeo', () => ({
  default: () => ({ applyTooltipsToGeo: vi.fn(() => '') })
}))

const config = {
  columns: {
    geo: { name: 'Site' },
    latitude: { name: 'Latitude_jitter' },
    longitude: { name: 'Longitude_jitter' },
    navigate: { name: '' }
  },
  general: {
    geoBorderColor: 'darkGray',
    geoType: 'single-state'
  },
  legend: {
    showSpecialClassesLast: false
  },
  tooltips: {
    appearanceType: 'hover'
  },
  visual: {
    additionalCityStyles: [],
    cityStyle: 'circle',
    geoCodeCircleSize: 4
  }
} as any

describe('CityList', () => {
  it('renders valid coordinates and skips a whitespace-coordinate row that cannot be projected', () => {
    const validRow = {
      Site: 'Valid Montana site',
      Latitude_jitter: 47.060032,
      Longitude_jitter: -109.421
    }
    const placeholderRow = {
      Site: ' ',
      Latitude_jitter: ' ',
      Longitude_jitter: ' '
    }
    const runtimeData = {
      valid: validRow,
      placeholder: placeholderRow
    }
    const projection = vi.fn(([longitude, latitude]: [number, number]) => {
      if (longitude === -109.421 && latitude === 47.060032) return [120, 80]
      return null
    })

    const { container } = render(
      <ConfigContext.Provider
        value={
          {
            config,
            position: { coordinates: [-109.421, 47.060032], zoom: 1 },
            runtimeData,
            runtimeLegend: { items: [] }
          } as any
        }
      >
        <svg>
          <CityList
            isFilterValueSupported={false}
            projection={projection}
            setSharedFilterValue=''
            tooltipId='city-list-test'
          />
        </svg>
      </ConfigContext.Provider>
    )

    expect(runtimeData.placeholder).toBe(placeholderRow)
    expect(projection).toHaveBeenCalledWith([0, 0])
    const markers = container.querySelectorAll('g.geo-point')
    expect(markers).toHaveLength(1)
    expect(markers[0]).toHaveAttribute('transform', 'translate(120,80) scale(1)')
  })
})
