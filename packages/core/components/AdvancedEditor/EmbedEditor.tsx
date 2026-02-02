import React, { useState, useEffect, useMemo } from 'react'
import {
  generateEmbedCode,
  extractFilters,
  initializeFilterState,
  buildFilterUrlParams,
  type FilterMetadata,
  type FilterState
} from '../../helpers/embed'
import '../../helpers/embed' // Initialize embed helper for iframe resizing

type EmbedEditorProps = {
  config?: any // Current visualization config
}

type TabId = 'filters' | 'code'

/**
 * EmbedEditor - Provides "Share with Partners" functionality
 * Generates embed codes for iframe embedding of visualizations
 * Now includes filter customization, preview, and embed code generation
 */
export const EmbedEditor: React.FC<EmbedEditorProps> = ({ config }) => {
  const [configUrl, setConfigUrl] = useState<string | null>(null)
  const [showEmbedModal, setShowEmbedModal] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState<TabId>('filters')
  const [embedCodeCopied, setEmbedCodeCopied] = useState(false)

  // Extract filters from config
  const filters = useMemo(() => extractFilters(config), [config])

  // Initialize filter state
  const [filterState, setFilterState] = useState<Record<string, FilterState>>({})

  // Update filter state when filters change
  useEffect(() => {
    if (filters.length > 0) {
      setFilterState(initializeFilterState(filters))
    }
  }, [filters])

  // Check if all filters have setByQueryParameter
  const filtersAreValid = useMemo(() => {
    if (!config) return true

    // Check regular filters
    const regularFilters = config.filters || []
    // Check dashboard shared filters
    const sharedFilters = config.dashboard?.sharedFilters || []

    const allFilters = [...regularFilters, ...sharedFilters]

    // If no filters, valid
    if (allFilters.length === 0) return true

    // All filters must have setByQueryParameter
    return allFilters.every((filter: any) => !!filter.setByQueryParameter)
  }, [config])

  // Determine available tabs
  const hasFilters = filters.length > 0 && filtersAreValid
  const availableTabs: TabId[] = hasFilters ? ['filters', 'code'] : ['code']

  // Generate embed code with current filter settings
  const embedCode = useMemo(() => {
    if (!configUrl) return ''

    const urlParams = buildFilterUrlParams(filters, filterState)
    return generateEmbedCode({
      configUrl,
      urlParams
    })
  }, [configUrl, filters, filterState])

  // Detect configUrl from WCMS permalink or use dev fallback
  useEffect(() => {
    // Try to get config URL from WCMS permalink element
    const permalinkElement = document.querySelector('#sample-permalink') as HTMLAnchorElement

    if (permalinkElement?.href) {
      try {
        // Parse the URL and extract just the pathname (strip host)
        const url = new URL(permalinkElement.href)
        const pathname = url.pathname
        setConfigUrl(pathname)
      } catch (err) {
        console.warn('[EmbedEditor] Failed to parse permalink URL:', err)
      }
    } else {
      // Check if we're in development mode
      const isDevelopment =
        process.env.NODE_ENV === 'development' ||
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'

      if (isDevelopment) {
        // Use fallback only in development
        const fallbackUrl = '/examples/line-chart-states.json'
        setConfigUrl(fallbackUrl)
      } else {
        // In production without permalink, don't show embed section
        console.warn('[EmbedEditor] No permalink found and not in development mode')
        setConfigUrl(null)
      }
    }
  }, [])

  // Handle showing embed code modal
  const handleShowEmbedCode = () => {
    if (!configUrl) {
      alert('This visualization must be published before generating embed code.')
      return
    }

    // Set initial tab based on available tabs
    setActiveTab(availableTabs[0])
    setShowEmbedModal(true)
    setEmbedCodeCopied(false)
  }

  // Handle filter value change
  const handleFilterChange = (filterKey: string, value: string) => {
    setFilterState(prev => ({
      ...prev,
      [filterKey]: {
        ...prev[filterKey],
        value
      }
    }))
  }

  // Handle filter hide toggle
  const handleHideToggle = (filterKey: string, hide: boolean) => {
    setFilterState(prev => ({
      ...prev,
      [filterKey]: {
        ...prev[filterKey],
        hide
      }
    }))
  }

  // Handle copying embed code from modal
  const handleCopyFromModal = async () => {
    try {
      await navigator.clipboard.writeText(embedCode)
      setEmbedCodeCopied(true)
      setTimeout(() => setEmbedCodeCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy embed code:', err)
      alert('Failed to copy to clipboard. Please copy manually.')
    }
  }

  // Handle closing modal
  const handleCloseModal = () => {
    setShowEmbedModal(false)
    setEmbedCodeCopied(false)
  }

  return (
    <>
      {/* Collapsible Share with Partners Section */}
      <div className='share-partners' style={{ padding: '0 1em 1em', textAlign: 'left' }}>
        <span
          className='advanced-toggle-link'
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ paddingTop: '1em', display: 'block', cursor: 'pointer', textDecoration: 'underline' }}
        >
          <span
            style={{ textDecoration: 'none', display: 'inline-block', fontFamily: 'monospace', paddingRight: '5px' }}
          >
            {isExpanded ? `— ` : `+ `}
          </span>
          Share with Partners
        </span>

        {isExpanded && (
          <div style={{ paddingTop: '1em' }}>
            {!configUrl ? (
              <div
                style={{
                  padding: '0.75em',
                  background: '#fff3cd',
                  border: '1px solid #ffc107',
                  borderRadius: '4px',
                  marginBottom: '0.5em'
                }}
              >
                <p style={{ fontSize: '0.85em', margin: 0, color: '#856404' }}>
                  ⚠️ An embed code cannot be generated until this visualization has been saved.
                </p>
              </div>
            ) : !filtersAreValid ? (
              <div
                style={{
                  padding: '0.75em',
                  background: '#fff3cd',
                  border: '1px solid #ffc107',
                  borderRadius: '4px',
                  marginBottom: '0.5em'
                }}
              >
                <p style={{ fontSize: '0.85em', margin: '0 0 0.5em 0', fontWeight: 'bold', color: '#856404' }}>
                  ⚠️ Embed Code Not Available
                </p>
                <p style={{ fontSize: '0.85em', margin: 0, color: '#856404' }}>
                  To enable embedding, all filters must have the "Query String Parameter" field set. Some filters are
                  missing this field. After setting the field, make sure to save your visualization.
                </p>
              </div>
            ) : (
              <>
                <p style={{ fontSize: '0.85em', marginBottom: '1em', color: '#666' }}>
                  Generate embed codes for partners to add this visualization to their websites. Your visualization will
                  need to be published to Link (www.cdc.gov) before it can be embedded by a partner.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
                  <button
                    className='btn btn-primary'
                    onClick={handleShowEmbedCode}
                    style={{ width: '100%', textAlign: 'left' }}
                  >
                    Get Embed Code
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Embed Code Modal with Tabs */}
      {showEmbedModal && (
        <div
          className='modal-overlay'
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '5vh',
            zIndex: 9999
          }}
          onClick={handleCloseModal}
        >
          <div
            className='modal-content'
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              maxWidth: '800px',
              width: '90%',
              maxHeight: '90vh',
              margin: '20px',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className='modal-header'
              style={{
                padding: '15px 20px',
                borderBottom: '1px solid #e0e0e0',
                backgroundColor: '#005eaa',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '8px 8px 0 0'
              }}
            >
              <h3 style={{ color: 'white', margin: 0 }}>Share with Partners</h3>
              <button
                onClick={handleCloseModal}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.5em',
                  cursor: 'pointer',
                  padding: '0 5px',
                  lineHeight: 1
                }}
                aria-label='Close'
              >
                ×
              </button>
            </div>

            {/* Tab Navigation */}
            <div
              style={{
                display: 'flex',
                borderBottom: '1px solid #e0e0e0',
                backgroundColor: '#f5f5f5'
              }}
            >
              {availableTabs.map(tab => {
                const tabLabels: Record<TabId, string> = {
                  filters: 'Customize Filters',
                  code: 'Get Embed Code'
                }

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      border: 'none',
                      backgroundColor: activeTab === tab ? 'white' : 'transparent',
                      borderBottom: activeTab === tab ? '2px solid #005eaa' : '2px solid transparent',
                      color: activeTab === tab ? '#005eaa' : '#666',
                      fontWeight: activeTab === tab ? 'bold' : 'normal',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {tabLabels[tab]}
                  </button>
                )
              })}
            </div>

            {/* Tab Content */}
            <div
              className='modal-body'
              style={{
                padding: '20px',
                flex: 1,
                overflow: 'auto'
              }}
            >
              {/* Filters Tab - Contains both filter controls and preview */}
              {activeTab === 'filters' && hasFilters && (
                <div>
                  <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>Filter Settings</h4>
                  <p style={{ marginBottom: '1rem', color: '#666' }}>
                    Set default values and visibility for filters in the partner's embedded visualization.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
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
                          <label
                            htmlFor={`filter-${index}`}
                            style={{
                              display: 'block',
                              marginBottom: '0.5rem',
                              fontWeight: 'bold'
                            }}
                          >
                            {filter.label}
                          </label>

                          {hasValues ? (
                            <select
                              id={`filter-${index}`}
                              value={state.value}
                              onChange={e => handleFilterChange(filter.key, e.target.value)}
                              style={{
                                width: '100%',
                                padding: '0.5rem',
                                fontSize: '0.9rem',
                                border: '2px solid #d1d5db',
                                borderRadius: '6px',
                                backgroundColor: '#f9fafb',
                                cursor: 'pointer'
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

                          <div style={{ marginTop: '0.75rem' }}>
                            <label
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                fontWeight: 'normal'
                              }}
                            >
                              <input
                                type='checkbox'
                                checked={state.hide}
                                onChange={e => handleHideToggle(filter.key, e.target.checked)}
                                style={{ marginRight: '0.5rem' }}
                              />
                              <span style={{ color: '#666' }}>Hide filter in embed</span>
                            </label>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Preview Section */}
                  <h4 style={{ marginBottom: '1rem' }}>Preview</h4>
                  <p style={{ marginBottom: '1rem', color: '#666' }}>
                    This shows how the visualization will appear on the partner website with your selected settings. The
                    partner will have control over the width of the embedded visualization.
                  </p>
                  <div
                    style={{
                      border: '2px dashed #999',
                      borderRadius: '4px',
                      padding: '1rem'
                    }}
                  >
                    <div
                      key={`${configUrl}-${JSON.stringify(filterState)}`}
                      data-cove-embed
                      data-config-url={(() => {
                        const urlParams = buildFilterUrlParams(filters, filterState)
                        const params = new URLSearchParams()
                        Object.entries(urlParams).forEach(([key, value]) => {
                          if (value) params.set(key, value)
                        })
                        return params.toString() ? `${configUrl}?${params.toString()}` : configUrl || ''
                      })()}
                    />
                  </div>
                </div>
              )}

              {/* Embed Code Tab */}
              {activeTab === 'code' && (
                <div>
                  <p style={{ marginBottom: '10px', color: '#666' }}>
                    Copy this code and send it to the partner so they can add it to their site:
                  </p>
                  <textarea
                    readOnly
                    value={embedCode}
                    style={{
                      width: '100%',
                      height: '200px',
                      fontFamily: 'monospace',
                      fontSize: '0.85em',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                    onFocus={e => e.target.select()}
                  />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div
              className='modal-footer'
              style={{
                padding: '15px 20px',
                borderTop: '1px solid #e0e0e0',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '10px'
              }}
            >
              <button className='btn btn-secondary' onClick={handleCloseModal}>
                Close
              </button>
              {activeTab === 'code' && (
                <button className='btn btn-primary' onClick={handleCopyFromModal} style={{ minWidth: '120px' }}>
                  {embedCodeCopied ? '✓ Copied!' : 'Copy to Clipboard'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EmbedEditor
