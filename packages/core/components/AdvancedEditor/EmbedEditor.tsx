import React, { useState, useEffect } from 'react'
import { generateEmbedCode, generateGeneratorLink } from '../../helpers/embedCodeGenerator'

/**
 * EmbedEditor - Provides "Share with Partners" functionality
 * Generates embed codes for iframe embedding of visualizations
 */
export const EmbedEditor: React.FC = () => {
  const [configUrl, setConfigUrl] = useState<string | null>(null)
  const [showEmbedModal, setShowEmbedModal] = useState(false)
  const [embedCode, setEmbedCode] = useState('')
  const [embedCodeCopied, setEmbedCodeCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

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
        const fallbackUrl = '/examples/bar-chart.json'
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

    const code = generateEmbedCode({ configUrl })
    setEmbedCode(code)
    setShowEmbedModal(true)
    setEmbedCodeCopied(false)
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

  // Handle opening embed code generator
  const handleOpenGenerator = () => {
    if (!configUrl) {
      alert('This visualization must be published before using the embed code generator.')
      return
    }

    const generatorUrl = generateGeneratorLink(configUrl)
    window.open(generatorUrl, '_blank', 'noopener,noreferrer')
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
            {configUrl ? (
              <>
                <p style={{ fontSize: '0.85em', marginBottom: '1em', color: '#666' }}>
                  Generate embed codes for partners to add this visualization to their websites.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
                  <button
                    className='btn btn-primary'
                    onClick={handleShowEmbedCode}
                    style={{ width: '100%', textAlign: 'left' }}
                  >
                    Get Embed Code
                  </button>

                  <button
                    className='btn btn-outline-primary'
                    onClick={handleOpenGenerator}
                    style={{ width: '100%', textAlign: 'left' }}
                  >
                    Customize Embed Code →
                  </button>
                </div>
              </>
            ) : (
              <p style={{ fontSize: '0.85em', color: '#666', fontStyle: 'italic' }}>
                An embed code cannot be generated until this visualization has been saved.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Embed Code Modal */}
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
            alignItems: 'center',
            justifyContent: 'center',
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
              maxWidth: '600px',
              width: '90%',
              margin: '20px'
            }}
            onClick={e => e.stopPropagation()}
          >
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
              <h3 style={{ color: 'white', margin: 0 }}>Embed Code</h3>
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

            <div className='modal-body' style={{ padding: '20px' }}>
              <p style={{ marginBottom: '10px', color: '#666' }}>Copy this code and paste it into your website:</p>
              <textarea
                readOnly
                value={embedCode}
                style={{
                  width: '100%',
                  height: '180px',
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
              <button className='btn btn-primary' onClick={handleCopyFromModal} style={{ minWidth: '120px' }}>
                {embedCodeCopied ? '✓ Copied!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EmbedEditor
