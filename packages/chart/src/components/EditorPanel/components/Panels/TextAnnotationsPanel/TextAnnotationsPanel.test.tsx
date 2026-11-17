import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../../ConfigContext'
import TextAnnotationsPanel from './TextAnnotationsPanel'
vi.mock('../../../useEditorPermissions', () => ({
  useEditorPermissions: () => ({ visSupportsDataAnnotations: () => true })
}))
describe('TextAnnotationsPanel', () => {
  it('renders its named section with an empty annotation list', () => {
    const value = { config: { general: {}, annotations: [] }, transformedData: [], updateConfig: vi.fn() } as any
    render(
      <ConfigContext.Provider value={value}>
        <TextAnnotationsPanel name='Text Annotations' />
      </ConfigContext.Provider>
    )
    fireEvent.keyDown(screen.getByRole('button', { name: 'Text Annotations' }), { key: 'Enter' })
    expect(screen.getByRole('button', { name: 'Add Annotation' })).toBeInTheDocument()
  })
})
