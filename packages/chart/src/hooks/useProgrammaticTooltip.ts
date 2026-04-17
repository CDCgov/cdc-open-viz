import { useRef, useImperativeHandle, ForwardedRef } from 'react'

interface UseProgrammaticTooltipProps {
  svgRef: ForwardedRef<SVGAElement>
  getCoordinateFromXValue: (xAxisValue: any) => number
  getXValueFromCoordinate: (xCoordinate: number) => any
  config: any
  yAxisWidth: number
  setPoint: (point: { x: number; y: number }) => void
  setShowHoverLine: (show: boolean) => void
  handleTooltipMouseOver: (event: MouseEvent, additionalChartData?: any) => void
  hideTooltip: () => void
  setSynchronizedXValue?: (value: any) => void
}

/**
 * Custom hook to provide programmatic tooltip control for small multiples synchronization
 * Handles SVG ref management and exposes methods to trigger tooltips from external sources
 */
export const useProgrammaticTooltip = ({
  svgRef,
  getCoordinateFromXValue,
  getXValueFromCoordinate,
  config,
  yAxisWidth,
  setPoint,
  setShowHoverLine,
  handleTooltipMouseOver,
  hideTooltip,
  setSynchronizedXValue
}: UseProgrammaticTooltipProps) => {
  // Internal SVG ref for DOM manipulation
  const internalSvgRef = useRef<SVGSVGElement>(null)

  // Expose programmatic tooltip methods via ref
  useImperativeHandle(
    svgRef,
    () => {
      // Return a proxy that combines SVG element access with our custom methods
      const svgElement = internalSvgRef.current

      // If no SVG element yet, return minimal interface
      if (!svgElement) {
        return {
          triggerTooltipAtDataValue: () => {},
          hideTooltip: () => {}
        }
      }

      // Create object that has both SVG methods and our custom methods
      return Object.assign(svgElement, {
        /**
         * Trigger tooltip at specific data value and Y coordinate (data-centric approach)
         * This ensures pixel-perfect alignment across small multiple tiles
         * @param {any} xAxisValue - X-axis data value (date, number, or category)
         * @param {number} yCoordinate - Exact Y coordinate to use
         */
        triggerTooltipAtDataValue: (xAxisValue: any, yCoordinate: number) => {
          // Warming Stripes positions rects by index (with data sampling), not via xScale,
          // so synthetic mouse events won't map to the correct data points.
          // Route through synchronizedXValue state instead, which WarmingStripes
          // resolves to the matching stripe and calls showTooltip directly.
          if (config.visualizationType === 'Warming Stripes') {
            setSynchronizedXValue?.(xAxisValue)
            return
          }

          const pixelX = getCoordinateFromXValue(xAxisValue)
          const resolvedXValue = Number.isFinite(pixelX) ? getXValueFromCoordinate(pixelX) : null

          if (!Number.isFinite(pixelX) || resolvedXValue !== xAxisValue) {
            hideTooltip()
            setShowHoverLine(false)
            setSynchronizedXValue?.(null)
            return
          }

          const adjustedX = pixelX + yAxisWidth

          const svgRect = internalSvgRef.current!.getBoundingClientRect()

          const syntheticEvent = new MouseEvent('mousemove', {
            bubbles: true,
            cancelable: true,
            clientX: svgRect.left + adjustedX,
            clientY: svgRect.top + yCoordinate,
            screenX: window.screenX + svgRect.left + adjustedX,
            screenY: window.screenY + svgRect.top + yCoordinate,
            view: window
          })

          Object.defineProperty(syntheticEvent, 'currentTarget', {
            value: internalSvgRef.current,
            writable: false
          })

          Object.defineProperty(syntheticEvent, 'target', {
            value: internalSvgRef.current,
            writable: false
          })

          setPoint({ x: adjustedX, y: yCoordinate })
          setShowHoverLine(true)
          handleTooltipMouseOver(syntheticEvent, null)
        },

        /**
         * Hide any currently displayed tooltip and hover line
         */
        hideTooltip: () => {
          hideTooltip()
          setShowHoverLine(false)
          setSynchronizedXValue?.(null)
        }
      })
    },
    [
      getCoordinateFromXValue,
      getXValueFromCoordinate,
      yAxisWidth,
      config.visualizationType,
      setPoint,
      setShowHoverLine,
      handleTooltipMouseOver,
      hideTooltip,
      setSynchronizedXValue
    ]
  )

  return internalSvgRef
}
