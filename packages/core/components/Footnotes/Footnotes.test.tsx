import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Footnotes from './Footnotes'
import FootnotesStandAlone from './FootnotesStandAlone'

describe('Footnotes', () => {
  it('does not render a footer when there are no footnotes with text content', () => {
    const { container } = render(
      <Footnotes
        footnotes={[
          { symbol: '*', text: '' },
          { symbol: '†', text: '   ' },
          { symbol: '‡', text: '<br>' }
        ]}
      />
    )

    expect(container.querySelector('footer')).not.toBeInTheDocument()
  })

  it('renders only footnotes with text content and applies custom footer spacing classes', () => {
    render(
      <Footnotes
        footerClassName='cove-visualization__footnotes'
        footnotes={[
          { symbol: '*', text: '' },
          { symbol: '†', text: 'Rendered note' }
        ]}
      />
    )

    expect(screen.queryByText('*')).not.toBeInTheDocument()
    expect(screen.getByText('Rendered note')).toBeInTheDocument()
    expect(screen.getByText('Rendered note').closest('footer')).toHaveClass('cove-visualization__footnotes')
  })

  it('updates metadata-backed standalone footnotes when dataMetadata changes and data does not', () => {
    const data = [{ value: 1 }]
    const config = {
      staticFootnotes: [{ symbol: '*', text: 'Source {{source}}' }]
    } as any
    const markupVariables = [
      {
        sourceType: 'metadata',
        name: 'Source',
        tag: '{{source}}',
        metadataKey: 'source',
        conditions: [],
        addCommas: false
      }
    ] as any

    const { rerender } = render(
      <FootnotesStandAlone
        config={config}
        markupVariables={markupVariables}
        enableMarkupVariables={true}
        data={data}
        dataMetadata={{}}
      />
    )

    expect(screen.getByText('Source')).toBeInTheDocument()

    rerender(
      <FootnotesStandAlone
        config={config}
        markupVariables={markupVariables}
        enableMarkupVariables={true}
        data={data}
        dataMetadata={{ source: 'June file' }}
      />
    )

    expect(screen.getByText('Source June file')).toBeInTheDocument()
  })
})
