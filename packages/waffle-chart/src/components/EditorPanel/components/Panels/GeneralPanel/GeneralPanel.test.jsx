import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import ConfigContext from '../../../../../ConfigContext'
import InitialState from '../../../../../data/initial-state'
import GeneralPanel from './GeneralPanel'

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

describe('GeneralPanel', () => {
  it('preserves the general controls and representative updates', () => {
    const updateConfig = vi.fn()
    render(
      <ConfigContext.Provider value={{ config: InitialState, updateConfig }}>
        <GeneralPanel />
      </ConfigContext.Provider>
    )

    expect(screen.getByLabelText('Chart Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByLabelText('Language for dates and numbers')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Chart Type'), { target: { value: 'Gauge' } })
    expect(updateConfig).toHaveBeenCalledWith(expect.objectContaining({ visualizationType: 'Gauge' }))
  })
})
