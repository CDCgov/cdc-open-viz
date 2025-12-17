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
    <section style={{ marginBottom: '1.5rem' }}>
      <h2>3. Copy Embed Code</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        Copy your embed code, then paste it into your website where you want the visualization to appear.
      </p>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <button
          onClick={handleCopy}
          style={{
            padding: '0.6rem 1.25rem',
            background: copied ? '#28a745' : '#005eaa',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {copied ? '✓ Copied!' : 'Copy Code'}
        </button>
      </div>

      <pre
        style={{
          background: 'white',
          padding: '1rem',
          border: '1px solid #ddd',
          borderRadius: '4px',
          overflow: 'auto',
          fontFamily: 'monospace',
          fontSize: '0.85rem',
          lineHeight: '1.4'
        }}
      >
        <code>{embedCode}</code>
      </pre>
    </section>
  )
}

export default EmbedCodeGenerator
