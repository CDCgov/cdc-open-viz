import { OrderBy } from '../types/VizFilter'

export const filterOrderOptions: { label: string; value: OrderBy }[] = [
  {
    label: 'Ascending Alphanumeric',
    value: 'asc'
  },
  {
    label: 'Descending Alphanumeric',
    value: 'desc'
  },
  {
    label: 'Custom',
    value: 'cust'
  },
  { label: 'Order By Data Column', value: 'column' },
  { label: 'Source Data Order', value: 'data' }
]

export const visualizationFilterOrderOptions = filterOrderOptions.filter(({ value }) => value !== 'data')
export const dashboardFilterOrderOptions = filterOrderOptions.filter(({ value }) => value !== 'column')
export const nestedFilterOrderOptions = filterOrderOptions.filter(({ value }) => value !== 'column' && value !== 'data')
