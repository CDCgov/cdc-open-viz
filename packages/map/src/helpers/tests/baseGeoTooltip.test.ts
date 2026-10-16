import { describe, expect, it } from 'vitest'
import { createTooltipBuilder } from '../../hooks/useTooltip'
import { getBaseGeoTooltipAttributes, shouldRenderBaseGeoTooltip } from '../baseGeoTooltip'

const headingOnlyTooltip = '<p class="tooltip-heading" style="text-transform: none;">State: Alabama</p><ul></ul>'
const emptyBodyTooltip =
  '<p class="tooltip-heading" style="text-transform: none;">State: Alabama</p><ul><li class="tooltip-body"></li></ul>'
const tooltipWithBody =
  '<p class="tooltip-heading" style="text-transform: none;">State: Alabama</p><ul><li class="tooltip-body">10</li></ul>'

describe('baseGeoTooltip', () => {
  it('suppresses heading-only base geography tooltips on bubble layer maps', () => {
    expect(shouldRenderBaseGeoTooltip(headingOnlyTooltip, true)).toBe(false)
    expect(getBaseGeoTooltipAttributes(headingOnlyTooltip, 'map-tooltip', true)).toEqual({})
  })

  it('suppresses base geography tooltips with only empty body rows on bubble layer maps', () => {
    expect(shouldRenderBaseGeoTooltip(emptyBodyTooltip, true)).toBe(false)
    expect(getBaseGeoTooltipAttributes(emptyBodyTooltip, 'map-tooltip', true)).toEqual({})
  })

  it('keeps base geography tooltips that include configured data fields on bubble layer maps', () => {
    expect(shouldRenderBaseGeoTooltip(tooltipWithBody, true)).toBe(true)
    expect(getBaseGeoTooltipAttributes(tooltipWithBody, 'map-tooltip', true)).toEqual({
      'data-tooltip-id': 'tooltip__map-tooltip',
      'data-tooltip-html': tooltipWithBody
    })
  })

  it('keeps heading-only base geography tooltips on non-bubble maps', () => {
    expect(shouldRenderBaseGeoTooltip(headingOnlyTooltip, false)).toBe(true)
  })

  it('suppresses migrated legacy bubble base geographies with empty top-level tooltip columns', () => {
    const config = {
      general: {
        geoType: 'us',
        type: 'data',
        hideGeoColumnInTooltip: false,
        hidePrimaryColumnInTooltip: false,
        geoLabelOverride: ''
      },
      columns: {
        geo: { name: '', label: 'Location', tooltip: false, displayColumn: '' },
        primary: { name: '', label: '', tooltip: true },
        navigate: { name: '' }
      },
      legend: {
        specialClasses: []
      },
      tooltips: {
        noDataLabel: 'No Data'
      }
    }

    const tooltipHtml = createTooltipBuilder(config as any).buildTooltip({ STATE: 'AL', Rate: 10 }, 'Alabama')

    expect(tooltipHtml).toContain('State: Alabama')
    expect(tooltipHtml).toContain('<li class="tooltip-body"></li>')
    expect(getBaseGeoTooltipAttributes(tooltipHtml, 'map-tooltip', true)).toEqual({})
  })
})
