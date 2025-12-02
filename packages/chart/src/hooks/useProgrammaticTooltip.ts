import { useRef, useImperativeHandle, ForwardedRef } from 'react'

interface UseProgrammaticTooltipProps {
  svgRef: ForwardedRef<SVGAElement>
  getCoordinateFromXValue: (xAxisValue: any) => number
  config: any
  setPoint: (point: { x: number; y: number }) => void
  setShowHoverLine: (show: boolean) => void
  handleTooltipMouseOver: (event: MouseEvent, additionalChartData?: any) => void
  hideTooltip: () => void
}

/**
 * Custom hook to provide programmatic tooltip control for small multiples synchronization
 * Handles SVG ref management and exposes methods to trigger tooltips from external sources
 */
export const useProgrammaticTooltip = ({
  svgRef,
  getCoordinateFromXValue,
  config,
  setPoint,
  setShowHoverLine,
  handleTooltipMouseOver,
  hideTooltip
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
          const pixelX = getCoordinateFromXValue(xAxisValue)
          const adjustedX = pixelX + Number(config.yAxis.size || 0)

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
        }
      })
    },
    [getCoordinateFromXValue, config.yAxis.size, setPoint, setShowHoverLine, handleTooltipMouseOver, hideTooltip]
  )

  return internalSvgRef
}
