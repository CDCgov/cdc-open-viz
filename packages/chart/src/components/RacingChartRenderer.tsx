import { type ReactNode, type RefObject } from 'react'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import BarChartRace, { BarChartRaceFallback, type BarRaceEligibility } from './BarChartRace'
import LineChartRace, { LineChartRaceFallback, type LineRaceEligibility } from './LineChartRace'

type Props = {
  barRace: BarRaceEligibility
  family: 'Bar' | 'Line'
  lineRace: LineRaceEligibility
  parentRef: RefObject<HTMLDivElement>
  renderTopYAxisTitles: () => ReactNode
  svgRef: RefObject<SVGAElement>
}

const RacingChartRenderer = ({ barRace, family, lineRace, parentRef, renderTopYAxisTitles, svgRef }: Props) => {
  const eligibility = family === 'Bar' ? barRace : lineRace

  return (
    <>
      {(family === 'Line' || !eligibility.eligible) && renderTopYAxisTitles()}
      <div ref={parentRef} style={{ width: '100%' }}>
        <ParentSize>
          {parent => {
            if (family === 'Bar') {
              return barRace.eligible ? (
                <BarChartRace parentWidth={parent.width} race={barRace} />
              ) : (
                <BarChartRaceFallback ref={svgRef} parentWidth={parent.width} parentHeight={parent.height} />
              )
            }

            return lineRace.eligible ? (
              <LineChartRace ref={svgRef} parentWidth={parent.width} parentHeight={parent.height} race={lineRace} />
            ) : (
              <LineChartRaceFallback ref={svgRef} parentWidth={parent.width} parentHeight={parent.height} />
            )
          }}
        </ParentSize>
      </div>
    </>
  )
}

export default RacingChartRenderer
