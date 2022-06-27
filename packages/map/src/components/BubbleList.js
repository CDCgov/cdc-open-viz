import React from 'react'
import * as d3 from 'd3';

export const BubbleList = ({data, state, projection, applyLegendToRow, applyTooltipsToGeo}) => {
	
	const Bubble = Object.freeze({
		minSize: 25,
		maxSize: 75
	})

	// Add a scale for bubble size
	var size = d3.scaleLinear()
		.domain([1, 100])  // What's in the data
		.range([Bubble.minSize, Bubble.maxSize])

	const countryList = Object.values(data);


	
	
	const countries = countryList.map( (country, index) => {
		if(!country.latitude || !country.longitude) return;
		const countryName = country.Country;
		const toolTip = applyTooltipsToGeo(countryName, country);
		const legendColors = applyLegendToRow(country);
		console.log('legend', legendColors)
		if (legendColors === false) {
			return true;
		}
	
		let transform = `translate(${projection([country.longitude, country.latitude])})`

		const circle = (
			<circle
				data-tip={toolTip}
				data-for="tooltip"
				className="bubble"
				cx={ (country) => projection([country.longitude, country.latitude])[0] }
				cy={ (country) => projection([country.longitude, country.latitude])[1] }
				r={ size(country.Data) }
				fill={legendColors[0]}
				stroke={legendColors[0]}
				strokeWidth={3}
				fillOpacity={.4}
				title="Click for more information"
				transform={transform}
			/>
		);

		console.log('c2', country)
			console.log('t', transform)
		return (
			<>
			{circle}
			</>
		)
	})
	return countries;
}
export default BubbleList
