import { useEffect } from 'react'

interface UseDimensionTrackingProps {
  containerRef: React.RefObject<HTMLDivElement>
  setPreviewDimensions: (dimensions: { width: number; height: number }) => void
}

/**
 * Hook to track and report component dimensions using ResizeObserver
 */
export const useDimensionTracking = ({ containerRef, setPreviewDimensions }: UseDimensionTrackingProps) => {
  useEffect(() => {
    if (!containerRef.current) return

    let resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        let { width, height } = entry.contentRect
        setPreviewDimensions({ width, height })
      }
    })

    resizeObserver.observe(containerRef.current)

    return () => {
      if (!resizeObserver) return
      resizeObserver.disconnect()
      resizeObserver = null
    }
  }, [containerRef, setPreviewDimensions])
}
