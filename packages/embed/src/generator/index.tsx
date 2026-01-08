import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GeneratorApp from './GeneratorApp'
import '../embed-helper/index.js'

const container = document.getElementById('generator-root')

if (container) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <GeneratorApp />
    </StrictMode>
  )
}
