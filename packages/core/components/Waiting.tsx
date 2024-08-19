import React from 'react'
import '../styles/waiting.scss'

const styles = {
  position: 'relative',
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gridArea: 'content'
}

export default ({ requiredColumns, className }) => (
  <section className={className} style={styles}>
    <section className='waiting-container'>
      <h3>Configuration Required</h3>
      <p>
        Set{' '}
        {requiredColumns.map((col, i) => (
          <span key={`missing-column-${i}`}>
            <strong>{col}</strong>
            {i + 1 < requiredColumns.length && ', '}
          </span>
        ))}{' '}
        columns in editor.
      </p>
    </section>
  </section>
)
