import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import InitialState from '../../../../../data/initial-state'
import ConfigContext from '../../../../../ConfigContext'
import DataDrivenColorsPanel from './DataDrivenColorsPanel'

vi.mock('@cdc/core/components/DataColorSelector', () => ({
  DataColorSelector: ({ value, onChange }) => (
    <button onClick={() => onChange('#123456')}>{value || 'Choose color'}</button>
  )
}))

describe('DataDrivenColorsPanel', () => {
  it('preserves source/custom rows and mapping commands', () => {
    const updateConfig = vi.fn()
    const config = {
      ...InitialState,
      dataColors: { column: 'status', mappings: [{ sourceValue: 'Custom', color: '#000000' }] }
    }
    render(
      <ConfigContext.Provider
        value={{ config, data: [{ status: 'Beta' }, { status: 'Alpha' }], editorData: undefined, updateConfig } as any}
      >
        <DataDrivenColorsPanel />
      </ConfigContext.Provider>
    )
    expect(screen.getByText('Alpha')).toBeInTheDocument()
    expect(screen.getByText('Beta')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Custom')).toBeInTheDocument()
    fireEvent.click(screen.getAllByRole('button', { name: 'Choose color' })[0])
    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        dataColors: expect.objectContaining({
          mappings: expect.arrayContaining([expect.objectContaining({ sourceValue: 'Alpha', color: '#123456' })])
        })
      })
    )
    fireEvent.click(screen.getByRole('button', { name: 'Add Color Mapping' }))
    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        dataColors: expect.objectContaining({
          mappings: expect.arrayContaining([expect.objectContaining({ sourceValue: '' })])
        })
      })
    )
    fireEvent.change(screen.getByDisplayValue('Custom'), { target: { value: 'Renamed' } })
    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        dataColors: expect.objectContaining({ mappings: [expect.objectContaining({ sourceValue: 'Renamed' })] })
      })
    )
    fireEvent.click(screen.getByTitle('Remove mapping'))
    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({ dataColors: expect.objectContaining({ mappings: [] }) })
    )
  })
})
