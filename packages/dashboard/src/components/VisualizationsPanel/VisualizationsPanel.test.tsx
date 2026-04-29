import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, DashboardDispatchContext, initialState } from '../../DashboardContext'
import VisualizationsPanel from './VisualizationsPanel'

vi.mock('../Widget/Widget', () => ({
  default: ({ type }: { type: string }) => <div data-testid='creation-widget'>{type}</div>
}))

vi.mock('@cdc/core/components/AdvancedEditor', () => ({
  default: () => <div data-testid='advanced-editor' />
}))

describe('VisualizationsPanel', () => {
  it('does not expose filtered-text in dashboard creation surfaces', () => {
    render(
      <DashboardContext.Provider
        value={{
          ...initialState,
          config: {
            type: 'dashboard',
            dashboard: { sharedFilters: [] },
            datasets: {},
            rows: [],
            visualizations: {}
          } as any,
          outerContainerRef: vi.fn(),
          setParentConfig: vi.fn(),
          isDebug: false,
          isEditor: true,
          reloadURLData: vi.fn(),
          loadAPIFilters: vi.fn(),
          setAPIFilterDropdowns: vi.fn(),
          setAPILoading: vi.fn(),
          data: {}
        }}
      >
        <DashboardDispatchContext.Provider value={vi.fn()}>
          <VisualizationsPanel />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    )

    const creationTypes = screen.getAllByTestId('creation-widget').map(widget => widget.textContent)
    expect(creationTypes).toContain('markup-include')
    expect(creationTypes).not.toContain('filtered-text')
  })
})
