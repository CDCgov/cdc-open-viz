import { describe, expect, it } from 'vitest'
import { prepareSankeyData } from './prepareSankeyData'

describe('prepareSankeyData', () => {
  it('accepts tabular source target value rows', () => {
    const result = prepareSankeyData([
      { source: 'Screened', target: 'Eligible', value: '850' },
      { source: 'Eligible', target: 'Enrolled', value: 700 }
    ])

    expect(result.nodes.map(node => node.id)).toEqual(['Screened', 'Eligible', 'Enrolled'])
    expect(result.links).toMatchObject([
      { source: 'Screened', target: 'Eligible', value: 850 },
      { source: 'Eligible', target: 'Enrolled', value: 700 }
    ])
    expect(result.rejectedRowCount).toBe(0)
  })

  it('handles common case-insensitive field names and comma-formatted values', () => {
    const result = prepareSankeyData([{ Source: 'A', Target: 'B', Value: '1,250' }])

    expect(result.links[0]).toMatchObject({ source: 'A', target: 'B', value: 1250 })
  })

  it('uses configured columns for arbitrary imported headers', () => {
    const result = prepareSankeyData(
      [
        { Step: 'Screened', Next: 'Eligible', Patients: '850' },
        { Step: 'Eligible', Next: 'Enrolled', Patients: 700 }
      ],
      { source: 'Step', target: 'Next', value: 'Patients' }
    )

    expect(result.links).toMatchObject([
      { source: 'Screened', target: 'Eligible', value: 850 },
      { source: 'Eligible', target: 'Enrolled', value: 700 }
    ])
    expect(result.rejectedRowCount).toBe(0)
  })

  it('prefers configured columns before alias fallbacks', () => {
    const result = prepareSankeyData(
      [
        {
          source: 'Alias Source',
          target: 'Alias Target',
          value: 1,
          Step: 'Mapped Source',
          Next: 'Mapped Target',
          Patients: 2
        }
      ],
      { source: 'Step', target: 'Next', value: 'Patients' }
    )

    expect(result.links[0]).toMatchObject({ source: 'Mapped Source', target: 'Mapped Target', value: 2 })
  })

  it('combines duplicate links and rejects missing, zero, and invalid values', () => {
    const result = prepareSankeyData([
      { source: 'A', target: 'B', value: 10 },
      { source: 'A', target: 'B', value: 15 },
      { source: 'A', target: 'C', value: 0 },
      { source: 'A', target: 'D', value: 'not a number' },
      { source: '', target: 'E', value: 4 }
    ])

    expect(result.links).toMatchObject([{ source: 'A', target: 'B', value: 25 }])
    expect(result.rejectedRowCount).toBe(3)
  })
})
