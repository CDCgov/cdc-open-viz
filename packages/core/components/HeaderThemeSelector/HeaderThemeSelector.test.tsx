import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import HeaderThemeSelector from '../HeaderThemeSelector'

describe('HeaderThemeSelector', () => {
  const mockHeaderColors = ['theme-blue', 'theme-purple', 'theme-brown']
  const mockOnThemeSelect = jest.fn()

  beforeEach(() => {
    mockOnThemeSelect.mockClear()
  })

  it('renders with default props', () => {
    render(
      <HeaderThemeSelector
        onThemeSelect={mockOnThemeSelect}
      />
    )

    expect(screen.getByText('Header Theme')).toBeInTheDocument()
    // Should render all 11 default theme colors
    expect(screen.getAllByRole('button')).toHaveLength(11)
  })

  it('renders custom label', () => {
    render(
      <HeaderThemeSelector
        onThemeSelect={mockOnThemeSelect}
        label="Custom Theme Label"
      />
    )

    expect(screen.getByText('Custom Theme Label')).toBeInTheDocument()
  })

  it('renders custom theme colors when provided', () => {
    render(
      <HeaderThemeSelector
        headerColors={mockHeaderColors}
        onThemeSelect={mockOnThemeSelect}
      />
    )

    mockHeaderColors.forEach(theme => {
      const button = screen.getByTitle(theme)
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass(theme)
    })

    // Should only render the custom colors, not the defaults
    expect(screen.getAllByRole('button')).toHaveLength(mockHeaderColors.length)
  })

  it('marks selected theme with selected class', () => {
    render(
      <HeaderThemeSelector
        selectedTheme="theme-purple"
        onThemeSelect={mockOnThemeSelect}
      />
    )

    const selectedButton = screen.getByTitle('theme-purple')
    expect(selectedButton).toHaveClass('selected', 'theme-purple')

    const nonSelectedButton = screen.getByTitle('theme-blue')
    expect(nonSelectedButton).toHaveClass('theme-blue')
    expect(nonSelectedButton).not.toHaveClass('selected')
  })

  it('calls onThemeSelect when theme button is clicked', () => {
    render(
      <HeaderThemeSelector
        onThemeSelect={mockOnThemeSelect}
      />
    )

    const blueButton = screen.getByTitle('theme-blue')
    fireEvent.click(blueButton)

    expect(mockOnThemeSelect).toHaveBeenCalledWith('theme-blue')
    expect(mockOnThemeSelect).toHaveBeenCalledTimes(1)
  })

  it('prevents default action on button click', () => {
    render(
      <HeaderThemeSelector
        onThemeSelect={mockOnThemeSelect}
      />
    )

    const button = screen.getByTitle('theme-blue')
    const clickEvent = new MouseEvent('click', { bubbles: true })
    const preventDefaultSpy = jest.spyOn(clickEvent, 'preventDefault')

    fireEvent(button, clickEvent)

    expect(preventDefaultSpy).toHaveBeenCalled()
  })
})
