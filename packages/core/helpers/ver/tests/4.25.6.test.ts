import { expect, describe, it } from 'vitest'
import { changeOnlyShowTopSuffixToInlineLabel } from '../4.25.6'

describe('changeOnlyShowTopSuffixToInlineLabel(config) ', () => {
  it("should'nt change config if no suffix", () => {
    const config = {
      type: 'chart',
      dataFormat: {
        onlyShowTopPrefixSuffix: true,
        suffix: ''
      }
    }
    const newConfig = changeOnlyShowTopSuffixToInlineLabel(config)
    expect(newConfig).toEqual(config)
  })
  it("should't change suffix if onlyShowTopPrefixSuffix is false", () => {
    const config = {
      type: 'chart',
      dataFormat: {
        onlyShowTopPrefixSuffix: false,
        suffix: 'test'
      }
    }
    const newConfig = changeOnlyShowTopSuffixToInlineLabel(config)
    expect(newConfig).toEqual(config)
  })
  it('should change suffix to inlineLabel if onlyShowTopPrefixSuffix is true', () => {
    const config = {
      type: 'chart',
      dataFormat: {
        onlyShowTopPrefixSuffix: true,
        suffix: 'test'
      }
    }
    const newConfig = changeOnlyShowTopSuffixToInlineLabel(config)
    expect(newConfig.yAxis.inlineLabel).toBe('test')
    expect(newConfig.dataFormat.onlyShowTopPrefixSuffix).toBe(undefined)
    expect(newConfig.dataFormat.suffix).toBe('')
  })
  it("should't overwrite existing yAxis inlineLabel", () => {
    const config = {
      type: 'chart',
      dataFormat: {
        onlyShowTopPrefixSuffix: true,
        suffix: 'test'
      },
      yAxis: {
        inlineLabel: 'test2'
      }
    }
    const newConfig = changeOnlyShowTopSuffixToInlineLabel(config)
    expect(newConfig.yAxis.inlineLabel).toBe('test2')
    expect(newConfig.dataFormat.onlyShowTopPrefixSuffix).toBe(undefined)
    expect(newConfig.dataFormat.suffix).toBe('')
  })
  it('should change suffix to inlineLabel for dashboard visualizations', () => {
    const config = {
      type: 'dashboard',
      visualizations: [
        {
          type: 'chart',
          dataFormat: {
            onlyShowTopPrefixSuffix: true,
            suffix: 'test'
          }
        },
        {
          type: 'chart',
          dataFormat: {
            onlyShowTopPrefixSuffix: true,
            suffix: 'test2'
          }
        }
      ]
    }
    const newConfig = changeOnlyShowTopSuffixToInlineLabel(config)
    expect(newConfig.visualizations[0].yAxis.inlineLabel).toBe('test')
    expect(newConfig.visualizations[0].dataFormat.onlyShowTopPrefixSuffix).toBe(undefined)
    expect(newConfig.visualizations[0].dataFormat.suffix).toBe('')
    expect(newConfig.visualizations[1].yAxis.inlineLabel).toBe('test2')
    expect(newConfig.visualizations[1].dataFormat.onlyShowTopPrefixSuffix).toBe(undefined)
    expect(newConfig.visualizations[1].dataFormat.suffix).toBe('')
  })
})
