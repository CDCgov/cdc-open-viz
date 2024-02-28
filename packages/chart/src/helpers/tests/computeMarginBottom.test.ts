import { ChartConfig } from '../../types/ChartConfig'
import { Legend } from '@cdc/core/types/Legend'
import { computeMarginBottom } from '../computeMarginBottom'

describe('computeMarginBottom', () => {
  it('should return correct value', () => {
    const config = {
      orientation: 'horizontal',
      xAxis: { labelOffset: '10' },
      yAxis: { label: null },
      brush: { active: false },
      isResponsiveTicks: true,
      dynamicMarginTop: 20
    }
    const legend = { position: 'top' }
    const currentViewport = 'md'
    expect(computeMarginBottom(config as unknown as ChartConfig, legend as Legend, currentViewport)).toBe('0px')
    config.yAxis.label = 'label'
    expect(computeMarginBottom(config as unknown as ChartConfig, legend as Legend, currentViewport)).toBe('40px')
  })
})
