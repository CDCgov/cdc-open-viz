import React, { useContext, useState, useEffect } from 'react';
import Context from '../context';
import parse from 'html-react-parser';
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend';
import LegendCircle from '@cdc/core/components/LegendCircle';

import useLegendClasses from './../hooks/useLegendClasses';


const Legend = () => {

	const { 
		config,
		legend,
		colorScale,
		seriesHighlight,
		highlight,
		highlightReset,
		setSeriesHighlight,
		dynamicLegendItems,
		setDynamicLegendItems,
		seriesLabelsAll
	} = useContext(Context);

	const {innerClasses, containerClasses} = useLegendClasses(config)

	useEffect(() => {
		setSeriesHighlight(dynamicLegendItems.map( item => item.text))
	}, [dynamicLegendItems]);

	const removeDynamicLegendItem = (label ) => {
		let newLegendItems = dynamicLegendItems.filter((item) => item.text !== label.text);
		let newLegendItemsText = newLegendItems.map(item => item.text )
		setDynamicLegendItems( newLegendItems )
		setSeriesHighlight( newLegendItemsText)
	}

	if (!legend) return;

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
						{seriesHighlight.length > 0 && <button className={`legend-reset ${config.theme}`} onClick={ (labels) => highlightReset(labels) } tabIndex={0}>Reset</button>}
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

				{labels => {
				if ( 
					(Number(config.legend.dynamicLegendItemLimit) > dynamicLegendItems.length) // legend items are less than limit
					&& (dynamicLegendItems.length !== config.runtime.seriesLabelsAll.length) ) // legend items are equal to series length
					{
					return (
					<select
						className={'dynamic-legend-dropdown'}
						onChange={(e) => {
							let value = JSON.parse(e.target.value).text;
							if(value === config.legend.dynamicLegendDefaultText) {
								// highlightReset()
							} else {
								setDynamicLegendItems([...dynamicLegendItems, JSON.parse(e.target.value)])
							}
						}}
					>
						<option
							className={'all'}
							tabIndex={0}
							value={JSON.stringify({ text: config.legend.dynamicLegendDefaultText })}

						>
							{config.legend.dynamicLegendDefaultText}
						</option>
						{labels.map((label, i) => {
							let className = 'legend-item'
							let itemName = label.datum
							let inDynamicList = false;

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

							dynamicLegendItems.map(listItem => {
								if(listItem.text === label.text) {
									inDynamicList = true;
								}
							})

							if(inDynamicList) return true;

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
					</select>
					)
				} else {
					return config.legend.dynamicLegendItemLimitMessage
				}
			}}
			</LegendOrdinal>


			<div className="dynamic-legend-list">
				{dynamicLegendItems.map((label, i) => {

					let className = ['legend-item']
					let itemName = label.text

					// Filter excluded data keys from legend
					if (config.exclusions.active && config.exclusions.keys?.includes(itemName)) {
						return
					}

					if (config.runtime.seriesLabels) {
						let index = config.runtime.seriesLabelsAll.indexOf(itemName)
						itemName = config.runtime.seriesKeys[index]
					}

					if (seriesHighlight.length > 0 && !seriesHighlight.includes(itemName)) {
						className.push('inactive')
					}

					if(seriesHighlight.length === 0 && config.legend.dynamicLegend) {
						className.push('inactive')
					}

					return (
						<>
							<LegendItem
								className={className.join(' ')}
								tabIndex={0}
								key={`dynamic-legend-item-${i}`}
								alignItems="center"
								
							>
								<button
									className="btn-wrapper"
									onClick={() => {
										highlight(label);
									}}
								>
									<LegendCircle fill={label.value} config={config} />
									<LegendLabel align="space-between" margin="4px 0 0 4px">
										{label.text}
									</LegendLabel>
								</button>
								<button onClick={() => removeDynamicLegendItem(label)}>x</button>
							</LegendItem>
						</>
					)
				})}
			</div>
			{seriesHighlight.length < dynamicLegendItems.length && <button className={`legend-reset legend-reset--dynamic ${config.theme}`} onClick={highlightReset} tabIndex={0}>Reset</button>}
		</aside>
	)
}

export default Legend;
