import React, { useState } from 'react'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../context'
import PatternSettings from './PatternSettingsPanel/PatternSettingsPanel'

// Unit tests do not transform SVG imports into React icon components.
vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

vi.mock('topojson-client', () => ({
  feature: () => ({ features: [{ properties: { iso: 'AL' } }, { properties: { iso: 'PA' } }] })
}))
vi.mock('../../../UsaMap/data/us-topo.json', () => ({ default: { objects: { states: {} } } }))

vi.mock('../../../../helpers/applyLegendToRow', () => ({ applyLegendToRow: row => [row.fill] }))
vi.mock('../../../../context/LegendMemoContext', () => ({
  useLegendMemoContext: () => ({
    legendMemo: { current: new Map() },
    legendSpecialClassLastMemo: { current: new Map() }
  })
}))

afterEach(cleanup)

const contrastError = 'One or more patterns do not pass the WCAG 2.1 contrast ratio of 3:1.'
const initialConfig = (color = '', errors: string | string[] = contrastError): any => ({
  general: { geoType: 'us', type: 'data' },
  columns: { geo: { name: 'state' } },
  data: [{ state: 'Alabama', active: 'Yes' }],
  map: { patterns: [{ dataKey: 'active', dataValue: 'Yes', pattern: 'diagonalLines', color, contrastCheck: false }] },
  runtime: { editorErrorMessage: errors }
})

function Harness({ initial, rows }: { initial: any; rows: Record<string, any> }) {
  const [config, setConfig] = useState(initial)
  return (
    <ConfigContext.Provider value={{ config, setConfig, runtimeData: rows, runtimeLegend: {} } as any}>
      <Accordion preExpanded={['patterns']} allowZeroExpanded>
        <PatternSettings name='Pattern Settings' />
      </Accordion>
      <output data-testid='validation'>
        {JSON.stringify({
          checks: config.map.patterns.map(pattern => pattern.contrastCheck),
          errors: config.runtime.editorErrorMessage
        })}
      </output>
      <output data-testid='patterns'>{JSON.stringify(config.map.patterns)}</output>
    </ConfigContext.Provider>
  )
}

const validation = () => JSON.parse(screen.getByTestId('validation').textContent!)
const patterns = () => JSON.parse(screen.getByTestId('patterns').textContent!)

describe('automatic pattern validation', () => {
  it('creates a complete pattern item with the documented defaults', async () => {
    const initial = initialConfig()
    initial.map.patterns = []
    const { container } = render(<Harness initial={initial} rows={{}} />)
    let addPatternButton: HTMLButtonElement | undefined
    await waitFor(() => {
      addPatternButton = Array.from(container.querySelectorAll('button')).find(
        button => button.textContent === 'Add Geo Pattern'
      )
      expect(addPatternButton).toBeTruthy()
    })
    fireEvent.click(addPatternButton!)

    expect(patterns()).toEqual([
      {
        dataKey: '',
        dataValue: '',
        pattern: 'circles',
        label: '',
        size: 'medium',
        color: '',
        contrastCheck: true
      }
    ])
  })

  it.each(['', undefined, '   '])('shows automatic color %s as passing without rewriting saved config', async color => {
    const initial = initialConfig()
    initial.map.patterns[0].color = color
    const { container } = render(<Harness initial={initial} rows={{}} />)
    await waitFor(() => expect(container.querySelector('input[name="patternColor"]')).not.toBeNull())
    expect(container.querySelectorAll('.alert-success')).toHaveLength(2)
    expect(container.querySelector('.alert-danger')).toBeNull()
    expect(validation()).toEqual({ checks: [false], errors: contrastError })
  })

  it('preserves failures belonging to explicit colors when automatic colors are edited', async () => {
    const initial = initialConfig('orange')
    initial.map.patterns.push({ ...initial.map.patterns[0], color: '#FFFFFF' })
    const { container } = render(<Harness initial={initial} rows={{}} />)
    await waitFor(() => expect(container.querySelector('input[name="patternColor"]')).not.toBeNull())
    fireEvent.change(container.querySelector('input[name="patternColor"]')!, { target: { value: '' } })
    expect(validation()).toEqual({ checks: [true, false], errors: contrastError })
  })

  it('clears the contrast error when an explicit color is cleared', async () => {
    const { container } = render(
      <Harness initial={initialConfig('#FFFFFF')} rows={{ AL: { active: 'Yes', fill: '#FFFFFF' } }} />
    )
    await waitFor(() => expect(container.querySelector('input[name="patternColor"]')).not.toBeNull())
    expect(validation()).toEqual({ checks: [false], errors: contrastError })
    fireEvent.change(container.querySelector('input[name="patternColor"]')!, { target: { value: '' } })
    await waitFor(() => expect(validation()).toEqual({ checks: [true], errors: '' }))
  })

  it('leaves explicit-color validation timing and last-geography behavior unchanged', async () => {
    const initial = initialConfig('#000000')
    const { container, rerender } = render(
      <Harness initial={initial} rows={{ AL: { active: 'Yes', fill: '#FFFFFF' } }} />
    )
    await waitFor(() => expect(container.querySelector('input[name="patternColor"]')).not.toBeNull())
    rerender(
      <Harness
        initial={initial}
        rows={{
          AL: { active: 'Yes', fill: '#FFFFFF' },
          PA: { active: 'Yes', fill: '#023F91' }
        }}
      />
    )
    expect(validation()).toEqual({ checks: [false], errors: contrastError })
    const log = vi.spyOn(console, 'error').mockImplementation(() => {})
    try {
      fireEvent.change(container.querySelector('input[name="patternColor"]')!, { target: { value: '#FFFFFF' } })
      await waitFor(() => expect(validation()).toEqual({ checks: [true], errors: '' }))
      expect(log).toHaveBeenCalled()
    } finally {
      log.mockRestore()
    }
  })
})
