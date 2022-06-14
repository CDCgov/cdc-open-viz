import React, { useContext } from 'react';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { Text } from '@visx/text';

import Context from '../context';
import chroma from 'chroma-js';


interface PairedBarChartProps {
	width: number,
	height: number
}

const PairedBarChart: React.FC<PairedBarChartProps> = ({ width, height }) => {

	const { config, colorScale, transformedData, formatNumber, seriesHighlight } = useContext<any>(Context);

	if(!config || config?.series?.length < 2) return;

	const data = transformedData
	const adjustedWidth = width;
	const adjustedHeight = height;
	const halfWidth = adjustedWidth / 2;

	const groupOne = {
		parentKey: config.dataDescription.seriesKey,
		dataKey: config.series[0].dataKey,
		color: colorScale(config.runtime.seriesLabels[config.series[0].dataKey]),
		max: Math.max.apply(Math, data.map(item => item[config.series[0].dataKey])),
		labelColor: ''
	}
	
	const groupTwo = {
		parentKey: config.dataDescription.seriesKey,
		dataKey: config.series[1].dataKey,
		color: colorScale(config.runtime.seriesLabels[config.series[1].dataKey]),
		max: Math.max.apply(Math, data.map(item => item[config.series[1].dataKey])),
		labelColor: ''
	}
	
	const xScale = scaleLinear({
		domain: [0, Math.max(groupOne.max, groupTwo.max)],
		range: [0, halfWidth]
	});


	const yScale = scaleBand({
		range: [0, adjustedHeight],
		domain: data.map(d => d[config.dataDescription.xKey]),
	});

	// Set label color
	let labelColor = '#000000';

	if (chroma.contrast(labelColor, groupOne.color) < 4.9) {
		groupOne.labelColor = '#FFFFFF';
	}

	if (chroma.contrast(labelColor, groupTwo.color) < 4.9) {
		groupTwo.labelColor = '#FFFFFF';
	}

	const dataTipOne = (d) => {
		return (
			`<p>
				${config.dataDescription.seriesKey}: ${groupOne.dataKey}<br/>
				${config.xAxis.dataKey}: ${d[config.xAxis.dataKey]}<br/>
				${config.dataDescription.valueKey}: ${formatNumber(d[groupOne.dataKey])} 
			</p>`
		)
	}

	const dataTipTwo = (d) => {
		return (
			`<p>
				${config.dataDescription.seriesKey}: ${groupTwo.dataKey}<br/>
				${config.xAxis.dataKey}: ${d[config.xAxis.dataKey]}<br/>
				${config.dataDescription.valueKey}: ${formatNumber(d[groupTwo.dataKey])}
			</p>`
		)
	}

	const isLabelBelowBar = config.yAxis.labelPlacement === "Below Bar";
	const isLabelOnYAxis = config.yAxis.labelPlacement === "On Date/Category Axis";
	const isLabelMissing = !config.yAxis.labelPlacement;

	return (width > 0) && (
		<>
			<svg
				id="cdc-visualization__paired-bar-chart"
				width={width}
				height={height}>
				<Group top={0} left={config.xAxis.size}>
					{data.filter(item => config.series[0].dataKey === groupOne.dataKey).map( (d,index) => {

						let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(config.series[0].dataKey) === -1;
						let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(config.series[0].dataKey) !== -1;
						let barWidth = (xScale(d[config.series[0].dataKey]))
                    	let barHeight = Number(config.barHeight) ? Number(config.barHeight) : 25;
                    	let barPadding = barHeight;
                    	config.barHeight = Number(config.barHeight) ? Number(config.barHeight) : 25;
						config.barPadding = config.barHeight;
                    
						if (config.orientation=== "horizontal") {
	
							if(isLabelBelowBar || isLabelMissing || isLabelOnYAxis) {
								if(barHeight < 40) {
								config.barPadding = 40;
								} else {
								config.barPadding = barPadding;
								}
							} else {
								config.barPadding = barPadding / 2;
							}
						}

                    	config.height = (Number(barHeight) ) * data.length + (config.barPadding * data.length);

						let y =  yScale([d[config.dataDescription.xKey]]) + config.barHeight/1.5;
						y = Number(config.barPadding) > 20 ? y += Number(config.barPadding/3.5) - config.barHeight/2 : y += 0

						return (
						<Group key={`group-${groupOne.dataKey}-${d[config.xAxis.dataKey]}`}>
							<Bar
								className="bar"
								key={`bar-${groupOne.dataKey}-${d[config.dataDescription.xKey]}`}
								x={halfWidth - barWidth}
								y={ y }
								width={xScale(d[config.series[0].dataKey])}
								height={barHeight}
								fill={groupOne.color}
								data-tip={ dataTipOne(d) }
								data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
								stroke="#333"
								strokeWidth={config.barBorderThickness || 1}
								opacity={transparentBar ? 0.5 : 1}
								display={displayBar ? 'block' : 'none'}
							/>
							{config.yAxis.displayNumbersOnBar && displayBar &&
								<Text
									textAnchor={barWidth < 100 ? 'end' : 'start' }
									verticalAnchor="middle"
									x={halfWidth - (barWidth < 100 ? barWidth + 10 : barWidth - 5)}
									y={ y + config.barHeight/2}
									fill={barWidth > 100 ? groupOne.labelColor : '#000' }>
									{formatNumber(d[groupOne.dataKey])}
								</Text>
							}
						</Group>
					)}
					)}
					{data.filter(item => config.series[1].dataKey === groupTwo.dataKey).map(d => {
						let barWidth = (xScale(d[config.series[1].dataKey]))
						let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(config.series[1].dataKey) === -1;
						let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(config.series[1].dataKey) !== -1;
						
                    	let barHeight = config.barHeight ? config.barHeight : 25;
                    	let barPadding = barHeight;
                    	config.barHeight = Number(config.barHeight)

						let y =  yScale([d[config.dataDescription.xKey]]) + config.barHeight/1.5;
						y = Number(config.barPadding) > 20 ? y += Number(config.barPadding/3.5) - config.barHeight/2 : y += 0
                    
						if (config.orientation=== "horizontal") {
	
							if(isLabelBelowBar || isLabelMissing || isLabelOnYAxis) {
								if(barHeight < 40) {
								config.barPadding = 40;
								} else {
								config.barPadding = barPadding;
								}
							} else {
								config.barPadding = barPadding / 2;
							}
						}

						return(
							<Group key={`group-${groupTwo.dataKey}-${d[config.dataDescription.xKey]}`}>
								<Bar
									className="bar"
									key={`bar-${groupTwo.dataKey}-${d[config.dataDescription.xKey]}`}
									x={halfWidth}
									y={ y }
									width={xScale(d[config.series[1].dataKey])}
									height={barHeight}
									fill={groupTwo.color}
									data-tip={ dataTipTwo(d) }
									data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
									strokeWidth={config.barBorderThickness || 1}
									stroke="#333"
									opacity={transparentBar ? 0.5 : 1}
									display={displayBar ? 'block' : 'none'}
								/>
								{config.yAxis.displayNumbersOnBar && displayBar &&
									<Text
										textAnchor={barWidth < 100 ? 'start' : 'end' }
										verticalAnchor="middle"
										x={halfWidth + (barWidth < 100 ? barWidth + 10 : barWidth - 10 )}
										y={ y + config.barHeight/2}
										fill={barWidth > 100 ? groupTwo.labelColor : '#000' }>
										{formatNumber(d[groupTwo.dataKey])}
									</Text>
								}
							</Group>
						)
					}
					)}
				</Group>
			</svg>
		</>
	);
}

export default PairedBarChart;
