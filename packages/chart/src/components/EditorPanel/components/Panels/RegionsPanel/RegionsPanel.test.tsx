import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../../ConfigContext'
import RegionsPanel from './RegionsPanel'
vi.mock('../../../useEditorPermissions.js', () => ({
  useEditorPermissions: () => ({ visSupportsRegions: () => false })
}))
describe('RegionsPanel', () => {
  it('is hidden when regions are unsupported', () => {
    const { container } = render(
      <ConfigContext.Provider value={{ config: {}, updateConfig: vi.fn() } as any}>
        <RegionsPanel name='Regions' />
      </ConfigContext.Provider>
    )
    expect(container).toBeEmptyDOMElement()
  })
})
