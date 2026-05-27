import React from 'react'
import { Accordion } from 'react-accessible-accordion'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../ConfigContext'
import EditorPanelContext from '../../EditorPanelContext'
import PanelVisual from './Panel.Visual'
import { createMockChartContext, createMockConfig } from '../../../LinearChart/tests/mockConfigContext'
import { ChartConfig } from '../../../../types/ChartConfig'

vi.mock('@cdc/core/hooks/useColorPalette', () => ({
  useColorPalette: () => ({
    twoColorPalettes: [],
    sequential: [],
    nonSequential: [],
    accessibleColors: []
  })
}))

vi.mock('@cdc/core/components/PaletteSelector', () => ({
  PaletteSelector: () => <div data-testid='palette-selector' />,
  DeveloperPaletteRollback: () => null
}))

vi.mock('@cdc/core/components/HeaderThemeSelector', () => ({
  HeaderThemeSelector: () => null
}))

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: () => <span data-testid='icon' />
}))

const buildConfig = (overrides: Partial<ChartConfig> = {}) =>
  createMockConfig({
    visualizationType: 'Line',
    visualizationSubType: 'regular',
    general: {
      palette: {
        customColors: ['#111111', '#222222']
      }
    } as any,
    series: [
      { dataKey: 'series_a', name: 'Alpha', type: 'Line' },
      { dataKey: 'series_b', name: 'Beta', type: 'Line' }
    ] as any,
    runtime: {
      ...createMockConfig().runtime,
      seriesKeys: ['series_a', 'series_b'],
      seriesLabels: {
        series_a: 'Alpha',
        series_b: 'Beta'
      },
      seriesLabelsAll: ['Alpha', 'Beta']
    } as any,
    visual: {
      lineDatapointSymbol: 'none',
      verticalHoverLine: false,
      horizontalHoverLine: false
    } as any,
    ...overrides
  })

const renderPanel = (
  config: ChartConfig,
  colorPalettes = {
    qualitative_standard: ['#111111', '#222222']
  }
) => {
  const updateConfig = vi.fn()
  const renderTree = (panelConfig: ChartConfig) => {
    const context = createMockChartContext(panelConfig, {
      updateConfig,
      colorPalettes,
      twoColorPalette: {
        v2: {}
      }
    } as any)

    return (
      <ConfigContext.Provider value={context}>
        <EditorPanelContext.Provider
          value={{
            updateField: vi.fn(),
            setLollipopShape: vi.fn(),
            handlePaletteSelection: vi.fn(),
            handleTwoColorPaletteSelection: vi.fn()
          }}
        >
          <Accordion allowZeroExpanded>
            <PanelVisual name='Visual' />
          </Accordion>
        </EditorPanelContext.Provider>
      </ConfigContext.Provider>
    )
  }

  const view = render(renderTree(config))

  fireEvent.click(screen.getByRole('button', { name: 'Visual' }))
  return {
    updateConfig,
    rerenderPanel: (newConfig: ChartConfig) => view.rerender(renderTree(newConfig))
  }
}

describe('PanelVisual series color assignments', () => {
  it('seeds assignment rows from current colors when by-value mode is enabled', () => {
    const { updateConfig } = renderPanel(buildConfig())

    fireEvent.change(screen.getByLabelText('Color Assignment Mode'), { target: { value: 'by-value' } })

    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        general: expect.objectContaining({
          palette: expect.objectContaining({
            colorAssignmentMode: 'by-value',
            colorAssignments: [
              { key: 'series_a', color: '#111111' },
              { key: 'series_b', color: '#222222' }
            ]
          })
        })
      })
    )
  })

  it('updates the color for the matching assignment key and drops stale assignment keys', () => {
    const { updateConfig } = renderPanel(
      buildConfig({
        general: {
          palette: {
            customColors: ['#111111', '#222222'],
            colorAssignmentMode: 'by-value',
            colorAssignments: [
              { key: 'series_a', color: '#111111' },
              { key: 'series_b', color: '#222222' },
              { key: 'stale_series', color: '#333333' }
            ]
          }
        } as any
      })
    )

    const alphaRow = screen.getByText('Alpha').closest('.series-color-assignments__row') as HTMLElement
    fireEvent.click(within(alphaRow).getByRole('button', { name: 'Color for Alpha' }))
    fireEvent.click(screen.getAllByTitle('#222222').find(element => element.getAttribute('role') === 'option')!)

    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        general: expect.objectContaining({
          palette: expect.objectContaining({
            colorAssignmentMode: 'by-value',
            colorAssignments: expect.arrayContaining([
              { key: 'series_a', color: '#222222' },
              { key: 'series_b', color: '#222222' }
            ])
          })
        })
      })
    )
    expect(updateConfig.mock.calls[0][0].general.palette.colorAssignments).toHaveLength(2)
  })

  it('lets assignments choose from the full active palette, not only distributed series colors', () => {
    const fullPalette = [
      '#0057B7',
      '#722161',
      '#00B1CE',
      '#D94E5F',
      '#5A8E3F',
      '#FFB24D',
      '#FB7E38',
      '#032659',
      '#975722'
    ]
    const { updateConfig } = renderPanel(
      buildConfig({
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0',
            colorAssignmentMode: 'by-value',
            colorAssignments: [
              { key: 'series_a', color: '#0057B7' },
              { key: 'series_b', color: '#00B1CE' },
              { key: 'series_c', color: '#5A8E3F' }
            ]
          }
        } as any,
        series: [
          { dataKey: 'series_a', name: 'Alpha', type: 'Line' },
          { dataKey: 'series_b', name: 'Beta', type: 'Line' },
          { dataKey: 'series_c', name: 'Gamma', type: 'Line' }
        ] as any,
        runtime: {
          ...createMockConfig().runtime,
          seriesKeys: ['series_a', 'series_b', 'series_c'],
          seriesLabels: {
            series_a: 'Alpha',
            series_b: 'Beta',
            series_c: 'Gamma'
          },
          seriesLabelsAll: ['Alpha', 'Beta', 'Gamma']
        } as any
      }),
      {
        qualitative_standard: fullPalette
      }
    )

    const alphaRow = screen.getByText('Alpha').closest('.series-color-assignments__row') as HTMLElement
    fireEvent.click(within(alphaRow).getByRole('button', { name: 'Color for Alpha' }))
    fireEvent.click(screen.getAllByTitle('#722161').find(element => element.getAttribute('role') === 'option')!)

    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        general: expect.objectContaining({
          palette: expect.objectContaining({
            colorAssignments: expect.arrayContaining([{ key: 'series_a', color: '#722161' }])
          })
        })
      })
    )
  })

  it('resets assignments when the selected palette changes without custom colors', () => {
    const initialConfig = buildConfig({
      general: {
        palette: {
          name: 'qualitative_standard',
          version: '2.0',
          colorAssignmentMode: 'by-value',
          colorAssignments: [
            { key: 'series_a', color: '#0057B7' },
            { key: 'series_b', color: '#00B1CE' },
            { key: 'stale_series', color: '#333333' }
          ]
        }
      } as any
    })
    const { updateConfig, rerenderPanel } = renderPanel(initialConfig, {
      qualitative_standard: [
        '#0057B7',
        '#722161',
        '#00B1CE',
        '#D94E5F',
        '#5A8E3F',
        '#FFB24D',
        '#FB7E38',
        '#032659',
        '#975722'
      ],
      sequential_blue: [
        '#DBE8F7',
        '#BED5ED',
        '#99BCE1',
        '#73A1D5',
        '#4E88C7',
        '#1E6BC0',
        '#0057B7',
        '#01418D',
        '#032659'
      ]
    })

    updateConfig.mockClear()
    rerenderPanel(
      buildConfig({
        general: {
          palette: {
            name: 'sequential_blue',
            version: '2.0',
            colorAssignmentMode: 'by-value',
            colorAssignments: [
              { key: 'series_a', color: '#0057B7' },
              { key: 'series_b', color: '#00B1CE' },
              { key: 'stale_series', color: '#333333' }
            ]
          }
        } as any
      })
    )

    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        general: expect.objectContaining({
          palette: expect.objectContaining({
            colorAssignments: [
              { key: 'series_a', color: '#DBE8F7' },
              { key: 'series_b', color: '#032659' }
            ]
          })
        })
      })
    )
  })

  it('does not reset assignments when custom colors change', () => {
    const initialConfig = buildConfig({
      general: {
        palette: {
          customColors: ['#111111', '#222222'],
          colorAssignmentMode: 'by-value',
          colorAssignments: [
            { key: 'series_a', color: '#111111' },
            { key: 'series_b', color: '#222222' }
          ]
        }
      } as any
    })
    const { updateConfig, rerenderPanel } = renderPanel(initialConfig)

    updateConfig.mockClear()
    rerenderPanel(
      buildConfig({
        general: {
          palette: {
            customColors: ['#aaaaaa', '#bbbbbb'],
            colorAssignmentMode: 'by-value',
            colorAssignments: [
              { key: 'series_a', color: '#111111' },
              { key: 'series_b', color: '#222222' }
            ]
          }
        } as any
      })
    )

    expect(updateConfig).not.toHaveBeenCalled()
  })

  it('resets assignments when custom colors are removed while by-value mode is active', () => {
    const initialConfig = buildConfig({
      general: {
        palette: {
          name: 'qualitative_standard',
          version: '2.0',
          customColors: ['#111111', '#222222'],
          colorAssignmentMode: 'by-value',
          colorAssignments: [
            { key: 'series_a', color: '#111111' },
            { key: 'series_b', color: '#222222' }
          ]
        }
      } as any
    })
    const { updateConfig, rerenderPanel } = renderPanel(initialConfig, {
      qualitative_standard: [
        '#0057B7',
        '#722161',
        '#00B1CE',
        '#D94E5F',
        '#5A8E3F',
        '#FFB24D',
        '#FB7E38',
        '#032659',
        '#975722'
      ]
    })

    updateConfig.mockClear()
    rerenderPanel(
      buildConfig({
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0',
            colorAssignmentMode: 'by-value',
            colorAssignments: [
              { key: 'series_a', color: '#111111' },
              { key: 'series_b', color: '#222222' }
            ]
          }
        } as any
      })
    )

    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        general: expect.objectContaining({
          palette: expect.objectContaining({
            colorAssignments: [
              { key: 'series_a', color: '#0057B7' },
              { key: 'series_b', color: '#5A8E3F' }
            ]
          })
        })
      })
    )
  })

  it('hides assignments for single-series bars colored by category', () => {
    renderPanel(
      buildConfig({
        visualizationType: 'Bar',
        visualizationSubType: 'regular',
        legend: { colorCode: 'category' } as any,
        series: [{ dataKey: 'series_a', name: 'Alpha', type: 'Bar' }] as any
      })
    )

    expect(screen.queryByLabelText('Color Assignment Mode')).not.toBeInTheDocument()
  })
})
