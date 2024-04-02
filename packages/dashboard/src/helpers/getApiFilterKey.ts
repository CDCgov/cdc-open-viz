import { APIFilter } from '../types/APIFilter'

export const getApiFilterKey = ({ apiEndpoint, heirarchyLookup }: APIFilter) => {
  return apiEndpoint + (heirarchyLookup || '')
}
