import { describe, expect, it } from 'vitest'
import { getStatesPicked } from '../getStatesPicked'

const createConfig = (filterControlsStatesPicked = 'State/Territory') =>
  ({
    general: {
      filterControlsStatesPicked,
      statesPicked: [{ fipsCode: '01', stateName: 'Alabama' }]
    }
  } as any)

describe('getStatesPicked', () => {
  it('maps U.S. Virgin Islands filter values to the single-state map topology name', () => {
    const runtimeData = {
      selected: {
        'State/Territory': 'U.S. Virgin Islands'
      },
      fromHash: 1
    }

    expect(getStatesPicked(createConfig(), runtimeData)).toEqual([
      {
        fipsCode: '78',
        stateName: 'United States Virgin Islands'
      }
    ])
  })
})
