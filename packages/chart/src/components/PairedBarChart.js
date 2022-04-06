import React, { useState, useEffect, useContext } from 'react';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft } from '@visx/axis';
import Context from '../context';

const rateCutoff = 10
const countCutoff = 20


function PairedBarChart({ width, height }) {

	const { dimensions, config, rawData, colorScale, updateConfig } = useContext(Context);

	const state = 'Minnesota';

	const data = rawData[0][state]

	useEffect(() => {
		if (config.series.length < 2 || !config.series) {
			console.log('about to update')
			updateConfig({
				...config,
				runtime: {
					...config.runtime,
					editorErrorMessage: "NICE"
				}
			})
		}
	}, [config.series]);


	const adjustedWidth = width;
	const adjustedHeight = height;
	const halfWidth = adjustedWidth / 2;
	
	if(config.series.length < 2) return;

	const groupOne = {
		dataKey: config.series[0].dataKey,
		color: colorScale(config.runtime.seriesLabels[config.series[0].dataKey])
	}
	
	const groupTwo = {
		dataKey: config.series[1].dataKey,
		color: colorScale(config.runtime.seriesLabels[config.series[1].dataKey])
	}
	
	const xScale = scaleLinear({
		domain: [0, Math.max(...data[groupOne.dataKey].map(d => d.percent), ...data[groupTwo.dataKey].map(d => d.percent))],
		range: [0, halfWidth]
	});
		
	// const yScale = scaleBand({
	// 	range: [0, adjustedHeight],
	// 	domain: data[groupOne.dataKey].map(d => ageMapping[d.age]),
	// 	padding: 0.2
	// });
	
	const yScale = scaleBand({
		range: [0, adjustedHeight],
		domain: data[groupOne.dataKey].map(d => [d.age]),
		padding: 0.2
	});

	return (width > 0 && config.series.length === 2) && (
		<>
			<svg
				id="age-chart"
				width={width}
				height={height}>
				<Group top={0} left={config.yAxis.size}>
					{/* <AxisLeft
						scale={yScale}
						tickLabelProps={() => ({
							fontSize: config.fontSize,
							textAnchor: 'start'
						})}
						left={config.yAxis.size}
						hideTicks
					/> */}
					{data[groupOne.dataKey].map(d => (
						<Group key={`group-male-${d.age}`}>
							<Bar
								className="bar"
								key={`bar-${groupOne.dataKey}-${d.age}`}
								x={halfWidth - xScale(d.percent)}
								// y={yScale(ageMapping[d.age])}
								y={yScale([d.age])}
								width={xScale(d.percent)}
								height={yScale.bandwidth()}
								fill={groupOne.color}
							/>
							<text
								x={halfWidth - xScale(d.percent) + (xScale(d.percent) > 35 ? 5 : -30)}
								// y={yScale(ageMapping[d.age]) + (yScale.bandwidth() / 2)}
								y={yScale([d.age]) + (yScale.bandwidth() / 2)}
								fill={xScale(d.percent) > 30 ? 'white' : 'black'}>
								{d.percent}%
							</text>
						</Group>
					)
					)}
					{data[groupTwo.dataKey].map(d => (
						<Group key={`group-${groupTwo.dataKey}-${d.age}`}>
							<Bar
								className="bar"
								key={`bar-${groupTwo.dataKey}-${d.age}`}
								x={halfWidth}
								// y={yScale(ageMapping[d.age])}
								y={yScale([d.age])}
								width={xScale(d.percent)}
								height={yScale.bandwidth()}
								fill={groupTwo.color}
							/>
							<text
								x={halfWidth + xScale(d.percent) + (xScale(d.percent) > 35 ? -35 : 5)}
								// y={yScale(ageMapping[d.age]) + (yScale.bandwidth() / 2)}
								y={yScale([d.age]) + (yScale.bandwidth() / 2)}
								fill={xScale(d.percent) > 30 ? 'white' : 'black'}>
								{d.percent}%
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
