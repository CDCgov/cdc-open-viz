import { useRef } from 'react'

/**
 * Custom hook to manage legend memoization refs
 * Extracted from context to reduce context props and improve performance
 */
export const useLegendMemo = () => {
  const legendMemo = useRef(new Map())
  const legendSpecialClassLastMemo = useRef(new Map())
  const bubbleLegendMemo = useRef(new Map())
  const bubbleLegendSpecialClassLastMemo = useRef(new Map())

  return {
    legendMemo,
    legendSpecialClassLastMemo,
    bubbleLegendMemo,
    bubbleLegendSpecialClassLastMemo
  }
}

export default useLegendMemo
