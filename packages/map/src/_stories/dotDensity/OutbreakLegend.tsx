type Props = {
  series: readonly { id: string; label: string; color: string }[]
  totals: number[]
  hiddenSeries: string[]
  onToggle: (id: string) => void
}

export default function OutbreakLegend({ series, totals, hiddenSeries, onToggle }: Props) {
  return (
    <fieldset style={{ border: '1px solid #c4cbd1', padding: 16, marginBottom: 16 }}>
      <legend style={{ fontSize: '1rem', width: 'auto', padding: '0 8px' }}>Diseases — toggle to compare</legend>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {series.map((category, index) => (
          <label key={category.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type='checkbox'
              checked={!hiddenSeries.includes(category.id)}
              onChange={() => onToggle(category.id)}
            />
            <span
              aria-hidden='true'
              style={{
                display: 'inline-block',
                width: 12,
                height: 12,
                flexShrink: 0,
                borderRadius: '50%',
                background: category.color
              }}
            />
            {category.label} — {totals[index].toLocaleString()} cases
          </label>
        ))}
      </div>
      <p style={{ margin: '8px 0 0' }}>
        Select a disease on its own to inspect its distribution. Counts are not adjusted for county population.
      </p>
    </fieldset>
  )
}
