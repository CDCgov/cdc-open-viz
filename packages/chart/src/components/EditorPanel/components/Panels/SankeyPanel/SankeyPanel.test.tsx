import React from 'react'
import { Accordion } from 'react-accessible-accordion'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../../ConfigContext'
import EditorPanelContext from '../../../EditorPanelContext'
import { createMockChartContext, createMockConfig } from '../../../../LinearChart/tests/mockConfigContext'
import SankeyPanel from './SankeyPanel'

vi.mock('use-debounce', () => ({
  useDebounce: value => [value]
}))

vi.mock('../../../../../images/warning.svg', () => ({
  default: props => <svg data-testid='warning-icon' {...props} />
}))

const buildConfig = (overrides = {}) =>
  createMockConfig({
    visualizationType: 'Sankey',
    enableTooltips: false,
    sankey: {
      horizontalScrollWidth: 320,
      columns: {
        source: 'source',
        target: 'target',
        value: 'value'
      }
    } as any,
    ...overrides
  })

const renderPanel = (
  config = buildConfig(),
  columns = ['source', 'target', 'value', 'alternate'],
  withUpdater = true
) => {
  const updateConfig = vi.fn()
  const context = createMockChartContext(config, withUpdater ? { updateConfig } : { updateConfig: undefined })

  const view = render(
    <ConfigContext.Provider value={context}>
      <EditorPanelContext.Provider value={{ getColumns: () => columns }}>
        <Accordion allowZeroExpanded>
          <SankeyPanel name='Sankey' />
        </Accordion>
      </EditorPanelContext.Provider>
    </ConfigContext.Provider>
  )

  const panelButton = screen.queryByRole('button', { name: /Sankey/ })
  if (panelButton) fireEvent.click(panelButton)

  return { ...view, updateConfig }
}

describe('SankeyPanel', () => {
  it('does not render or mutate config for non-Sankey charts', () => {
    const { updateConfig } = renderPanel(buildConfig({ visualizationType: 'Line' }))

    expect(screen.queryByRole('button', { name: /Sankey/ })).not.toBeInTheDocument()
    expect(updateConfig).not.toHaveBeenCalled()
  })

  it('preserves required-field metadata and warns for missing or unavailable mappings', () => {
    const config = buildConfig({
      sankey: {
        columns: { source: 'unavailable', target: '', value: 'value' }
      } as any
    })
    const { container } = renderPanel(config)

    expect(screen.getByRole('button', { name: /Sankey/ })).toHaveAttribute(
      'data-required-field-section',
      'sankey-columns'
    )
    expect(screen.getByLabelText('Source Column')).toHaveAttribute('data-required-field-control', 'sankey-source')
    expect(screen.getByLabelText('Target Column')).toHaveAttribute('data-required-field-control', 'sankey-target')
    expect(screen.getByLabelText('Value Column')).toHaveAttribute('data-required-field-control', 'sankey-value')
    expect(container.querySelector('.warning-icon')).toBeInTheDocument()
  })

  it('does not treat saved non-empty mappings as unavailable when column options are empty', () => {
    const { container } = renderPanel(buildConfig(), [])

    expect(container.querySelector('.warning-icon')).not.toBeInTheDocument()
  })

  it('updates one column while preserving sibling mappings and Sankey settings', () => {
    const { updateConfig } = renderPanel()

    fireEvent.change(screen.getByLabelText('Source Column'), { target: { value: 'alternate' } })

    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        sankey: expect.objectContaining({
          horizontalScrollWidth: 320,
          columns: {
            source: 'alternate',
            target: 'target',
            value: 'value'
          }
        })
      })
    )
  })

  it('updates only the top-level tooltip setting', () => {
    const config = buildConfig()
    const { updateConfig } = renderPanel(config)

    fireEvent.click(screen.getByLabelText('Show Tooltips'))

    expect(updateConfig).toHaveBeenCalledWith({ ...config, enableTooltips: true })
  })

  it('coerces a positive finite horizontal scroll width to a number', async () => {
    const { updateConfig } = renderPanel()

    fireEvent.change(screen.getByLabelText('Horizontal Scroll Width'), { target: { value: '480' } })

    await waitFor(() =>
      expect(updateConfig).toHaveBeenCalledWith(
        expect.objectContaining({ sankey: expect.objectContaining({ horizontalScrollWidth: 480 }) })
      )
    )
  })

  it.each(['', '0', '-1', '1e309'])('removes an invalid horizontal scroll width (%s)', async value => {
    const { updateConfig } = renderPanel()

    fireEvent.change(screen.getByLabelText('Horizontal Scroll Width'), { target: { value } })

    await waitFor(() => {
      expect(updateConfig).toHaveBeenCalled()
      expect(updateConfig.mock.calls.at(-1)?.[0].sankey).not.toHaveProperty('horizontalScrollWidth')
    })
  })

  it('keeps every update optional when the config updater is absent', () => {
    renderPanel(buildConfig(), ['source', 'target', 'value', 'alternate'], false)

    expect(() => {
      fireEvent.change(screen.getByLabelText('Source Column'), { target: { value: 'alternate' } })
      fireEvent.click(screen.getByLabelText('Show Tooltips'))
      fireEvent.change(screen.getByLabelText('Horizontal Scroll Width'), { target: { value: '480' } })
    }).not.toThrow()
  })
})
