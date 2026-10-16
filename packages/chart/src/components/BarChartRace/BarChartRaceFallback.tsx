import { forwardRef, useContext } from 'react'
import ConfigContext from '../../ConfigContext'
import LinearChart from '../LinearChart'

type Props = {
  parentHeight: number
  parentWidth: number
}

const BarChartRaceFallback = forwardRef<SVGAElement, Props>(({ parentHeight, parentWidth }, ref) => {
  const context = useContext(ConfigContext)
  const enteringFromVertical = context.config.orientation !== 'horizontal'
  const fallbackConfig = {
    ...context.config,
    visualizationSubType: 'regular',
    orientation: 'horizontal' as const,
    isLollipopChart: false,
    barStyle: 'flat' as const,
    xAxis: enteringFromVertical
      ? {
          ...context.config.xAxis,
          anchors: context.config.yAxis?.anchors ?? [],
          hideAxis: true,
          hideTicks: true
        }
      : context.config.xAxis,
    yAxis: enteringFromVertical
      ? {
          ...context.config.yAxis,
          anchors: context.config.xAxis?.anchors ?? [],
          hideAxis: false,
          hideTicks: false,
          labelPlacement: context.config.yAxis?.labelPlacement || 'On Date/Category Axis'
        }
      : context.config.yAxis,
    runtime: { ...context.config.runtime, horizontal: true }
  }

  return (
    <ConfigContext.Provider value={{ ...context, config: fallbackConfig }}>
      <LinearChart ref={ref} parentWidth={parentWidth} parentHeight={parentHeight} />
    </ConfigContext.Provider>
  )
})

BarChartRaceFallback.displayName = 'BarChartRaceFallback'

export default BarChartRaceFallback
