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
  // Component should not be rendered if there are no filters
  // (handled by parent), but just in case, return null
  if (filters.length === 0) {
    return null
  }

  return (
    <section style={{ marginBottom: '1.5rem' }}>
      <h2>1. Customize {filters.length === 1 ? 'Filter' : 'Filters'}</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        Set default value{filters.length === 1 ? '' : 's'} and visibility for the{' '}
        {filters.length === 1 ? 'filter' : 'filters'} in your embedded visualization.
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
                      padding: '0.5rem 2rem 0.5rem 0.75rem',
                      fontSize: '0.9rem',
                      border: '2px solid #d1d5db',
                      borderRadius: '6px',
                      backgroundColor: isDisabled ? '#f3f4f6' : '#f9fafb',
                      cursor: isDisabled ? 'not-allowed' : 'pointer',
                      outline: 'none',
                      transition: 'border-color 0.15s ease-in-out',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.5rem center',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none'
                    }}
                    onFocus={e => {
                      if (!isDisabled) e.target.style.borderColor = '#3b82f6'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = '#d1d5db'
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
