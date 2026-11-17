import { useMemo, useRef, useState } from 'react'
import ConfigContext from '../../context'
import { LegendMemoProvider } from '../../context/LegendMemoContext'
import CountyMap from '../../components/UsaMap/components/UsaMap.County'
import { createNewMapConfig } from '../../helpers/createNewMapConfig'
import type { MapContext } from '../../types/MapContext'

const defaultRows = [{ FIPS: '04013', Cases: 50 }]

/** Keep the real county renderer mounted across runtime config changes. */
export default function CountyDotDensityRuntimeHarness({ rows = defaultRows }: { rows?: typeof defaultRows }) {
  const [config, setConfig] = useState(() =>
    createNewMapConfig({
      type: 'map',
      general: {
        type: 'data',
        geoType: 'us-county',
        allowMapZoom: true,
        countyCensusYear: '2019',
        territoriesAlwaysShow: false
      },
      columns: { geo: { name: 'FIPS' }, primary: { name: '' } },
      data: rows,
      dotDensity: {
        enabled: true,
        dotValue: 5,
        radius: 2,
        seed: 42,
        series: [{ id: 'cases', column: 'Cases', color: '#0072B2', label: 'Cases' }]
      }
    })
  )
  const runtimeData = useMemo(() => Object.fromEntries(rows.map(row => [row.FIPS, row])), [rows])
  const runtimeLegend = useMemo(() => ({ items: [] }), [])
  const runtimeFilters = useMemo(() => [], [])
  const memo = useRef(new Map())
  const tooltipRef = useRef<HTMLDivElement>(null)
  return (
    <div className='cdc-map cove-visualization' style={{ width: 800 }}>
      <button
        type='button'
        onClick={() =>
          setConfig(previous => ({
            ...previous,
            dotDensity: { ...previous.dotDensity!, enabled: !previous.dotDensity?.enabled }
          }))
        }
      >
        Toggle runtime density
      </button>
      <LegendMemoProvider
        legendMemo={memo}
        legendSpecialClassLastMemo={memo}
        bubbleLegendMemo={memo}
        bubbleLegendSpecialClassLastMemo={memo}
        getBubbleLegendMemo={() => memo}
        getBubbleLegendSpecialClassLastMemo={() => memo}
      >
        <ConfigContext.Provider
          value={
            {
              config,
              runtimeData,
              runtimeLegend,
              runtimeFilters,
              setConfig,
              filteredStateCode: '',
              filteredCountyCode: '',
              setFilteredStateCountyCode: () => {},
              tooltipId: 'runtime-density-tooltip',
              tooltipRef
            } as unknown as MapContext
          }
        >
          <CountyMap />
          <div ref={tooltipRef} id='runtime-density-tooltip' />
        </ConfigContext.Provider>
      </LegendMemoProvider>
    </div>
  )
}
