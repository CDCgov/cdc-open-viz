import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, DashboardDispatchContext, initialState } from '../../DashboardContext'
import { GlobalContext } from '@cdc/core/components/GlobalContext'
import Widget from './Widget'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

vi.mock('react-dnd', () => ({
  useDrag: () => [{}, () => {}]
}))

describe('Widget', () => {
  it('marks the widget condition button active when a column condition exists', () => {
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
              rows: [
                {
                  columns: [
                    {
                      width: 12,
                      conditionalWidgets: [
                        {
                          widget: 'markup-1',
                          dashboardCondition: {
                            id: 'column-condition-1',
                            datasetKey: 'condition-data',
                            operator: 'hasData'
                          }
                        }
                      ]
                    }
                  ],
                  expandCollapseAllButtons: false
                }
              ],
              visualizations: {
                'markup-1': {
                  uid: 'markup-1',
                  type: 'markup-include',
                  visualizationType: 'markup-include',
                  contentEditor: { title: 'Example' }
                }
              }
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
            <Widget
              columnData={{
                width: 12,
                widget: 'markup-1',
                dashboardCondition: {
                  id: 'column-condition-1',
                  datasetKey: 'condition-data',
                  operator: 'hasData'
                }
              }}
              title='Example'
              toggleRow={false}
              type='markup-include'
              widgetConfig={
                {
                  uid: 'markup-1',
                  rowIdx: 0,
                  colIdx: 0,
                  entryIdx: 0,
                  type: 'markup-include',
                  visualizationType: 'markup-include',
                  contentEditor: { title: 'Example' }
                } as any
              }
              widgetInRow
            />
          </DashboardDispatchContext.Provider>
        </DashboardContext.Provider>
      </GlobalContext.Provider>
    )

    expect(screen.getByTitle('Configure Dashboard Condition')).toHaveClass('is-active')
  })
})
