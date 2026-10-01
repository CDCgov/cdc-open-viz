import { forwardRef, useContext } from 'react'
import ConfigContext from '../../ConfigContext'
import LinearChart from '../LinearChart'

type Props = { parentHeight: number; parentWidth: number }

const LineChartRaceFallback = forwardRef<SVGAElement, Props>(({ parentHeight, parentWidth }, ref) => {
  const context = useContext(ConfigContext)
  return (
    <ConfigContext.Provider
      value={{
        ...context,
        convertLineToBarGraph: false,
        config: {
          ...context.config,
          visualizationSubType: 'regular',
          allowLineToBarGraph: false,
          animate: false
        }
      }}
    >
      <LinearChart ref={ref} parentWidth={parentWidth} parentHeight={parentHeight} />
    </ConfigContext.Provider>
  )
})

LineChartRaceFallback.displayName = 'LineChartRaceFallback'
export default LineChartRaceFallback
