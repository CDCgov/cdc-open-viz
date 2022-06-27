import React from 'react'
import { scaleLinear } from 'd3-scale';
import { countryCoordinates } from '../data/country-coordinates';

export const BubbleList = ({data: dataImport, state, projection, applyLegendToRow, applyTooltipsToGeo}) => {

	const countryCodes = Object.keys(dataImport)
	const data = Object.values(dataImport)
	const maxDataValue = Math.max(...data.map(d => d[state.columns.primary.name]))

	// Set bubble sizes
	var size = scaleLinear()
		.domain([1, maxDataValue])
		.range([state.visual.minBubbleSize, state.visual.maxBubbleSize])

	// Start looping through the countries to create the bubbles.
	const countries = data.map( (country, index) => {

		// get coordinates from ISO
		let coordinates = countryCoordinates[country.uid]

		if(!coordinates) return;

		const countryName = country[state.columns.geo.name];
		const toolTip = applyTooltipsToGeo(countryName, country);
		const legendColors = applyLegendToRow(country);
		
		if(legendColors === false) return;
	
		let transform = `translate(${projection([coordinates[1], coordinates[0]])})`

		const circle = (
			<circle
				data-tip={toolTip}
				data-for="tooltip"
				className="bubble"
				cx={ projection(coordinates[1], coordinates[0])[0] }
				cy={ projection(coordinates[1], coordinates[0])[1] }
				r={ size(country.Data) }
				fill={legendColors[0]}
				stroke={legendColors[0]}
				strokeWidth={3}
				fillOpacity={.4}
				title="Click for more information"
				transform={transform}
			/>
		);

		return (
			<>
			{circle}
			</>
		)
	})
	return countries;
}
export default BubbleList
