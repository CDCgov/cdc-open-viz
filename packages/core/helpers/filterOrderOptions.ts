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
  { label: 'Order By Data Column', value: 'column' }
]
