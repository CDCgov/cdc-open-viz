import React from 'react'
import '../styles/loading.scss'

export default function Loading({ viewport = 'lg' }) {
  return (
    <section className='loading' aria-live='assertive'>
      <span className='sr-only' style={{ display: 'none' }}>
        Content is loading.
      </span>
      <div className={`la-ball-beat la-dark ${viewport}`}>
        <div />
        <div />
        <div />
      </div>
    </section>
  )
}
