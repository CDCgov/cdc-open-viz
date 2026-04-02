import { renderHook } from '@testing-library/react'
import useTooltip from './useTooltip'

const supportedStatesFipsCodes = {
  '01': 'Alabama'
}

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
  it('hides the geography column label in the tooltip body when configured', () => {
    const row = { Country: 'ssd', Value: 10 }

    const { result: visibleResult } = renderHook(() =>
      useTooltip({
        config: createConfig(false),
        supportedStatesFipsCodes
      })
    )
    const { result: hiddenResult } = renderHook(() =>
      useTooltip({
        config: createConfig(true),
        supportedStatesFipsCodes
      })
    )

    const visibleTooltip = visibleResult.current.buildTooltip(row, 'South Sudan')
    const hiddenTooltip = hiddenResult.current.buildTooltip(row, 'South Sudan')

    expect(visibleTooltip).toContain('Location: South Sudan')
    expect(hiddenTooltip).not.toContain('Location: South Sudan')
    expect(hiddenTooltip).toContain('<li class="tooltip-body">South Sudan</li>')
  })
})
