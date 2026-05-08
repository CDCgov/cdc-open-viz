import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, DashboardDispatchContext, initialState } from '../DashboardContext'
import { GlobalContext } from '@cdc/core/components/GlobalContext'
import Row from './Row'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

vi.mock('../images/icon-col-12.svg', () => ({ default: () => <svg data-testid='icon-col-12' /> }))
vi.mock('../images/icon-col-6.svg', () => ({ default: () => <svg data-testid='icon-col-6' /> }))
vi.mock('../images/icon-col-4.svg', () => ({ default: () => <svg data-testid='icon-col-4' /> }))
vi.mock('../images/icon-col-4-8.svg', () => ({ default: () => <svg data-testid='icon-col-4-8' /> }))
vi.mock('../images/icon-col-8-4.svg', () => ({ default: () => <svg data-testid='icon-col-8-4' /> }))
vi.mock('../images/icon-toggle.svg', () => ({ default: () => <svg data-testid='icon-toggle' /> }))

const renderRow = (dashboardCondition = undefined) => {
  const openOverlay = vi.fn()

  render(
    <GlobalContext.Provider
      value={{
        overlay: {
          object: null,
          show: false,
          disableBgClose: false,
          actions: {
            openOverlay,
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
            rows: [
              {
                columns: [],
                dashboardCondition,
                expandCollapseAllButtons: false
              }
            ],
            visualizations: {}
          } as any,
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
          <Row row={{ columns: [], dashboardCondition, expandCollapseAllButtons: false } as any} idx={0} uuid='row-1' />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContext.Provider>
  )

  return { openOverlay }
}

const renderRowWithConfig = config => {
  const dispatch = vi.fn()

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
          config,
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
        <DashboardDispatchContext.Provider value={dispatch}>
          <Row row={config.rows[0]} idx={0} uuid='row-1' />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContext.Provider>
  )

  return { dispatch }
}

describe('Row', () => {
  it('renders the row label without a separator', () => {
    renderRow()

    expect(screen.getByText('Row 1')).toBeInTheDocument()
    expect(screen.queryByText('Row - 1')).not.toBeInTheDocument()
  })

  it('renders separate row toolbar buttons for data and dashboard conditions', () => {
    const { openOverlay } = renderRow()

    fireEvent.click(screen.getByTitle('Configure Data'))
    fireEvent.click(screen.getByTitle('Configure Dashboard Condition'))

    expect(openOverlay).toHaveBeenCalledTimes(2)
  })

  it('does not render a row condition summary when no condition exists', () => {
    renderRow()

    expect(screen.getByTitle('Configure Dashboard Condition')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Configure Dashboard Condition:/ })).not.toBeInTheDocument()
  })

  it('shows the active row condition button and summary strip when a condition exists', () => {
    renderRow({ id: 'row-condition-1', datasetKey: 'condition-data', operator: 'hasData' })

    expect(screen.getByTitle('Configure Dashboard Condition')).toHaveClass('is-active')
    expect(screen.getByRole('button', { name: "Configure Dashboard Condition: Show when there's data" })).toHaveClass(
      'dashboard-condition-summary'
    )
  })

  it('opens the condition modal from the row condition button or summary strip', () => {
    const { openOverlay } = renderRow({ id: 'row-condition-1', datasetKey: 'condition-data', operator: 'hasData' })

    fireEvent.click(screen.getByTitle('Configure Dashboard Condition'))
    fireEvent.click(screen.getByRole('button', { name: "Configure Dashboard Condition: Show when there's data" }))

    expect(openOverlay).toHaveBeenCalledTimes(2)
  })

  it('removes only deleted row dashboard condition targets when deleting a row', () => {
    const { dispatch } = renderRowWithConfig({
      type: 'dashboard',
      dashboard: {
        sharedFilters: [
          {
            key: 'County',
            type: 'datafilter',
            columnName: 'county',
            usedBy: ['row-condition-1', 'condition-1', 'legacy-footnote-target', 'viz-1', 0, 1]
          }
        ]
      },
      datasets: {},
      rows: [
        {
          columns: [],
          dashboardCondition: { id: 'row-condition-1', datasetKey: 'condition-data', operator: 'hasData' },
          expandCollapseAllButtons: false
        },
        {
          columns: [{ width: 12, widget: 'dashboard-filters-1' }],
          dashboardCondition: { id: 'condition-1', datasetKey: 'condition-data', operator: 'hasData' },
          expandCollapseAllButtons: false
        }
      ],
      visualizations: {
        'dashboard-filters-1': {
          uid: 'dashboard-filters-1',
          type: 'dashboardFilters',
          sharedFilterIndexes: [0]
        }
      }
    } as any)

    fireEvent.click(screen.getByTitle('Delete Row'))

    const nextConfig = dispatch.mock.calls[0][0].payload[0]
    expect(nextConfig.dashboard.sharedFilters[0].usedBy).toEqual(['condition-1', 'legacy-footnote-target', 'viz-1', 0])
  })

  it('assigns distinct row uuids when moving a row even if Date.now matches', () => {
    const dateNowSpy = vi.spyOn(Date, 'now').mockReturnValue(1234567890)
    const mathRandomSpy = vi.spyOn(Math, 'random')
    mathRandomSpy.mockReturnValueOnce(0.11111).mockReturnValueOnce(0.22222)

    const { dispatch } = renderRowWithConfig({
      type: 'dashboard',
      dashboard: { sharedFilters: [] },
      datasets: {},
      rows: [
        {
          uuid: 'row-a',
          columns: [],
          expandCollapseAllButtons: false
        },
        {
          uuid: 'row-b',
          columns: [],
          expandCollapseAllButtons: false
        }
      ],
      visualizations: {}
    } as any)

    fireEvent.click(screen.getByTitle('Move Row Down'))

    const nextConfig = dispatch.mock.calls[0][0].payload[0]
    expect(nextConfig.rows[0].uuid).not.toEqual(nextConfig.rows[1].uuid)

    dateNowSpy.mockRestore()
    mathRandomSpy.mockRestore()
  })
})
