import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import DefaultConfig from '../../../../../../examples/default.json'
import Context from '../../../../../context'
import MarkupVariablesPanel from './MarkupVariablesPanel'

vi.mock('@cdc/core/components/EditorPanel/components/PanelMarkup', () => ({
  default: ({ name, withAccordion }: { name: string; withAccordion: boolean }) => (
    <div data-with-accordion={String(withAccordion)}>{name}</div>
  )
}))

describe('MarkupVariablesPanel', () => {
  it('renders the body without creating a nested accordion', () => {
    render(
      <Context.Provider
        value={{ config: DefaultConfig, updateConfig: vi.fn(), data: DefaultConfig.data, editorData: [] }}
      >
        <MarkupVariablesPanel />
      </Context.Provider>
    )

    expect(screen.getByText('Markup Variables')).toHaveAttribute('data-with-accordion', 'false')
  })
})
