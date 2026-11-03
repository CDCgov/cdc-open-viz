import type { DotDensityConfig } from '../types/MapConfig'

export default function DotDensityLegend({
  density,
  hiddenSeries,
  onToggle
}: {
  density: DotDensityConfig
  hiddenSeries: readonly string[]
  onToggle: (id: string) => void
}) {
  const unit = density.dotValue === 1 && density.unit === 'cases' ? 'case' : density.unit
  return (
    <fieldset className='mb-3'>
      <legend className='fs-6'>{density.legend.title || 'Dot density'}</legend>
      <p>
        1 dot = {density.dotValue.toLocaleString()} {unit}. Dots show approximate distribution within counties;
        remainders below one dot per county and series are omitted.
      </p>
      <div className='d-flex flex-wrap gap-3'>
        {density.series
          .filter(series => series.column)
          .map(series => (
            <label key={series.id} className='d-flex align-items-center gap-2'>
              <input type='checkbox' checked={!hiddenSeries.includes(series.id)} onChange={() => onToggle(series.id)} />
              <span
                aria-hidden='true'
                style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: series.color, flexShrink: 0 }}
              />
              {series.label || series.column}
            </label>
          ))}
      </div>
    </fieldset>
  )
}
