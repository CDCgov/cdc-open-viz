import React, { useState, useEffect, useContext } from 'react';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft } from '@visx/axis';
import Context from '../context';

function PairedBarChart({ width, height }) {

	const { dimensions, config, rawData, colorScale, updateConfig } = useContext(Context);

	const data = rawData
	const adjustedWidth = width;
	const adjustedHeight = height;
	const halfWidth = adjustedWidth / 2;
	

	const groupOne = {
		parentKey: config.series[0].parentKey,
		dataKey: config.series[0].dataKey,
		color: colorScale(config.runtime.seriesLabels[config.series[0].dataKey])
	}
	
	const groupTwo = {
		parentKey: config.series[1].parentKey,
		dataKey: config.series[1].dataKey,
		color: colorScale(config.runtime.seriesLabels[config.series[1].dataKey])
	}

	groupOne.max = Math.max.apply(Math, data.filter(item => item[groupOne.parentKey] ===  groupOne.dataKey).map(d => d[config.xAxis.dataKey]))
	groupTwo.max = Math.max.apply(Math, data.filter(item => item[groupTwo.parentKey] === groupTwo.dataKey).map(d => d[config.xAxis.dataKey]))


	const xScale = scaleLinear({
		domain: [0, Math.max(groupOne.max, groupTwo.max)],
		range: [0, halfWidth]
	});

	const yScale = scaleBand({
		range: [0, adjustedHeight],
		domain: data.filter(item => item[groupOne.parentKey] === groupOne.dataKey).map(d => d['Age Group']),
		padding: 0.2
	});

	return (width > 0 && config.series.length === 2) && (
		<>
			<svg
				id="age-chart"
				width={width}
				height={height}>
				<Group top={0} left={config.yAxis.size}>
					{data.filter(item => item[groupOne.parentKey] === groupOne.dataKey).map(d => (
						<Group key={`group-${groupOne.dataKey}-${d[config.xAxis.dataKey]}`}>
							<Bar
								className="bar"
								key={`bar-${groupOne.dataKey}-${d['Age Group']}`}
								x={halfWidth - xScale(d[config.xAxis.dataKey])}
								y={yScale([d['Age Group']])}
								width={xScale(d[config.xAxis.dataKey])}
								height={yScale.bandwidth()}
								fill={groupOne.color}
								data-tip={
									`<p>
										${groupOne.dataKey}<br/>
										${config.xAxis.dataKey}: ${d[config.xAxis.dataKey]}
									</p>`
								}
								data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
							/>
							<text
								x={halfWidth - xScale(d[config.xAxis.dataKey]) + (xScale(d[config.xAxis.dataKey]) > 45 ? 5 : -50)}
								// y={yScale(ageMapping[d.age]) + (yScale.bandwidth() / 2)}
								y={yScale([d['Age Group']]) + (yScale.bandwidth() / 2)}
								fill={xScale(d[config.xAxis.dataKey]) > 30 ? 'white' : 'black'}>
								{d['Age Group']}
							</text>
						</Group>
					)
					)}
					{data.filter(item => item['Sex'] === 'Female').map(d => (
						<Group key={`group-${groupTwo.dataKey}-${d['Age Group']}`}>
							<Bar
								className="bar"
								key={`bar-${groupTwo.dataKey}-${d['Age Group']}`}
								x={halfWidth}
								y={yScale([d['Age Group']])}
								width={xScale(d[config.xAxis.dataKey])}
								height={yScale.bandwidth()}
								fill={groupTwo.color}
								data-tip={
									`<p>
										${groupTwo.dataKey}<br/>
										${config.xAxis.dataKey}: ${d[config.xAxis.dataKey]}
									</p>`
								}
								data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}

							/>
							<text
								x={halfWidth + xScale(d[config.xAxis.dataKey]) + 5}
								y={yScale([d['Age Group']]) + (yScale.bandwidth() / 2)}
								fill={xScale(d.percent) > 30 ? 'white' : 'black'}>
								{d['Age Group']}
							</text>
						</Group>
					)
					)}
				</Group>
			</svg>
		</>
	);
}

export default PairedBarChart;
