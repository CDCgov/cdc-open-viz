import { useState, useEffect, useContext } from 'react'
import ConfigContext, { ChartDispatchContext } from '../../ConfigContext'
import ZoomBrush from './BrushChart'
const ParentBrush = ({ yMax, xMax }) => {
  const { tableData, config, parseDate, dashboardConfig } = useContext(ConfigContext)
  const dataKey = config.xAxis.dataKey
  const [brushKey, setBrushKey] = useState(0)
  const dispatch = useContext(ChartDispatchContext)
  const sharedFilters = dashboardConfig?.dashboard?.sharedFilters ?? []
  const isDashboardFilters = sharedFilters?.length > 0
  const [brushPosition, setBrushPosition] = useState({
    start: { x: 0 },
    end: { x: xMax }
  })

  const handleBrushChange = (bounds: any) => {
    const selected = bounds.xValues || []
    const filteredData = tableData.filter(row => selected.includes(row[dataKey]))
    dispatch({ type: 'SET_BRUSH_DATA', payload: filteredData })
  }

  // whenever your other filters change:
  useEffect(() => {
    setBrushPosition({ start: { x: 0 }, end: { x: xMax } })
    dispatch({ type: 'SET_BRUSH_DATA', payload: [] })
    setBrushKey(k => k + 1)
  }, [config.filters, config.exclusions, config.brush?.active, isDashboardFilters])

  return (
    <ZoomBrush
      xMax={xMax}
      yMax={yMax}
      brushPosition={brushPosition}
      onBrushChange={handleBrushChange}
      brushKey={brushKey}
    />
  )
}
export default ParentBrush
