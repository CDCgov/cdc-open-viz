import { describe, it, expect } from 'vitest'
import { getBridgedData } from '../getBridgedData'

describe('getBridgedData', () => {
  const sampleData = [
    { Month: 'Jan', value: 1 },
    { Month: 'Jan', value: 2 },
    { Month: 'Feb', value: 3 },
    { Month: 'Feb', value: 4 },
    { Month: 'Mar', value: 5 }
  ]

  it('returns correct slice for stageKey with next stage', () => {
    const result = getBridgedData('Jan', 'Month', sampleData)

    expect(result).toEqual([
      { Month: 'Jan', value: 1 },
      { Month: 'Jan', value: 2 },
      { Month: 'Feb', value: 3 } // only first item from next stage
    ])
  })

  it('returns correct slice for stageKey with no next stage', () => {
    const result = getBridgedData('Mar', 'Month', sampleData)

    expect(result).toEqual([{ Month: 'Mar', value: 5 }])
  })

  it('returns empty if stageKey not found', () => {
    const result = getBridgedData('Dec', 'Month', sampleData)

    expect(result).toEqual([])
  })

  it('handles unordered input data and preserves stage order by first appearance', () => {
    const unorderedData = [
      { step: 'B', val: 1 },
      { step: 'A', val: 2 },
      { step: 'C', val: 3 },
      { step: 'A', val: 4 },
      { step: 'B', val: 5 }
    ]

    const result = getBridgedData('A', 'step', unorderedData)

    expect(result).toEqual([
      { step: 'A', val: 2 },
      { step: 'A', val: 4 },
      { step: 'C', val: 3 }
    ])
  })

  it('returns only items matching current stage if next stage has no data', () => {
    const dataWithEmptyStage = [
      { stage: '1', x: 10 },
      { stage: '2', x: 20 },
      { stage: '3', x: 30 }
    ]

    const result = getBridgedData('3', 'stage', dataWithEmptyStage)

    expect(result).toEqual([{ stage: '3', x: 30 }])
  })
})
