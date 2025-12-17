import React, { useState, useMemo } from 'react'
import { useConfigLoader } from '../shared/useConfigLoader'
import { extractFilters, initializeFilterState, FilterState, allFiltersHaveQueryParam } from '../shared/filterUtils'
import FilterCustomizationControls from './components/FilterCustomizationControls'
import EmbedCodeGenerator from './components/EmbedCodeGenerator'
import PreviewPanel from './components/PreviewPanel'

/**
 * COVE Embed Generator - Phase 5
 * Allows partners to customize embed codes with filter defaults and hide options
 *
 * Layout:
 * 1. Filter customization controls (source of truth)
 * 2. Preview iframe
 * 3. Generated embed code
 */
const GeneratorApp: React.FC = () => {
  const params = new URLSearchParams(window.location.search)
  const configUrl = params.get('configUrl')

  // Load config to extract filter metadata
  const { loading, error, config } = useConfigLoader(configUrl)

  // Extract filter metadata from config (memoize to prevent unnecessary re-renders)
  const filters = React.useMemo(() => {
    const extracted = extractFilters(config)
    return extracted
  }, [config])

  // Check if all filters are valid (have setByQueryParameter)
  const allValid = useMemo(() => allFiltersHaveQueryParam(filters), [filters])

  // Check if there are no filters (simplified mode)
  const hasNoFilters = filters.length === 0

  // Initialize filter state from config defaults
  const [filterState, setFilterState] = useState<Record<string, FilterState>>({})

  // Update filter state when filters change (only depends on filters, not filterState)
  React.useEffect(() => {
    if (filters.length > 0) {
      const initialState = initializeFilterState(filters)
      setFilterState(initialState)
    }
  }, [filters])

  const handleFilterChange = (filterKey: string, value: string) => {
    setFilterState(prev => {
      const newState = {
        ...prev,
        [filterKey]: {
          ...prev[filterKey],
          value
        }
      }
      return newState
    })
  }

  const handleHideToggle = (filterKey: string, hide: boolean) => {
    setFilterState(prev => {
      const newState = {
        ...prev,
        [filterKey]: {
          ...prev[filterKey],
          hide
        }
      }
      return newState
    })
  }

  // No config URL provided
  if (!configUrl) {
    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>COVE Embed Generator</h1>
        <div style={{ padding: '2rem', background: '#fff3cd', borderRadius: '4px', marginTop: '2rem' }}>
          <h2>Missing Configuration</h2>
          <p>
            No <code>configUrl</code> parameter provided.
          </p>
          <p>
            <strong>Usage:</strong> <code>?configUrl=/path/to/config.json</code>
          </p>
        </div>
      </div>
    )
  }

  // Loading state
  if (loading) {
    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>COVE Embed Generator</h1>
        <div>
          <p style={{ color: '#666' }}>Loading configuration...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>COVE Embed Generator</h1>
        <div style={{ padding: '2rem', background: '#f8d7da', borderRadius: '4px', marginTop: '2rem' }}>
          <h2>Configuration Error</h2>
          <p>{error}</p>
          <p>
            Config URL: <code>{configUrl}</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1>COVE Embed Generator</h1>
        {!hasNoFilters && <p style={{ color: '#666' }}>Customize your visualization embed code.</p>}
      </header>

      {/* Warning if some filters don't have setByQueryParameter */}
      {!allValid && filters.length > 0 && (
        <div
          style={{
            padding: '1rem',
            background: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '4px',
            marginBottom: '1.5rem'
          }}
        >
          <p style={{ margin: 0, color: '#856404' }}>
            ⚠️ <strong>Note:</strong> Some filters in this visualization cannot be customized. To fix this, open the
            visualization in the COVE editor, set the "Query String Parameter" field for each filter, and save the
            visualization.
          </p>
        </div>
      )}

      {/* 1. Filter Customization Controls (only show if there are filters) */}
      {!hasNoFilters && (
        <FilterCustomizationControls
          filters={filters}
          filterState={filterState}
          onFilterChange={handleFilterChange}
          onHideToggle={handleHideToggle}
        />
      )}

      {/* Preview - section 1 if no filters, section 2 if filters */}
      <PreviewPanel
        configUrl={configUrl}
        filters={filters}
        filterState={filterState}
        sectionNumber={hasNoFilters ? 1 : 2}
        showSelectedSettings={!hasNoFilters}
      />

      {/* Generated Embed Code - section 2 if no filters, section 3 if filters */}
      <EmbedCodeGenerator
        configUrl={configUrl}
        filters={filters}
        filterState={filterState}
        sectionNumber={hasNoFilters ? 2 : 3}
      />
    </div>
  )
}

export default GeneratorApp
