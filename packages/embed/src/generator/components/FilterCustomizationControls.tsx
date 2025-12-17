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
      <h2>1. Customize Filters</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        Set default values and visibility for the filters in your embedded visualization.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        {filters.map((filter, index) => {
          const state = filterState[filter.key] || { value: '', hide: false }
          const hasValues = filter.values && filter.values.length > 0
          const isDisabled = !filter.setByQueryParameter

          return (
            <div
              key={filter.key || index}
              style={{
                padding: '1rem',
                background: isDisabled ? '#f5f5f5' : 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                opacity: isDisabled ? 0.6 : 1
              }}
            >
              <div>
                <label
                  htmlFor={`filter-${index}`}
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 'bold',
                    color: isDisabled ? '#999' : 'inherit'
                  }}
                >
                  {filter.label}
                  {isDisabled && (
                    <span style={{ fontWeight: 'normal', fontSize: '0.85em', color: '#999', marginLeft: '0.5rem' }}>
                      (Cannot be set)
                    </span>
                  )}
                </label>

                {hasValues ? (
                  <select
                    id={`filter-${index}`}
                    value={state.value}
                    onChange={e => onFilterChange(filter.key, e.target.value)}
                    disabled={isDisabled}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      cursor: isDisabled ? 'not-allowed' : 'pointer'
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
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                    fontWeight: 'normal'
                  }}
                >
                  <input
                    type='checkbox'
                    checked={state.hide}
                    onChange={e => onHideToggle(filter.key, e.target.checked)}
                    disabled={isDisabled}
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
