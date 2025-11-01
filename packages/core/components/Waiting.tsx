import React from 'react'
import '../styles/waiting.scss'

const styles: React.CSSProperties = {
  position: 'relative',
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gridArea: 'content'
}

interface WaitingProps {
  requiredColumns: string[]
  className?: string
}

export default ({ requiredColumns, className }: WaitingProps) => (
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
