import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../../ConfigContext'
import DendrogramPanel from './DendrogramPanel'
import { createMockConfig } from '../../../../LinearChart/tests/mockConfigContext'
vi.mock('../../../EditorPanelContext', () => ({ useEditorPanelContext: () => ({ getColumns: () => [] }) }))
vi.mock('../../../../../images/warning.svg', () => ({ default: () => <svg /> }))
describe('DendrogramPanel', () => {
  it('is hidden for other visualization types', () => {
    const { container } = render(
      <ConfigContext.Provider value={{ config: { visualizationType: 'Bar' } } as any}>
        <DendrogramPanel name='Dendrogram' />
      </ConfigContext.Provider>
    )
    expect(container).toBeEmptyDOMElement()
  })
  it('renders its controls for Dendrogram charts', () => {
    const config = createMockConfig({ visualizationType: 'Dendrogram', dendrogram: {} as any })
    render(
      <ConfigContext.Provider value={{ config, updateConfig: vi.fn() } as any}>
        <Accordion>
          <DendrogramPanel name='Dendrogram' />
        </Accordion>
      </ConfigContext.Provider>
    )
    expect(screen.getByRole('button', { name: /Dendrogram/ })).toBeInTheDocument()
  })
})
