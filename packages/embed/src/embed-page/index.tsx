import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EmbedRenderer from './EmbedRenderer'

const container = document.getElementById('cove-embed-root')

if (container) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <EmbedRenderer />
    </StrictMode>
  )
}
