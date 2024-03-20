import { LinePath } from '@visx/shape'
import { Group } from '@visx/group'
import { ChartConfig } from '../../../types/ChartConfig'

type BumpChartProps = {
  width: number
  height: number
  config: ChartConfig
  xScale: () => unknown[]
  yScale: () => unknown[]
}

const BumpChart = props => {
  const { width = 700, height = 900, config, xScale, yScale } = props

  return (
    <svg width={width} height={height}>
      <Group left={Number(config.runtime.yAxis.size) - config.yAxis.axisPadding}>
        {config.data.map(d => {
          return <LinePath key={d.item} data={d.rankings.map((value, index) => ({ x: index, y: value, item: d.item }))} x={d => xScale(d.x)} y={d => yScale(d.item)} stroke='black' strokeWidth={2} fill='transparent' />
        })}
      </Group>
    </svg>
  )
}

export default BumpChart
