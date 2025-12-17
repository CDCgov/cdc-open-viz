import React, { useState } from 'react'
import { FilterMetadata, FilterState, buildFilterUrlParams } from '../../shared/filterUtils'
import { generateEmbedCode } from '@cdc/core/helpers/embedCodeGenerator'

type EmbedCodeGeneratorProps = {
  configUrl: string
  filters: FilterMetadata[]
  filterState: Record<string, FilterState>
}

/**
 * Displays the generated embed code with copy functionality
 */
const EmbedCodeGenerator: React.FC<EmbedCodeGeneratorProps> = ({ configUrl, filters, filterState }) => {
  const [copied, setCopied] = useState(false)

  // Build URL parameters from filter state
  const urlParams = buildFilterUrlParams(filters, filterState)

  const embedCode = generateEmbedCode({
    configUrl,
    urlParams,
    height: '400'
  })

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
      alert('Failed to copy automatically. Please copy the code manually.')
    }
  }

  return (
    <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '4px', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.2rem', margin: 0, color: '#005eaa' }}>3. Copy Embed Code</h2>
        <button
          onClick={handleCopy}
          style={{
            padding: '0.6rem 1.25rem',
            background: copied ? '#28a745' : '#005eaa',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.95rem',
            fontWeight: 'bold',
            transition: 'background 0.2s'
          }}
        >
          {copied ? '✓ Copied!' : 'Copy Code'}
        </button>
      </div>

      <pre
        style={{
          background: 'white',
          padding: '1rem',
          borderRadius: '4px',
          overflow: 'auto',
          fontSize: '0.85rem',
          border: '1px solid #ddd',
          margin: 0,
          lineHeight: '1.4'
        }}
      >
        <code>{embedCode}</code>
      </pre>

      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        💡 Paste this code into your website where you want the visualization to appear.
      </div>
    </div>
  )
}

export default EmbedCodeGenerator
