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

describe('Row', () => {
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
})
