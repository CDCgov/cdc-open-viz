import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CdcMapComponent from '../CdcMapComponent'
import minimalConfig from '../../examples/minimal-example.json'

vi.hoisted(() => {
  Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
    configurable: true,
    value: () => ({ measureText: (text = '') => ({ width: String(text).length * 8 }) })
  })
})

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))
vi.mock('../components/MapContainer', () => ({ default: () => null }))
vi.mock('@cdc/core/components/DataTable', () => ({
  default: ({ runtimeData }) => <output data-testid='map-rows'>{JSON.stringify(runtimeData)}</output>
}))

const buildConfig = () => ({
  ...minimalConfig,
  table: { forceDisplay: true, expanded: true, collapsible: false },
  filters: [
    {
      columnName: 'Period',
      label: 'Period',
      filterStyle: 'dropdown',
      showDropdown: true,
      active: '2025',
      defaultValue: '2024',
      values: ['2024', '2025']
    }
  ],
  data: [
    { 'FIPS Codes': 'Alabama', Rate: 10, Period: '2024' },
    { 'FIPS Codes': 'Alabama', Rate: 90, Period: '2025' }
  ]
})

const map = config => (
  <CdcMapComponent
    config={config as any}
    navigationHandler={vi.fn()}
    setSharedFilter={vi.fn()}
    setSharedFilterValue={vi.fn()}
    interactionLabel='filter-defaults-test'
  />
)

const expectRate = async (rate: number) => {
  await waitFor(() => expect(screen.getByTestId('map-rows').textContent).toContain(`"Rate":${rate}`))
}

describe('map defaults across incoming updates', () => {
  it.each(['data', 'metadata'])('preserves an interactive selection across a %s refresh', async update => {
    const config = buildConfig()
    const { rerender } = render(map(config))
    await expectRate(10)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '2025' } })
    await expectRate(90)

    const updated =
      update === 'data'
        ? { ...config, data: config.data.map(row => ({ ...row, Rate: row.Rate + 1 })) }
        : {
            ...config,
            dataMetadata: { source: 'updated source' },
            general: { ...config.general, title: 'Updated map' }
          }
    rerender(map(updated))
    await expectRate(update === 'data' ? 91 : 90)
    if (update === 'metadata') expect(await screen.findByText('Updated map')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveValue('2025')
  })

  it('keeps a selected nested child and its options across a data refresh', async () => {
    const config = {
      ...buildConfig(),
      filters: [
        {
          columnName: 'State',
          label: 'County',
          filterStyle: 'nested-dropdown',
          showDropdown: true,
          active: 'Ohio',
          defaultValue: 'Ohio',
          values: ['Ohio'],
          subGrouping: {
            columnName: 'County',
            active: 'Franklin',
            valuesLookup: { Ohio: { values: ['Franklin', 'Hamilton'] } }
          }
        }
      ],
      data: [
        { 'FIPS Codes': 'Alabama', Rate: 10, State: 'Ohio', County: 'Franklin' },
        { 'FIPS Codes': 'Alabama', Rate: 90, State: 'Ohio', County: 'Hamilton' }
      ]
    }
    const { rerender } = render(map(config))
    await expectRate(10)
    fireEvent.click(screen.getByDisplayValue('Ohio - Franklin'))
    fireEvent.click(await screen.findByRole('treeitem', { name: 'Ohio Hamilton' }))
    await expectRate(90)
    fireEvent.click(screen.getByPlaceholderText('Ohio - Hamilton'))
    expect(await screen.findByRole('treeitem', { name: 'Ohio Hamilton' })).toBeInTheDocument()
    rerender(map({ ...config, data: config.data.map(row => ({ ...row, Rate: row.Rate + 1 })) }))
    await expectRate(91)
  })

  it('honors a new explicit incoming selection during a data refresh', async () => {
    const config = buildConfig()
    const { rerender } = render(map(config))
    await expectRate(10)
    rerender(map({ ...config, data: [...config.data], filters: [{ ...config.filters[0], active: '2024' }] }))
    await expectRate(10)
    rerender(map({ ...config, data: [...config.data], filters: [{ ...config.filters[0], active: '2025' }] }))
    await expectRate(90)
  })
})
