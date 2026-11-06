import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'

import DefaultConfig from '../../../../../../examples/default.json'
import ConfigContext from '../../../../../context'
import FootnotesPanel from './FootnotesPanel'

vi.mock('@cdc/core/components/EditorPanel/FootnotesEditor', () => ({
  default: ({ datasets }) => <div data-datasets={Object.keys(datasets || {}).join(',')}>Footnotes editor</div>
}))

const renderPanel = (type = 'data') =>
  render(
    <ConfigContext.Provider
      value={
        {
          config: { ...structuredClone(DefaultConfig), general: { ...DefaultConfig.general, type } },
          setConfig: vi.fn()
        } as any
      }
    >
      <Accordion>
        <FootnotesPanel datasets={{ assigned: { data: [] } } as any} />
      </Accordion>
    </ConfigContext.Provider>
  )

describe('FootnotesPanel', () => {
  it('preserves its accordion heading and dataset forwarding', () => {
    renderPanel()

    expect(screen.getByRole('button', { name: 'Footnotes' })).toBeInTheDocument()
    expect(screen.getByText('Footnotes editor')).toHaveAttribute('data-datasets', 'assigned')
  })

  it('stays hidden for navigation maps', () => {
    renderPanel('navigation')

    expect(screen.queryByRole('button', { name: 'Footnotes' })).not.toBeInTheDocument()
  })
})
