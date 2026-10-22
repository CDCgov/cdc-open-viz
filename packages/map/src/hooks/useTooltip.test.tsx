import { renderHook } from '@testing-library/react'
import useTooltip from './useTooltip'

const createConfig = (hideGeoColumnInTooltip: boolean) => ({
  general: {
    geoType: 'world',
    type: 'map',
    hideGeoColumnInTooltip,
    hidePrimaryColumnInTooltip: false,
    geoLabelOverride: ''
  },
  columns: {
    geo: {
      name: 'Country',
      label: 'Location',
      tooltip: true,
      displayColumn: ''
    },
    primary: {
      name: 'Value',
      label: 'Value',
      tooltip: true
    },
    navigate: {
      name: ''
    }
  },
  legend: {
    specialClasses: []
  },
  tooltips: {
    noDataLabel: 'No Data'
  }
})

describe('useTooltip', () => {
  it('preserves raw trailing percent decoration in tooltip values', () => {
    const row = { Country: 'ssd', Value: '65.6%' }
    const { result } = renderHook(() => useTooltip(createConfig(false) as any))

    const tooltip = result.current.buildTooltip(row, 'South Sudan')

    expect(tooltip).toContain('Value: 65.6%')
  })

  it('hides the geography column label in the tooltip body when configured', () => {
    const row = { Country: 'ssd', Value: 10 }

    const { result: visibleResult } = renderHook(() => useTooltip(createConfig(false) as any))
    const { result: hiddenResult } = renderHook(() => useTooltip(createConfig(true) as any))

    const visibleTooltip = visibleResult.current.buildTooltip(row, 'South Sudan')
    const hiddenTooltip = hiddenResult.current.buildTooltip(row, 'South Sudan')

    expect(visibleTooltip).toContain('Location: South Sudan')
    expect(hiddenTooltip).not.toContain('Location: South Sudan')
    expect(hiddenTooltip).toContain('<li class="tooltip-body">South Sudan</li>')
  })

  it('translates Spanish geography input in the repeated geography tooltip item', () => {
    const config = createConfig(false) as any
    config.locale = 'en-US'
    config.general.geoType = 'us'
    config.columns.geo = {
      name: 'State',
      label: 'State',
      tooltip: true,
      displayColumn: ''
    }

    const { result } = renderHook(() => useTooltip(config))
    const tooltip = result.current.buildTooltip({ State: 'Nuevo México', Value: 10 }, 'Nuevo México')

    expect(tooltip).toContain('State: New Mexico')
    expect(tooltip).toContain('<li class="tooltip-body">State: New Mexico</li>')
    expect(tooltip).not.toContain('State: Nuevo México')
  })
})
