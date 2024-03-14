import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { scaleLinear, scalePoint } from '@visx/scale';

import data from './components/bump-chart.json'

const margin = { top: 20, bottom: 20, left: 30, right: 30 };
const BumpChartImplementation = ({ width=700, height=900 }) => {
    const xScale = scaleLinear({
        range: [margin.left, width - margin.right],
        domain: [0, data.chartData[0].rankings.length - 1],
      });

    const yScale = scalePoint({
        range: [height - margin.bottom, margin.top],
        domain: data.chartData.map(d => d.item),
        padding: 0.5,
    });

    return (
        <svg width={width} height={height}>
            <Group>
                {data.chartData.map(d => (
                <LinePath
                    key={d.item}
                    data={d.rankings.map((value, index) => ({ x: index, y: value, item: d.item }))}
                    x={d => xScale(d.x)}
                    y={d => yScale(d.item)}
                    stroke="black"
                    strokeWidth={2}
                    fill="transparent"
                />
                ))}
            </Group>
        </svg>
    )
};
export default BumpChartImplementation
