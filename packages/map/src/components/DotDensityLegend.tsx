import LegendShape from '@cdc/core/components/LegendShape'
import type { DotDensityConfig, MapConfig } from '../types/MapConfig'

/** Density content inside the standard map legend's header, layout, and visibility controls. */
export default function DotDensityLegend({
  config,
  density,
  listClasses,
  hiddenSeries,
  onToggle
}: {
  config: MapConfig
  density: DotDensityConfig
  listClasses: string[]
  hiddenSeries: readonly string[]
  onToggle: (id: string) => void
}) {
  return (
    <div>
      <ul
        className={listClasses.filter(value => value !== 'patterns-only').join(' ')}
        aria-label='Dot density legend items'
      >
        {density.series.map(series => {
          if (!series.column) return null
          const hidden = hiddenSeries.includes(series.id)
          return (
            <li
              key={series.id}
              className={`legend-container__li legend-container__item--interactive d-flex align-items-center${
                hidden ? ' legend-container__li--disabled' : ''
              }`}
            >
              <button
                type='button'
                className='legend-container__li-btn'
                aria-pressed={!hidden}
                onClick={() => onToggle(series.id)}
              >
                <LegendShape shape={config.legend.style === 'boxes' ? 'square' : 'circle'} fill={series.color} />
                <span>{series.label || series.column}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
