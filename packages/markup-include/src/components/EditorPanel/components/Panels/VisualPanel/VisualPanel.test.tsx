import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import InitialState from '../../../../../data/initial-state'
import ConfigContext from '../../../../../ConfigContext'
import VisualPanel from './VisualPanel'

vi.mock('@cdc/core/components/HeaderThemeSelector', () => ({ HeaderThemeSelector: () => <div>Header theme</div> }))
vi.mock('@cdc/core/components/EditorPanel/sections/Tp5VisualSection', () => ({
  Tp5VisualSection: () => <div>TP5 visual</div>
}))
vi.mock('@cdc/core/components/EditorPanel/sections/StyleTreatmentSection', () => ({
  default: ({ onStyleTreatmentChange }) => <button onClick={() => onStyleTreatmentChange('tp5')}>Legacy visual</button>
}))

describe('VisualPanel', () => {
  it('preserves legacy and TP5 branches and legacy-flag clearing', () => {
    const updateConfig = vi.fn()
    const config = {
      ...InitialState,
      visual: { ...InitialState.visual, border: true, borderColorTheme: true, accent: true }
    }
    const { rerender } = render(
      <ConfigContext.Provider value={{ config, updateConfig } as any}>
        <VisualPanel />
      </ConfigContext.Provider>
    )
    expect(screen.getByText('Header theme')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Legacy visual' }))
    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        visual: expect.objectContaining({ tp5Treatment: true, border: false, borderColorTheme: false, accent: false })
      })
    )
    rerender(
      <ConfigContext.Provider
        value={{ config: { ...config, contentEditor: { ...config.contentEditor, style: 'tp5' } }, updateConfig } as any}
      >
        <VisualPanel />
      </ConfigContext.Provider>
    )
    expect(screen.getByText('TP5 visual')).toBeInTheDocument()
    expect(screen.queryByText('Header theme')).not.toBeInTheDocument()
  })
})
