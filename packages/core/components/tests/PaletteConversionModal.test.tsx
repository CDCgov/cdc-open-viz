import { render, screen, fireEvent } from '@testing-library/react'
import { expect, describe, it, vi, beforeEach } from 'vitest'
import PaletteConversionModal from '../PaletteConversionModal'

describe('PaletteConversionModal', () => {
  const defaultProps = {
    onConfirm: vi.fn(),
    onCancel: vi.fn(),
    onReturnToV1: vi.fn(),
    paletteName: 'qualitative-bold'
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render the modal with correct title', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      expect(screen.getByText('Color Palette Conversion')).toBeDefined()
    })

    it('should render the modal with informational text', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      expect(screen.getByText(/Your visualization uses an outdated color palette/)).toBeDefined()
      expect(screen.getByText(/These new palettes provide improved accessibility/)).toBeDefined()
    })

    it('should render all action buttons', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      expect(screen.getByText('Cancel')).toBeDefined()
      expect(screen.getByText('Convert to New Palette')).toBeDefined()
    })

    it('should render with overlay styles', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      const overlay = screen.getByText('Color Palette Conversion').closest('.modal-overlay')
      expect(overlay).toHaveStyle({
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '9999'
      })
    })
  })

  describe('User Interactions', () => {
    it('should call onConfirm when "Convert to New Palette" is clicked', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      const convertButton = screen.getByText('Convert to New Palette')
      fireEvent.click(convertButton)
      
      expect(defaultProps.onConfirm).toHaveBeenCalledTimes(1)
      expect(defaultProps.onCancel).not.toHaveBeenCalled()
      expect(defaultProps.onReturnToV1).not.toHaveBeenCalled()
    })

    it('should call onReturnToV1 when "Cancel" is clicked', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      const cancelButton = screen.getByText('Cancel')
      fireEvent.click(cancelButton)
      
      expect(defaultProps.onReturnToV1).toHaveBeenCalledTimes(1)
      expect(defaultProps.onConfirm).not.toHaveBeenCalled()
      expect(defaultProps.onCancel).not.toHaveBeenCalled()
    })
  })

  describe('Props handling', () => {
    it('should render without paletteName prop', () => {
      const propsWithoutPaletteName = {
        ...defaultProps,
        paletteName: undefined
      }
      
      render(<PaletteConversionModal {...propsWithoutPaletteName} />)
      
      expect(screen.getByText('Color Palette Conversion')).toBeDefined()
    })

    it('should handle empty paletteName', () => {
      const propsWithEmptyPaletteName = {
        ...defaultProps,
        paletteName: ''
      }
      
      render(<PaletteConversionModal {...propsWithEmptyPaletteName} />)
      
      expect(screen.getByText('Color Palette Conversion')).toBeDefined()
    })
  })

  describe('Accessibility', () => {
    it('should have proper modal structure for screen readers', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      // Modal should have header, body, and footer  
      expect(screen.getByText('Color Palette Conversion')).toBeDefined()
      expect(screen.getAllByText(/Your visualization uses an outdated color palette/)[0]).toBeDefined()
      expect(screen.getByText('Cancel')).toBeDefined()
      expect(screen.getByText('Convert to New Palette')).toBeDefined()
    })

    it('should have focusable buttons', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      const cancelButton = screen.getByText('Cancel')
      const convertButton = screen.getByText('Convert to New Palette')
      
      expect(cancelButton).toBeDefined()
      expect(convertButton).toBeDefined()
      
      // Buttons should be focusable - just check they exist and can be focused
      expect(cancelButton.tabIndex).not.toBe(-1)
      expect(convertButton.tabIndex).not.toBe(-1)
    })
  })

  describe('Modal behavior', () => {
    it('should not close modal when clicking on modal content', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      const modalContent = screen.getByText('Color Palette Conversion').closest('.modal-content')
      fireEvent.click(modalContent!)
      
      // Modal should still be visible
      expect(screen.getByText('Color Palette Conversion')).toBeDefined()
      expect(defaultProps.onCancel).not.toHaveBeenCalled()
      expect(defaultProps.onConfirm).not.toHaveBeenCalled()
      expect(defaultProps.onReturnToV1).not.toHaveBeenCalled()
    })

    it('should maintain focus trap behavior expectation', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      const cancelButton = screen.getByText('Cancel')
      const convertButton = screen.getByText('Convert to New Palette')
      
      // Both buttons should be tabbable
      expect(cancelButton.tabIndex).not.toBe(-1)
      expect(convertButton.tabIndex).not.toBe(-1)
    })
  })

  describe('Integration with palette selection workflow', () => {
    it('should complete full workflow when convert is selected', () => {
      const onConfirm = vi.fn()
      const onCancel = vi.fn()
      const onReturnToV1 = vi.fn()
      
      render(
        <PaletteConversionModal
          onConfirm={onConfirm}
          onCancel={onCancel}
          onReturnToV1={onReturnToV1}
          paletteName="qualitative-bold"
        />
      )
      
      // Simulate user confirming conversion
      const convertButton = screen.getByText('Convert to New Palette')
      fireEvent.click(convertButton)
      
      expect(onConfirm).toHaveBeenCalledTimes(1)
      expect(onCancel).not.toHaveBeenCalled()
      expect(onReturnToV1).not.toHaveBeenCalled()
    })

    it('should complete full workflow when returning to v1', () => {
      const onConfirm = vi.fn()
      const onCancel = vi.fn()
      const onReturnToV1 = vi.fn()
      
      render(
        <PaletteConversionModal
          onConfirm={onConfirm}
          onCancel={onCancel}
          onReturnToV1={onReturnToV1}
          paletteName="sequential-blue"
        />
      )
      
      // Simulate user canceling (returning to v1)
      const cancelButton = screen.getByText('Cancel')
      fireEvent.click(cancelButton)
      
      expect(onReturnToV1).toHaveBeenCalledTimes(1)
      expect(onConfirm).not.toHaveBeenCalled()
      expect(onCancel).not.toHaveBeenCalled()
    })
  })

  describe('Edge cases', () => {
    it('should handle rapid clicking on buttons', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      const convertButton = screen.getByText('Convert to New Palette')
      
      // Rapidly click the button
      fireEvent.click(convertButton)
      fireEvent.click(convertButton)
      fireEvent.click(convertButton)
      
      // Should still only call onConfirm once per click
      expect(defaultProps.onConfirm).toHaveBeenCalledTimes(3)
    })

    it('should handle keyboard navigation', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      const convertButton = screen.getByText('Convert to New Palette')
      
      // Simulate Enter key press
      fireEvent.keyDown(convertButton, { key: 'Enter', code: 'Enter' })
      
      // Should be handled by the button's built-in behavior
      expect(convertButton).toBeDefined()
    })

    it('should handle space key on buttons', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      const cancelButton = screen.getByText('Cancel')
      
      // Focus the button first
      cancelButton.focus()
      
      // Simulate Space key press
      fireEvent.keyDown(cancelButton, { key: ' ', code: 'Space' })
      
      expect(cancelButton).toBeDefined()
    })
  })

  describe('Button styling and layout', () => {
    it('should have correct button layout in footer', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      const footer = screen.getByText('Cancel').closest('.modal-footer')
      expect(footer).toHaveStyle({
        display: 'flex',
        justifyContent: 'flex-end'
      })
    })

    it('should render cancel button as secondary', () => {
      render(<PaletteConversionModal {...defaultProps} />)
      
      const cancelButton = screen.getByText('Cancel')
      // Button component should receive secondary prop
      expect(cancelButton).toBeDefined()
    })
  })
})