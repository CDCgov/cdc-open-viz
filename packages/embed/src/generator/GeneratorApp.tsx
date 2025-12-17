import React, { useState } from 'react'
import { useConfigLoader } from '../shared/useConfigLoader'
import { extractFilters, initializeFilterState, FilterState } from '../shared/filterUtils'
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
      <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#005eaa' }}>CDC COVE Embed Generator</h1>
        <div style={{ padding: '2rem', background: '#fff3cd', borderRadius: '4px', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#856404' }}>Missing Configuration</h2>
          <p style={{ color: '#856404' }}>
            No <code>configUrl</code> parameter provided.
          </p>
          <p style={{ color: '#856404' }}>
            <strong>Usage:</strong> <code>?configUrl=/path/to/config.json</code>
          </p>
        </div>
      </div>
    )
  }

  // Loading state
  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#005eaa' }}>CDC COVE Embed Generator</h1>
        <div style={{ padding: '2rem', marginTop: '2rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>Loading configuration...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#005eaa' }}>CDC COVE Embed Generator</h1>
        <div style={{ padding: '2rem', background: '#f8d7da', borderRadius: '4px', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#721c24' }}>Configuration Error</h2>
          <p style={{ color: '#721c24' }}>{error}</p>
          <p style={{ fontSize: '0.9rem', color: '#721c24', marginTop: '1rem' }}>
            Config URL: <code>{configUrl}</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#005eaa', marginBottom: '0.5rem' }}>CDC COVE Embed Generator</h1>
        <p style={{ color: '#666', fontSize: '1rem' }}>Customize your visualization embed code for partner websites</p>
      </header>

      {/* 1. Filter Customization Controls */}
      <FilterCustomizationControls
        filters={filters}
        filterState={filterState}
        onFilterChange={handleFilterChange}
        onHideToggle={handleHideToggle}
      />

      {/* 2. Preview */}
      <PreviewPanel configUrl={configUrl} filters={filters} filterState={filterState} />

      {/* 3. Generated Embed Code */}
      <EmbedCodeGenerator configUrl={configUrl} filters={filters} filterState={filterState} />
    </div>
  )
}

export default GeneratorApp
