import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import DefaultConfig from '../../../../../../examples/default.json'
import Context from '../../../../../context'
import GeneralPanel from './GeneralPanel'

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

describe('GeneralPanel', () => {
  it('renders the existing general controls', () => {
    render(
      <Context.Provider value={{ config: DefaultConfig, updateConfig: vi.fn() }}>
        <GeneralPanel />
      </Context.Provider>
    )

    expect(screen.getByLabelText('Data Bite Style')).toBeInTheDocument()
    expect(screen.getByLabelText('Title')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })
})
