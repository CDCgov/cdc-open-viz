import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../../ConfigContext'
import NetworkPanel from './NetworkPanel'
import { createMockConfig } from '../../../../LinearChart/tests/mockConfigContext'
vi.mock('../../../EditorPanelContext', () => ({ useEditorPanelContext: () => ({ getColumns: () => [] }) }))
vi.mock('../../../../../images/warning.svg', () => ({ default: () => <svg /> }))
describe('NetworkPanel', () => {
  it('is hidden for other visualization types', () => {
    const { container } = render(
      <ConfigContext.Provider value={{ config: { visualizationType: 'Bar' } } as any}>
        <NetworkPanel name='Network' />
      </ConfigContext.Provider>
    )
    expect(container).toBeEmptyDOMElement()
  })
  it('renders its controls for Network charts', () => {
    const config = createMockConfig({ visualizationType: 'Network', network: {} as any })
    render(
      <ConfigContext.Provider value={{ config, updateConfig: vi.fn() } as any}>
        <Accordion>
          <NetworkPanel name='Network' />
        </Accordion>
      </ConfigContext.Provider>
    )
    expect(screen.getByRole('button', { name: /Network/ })).toBeInTheDocument()
  })
})
