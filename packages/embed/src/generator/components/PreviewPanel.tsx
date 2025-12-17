import React from 'react'
import { FilterMetadata, FilterState, buildFilterUrlParams } from '../../shared/filterUtils'
import { getDefaultEmbedBaseUrl } from '@cdc/core/helpers/embedCodeGenerator'

type PreviewPanelProps = {
  configUrl: string
  filters: FilterMetadata[]
  filterState: Record<string, FilterState>
}

/**
 * Live preview of the embed using an iframe
 * Shows the actual embed experience with current filter settings
 */
const PreviewPanel: React.FC<PreviewPanelProps> = ({ configUrl, filters, filterState }) => {
  // Build iframe URL with filter parameters
  const params = new URLSearchParams()
  params.set('configUrl', configUrl)

  // Add filter parameters
  const filterParams = buildFilterUrlParams(filters, filterState)
  Object.entries(filterParams).forEach(([key, value]) => {
    params.set(key, value)
  })

  const iframeUrl = `${getDefaultEmbedBaseUrl()}?${params.toString()}`

  return (
    <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '4px', border: '1px solid #ddd' }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#005eaa' }}>2. Preview</h2>

      <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#666' }}>
        This shows how the visualization will appear on partner websites with your selected settings.
      </p>

      <div style={{ border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
        <iframe
          key={iframeUrl} // Force reload when URL changes
          src={iframeUrl}
          data-cove-embed
          title='Embed Preview'
          style={{
            width: '100%',
            minHeight: '500px',
            border: 'none',
            display: 'block'
          }}
        />
      </div>
    </div>
  )
}

export default PreviewPanel
