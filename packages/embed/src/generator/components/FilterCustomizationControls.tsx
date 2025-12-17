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
        <p style={{ margin: 0, color: '#666' }}>ℹ️ This visualization has no filters to customize.</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '4px', marginBottom: '1.5rem' }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#005eaa' }}>1. Customize Filter Defaults</h2>

      <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', color: '#666' }}>
        Set the default values and visibility for filters in your embed.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filters.map((filter, index) => {
          const state = filterState[filter.key] || { value: '', hide: false }
          const hasValues = filter.values && filter.values.length > 0

          return (
            <div
              key={filter.key || index}
              style={{
                padding: '1rem',
                background: 'white',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
            >
              <div style={{ marginBottom: '0.75rem' }}>
                <label
                  htmlFor={`filter-${index}`}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '0.95rem',
                    color: '#333',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}
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
                      fontSize: '0.95rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc'
                    }}
                  >
                    {filter.values?.map((value, valueIndex) => (
                      <option key={valueIndex} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div style={{ padding: '0.5rem', color: '#999', fontStyle: 'italic' }}>No values available</div>
                )}
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type='checkbox'
                    checked={state.hide}
                    onChange={e => onHideToggle(filter.key, e.target.checked)}
                    style={{ marginRight: '0.5rem' }}
                  />
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>Hide this filter in embed</span>
                </label>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilterCustomizationControls
