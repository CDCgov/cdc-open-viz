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
    expect(result.innerClasses).toContain('double-column')
    expect(result.innerClasses).toContain('bottom')
    expect(result.innerClasses).toContain('single-row')
  })

  it('should return correct classes for top position with vertical sorting', () => {
    const config: ChartConfig = {
      legend: {
        position: 'top',
        singleRow: false,
        reverseLabelOrder: false,
        verticalSorted: true,
        hideBorder: { side: false, topBottom: false }
      }
    }
    const result = getLegendClasses(config)
    expect(result.containerClasses).toContain('top')
    expect(result.innerClasses).toContain('double-column')
    expect(result.innerClasses).toContain('top')
    expect(result.innerClasses).toContain('vertical-sorted')
  })

  it('should return correct classes for reverse label order', () => {
    const config: ChartConfig = {
      legend: {
        position: 'bottom',
        singleRow: false,
        reverseLabelOrder: true,
        verticalSorted: false,
        hideBorder: { side: false, topBottom: false }
      }
    }
    const result = getLegendClasses(config)
    expect(result.innerClasses).toContain('d-flex')
    expect(result.innerClasses).toContain('flex-column-reverse')
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
    expect(result.containerClasses).toContain('no-border')
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
    expect(result.containerClasses).toContain('no-border')
    expect(result.containerClasses).toContain('p-0')
  })
})
