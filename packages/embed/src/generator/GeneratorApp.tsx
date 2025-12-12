import React from 'react'

/**
 * Proof of Concept - Phase 0
 * Minimal placeholder for the generator tool
 */
const GeneratorApp: React.FC = () => {
  const params = new URLSearchParams(window.location.search)
  const configUrl = params.get('configUrl')

  return (
    <div
      style={{
        padding: '2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}
    >
      <h1 style={{ color: '#005eaa' }}>CDC COVE Embed Generator - Phase 0</h1>
      <p style={{ fontSize: '1.2rem', color: '#333' }}>✅ Generator page is working!</p>

      {configUrl ? (
        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            background: '#f0f0f0',
            borderRadius: '4px'
          }}
        >
          <strong>Config URL detected:</strong>
          <pre
            style={{
              textAlign: 'left',
              overflow: 'auto',
              fontSize: '0.9rem'
            }}
          >
            {configUrl}
          </pre>
        </div>
      ) : (
        <p style={{ marginTop: '2rem', color: '#666' }}>
          No configUrl parameter provided. <br />
          Try: <code>?configUrl=/path/to/config.json</code>
        </p>
      )}

      <div
        style={{
          marginTop: '2rem',
          padding: '1rem',
          background: '#e8f4f8',
          borderRadius: '4px',
          fontSize: '0.9rem'
        }}
      >
        <strong>Future functionality:</strong>
        <ul style={{ textAlign: 'left', lineHeight: '1.8' }}>
          <li>Load and parse config file</li>
          <li>Detect available filters</li>
          <li>Show filter selection UI with dropdowns</li>
          <li>Add "Hide in embed" checkbox for each filter</li>
          <li>Live preview panel showing the visualization</li>
          <li>Generate embed code with filter params</li>
          <li>Copy-to-clipboard functionality</li>
        </ul>
      </div>
    </div>
  )
}

export default GeneratorApp
