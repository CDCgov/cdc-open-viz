import { useContext } from 'react'
import ConfigContext from '../ConfigContext'

/**
 * Custom hook to handle synchronized tooltips in small multiples.
 * This hook provides mouse event handlers that coordinate tooltip display across multiple chart tiles.
 *
 * @param xMax - The maximum x coordinate of the chart area
 * @param yMax - The maximum y coordinate of the chart area
 * @param getXValueFromCoordinate - Function to convert pixel x-coordinate to data value
 * @returns Object with onMouseMove and onMouseLeave handlers, or null if not in small multiples
 */
export const useSmallMultipleSynchronization = (
  xMax: number,
  yMax: number,
  getXValueFromCoordinate: (x: number) => any
) => {
  const { config, handleSmallMultipleHover } = useContext(ConfigContext)

  // If not in small multiples mode, return null handlers
  if (!handleSmallMultipleHover) {
    return {
      onMouseMove: null,
      onMouseLeave: null
    }
  }

  const yAxisSize = Number(config.yAxis.size || 0)

  const onMouseMove = (event: any) => {
    const svgRect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - svgRect.left
    const y = event.clientY - svgRect.top

    // Only trigger synchronized tooltips when mouse is over the valid chart area
    // (to the right of the Y-axis and within chart bounds)
    const isOverChartArea = x >= yAxisSize && x <= yAxisSize + xMax && y >= 0 && y <= yMax

    if (isOverChartArea) {
      const xAxisValue = getXValueFromCoordinate(x - yAxisSize)
      if (xAxisValue !== null && xAxisValue !== undefined) {
        handleSmallMultipleHover(xAxisValue, y)
        return
      }
    }

    // If we're not over a valid area or couldn't get a value, hide synchronized tooltips
    handleSmallMultipleHover(null, null)
  }

  const onMouseLeave = () => {
    handleSmallMultipleHover(null, null)
  }

  return {
    onMouseMove,
    onMouseLeave
  }
}
