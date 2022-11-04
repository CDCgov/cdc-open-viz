import React, { useContext, useEffect } from 'react';
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
		transformedData: data,
		setFilteredData,
		colorPalettes,
		rawData,
		setConfig
	} = useContext(Context);

	const {innerClasses, containerClasses} = useLegendClasses(config)

	useEffect(() => {
		setSeriesHighlight( dynamicLegendItems.map( item => item.text) )

		// loop through transformed data
		// delete key on transformed data if selected is not in dynamic legend
		if(dynamicLegendItems.length === 0) return;
		let propertyNames = dynamicLegendItems.map( item => item.text)
		let colsToKeep = [...propertyNames]
		let tmpLabels = [];

		let filtered = rawData.map( dataItem => {
			let tmp = {}
			let tmpLabels = [];
			colsToKeep.map( col => {
				tmp[col] = isNaN(dataItem[col]) ? dataItem[col] : dataItem[col]
			})
			return tmp
		})

		colsToKeep.map( col => {
			tmpLabels[col] = col
		})

		setConfig({
			...config,
			runtime: {
				...config.runtime,
				seriesKeys: colsToKeep,
				seriesLabels: tmpLabels
			}
		})


	}, [dynamicLegendItems]);

	const removeDynamicLegendItem = (label) => {
		let newLegendItems = dynamicLegendItems.filter((item) => item.text !== label.text);
		let newLegendItemsText = newLegendItems.map(item => item.text )
		setDynamicLegendItems( newLegendItems )
		//setSeriesHighlight( newLegendItemsText)
	}
	const handleDynamicLegendChange = (e) => {
		setDynamicLegendItems([...dynamicLegendItems, JSON.parse(e.target.value)])
	}

	console.log('data', data)

	const createLegendLabels = (data,defaultLabels) => {
		const colorCode = config.legend?.colorCode;

		if( config.visualizationType !=='Bar' ||  config.visualizationSubType !=="regular" || !colorCode || config.series?.length > 1) return defaultLabels;
		let palette = colorPalettes[config.palette];
	   
		while(data.length > palette.length) {
		  palette = palette.concat(palette);
		}
	
		palette = palette.slice(0, data.length);
		let valueLabels = data.map((d,i)=>{
		  const newLabel ={
			datum : d[colorCode],
			index:i,
			text:d[colorCode],
			value:palette[i]
		  };
		 
		  return newLabel
		  
		})

		return valueLabels
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
						{dynamicLegendItems.map((label, i) => {
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
						className='dynamic-legend-dropdown'
						onChange={(e) => handleDynamicLegendChange(e) }
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
							let palette = colorPalettes[config.palette];

							label.value = palette[dynamicLegendItems.length]

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
