import React, { useContext, useState } from 'react';
import Context from '../context';
import parse from 'html-react-parser';
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend';
import LegendCircle from '@cdc/core/components/LegendCircle';


// JSX for Legend
const Legend = () => {

	let containerClasses = ['legend-container']
	let innerClasses = ['legend-container__inner'];
	const [dynamicLegendItems, setDynamicLegendItems] = useState([])
	const { config, legend, colorScale, seriesHighlight, highlight, highlightReset, setFilteredData, transformedData: filteredData } = useContext(Context);

	console.log('runtime series labels', config.runtime.seriesLabels)
	console.log('runtime', config.runtime)


	if (config.legend.position === "left") {
		containerClasses.push('left')
	}

	if (config.legend.reverseLabelOrder) {
		innerClasses.push('d-flex')
		innerClasses.push('flex-column-reverse')
	}

	if(!legend) return true;

	if (!legend.dynamicLegend) return (
		<aside id="legend" className={containerClasses.join(' ')} role="region" aria-label="legend" tabIndex={0}>
			{legend.label && <h2>{parse(legend.label)}</h2>}
			{legend.description && <p>{parse(legend.description)}</p>}
			<LegendOrdinal
				scale={colorScale}
				itemDirection="row"
				labelMargin="0 20px 0 0"
				shapeMargin="0 10px 0"
			>

				{labels => (
					<div className={innerClasses.join(' ')}>
						{labels.map((label, i) => {
							let className = 'legend-item'
							let itemName = label.datum

							// Filter excluded data keys from legend
							if (config.exclusions.active && config.exclusions.keys?.includes(itemName)) {
								return
							}

							if (config.runtime.seriesLabels) {
								let index = config.runtime.seriesLabelsAll.indexOf(itemName)
								itemName = config.runtime.seriesKeys[index]
							}

							if (seriesHighlight.length > 0 && false === seriesHighlight.includes(itemName)) {
								className += ' inactive'
							}

							return (
								<LegendItem
									className={className}
									tabIndex={0}
									key={`legend-quantile-${i}`}
									onKeyPress={(e) => {
										if (e.key === 'Enter') {
											highlight(label);
										}
									}}
									onClick={() => {
										highlight(label);
									}}
								>
									<LegendCircle fill={label.value} />
									<LegendLabel align="left" margin="0 0 0 4px">
										{label.text}
									</LegendLabel>
								</LegendItem>
							)
						})}
						{seriesHighlight.length > 0 && <button className={`legend-reset ${config.theme}`} onClick={highlightReset} tabIndex={0}>Reset</button>}
					</div>
				)}
			</LegendOrdinal>
		</aside>
	)

	return (
		<aside id="legend" className={containerClasses.join(' ')} role="region" aria-label="legend" tabIndex={0}>
			{legend.label && <h2>{parse(legend.label)}</h2>}
			{legend.description && <p>{parse(legend.description)}</p>}
			<LegendOrdinal
				scale={colorScale}
				itemDirection="row"
				labelMargin="0 20px 0 0"
				shapeMargin="0 10px 0"
			>

				{labels => (
					<select
						className={'dynamic-legend-dropdown'}
						onChange={(e) => {
							setFilteredData([...dynamicLegendItems, JSON.parse(e.target.value)]);
						}}
					>
						<option
							className={'all'}
							tabIndex={0}
							value={'All Data'}

						>
							Show All
						</option>
						{labels.map((label, i) => {
							let className = 'legend-item'
							let itemName = label.datum

							// Filter excluded data keys from legend
							if (config.exclusions.active && config.exclusions.keys?.includes(itemName)) {
								return
							}

							if (config.runtime.seriesLabels) {
								let index = config.runtime.seriesLabelsAll.indexOf(itemName)
								itemName = config.runtime.seriesKeys[index]
							}

							if (seriesHighlight.length > 0 && false === seriesHighlight.includes(itemName)) {
								className += ' inactive'
							}

							console.log('label', label)

							return (
								<option
									className={className}
									tabIndex={0}
									value={JSON.stringify(label)}

								>
									{label.text}
								</option>
							)
						})}
						{seriesHighlight.length > 0 && <button className={`legend-reset ${config.theme}`} onClick={highlightReset} tabIndex={0}>Reset</button>}
					</select>


				)}

			</LegendOrdinal>
			{/* {console.log('d l it', dynamicLegendItems)} */}
			{console.log('filteredData', filteredData)}
			<div className="dynamic-legend-list">
				{filteredData.map((label, i) => {
					let className = 'legend-item'
					let itemName = label.text

					// Filter excluded data keys from legend
					if (config.exclusions.active && config.exclusions.keys?.includes(itemName)) {
						return
					}

					if (config.runtime.seriesLabels) {
						let index = config.runtime.seriesLabelsAll.indexOf(itemName)
						itemName = config.runtime.seriesKeys[index]
					}

					if (seriesHighlight.length > 0 && false === seriesHighlight.includes(itemName)) {
						className += ' inactive'
					}

					return (
						<LegendItem
							className={className}
							tabIndex={0}
							key={`legend-quantile-${i}`}
							onKeyPress={(e) => {
								if (e.key === 'Enter') {
									highlight(label);
								}
							}}
							onClick={() => {
								highlight(label);
							}}
						>
							<LegendCircle fill={label.value} />
							<LegendLabel align="left" margin="0 0 0 4px">
								{label.text}
							</LegendLabel>
						</LegendItem>
					)
				})}
			</div>
		</aside>
	)
}

export default Legend;
