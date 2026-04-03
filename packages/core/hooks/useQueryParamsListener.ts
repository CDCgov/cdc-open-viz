import { useEffect } from 'react'
import { getQueryParam } from '../helpers/queryStringUtils'
import { QUERY_CHANGE_EVENT } from '../helpers/events'

export const useQueryParamsListener = (param: string, callback: Function) =>
  useEffect(() => {
    const handleQueryChange = () => {
      const val = getQueryParam(param) || ''
      callback(val)
    }

    window.addEventListener(QUERY_CHANGE_EVENT, handleQueryChange)

    return () => {
      window.removeEventListener(QUERY_CHANGE_EVENT, handleQueryChange)
    }
  }, [param, callback])
