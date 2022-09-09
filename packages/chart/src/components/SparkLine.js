import React, { useContext, useEffect } from 'react';

import * as allCurves from '@visx/curve';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { Text } from '@visx/text';
import { scaleLinear, scalePoint } from '@visx/scale';
import { AxisBottom } from '@visx/axis';
import { MarkerArrow } from '@visx/marker';


import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

import ReactTooltip from 'react-tooltip';

import useReduceData from '../hooks/useReduceData';


import Context from '../context';

export default function SparkLine({width: parentWidth, height: parentHeight}) {

	const { transformedData: data, dimensions, config, parseDate, formatDate, currentViewport, seriesHighlight, formatNumber, colorScale } = useContext(Context);
	let width = parentWidth
	const { minValue, maxValue } = useReduceData(config, data)
	// if (config && config.legend && !config.legend.hide && (currentViewport === 'lg' || currentViewport === 'md')) {
	// 	width = width * 0.73;
	// }
	const margin = ({ top: 5, right: 10, bottom: 10, left: 10 })
	const height = parentHeight;

	const xMax = width - config.runtime.yAxis.size;
	const yMax = height - margin.top - 20;

	const getXAxisData = (d) => config.runtime.xAxis.type === 'date' ? (parseDate(d[config.runtime.originalXAxis.dataKey])).getTime() : d[config.runtime.originalXAxis.dataKey];
	const getYAxisData = (d, seriesKey) => d[seriesKey];

	let xScale;
	let yScale;
	let seriesScale;


	if (data) {
		let min = config.runtime.yAxis.min !== undefined ? config.runtime.yAxis.min : minValue
		let max = config.runtime.yAxis.max !== undefined ? config.runtime.yAxis.max : Number.MIN_VALUE;

		if ((config.visualizationType === 'Bar' || config.visualizationType === 'Combo') && min > 0) {
			min = 0;
		}
		//If data value max wasn't provided, calculate it
		if (max === Number.MIN_VALUE) {
			max = maxValue
		}

		//Adds Y Axis data padding if applicable
		if (config.runtime.yAxis.paddingPercent) {
			let paddingValue = (max - min) * config.runtime.yAxis.paddingPercent;
			min -= paddingValue;
			max += paddingValue;
		}

		let xAxisDataMapped = data.map(d => getXAxisData(d));

		if (config.runtime.horizontal) {
			xScale = scaleLinear({
				domain: [min, max],
				range: [0, xMax]
			});

			yScale = config.runtime.xAxis.type === 'date' ?
				scaleLinear({ domain: [Math.min(...xAxisDataMapped), Math.max(...xAxisDataMapped)] }) :
				scalePoint({ domain: xAxisDataMapped, padding: 0.5 });

			seriesScale = scalePoint({
				domain: (config.runtime.barSeriesKeys || config.runtime.seriesKeys),
				range: [0, yMax]
			});

			yScale.rangeRound([0, yMax]);
		} else {
			min = min < 0 ? min * 1.11 : min

			yScale = scaleLinear({
				domain: [min, max],
				range: [yMax - margin.bottom, margin.top]
			});

			xScale = scalePoint({ 
				domain: xAxisDataMapped, 
				range: [margin.left, width - margin.right]
			});

			seriesScale = scalePoint({
				domain: (config.runtime.barSeriesKeys || config.runtime.seriesKeys),
				range: [0, xMax]
			});
		}

	}

	const handleSparkLineTicks = [xScale.domain()[0], xScale.domain()[xScale.domain().length - 1]];

	useEffect(() => {
		ReactTooltip.rebuild();
	});

	return (
		<ErrorBoundary component="SparkLine">
			<svg
				width={width} 
				height={height} 
				className={'sparkline'}
				>
					{(config.runtime.lineSeriesKeys || config.runtime.seriesKeys).map((seriesKey, index) => (
						<>
						<Group
							className='sparkline-group'
							height={parentHeight}
							top={margin.top}
							key={`series-${seriesKey}`}
							opacity={config.legend.behavior === "highlight" && seriesHighlight.length > 0 && seriesHighlight.indexOf(seriesKey) === -1 ? 0.5 : 1}
							display={config.legend.behavior === "highlight" || seriesHighlight.length === 0 || seriesHighlight.indexOf(seriesKey) !== -1 ? 'block' : 'none'}
						>
							{data.map((d, dataIndex) => {
								let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${formatNumber(getYAxisData(d, seriesKey))}` : formatNumber(getYAxisData(d, seriesKey))
								let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${d[config.runtime.xAxis.dataKey]}` : d[config.runtime.xAxis.dataKey]

								const tooltip = `<div>
				${yAxisTooltip}<br />
				${xAxisTooltip}<br />
				${config.seriesLabel ? `${config.seriesLabel}: ${seriesKey}` : ''} 
				</div>`
								console.log('index', dataIndex)
								console.log('configSeries', data)

								let circleRadii = 4.5

								return (
									<Group key={`series-${seriesKey}-point-${dataIndex}`}>
										<Text
											display={config.labels ? 'block' : 'none'}
											x={xScale(getXAxisData(d))}
											y={yScale(getYAxisData(d, seriesKey))}
											fill={colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey) : '#000'}
											textAnchor="middle">
											{formatNumber(d[seriesKey])}
										</Text>

										{dataIndex + 1 !== data.length &&
											<circle
												key={`${seriesKey}-${dataIndex}`}
												r={circleRadii}
												cx={xScale(getXAxisData(d))}
												cy={yScale(getYAxisData(d, seriesKey))}
												fill={colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey) : '#000'}
												style={{ fill: colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey) : '#000' }}
												data-tip={tooltip}
												data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
											/>
										}
									</Group>
								)
							})}
							<LinePath
								curve={allCurves.curveLinear}
								data={data}
								x={(d) => xScale(getXAxisData(d))}
								y={(d) => yScale(getYAxisData(d, seriesKey))}
								stroke={colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey) : '#000'}
								strokeWidth={2}
								strokeOpacity={1}
								shapeRendering="geometricPrecision"
								marker-end="url(#arrow)"

							/>
								<MarkerArrow 
									id="arrow" 
									refX={2} 
									size={6} 
									marker-end="url(#arrow)"
									fill={colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey) : '#000'}
									/>

						</Group>
						<AxisBottom
							top={yMax + margin.top}
							hideAxisLine
							hideTicks
							scale={xScale}
							tickValues={ handleSparkLineTicks }
							tickFormat={formatDate}
							stroke={'black'}
							tickStroke={'black'}
							tickLabelProps={() => ({
								fill: 'black',
								fontSize: 11,
								textAnchor: 'middle',
							})}
							
							/>
							</>
					))
					}
			</svg>
		</ErrorBoundary>
		
	);
}
