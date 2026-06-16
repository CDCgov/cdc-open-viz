import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, DashboardDispatchContext, initialState } from '../../DashboardContext'
import VisualizationsPanel from './VisualizationsPanel'

const mocks = vi.hoisted(() => ({
  advancedEditorProps: undefined as any
}))

vi.mock('../Widget/Widget', () => ({
  default: ({ type }: { type: string }) => <div data-testid='creation-widget'>{type}</div>
}))

vi.mock('@cdc/core/components/AdvancedEditor', () => ({
  default: props => {
    mocks.advancedEditorProps = props
    return <div data-testid='advanced-editor' />
  }
}))

describe('VisualizationsPanel', () => {
  const renderPanel = (config = {}) =>
    render(
      <DashboardContext.Provider
        value={{
          ...initialState,
          config: {
            type: 'dashboard',
            dashboard: { sharedFilters: [] },
            datasets: {},
            rows: [],
            visualizations: {},
            ...config
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

  it('does not expose filtered-text in dashboard creation surfaces', () => {
    renderPanel()

    const creationTypes = screen.getAllByTestId('creation-widget').map(widget => widget.textContent)
    expect(creationTypes).toContain('markup-include')
    expect(creationTypes).not.toContain('filtered-text')
  })

  it('strips URL-backed dataset data from the Advanced Editor config view', () => {
    renderPanel({
      datasets: {
        apiData: {
          dataUrl: '/api/dashboard.json',
          data: [{ value: 10 }],
          formattedData: [{ value: 10 }],
          runtimeDataUrl: '/api/dashboard.json?region=NE'
        },
        inlineData: {
          data: [{ value: 20 }],
          formattedData: [{ value: 20 }]
        }
      }
    })

    const strippedConfig = mocks.advancedEditorProps.stripConfig(mocks.advancedEditorProps.config)

    expect(strippedConfig.datasets.apiData.data).toBeUndefined()
    expect(strippedConfig.datasets.apiData.formattedData).toBeUndefined()
    expect(strippedConfig.datasets.apiData.runtimeDataUrl).toBeUndefined()
    expect(strippedConfig.datasets.apiData.dataUrl).toBe('/api/dashboard.json')
    expect(strippedConfig.datasets.inlineData.data).toEqual([{ value: 20 }])
  })
})
