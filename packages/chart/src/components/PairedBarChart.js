import React, { useState, useEffect, useContext } from 'react';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft } from '@visx/axis';
import Context from '../context';

function PairedBarChart({ width, height }) {

	const { dimensions, config, rawData, colorScale, updateConfig, transformedData } = useContext(Context);

	if(!config || config?.series?.length < 2) return;

	const data = transformedData
	const adjustedWidth = width;
	const adjustedHeight = height;
	const halfWidth = adjustedWidth / 2;

	const groupOne = {
		parentKey: config.dataDescription.seriesKey,
		dataKey: config.series[0].dataKey,
		color: colorScale(config.runtime.seriesLabels[config.series[0].dataKey])
	}
	
	const groupTwo = {
		parentKey: config.dataDescription.seriesKey,
		dataKey: config.series[1].dataKey,
		color: colorScale(config.runtime.seriesLabels[config.series[1].dataKey])
	}

	console.table({groupOne, groupTwo})

	groupOne.max = Math.max.apply(Math, data.map(item => item[config.series[0].dataKey]))
	groupTwo.max = Math.max.apply(Math, data.map(item => item[config.series[1].dataKey]))

	console.log('groupone max', groupOne.max )
	console.log('group 2 max:', groupTwo.max)
	
	const xScale = scaleLinear({
		domain: [0, Math.max(groupOne.max, groupTwo.max)],
		range: [0, halfWidth]
	});


	const yScale = scaleBand({
		range: [0, adjustedHeight],
		domain: data.map(d => d[config.dataDescription.xKey]),
		padding: 0.2
	});


	return (width > 0) && (
		<>
			<svg
				id="cdc-visualization__paired-bar-chart"
				width={width}
				height={height}>
				<Group top={0} left={config.xAxis.size}>
					{data.filter(item => config.series[0].dataKey === groupOne.dataKey).map(d => (
						<Group key={`group-${groupOne.dataKey}-${d[config.xAxis.dataKey]}`}>
							<Bar
								className="bar"
								key={`bar-${groupOne.dataKey}-${d[config.dataDescription.xKey]}`}
								x={halfWidth - xScale(d[config.series[0].dataKey])}
								y={yScale([d[config.dataDescription.xKey]])}
								width={xScale(d[config.series[0].dataKey])}
								height={yScale.bandwidth()}
								fill={groupOne.color}
								data-tip={
									`<p>
										${config.dataDescription.seriesKey}: ${groupOne.dataKey}<br/>
										${config.xAxis.dataKey}: ${d[config.xAxis.dataKey]}<br/>
										${config.dataDescription.valueKey}: ${d[groupOne.dataKey]}
									</p>`
								}
								data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
							/>
							<text
								x={halfWidth - xScale(d[config.series[0].dataKey]) + (xScale(d[config.series[0].dataKey]) > 45 ? 5 : -50)}
								y={yScale([d[config.dataDescription.xKey]]) + (yScale.bandwidth() / 2)}
								fill={xScale(d[config.xAxis.dataKey]) > 30 ? 'white' : 'black'}>
								{d[config.dataDescription.xKey]}
							</text>
						</Group>
					)
					)}
					{data.filter(item => config.series[1].dataKey === groupTwo.dataKey).map(d => (
						<Group key={`group-${groupTwo.dataKey}-${d[config.dataDescription.xKey]}`}>
							<Bar
								className="bar"
								key={`bar-${groupTwo.dataKey}-${d[config.dataDescription.xKey]}`}
								x={halfWidth}
								y={yScale([d[config.dataDescription.xKey]])}
								width={xScale(d[config.series[1].dataKey])}
								height={yScale.bandwidth()}
								fill={groupTwo.color}
								data-tip={
									`<p>
										${config.dataDescription.seriesKey}: ${groupTwo.dataKey}<br/>
										${config.xAxis.dataKey}: ${d[config.xAxis.dataKey]}<br/>
										${config.dataDescription.valueKey}: ${d[groupTwo.dataKey]}
									</p>`
								}
								data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}

							/>
							<text
								x={halfWidth + xScale(d[config.series[1].dataKey]) + 5}
								y={yScale([d[config.dataDescription.xKey]]) + (yScale.bandwidth() / 2)}
								fill={xScale(d.percent) > 30 ? 'white' : 'black'}>
								{d[config.dataDescription.xKey]}
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
