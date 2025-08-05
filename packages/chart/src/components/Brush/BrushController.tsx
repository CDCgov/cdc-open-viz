import { useState, useEffect, useContext, useRef } from 'react'
import ConfigContext, { ChartDispatchContext } from '../../ConfigContext'
import BrushChart from './BrushChart'
import { isDateScale } from '@cdc/core/helpers/cove/date'
import { BrushRef } from './types'

const BrushController = ({ yMax, xMax }) => {
  const { tableData, config, parseDate, dashboardConfig, formatDate } = useContext(ConfigContext)
  const [brushHandleProps, setBrushHandleProps] = useState({
    startPos: 0,
    endPos: 0,
    startValue: '',
    endValue: '',
    xMax: xMax
  })
  const dataKey = config.xAxis.dataKey
  const [brushKey, setBrushKey] = useState(0)
  const dispatch = useContext(ChartDispatchContext)
  const sharedFilters = dashboardConfig?.dashboard?.sharedFilters ?? []
  const isDashboardFilters = sharedFilters?.length > 0
  const brushRef = useRef<BrushRef | null>(null)

  const [brushPosition, setBrushPosition] = useState({
    start: { x: 0 },
    end: { x: xMax }
  })

  const handleBrushChange = (bounds: any) => {
    if (!bounds) return dispatch({ type: 'SET_BRUSH_DATA', payload: [] })
    const filteredValues = bounds?.xValues?.filter(val => val !== undefined)
    if (filteredValues?.length === 0) dispatch({ type: 'SET_BRUSH_DATA', payload: [] })
    const selected = bounds?.xValues || []

    const filteredData = tableData.filter(row => selected.includes(row[dataKey]))
    const endValue = filteredValues
      .slice()
      .reverse()
      .find(item => item !== undefined)
    const startValue = filteredValues.find(item => item !== undefined)
    const formatIfDate = value => (isDateScale(config.runtime.xAxis) ? formatDate(parseDate(value)) : value)

    setBrushHandleProps(prev => ({
      ...prev,
      startPos: brushRef.current?.state.start.x,
      endPos: brushRef.current?.state.end.x,
      endValue: formatIfDate(endValue),
      startValue: formatIfDate(startValue)
    }))
    dispatch({ type: 'SET_BRUSH_DATA', payload: filteredData })
  }

  // whenever your other filters change:
  useEffect(() => {
    setBrushPosition({ start: { x: 0 }, end: { x: xMax } })
    dispatch({ type: 'SET_BRUSH_DATA', payload: [] })
    setBrushKey(k => k + 1)
  }, [config.filters, config.exclusions, config.brush?.active, isDashboardFilters])

  return (
    <BrushChart
      brushRef={brushRef}
      brushHandleProps={brushHandleProps}
      xMax={xMax}
      yMax={yMax}
      brushPosition={brushPosition}
      onBrushChange={handleBrushChange}
      brushKey={brushKey}
    />
  )
}
export default BrushController
