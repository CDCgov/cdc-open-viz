import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import ConfigContext, { EditorDispatchContext } from '@cdc/core/contexts/EditorContext'
import PreviewDataTable from './PreviewDataTable'

describe('PreviewDataTable', () => {
  const renderPreview = config => {
    const dispatch = vi.fn()

    return render(
      <ConfigContext.Provider
        value={
          {
            config,
            errors: [],
            currentViewport: 'lg',
            globalActive: 1,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <PreviewDataTable />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )
  }

  it('updates the rendered preview rows when the dashboard preview source changes', async () => {
    const initialConfig = {
      type: 'dashboard',
      datasets: {
        source_a: {
          data: [{ label: 'Old Source Row', value: 'A' }],
          preview: true
        },
        source_b: {
          data: [{ label: 'Secondary Row', value: 'B' }],
          preview: false
        }
      }
    }

    const nextConfig = {
      ...initialConfig,
      datasets: {
        source_b: {
          data: [{ label: 'New Source Row', value: 'B2' }],
          preview: true
        },
        source_a: {
          data: [{ label: 'Old Source Row', value: 'A' }],
          preview: false
        }
      }
    }

    const view = renderPreview(initialConfig)

    expect(await screen.findByText('Old Source Row')).toBeInTheDocument()
    expect(screen.queryByText('New Source Row')).not.toBeInTheDocument()

    view.rerender(
      <ConfigContext.Provider
        value={
          {
            config: nextConfig,
            errors: [],
            currentViewport: 'lg',
            globalActive: 1,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={vi.fn()}>
          <PreviewDataTable />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    await waitFor(() => {
      expect(screen.getByText('New Source Row')).toBeInTheDocument()
    })
    expect(screen.queryByText('Old Source Row')).not.toBeInTheDocument()
  })

  it('shows another loaded dataset after the active preview dataset is removed', async () => {
    const initialConfig = {
      type: 'dashboard',
      datasets: {
        source_a: {
          data: [{ label: 'Removed Source Row', value: 'A' }],
          preview: true
        },
        source_b: {
          data: [{ label: 'Fallback Source Row', value: 'B' }],
          preview: false
        }
      }
    }

    const nextConfig = {
      type: 'dashboard',
      datasets: {
        source_b: {
          data: [{ label: 'Fallback Source Row', value: 'B' }],
          preview: true
        }
      }
    }

    const view = renderPreview(initialConfig)

    expect(await screen.findByText('Removed Source Row')).toBeInTheDocument()

    view.rerender(
      <ConfigContext.Provider
        value={
          {
            config: nextConfig,
            errors: [],
            currentViewport: 'lg',
            globalActive: 1,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={vi.fn()}>
          <PreviewDataTable />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    await waitFor(() => {
      expect(screen.getByText('Fallback Source Row')).toBeInTheDocument()
    })
    expect(screen.queryByText('Removed Source Row')).not.toBeInTheDocument()
  })

  it('returns to the initial empty preview when the final dataset is removed', async () => {
    const initialConfig = {
      type: 'dashboard',
      datasets: {
        source_a: {
          data: [{ label: 'Last Source Row', value: 'A' }],
          preview: true
        }
      }
    }

    const nextConfig = {
      type: 'dashboard',
      datasets: {}
    }

    const view = renderPreview(initialConfig)

    expect(await screen.findByText('Last Source Row')).toBeInTheDocument()

    view.rerender(
      <ConfigContext.Provider
        value={
          {
            config: nextConfig,
            errors: [],
            currentViewport: 'lg',
            globalActive: 1,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={vi.fn()}>
          <PreviewDataTable />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    await waitFor(() => {
      expect(screen.getByText('No Data')).toBeInTheDocument()
    })
    expect(screen.getByText('Import data to preview')).toBeInTheDocument()
    expect(screen.queryByText('Last Source Row')).not.toBeInTheDocument()
  })
})
