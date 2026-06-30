import React, { useReducer } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { GlobalContext } from '@cdc/core/components/GlobalContext'
import Header from './Header'
import { DashboardContext, DashboardDispatchContext, initialState } from '../../DashboardContext'
import reducer, { DashboardState } from '../../store/dashboard.reducer'

const baseConfig = {
  type: 'dashboard',
  activeDashboard: 0,
  dashboard: {
    title: 'Dashboard One',
    titleStyle: 'small',
    description: 'First dashboard description',
    theme: 'theme-blue',
    downloads: {
      downloadImageButton: true,
      downloadImageButtonStyle: 'button',
      downloadImageLabel: 'Save image',
      downloadPdfButton: true
    },
    sharedFilters: []
  },
  visualizations: {},
  rows: [],
  datasets: {},
  table: {}
} as any

const contextValue = (state: DashboardState) =>
  ({
    ...state,
    isDebug: false,
    isEditor: true,
    outerContainerRef: () => {},
    setParentConfig: () => {},
    reloadURLData: () => {},
    loadAPIFilters: () => Promise.resolve([]),
    setAPIFilterDropdowns: () => {},
    setAPILoading: () => {}
  } as any)

const overlayValue = {
  overlay: {
    object: null,
    show: false,
    disableBgClose: false,
    actions: {
      openOverlay: vi.fn(),
      toggleOverlay: vi.fn()
    }
  }
} as any

const renderHeader = (state: DashboardState, dispatch = vi.fn()) =>
  render(
    <GlobalContext.Provider value={overlayValue}>
      <DashboardContext.Provider value={contextValue(state)}>
        <DashboardDispatchContext.Provider value={dispatch}>
          <Header />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContext.Provider>
  )

const HeaderHarness = ({ state }: { state: DashboardState }) => {
  const [currentState, dispatch] = useReducer(reducer, state)

  return (
    <GlobalContext.Provider value={overlayValue}>
      <DashboardContext.Provider value={contextValue(currentState)}>
        <DashboardDispatchContext.Provider value={dispatch}>
          <Header />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContext.Provider>
  )
}

const makeState = (config = baseConfig): DashboardState =>
  ({
    ...initialState,
    config,
    tabSelected: 'Dashboard Settings',
    filtersApplied: true
  } as DashboardState)

const getOpenedOverlayText = () => {
  const overlayElement = overlayValue.overlay.actions.openOverlay.mock.calls[0][0]
  const text: string[] = []

  const visit = (node: React.ReactNode) => {
    if (typeof node === 'string') {
      text.push(node)
      return
    }
    if (Array.isArray(node)) {
      node.forEach(visit)
      return
    }
    if (React.isValidElement(node)) {
      visit((node.props as { children?: React.ReactNode }).children)
    }
  }

  visit(overlayElement)
  return text
}

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows dashboard settings controls without the PDF toggle', () => {
    const { container } = renderHeader(makeState())

    expect(screen.getByText('Dashboard Settings')).toBeInTheDocument()
    const multiDashboardToggle = container.querySelector('.dashboard-settings__controls .multi-dashboard-toggle')
    expect(multiDashboardToggle).toBeInTheDocument()
    expect(multiDashboardToggle?.firstElementChild).toHaveClass('multi-dashboard-toggle__control')
    expect(multiDashboardToggle?.lastElementChild).toHaveTextContent('Turn into multidashboard')
    expect(container.querySelector('.dashboard-settings__tabs')).not.toBeInTheDocument()
    expect(container.querySelector('.dashboard-settings__control-group--title')).toHaveClass('has-secondary-control')
    expect(container.querySelector('.dashboard-settings__control-group--download')).toHaveClass('has-secondary-control')
    expect(
      screen
        .getByLabelText('Dashboard title')
        .closest('.dashboard-settings__control-group--title')
        ?.contains(screen.getByLabelText('Title style'))
    ).toBe(true)
    expect(
      screen
        .getByLabelText('Download image display')
        .closest('.dashboard-settings__control-group--download')
        ?.contains(screen.getByLabelText('Custom image label'))
    ).toBe(true)
    expect(screen.queryByText('Dashboard Description')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Dashboard title')).toHaveValue('Dashboard One')
    expect(screen.getByLabelText('Title style')).toHaveValue('small')
    expect(screen.getByLabelText('Dashboard description')).toHaveValue('First dashboard description')
    expect(screen.getByLabelText('Download image display')).toHaveValue('button')
    expect(screen.getByLabelText('Custom image label')).toHaveValue('Save image')
    expect(screen.queryByLabelText('Show PDF Download')).not.toBeInTheDocument()
  })

  it('dispatches dashboard updates when title, description, and title style change', () => {
    const dispatch = vi.fn()
    renderHeader(makeState(), dispatch)

    fireEvent.change(screen.getByLabelText('Dashboard title'), { target: { value: 'Updated Dashboard' } })
    fireEvent.change(screen.getByLabelText('Dashboard description'), { target: { value: 'Updated description' } })
    fireEvent.change(screen.getByLabelText('Title style'), { target: { value: 'large' } })

    expect(dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_CONFIG',
      payload: [expect.objectContaining({ dashboard: expect.objectContaining({ title: 'Updated Dashboard' }) })]
    })
    expect(dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_CONFIG',
      payload: [expect.objectContaining({ dashboard: expect.objectContaining({ description: 'Updated description' }) })]
    })
    expect(dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_CONFIG',
      payload: [expect.objectContaining({ dashboard: expect.objectContaining({ titleStyle: 'large' }) })]
    })
  })

  it('hides title style until the dashboard title has content', () => {
    renderHeader(
      makeState({
        ...baseConfig,
        dashboard: {
          ...baseConfig.dashboard,
          title: '   '
        }
      } as any)
    )

    expect(screen.getByLabelText('Dashboard title')).toHaveValue('   ')
    expect(screen.getByLabelText('Dashboard title').closest('.dashboard-settings__control-group--title')).not.toHaveClass(
      'has-secondary-control'
    )
    expect(screen.queryByLabelText('Title style')).not.toBeInTheDocument()
  })

  it('refreshes controlled settings when switching multidashboard tabs', () => {
    const state = makeState({
      ...baseConfig,
      multiDashboards: [
        {
          label: 'First',
          dashboard: baseConfig.dashboard,
          visualizations: {},
          rows: []
        },
        {
          label: 'Second',
          dashboard: {
            ...baseConfig.dashboard,
            title: 'Dashboard Two',
            titleStyle: 'large',
            description: 'Second dashboard description',
            downloads: {
              downloadImageButton: false,
              downloadImageButtonStyle: 'link',
              downloadImageLabel: 'Second image'
            }
          },
          visualizations: {},
          rows: []
        }
      ]
    } as any)

    const { container } = render(<HeaderHarness state={state} />)

    expect(container.querySelector('.dashboard-settings__tabs .multi-config-tabs')).toBeInTheDocument()
    expect(container.querySelector('.dashboard-settings__controls .multi-dashboard-toggle')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Dashboard title')).toHaveValue('Dashboard One')
    expect(screen.getByLabelText('Dashboard description')).toHaveValue('First dashboard description')
    expect(screen.getByLabelText('Title style')).toHaveValue('small')
    expect(screen.getByLabelText('Download image display')).toHaveValue('button')
    expect(screen.getByLabelText('Custom image label')).toHaveValue('Save image')

    fireEvent.click(screen.getByText('Second'))

    expect(screen.getByLabelText('Dashboard title')).toHaveValue('Dashboard Two')
    expect(screen.getByLabelText('Dashboard description')).toHaveValue('Second dashboard description')
    expect(screen.getByLabelText('Title style')).toHaveValue('large')
    expect(screen.getByLabelText('Download image display')).toHaveValue('off')
    expect(container.querySelector('.dashboard-settings__control-group--download')).not.toHaveClass(
      'has-secondary-control'
    )
    expect(screen.queryByLabelText('Custom image label')).not.toBeInTheDocument()
  })

  it('shows delete copy when removing one of multiple multidashboard tabs', () => {
    renderHeader(
      makeState({
        ...baseConfig,
        multiDashboards: [
          {
            label: 'First',
            dashboard: baseConfig.dashboard,
            visualizations: {},
            rows: []
          },
          {
            label: 'Second',
            dashboard: baseConfig.dashboard,
            visualizations: {},
            rows: []
          }
        ]
      } as any)
    )

    fireEvent.click(screen.getAllByRole('button', { name: 'X' })[0])

    expect(getOpenedOverlayText()).toContain('Are you sure you want to delete this multidashboard tab?')
    expect(getOpenedOverlayText()).toContain('DELETE')
  })

  it('shows convert copy when removing the last multidashboard tab', () => {
    renderHeader(
      makeState({
        ...baseConfig,
        multiDashboards: [
          {
            label: 'Only',
            dashboard: baseConfig.dashboard,
            visualizations: {},
            rows: []
          }
        ]
      } as any)
    )

    fireEvent.click(screen.getByRole('button', { name: 'X' }))

    expect(getOpenedOverlayText()).toContain(
      'Are you sure you want to convert this multidashboard back into a normal dashboard?'
    )
    expect(getOpenedOverlayText()).toContain('CONVERT')
  })
})
