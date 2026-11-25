import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import DefaultConfig from '../../../../../../examples/default.json'
import Context from '../../../../../context'
import ImagesPanel from './ImagesPanel'

describe('ImagesPanel', () => {
  it('preserves static and dynamic image branches', () => {
    const updateConfig = vi.fn()
    const staticConfig = {
      ...DefaultConfig,
      imageData: { ...DefaultConfig.imageData, display: 'static', url: 'image.png', alt: 'Static image' }
    }
    const { rerender } = render(
      <Context.Provider value={{ config: staticConfig, updateConfig }}>
        <ImagesPanel />
      </Context.Provider>
    )
    expect(screen.getByLabelText('Image Display Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Image URL')).toHaveValue('image.png')
    expect(screen.getByLabelText('Alt Text')).toHaveValue('Static image')
    expect(screen.queryByRole('button', { name: 'Add Dynamic Image' })).not.toBeInTheDocument()

    const dynamicConfig = {
      ...DefaultConfig,
      imageData: { ...DefaultConfig.imageData, display: 'dynamic', options: [] }
    }
    rerender(
      <Context.Provider value={{ config: dynamicConfig, updateConfig }}>
        <ImagesPanel />
      </Context.Provider>
    )
    expect(screen.getByLabelText('Image URL (default)')).toBeInTheDocument()
    expect(screen.getByLabelText('Alt Text (default)')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add Dynamic Image' })).toBeInTheDocument()
  })
})
