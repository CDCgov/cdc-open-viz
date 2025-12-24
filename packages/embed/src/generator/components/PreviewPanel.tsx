import React from 'react'
import { FilterMetadata, FilterState, buildFilterUrlParams } from '../../shared/filterUtils'
import { getEmbedPath } from '@cdc/core/helpers/embedCodeGenerator'

type PreviewPanelProps = {
  configUrl: string
  filters: FilterMetadata[]
  filterState: Record<string, FilterState>
  sectionNumber?: number
  showSelectedSettings?: boolean
}

/**
 * Live preview of the embed using an iframe
 * Shows the actual embed experience with current filter settings
 * NOTE: iframe attributes must match exactly what generateEmbedCode() produces
 * Uses relative path (getEmbedPath) since preview is on same origin
 */
const PreviewPanel: React.FC<PreviewPanelProps> = ({
  configUrl,
  filters,
  filterState,
  sectionNumber = 2,
  showSelectedSettings = true
}) => {
  // Build URL parameters from filter state (same as EmbedCodeGenerator)
  const urlParams = buildFilterUrlParams(filters, filterState)

  // Build iframe URL using relative path (same origin)
  const params = new URLSearchParams()
  params.set('configUrl', configUrl)
  Object.entries(urlParams).forEach(([key, value]) => {
    if (value) params.set(key, value)
  })
  const embedUrl = `${getEmbedPath()}?${params.toString()}`

  return (
    <section style={{ marginBottom: '1.5rem' }}>
      <h2>{sectionNumber}. Preview</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        This shows how the visualization will appear on your website
        {showSelectedSettings && ' with your selected settings'}.
      </p>

      <div
        style={{
          padding: '1.5rem',
          border: '2px dashed #999',
          boxShadow: 'inset 0 0 0 10px #ffffe0, 0 0 0 10px #ffffe0',
          borderRadius: '4px',
          marginTop: '1rem'
        }}
      >
        {/* iframe attributes must match generateEmbedCode() exactly */}
        <iframe
          key={embedUrl}
          src={embedUrl}
          data-cove-embed
          width='100%'
          height='400'
          frameBorder='0'
          title='CDC Data Visualization'
        />
      </div>
    </section>
  )
}

export default PreviewPanel
