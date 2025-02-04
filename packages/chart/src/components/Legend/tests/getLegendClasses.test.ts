import { describe, it, expect } from 'vitest'
import { getLegendClasses } from './../helpers/getLegendClasses'
import { ChartConfig } from '../../../types/ChartConfig'

describe('getLegendClasses', () => {
  it('should return correct classes for left position', () => {
    const config: ChartConfig = {
      legend: {
        position: 'left',
        singleRow: false,
        reverseLabelOrder: false,
        verticalSorted: false,
        hideBorder: { side: false, topBottom: false }
      }
    }
    const result = getLegendClasses(config)
    expect(result.containerClasses).toContain('left')
    // Left Position Charts can't have single row...
    expect(result.innerClasses).not.toContain('single-row')
  })

  it('should return correct classes for right position', () => {
    const config: ChartConfig = {
      legend: {
        position: 'right',
        singleRow: false,
        reverseLabelOrder: false,
        verticalSorted: false,
        hideBorder: { side: false, topBottom: false }
      }
    }
    const result = getLegendClasses(config)
    expect(result.containerClasses).toContain('right')
    // Right Position Charts can't have single row...
    expect(result.innerClasses).not.toContain('single-row')
  })

  it('should return correct classes for bottom position with single row', () => {
    const config: ChartConfig = {
      legend: {
        position: 'bottom',
        singleRow: true,
        reverseLabelOrder: false,
        verticalSorted: false,
        hideBorder: { side: false, topBottom: false }
      }
    }
    const result = getLegendClasses(config)
    expect(result.containerClasses).toContain('bottom')
    expect(result.innerClasses).toContain('bottom')
    expect(result.innerClasses).toContain('single-row')
  })

  it('should return correct classes for TOP position with double column', () => {
    const config: ChartConfig = {
      legend: {
        position: 'top',
        singleRow: false,
        reverseLabelOrder: false,
        verticalSorted: false,
        hideBorder: { side: false, topBottom: false }
      }
    }
    const result = getLegendClasses(config)
    expect(result.containerClasses).toContain('top')
    expect(result.innerClasses).toContain('top')
    expect(result.innerClasses).toContain('double-column')
  })

  it('should return correct classes for hide border side', () => {
    const config: ChartConfig = {
      legend: {
        position: 'left',
        singleRow: false,
        reverseLabelOrder: false,
        verticalSorted: false,
        hideBorder: { side: true, topBottom: false }
      }
    }
    const result = getLegendClasses(config)
    expect(result.containerClasses).toContain('border-0')
  })

  it('should return correct classes for hide border topBottom', () => {
    const config: ChartConfig = {
      legend: {
        position: 'top',
        singleRow: false,
        reverseLabelOrder: false,
        verticalSorted: false,
        hideBorder: { side: false, topBottom: true }
      }
    }
    const result = getLegendClasses(config)
    expect(result.containerClasses).toContain('border-0')
    expect(result.containerClasses).toContain('p-0')
  })
})
