import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../../ConfigContext'
import RadarPanel from './RadarPanel'
import { createMockConfig } from '../../../../LinearChart/tests/mockConfigContext'
vi.mock('../../../EditorPanelContext', () => ({ useEditorPanelContext: () => ({ updateField: vi.fn() }) }))
vi.mock('../../../../../images/warning.svg', () => ({ default: () => <svg /> }))
vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))
describe('RadarPanel', () => {
  it('is hidden for other visualization types', () => {
    const { container } = render(
      <ConfigContext.Provider value={{ config: { visualizationType: 'Bar' } } as any}>
        <RadarPanel name='Radar' />
      </ConfigContext.Provider>
    )
    expect(container).toBeEmptyDOMElement()
  })
  it('renders its controls for Radar charts', () => {
    const config = createMockConfig({ visualizationType: 'Radar', radar: {} as any })
    render(
      <ConfigContext.Provider value={{ config, rawData: [] } as any}>
        <Accordion>
          <RadarPanel name='Radar' />
        </Accordion>
      </ConfigContext.Provider>
    )
    expect(screen.getByRole('button', { name: /Radar/ })).toBeInTheDocument()
  })
})
