import { describe, it, expectTypeOf } from 'vitest'
import type { DataRowsByKey } from '@cdc/core/types/Data'
import type { DashboardFilters as CoreDashboardFilters } from '@cdc/core/types/DashboardFilters'
import type { AnyVisualization } from '@cdc/core/types/Visualization'
import type { DashboardState } from '../store/dashboard.reducer'
import type { InitialState } from './InitialState'

describe('dashboard type contracts', () => {
  it('uses the shared dashboard filters contract directly', () => {
    expectTypeOf<CoreDashboardFilters>().toMatchTypeOf<AnyVisualization>()
  })

  it('uses the shared data-map contract for dashboard state', () => {
    expectTypeOf<DashboardState['data']>().toEqualTypeOf<DataRowsByKey>()
    expectTypeOf<DashboardState['filteredData']>().toEqualTypeOf<DataRowsByKey>()
    expectTypeOf<InitialState['data']>().toEqualTypeOf<DataRowsByKey>()
    expectTypeOf<InitialState['filteredData']>().toEqualTypeOf<DataRowsByKey>()
  })
})
