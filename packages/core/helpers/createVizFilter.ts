import { VizFilter } from '../types/VizFilter'

export const createVizFilter = (overrides: Partial<VizFilter> = {}): VizFilter =>
  ({
    values: [],
    id: Date.now(),
    filterStyle: 'dropdown',
    ...overrides
  } as VizFilter)
