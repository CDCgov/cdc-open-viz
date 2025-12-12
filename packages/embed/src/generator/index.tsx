import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GeneratorApp from './GeneratorApp'

const container = document.getElementById('generator-root')

if (container) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <GeneratorApp />
    </StrictMode>
  )
}
