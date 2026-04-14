import { useEffect } from 'react'
import { getQueryParam } from '../helpers/queryStringUtils'
import { QUERY_CHANGE_EVENT } from '../helpers/events'

export const useQueryParamsListener = (param: string | string[], callback: (value: Record<string, string>) => void) =>
  useEffect(() => {
    const handleQueryChange = () => {
      if (Array.isArray(param)) {
        const values = param.reduce((acc, p) => {
          acc[p] = getQueryParam(p) || ''
          return acc
        }, {} as Record<string, string>)
        callback(values)
      } else {
        const val = getQueryParam(param) || ''
        callback({ [param]: val })
      }
    }

    document.addEventListener(QUERY_CHANGE_EVENT, handleQueryChange)

    return () => {
      document.removeEventListener(QUERY_CHANGE_EVENT, handleQueryChange)
    }
  }, [param, callback])
