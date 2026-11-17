import { useLayoutEffect, useRef, useState } from 'react'
import { DEFAULT_SCROLL_STATE, SCROLL_EDGE_TOLERANCE } from '../heatmap.constants'

interface UseHeatMapScrollOptions {
  columnCount: number
  isHorizontallyScrollable: boolean
  marginXAxisLabels: string[]
  minimumColumnWidth: number
  parentHeight: number
  parentWidth: number
}

export const useHeatMapScroll = ({
  columnCount,
  isHorizontallyScrollable,
  marginXAxisLabels,
  minimumColumnWidth,
  parentHeight,
  parentWidth
}: UseHeatMapScrollOptions) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const [scrollState, setScrollState] = useState(DEFAULT_SCROLL_STATE)

  useLayoutEffect(() => {
    if (!isHorizontallyScrollable) {
      setScrollState(currentState =>
        currentState.scrollbarSpace === 0 && !currentState.canScrollLeft && !currentState.canScrollRight
          ? currentState
          : DEFAULT_SCROLL_STATE
      )
      return
    }

    const scrollArea = scrollAreaRef.current
    if (!scrollArea) return

    const updateScrollState = () => {
      const measuredSpace = Math.max(scrollArea.offsetHeight - scrollArea.clientHeight, 0)
      const maximumScrollLeft = Math.max(scrollArea.scrollWidth - scrollArea.clientWidth, 0)
      const normalizedScrollLeft = Math.max(scrollArea.scrollLeft, 0)
      const canScrollLeft = normalizedScrollLeft > SCROLL_EDGE_TOLERANCE
      const canScrollRight = normalizedScrollLeft < maximumScrollLeft - SCROLL_EDGE_TOLERANCE

      setScrollState(currentState =>
        currentState.scrollbarSpace === measuredSpace &&
        currentState.canScrollLeft === canScrollLeft &&
        currentState.canScrollRight === canScrollRight
          ? currentState
          : { scrollbarSpace: measuredSpace, canScrollLeft, canScrollRight }
      )
    }

    updateScrollState()
    scrollArea.addEventListener('scroll', updateScrollState, { passive: true })

    if (typeof ResizeObserver === 'undefined') {
      return () => scrollArea.removeEventListener('scroll', updateScrollState)
    }

    const resizeObserver = new ResizeObserver(updateScrollState)
    resizeObserver.observe(scrollArea)
    return () => {
      scrollArea.removeEventListener('scroll', updateScrollState)
      resizeObserver.disconnect()
    }
  }, [columnCount, isHorizontallyScrollable, marginXAxisLabels, minimumColumnWidth, parentHeight, parentWidth])

  return { scrollAreaRef, scrollState }
}
