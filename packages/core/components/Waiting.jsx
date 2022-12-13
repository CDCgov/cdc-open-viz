import React from 'react'
import '../styles/waiting.scss'

export default ({ requiredColumns, className }) => (
  <section className={className}>
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
