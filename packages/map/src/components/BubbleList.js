import React, {memo} from 'react'
import { scaleLinear } from 'd3-scale';
import { countryCoordinates } from '../data/country-coordinates';

export const BubbleList = ({data: dataImport, state, projection, applyLegendToRow, applyTooltipsToGeo, handleCircleClick, position, setPosition}) => {

	const countryCodes = Object.keys(dataImport) // only the country codes, possibly nice for lookups
	const data = Object.values(dataImport) // all country data
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
				key={`circle-${countryName.replace(' ', '')}`}
				data-tip={toolTip}
				data-for="tooltip"
				className="bubble"
				cx={ Number(projection(coordinates[1], coordinates[0])[0]) || 0  } // || 0 handles error on loads where the data isn't ready
				cy={ Number(projection(coordinates[1], coordinates[0])[1]) || 0 }
				r={ size(country.Data) }
				fill={legendColors[0]}
				stroke={legendColors[0]}
				strokeWidth={3}
				fillOpacity={.4}
				onClick={() => handleCircleClick([coordinates[1], coordinates[0]])}
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
export default memo(BubbleList)
