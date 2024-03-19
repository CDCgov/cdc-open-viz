import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';

import data from './components/bump-chart.json'
import { Key } from 'react';

const BumpChartImplementation = ({ width=700, height=900, config, xScale, yScale }) => {
    console.log(config)
    return (
        <svg width={width} height={height} >
            <Group left={Number(config.runtime.yAxis.size) - config.yAxis.axisPadding}>
                {config.data.map((d: { item: Key; rankings: any[]; }) => (
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
