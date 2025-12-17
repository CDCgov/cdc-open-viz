import React from 'react'
import { FilterMetadata, FilterState } from '../../shared/filterUtils'

type FilterCustomizationControlsProps = {
  filters: FilterMetadata[]
  filterState: Record<string, FilterState>
  onFilterChange: (filterKey: string, value: string) => void
  onHideToggle: (filterKey: string, hide: boolean) => void
}

/**
 * Custom filter controls for setting embed defaults and hide options
 * These are the source of truth for the embed code generation
 */
const FilterCustomizationControls: React.FC<FilterCustomizationControlsProps> = ({
  filters,
  filterState,
  onFilterChange,
  onHideToggle
}) => {
  if (filters.length === 0) {
    return (
      <div style={{ padding: '1.5rem', background: '#e8f4f8', borderRadius: '4px', marginBottom: '1.5rem' }}>
        <p>ℹ️ This visualization has no filters to customize.</p>
      </div>
    )
  }

  return (
    <section style={{ marginBottom: '1.5rem' }}>
      <h2>1. Customize Filter Defaults</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        Set default values and visibility for the filters in your embedded visualization.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        {filters.map((filter, index) => {
          const state = filterState[filter.key] || { value: '', hide: false }
          const hasValues = filter.values && filter.values.length > 0

          return (
            <div
              key={filter.key || index}
              style={{
                padding: '1rem',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            >
              <div>
                <label
                  htmlFor={`filter-${index}`}
                  style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}
                >
                  {filter.label}
                </label>

                {hasValues ? (
                  <select
                    id={`filter-${index}`}
                    value={state.value}
                    onChange={e => onFilterChange(filter.key, e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      border: '1px solid #ccc',
                      borderRadius: '4px'
                    }}
                  >
                    {filter.values?.map((value, valueIndex) => (
                      <option key={valueIndex} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div style={{ color: '#999', fontStyle: 'italic' }}>No values available</div>
                )}
              </div>

              <div style={{ marginTop: '0.75rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontWeight: 'normal' }}>
                  <input
                    type='checkbox'
                    checked={state.hide}
                    onChange={e => onHideToggle(filter.key, e.target.checked)}
                    style={{ marginRight: '0.5rem' }}
                  />
                  <span style={{ color: '#666' }}>Hide filter in embed</span>
                </label>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FilterCustomizationControls
