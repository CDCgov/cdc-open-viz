import React, { useContext } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DashboardCopyPasteContext, DashboardCopyPasteProvider } from './DashboardCopyPasteContext'

const CopyPasteHarness = () => {
  const { copiedWidget, copyWidget } = useContext(DashboardCopyPasteContext)

  return (
    <>
      <button
        onClick={() =>
          copyWidget({
            sourceWidgetKey: 'source-widget',
            label: 'Source Component',
            visualization: { uid: 'source-widget', type: 'markup-include' } as any,
            dashboard: { sharedFilters: [] },
            sourceDashboardIndex: 0,
            sourceFilterTarget: 'source-widget'
          })
        }
      >
        Copy Test Component
      </button>
      {copiedWidget && <span>{copiedWidget.label}</span>}
    </>
  )
}

describe('DashboardCopyPasteProvider', () => {
  it('clears copy mode with Escape', () => {
    render(
      <DashboardCopyPasteProvider>
        <CopyPasteHarness />
      </DashboardCopyPasteProvider>
    )

    fireEvent.click(screen.getByText('Copy Test Component'))
    expect(screen.getByText('Source Component')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByText('Source Component')).not.toBeInTheDocument()
  })
})
