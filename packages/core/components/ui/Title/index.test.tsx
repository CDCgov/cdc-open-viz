import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Title from './index'

const baseConfig = {
  type: 'chart',
  theme: 'theme-blue'
} as any

describe('Title', () => {
  it('does not add legacy bottom margin classes for wrapped visualizations', () => {
    render(<Title title='Wrapped title' titleStyle='legacy' config={baseConfig} />)

    expect(screen.getByRole('banner')).not.toHaveClass('mb-3')
  })

  it('keeps legacy dashboard title spacing classes', () => {
    render(<Title title='Dashboard title' titleStyle='legacy' config={baseConfig} isDashboard={true} />)

    expect(screen.getByRole('banner')).toHaveClass('mb-3')
  })

  it('renders legacy custom header markup via modern shim wrapper', () => {
    const legacyHeaderTitle =
      '<header class="cove-component__header component__header theme-blue mb-0"><h2>Medicaid Coverage of Cessation Treatments, 2024-Q2</h2></header>'

    const { container } = render(<Title title={legacyHeaderTitle} titleStyle='small' config={baseConfig} />)

    expect(container.querySelector('.cove-title__legacy-shim')).toBeInTheDocument()
    expect(container.querySelector('.cove-title h3')).not.toBeInTheDocument()
    expect(container.querySelector('header.cove-component__header.component__header')).toBeInTheDocument()
  })
})
