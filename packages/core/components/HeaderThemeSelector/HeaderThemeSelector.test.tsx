import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import HeaderThemeSelector from './HeaderThemeSelector'

describe('HeaderThemeSelector', () => {
  it('selects a theme only when a swatch button is clicked', () => {
    const onThemeSelect = vi.fn()

    const { container } = render(
      <HeaderThemeSelector
        headerColors={['theme-blue', 'theme-cyan']}
        selectedTheme='theme-cyan'
        onThemeSelect={onThemeSelect}
      />
    )

    fireEvent.click(screen.getByText('Header Theme'))
    fireEvent.click(container.querySelector('.color-palette')!)
    expect(onThemeSelect).not.toHaveBeenCalled()

    fireEvent.click(screen.getByRole('button', { name: 'theme-blue' }))

    expect(onThemeSelect).toHaveBeenCalledTimes(1)
    expect(onThemeSelect).toHaveBeenCalledWith('theme-blue')
  })
})
