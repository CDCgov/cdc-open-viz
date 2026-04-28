import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, DashboardDispatchContext, initialState } from '../../../DashboardContext'
import { GlobalContext } from '@cdc/core/components/GlobalContext'
import DashboardFiltersEditor from './DashboardFiltersEditor'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

vi.mock('@hello-pangea/dnd', () => ({
  DragDropContext: ({ children }) => <div>{children}</div>,
  Droppable: ({ children }) => <div>{children({ droppableProps: {}, innerRef: vi.fn(), placeholder: null })}</div>,
  Draggable: ({ children }) => (
    <div>
      {children(
        {
          draggableProps: { style: {} },
          dragHandleProps: {},
          innerRef: vi.fn()
        },
        { isDragging: false }
      )}
    </div>
  )
}))

const renderEditor = (visual = { grayBackground: false }) => {
  const updateConfig = vi.fn()
  const vizConfig = {
    uid: 'dashboardFilters1',
    type: 'dashboardFilters',
    visualizationType: 'dashboardFilters',
    filterBehavior: 'Filter Change',
    filterIntro: '',
    sharedFilterIndexes: [],
    visual
  } as any

  render(
    <GlobalContext.Provider
      value={{
        overlay: {
          object: null,
          show: false,
          disableBgClose: false,
          actions: {
            openOverlay: vi.fn(),
            toggleOverlay: vi.fn()
          }
        }
      }}
    >
      <DashboardContext.Provider
        value={{
          ...initialState,
          config: {
            type: 'dashboard',
            dashboard: { sharedFilters: [] },
            datasets: {},
            rows: [],
            visualizations: {
              dashboardFilters1: vizConfig
            }
          } as any,
          data: {},
          outerContainerRef: vi.fn(),
          setParentConfig: vi.fn(),
          isDebug: false,
          isEditor: true,
          reloadURLData: vi.fn(),
          loadAPIFilters: vi.fn(),
          setAPIFilterDropdowns: vi.fn(),
          setAPILoading: vi.fn()
        }}
      >
        <DashboardDispatchContext.Provider value={vi.fn()}>
          <DashboardFiltersEditor updateConfig={updateConfig} vizConfig={vizConfig} />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContext.Provider>
  )

  return { updateConfig, vizConfig }
}

describe('DashboardFiltersEditor', () => {
  it('renders a Visual accordion with a Gray Background option', () => {
    renderEditor()

    expect(screen.getByText('Visual')).toBeInTheDocument()
    expect(screen.getAllByLabelText('Gray Background')[0]).not.toBeChecked()
  })

  it('updates visual.grayBackground when Gray Background is toggled', () => {
    const { updateConfig, vizConfig } = renderEditor()

    fireEvent.click(screen.getAllByLabelText('Gray Background')[0])

    expect(updateConfig).toHaveBeenCalledWith({
      ...vizConfig,
      visual: {
        grayBackground: true
      }
    })
  })

  it('updates filterIntro from the General panel', async () => {
    const { updateConfig, vizConfig } = renderEditor()

    fireEvent.change(screen.getByLabelText('Filter intro text'), {
      target: { value: 'Choose filters before viewing results.' }
    })

    await waitFor(() => {
      expect(updateConfig).toHaveBeenCalledWith({
        ...vizConfig,
        filterIntro: 'Choose filters before viewing results.'
      })
    })
  })
})
