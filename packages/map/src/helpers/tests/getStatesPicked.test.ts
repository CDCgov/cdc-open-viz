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
  it.each(['U.S. Virgin Islands', 'US Virgin Islands', 'Virgin Islands', 'VI'])(
    'maps %s filter values to the single-state map topology name',
    value => {
      const runtimeData = {
        selected: {
          'State/Territory': value
        },
        fromHash: 1
      }

      expect(getStatesPicked(createConfig(), runtimeData)).toEqual([
        {
          fipsCode: '78',
          stateName: 'United States Virgin Islands'
        }
      ])
    }
  )
})
