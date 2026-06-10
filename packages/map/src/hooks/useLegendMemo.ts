import { type MutableRefObject, useRef } from 'react'

/**
 * Custom hook to manage legend memoization refs
 * Extracted from context to reduce context props and improve performance
 */
export const useLegendMemo = () => {
  const legendMemo = useRef(new Map())
  const legendSpecialClassLastMemo = useRef(new Map())
  const bubbleLegendMemos = useRef<MutableRefObject<Map<any, any>>[]>([])
  const bubbleLegendSpecialClassLastMemos = useRef<MutableRefObject<Map<any, any>>[]>([])

  const getBubbleLegendMemo = (index = 0) => {
    if (!bubbleLegendMemos.current[index]) bubbleLegendMemos.current[index] = { current: new Map() }
    return bubbleLegendMemos.current[index]
  }

  const getBubbleLegendSpecialClassLastMemo = (index = 0) => {
    if (!bubbleLegendSpecialClassLastMemos.current[index]) {
      bubbleLegendSpecialClassLastMemos.current[index] = { current: new Map() }
    }
    return bubbleLegendSpecialClassLastMemos.current[index]
  }

  const bubbleLegendMemo = getBubbleLegendMemo(0)
  const bubbleLegendSpecialClassLastMemo = getBubbleLegendSpecialClassLastMemo(0)

  return {
    legendMemo,
    legendSpecialClassLastMemo,
    bubbleLegendMemo,
    bubbleLegendSpecialClassLastMemo,
    getBubbleLegendMemo,
    getBubbleLegendSpecialClassLastMemo
  }
}

export default useLegendMemo
