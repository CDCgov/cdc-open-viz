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

  it('preserves legacy header compatibility classes', () => {
    render(<Title title='Legacy title' titleStyle='legacy' config={baseConfig} isDashboard={true} />)

    expect(screen.getByRole('banner')).toHaveClass(
      'cove-visualization__title',
      'cove-visualization__header',
      'cove-component__header',
      'component__header'
    )
  })
})
