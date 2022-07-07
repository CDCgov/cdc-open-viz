import React, {memo, useState, useEffect} from 'react'
import { scaleLinear } from 'd3-scale';
import { countryCoordinates } from '../data/country-coordinates';

export const BubbleList = (
	{
		data: dataImport,
		state,
		projection,
		applyLegendToRow,
		applyTooltipsToGeo,
		handleCircleClick,
		runtimeData,
		displayGeoName,
		filteredCountryCode
	}) => {

	const [data, setData] = useState(Object.values(dataImport))
	const maxDataValue = Math.max(...dataImport.map(d => d[state.columns.primary.name]))

	const clickTolerance = 10;

	// Set bubble sizes
	var size = scaleLinear()
		.domain([1, maxDataValue])
		.range([state.visual.minBubbleSize, state.visual.maxBubbleSize])

	// Start looping through the countries to create the bubbles.
	const countries = runtimeData && Object.values(runtimeData).map( (country, index) => {

		let coordinates = countryCoordinates[country.uid]

		if(!coordinates) return true;

		const countryName = displayGeoName(country[state.columns.geo.name]);
		const toolTip = applyTooltipsToGeo(countryName, country);
		const legendColors = applyLegendToRow(country);
		
		let primaryKey = state.columns.primary.name
		let transform = `translate(${projection([coordinates[1], coordinates[0]])})`

		let pointerX, pointerY;

		const circle = (!filteredCountryCode || filteredCountryCode === country.uid) && (
			<circle
				key={`circle-${countryName.replace(' ', '')}`}
				data-tip={toolTip}
				data-for="tooltip"
				className="bubble"
				cx={ Number(projection(coordinates[1], coordinates[0])[0]) || 0  } // || 0 handles error on loads where the data isn't ready
				cy={ Number(projection(coordinates[1], coordinates[0])[1]) || 0 }
				r={ Number(size(country[primaryKey])) }
				fill={legendColors[0] }
				stroke={legendColors[0]}
				strokeWidth={3}
				fillOpacity={.4}
				onPointerDown={(e) => {
					pointerX = e.clientX; 
					pointerY = e.clientY;
				}}
				onPointerUp={(e) => {
					if(pointerX && pointerY &&
						e.clientX > (pointerX - clickTolerance) &&
						e.clientX < (pointerX + clickTolerance) &&
						e.clientY > (pointerY - clickTolerance) &&
						e.clientY < (pointerY + clickTolerance)
					){ 
						handleCircleClick(country)
						pointerX = undefined;
						pointerY = undefined;
					}
				}}
				transform={transform}
				style={{ transition: 'all .25s ease-in-out', cursor: "pointer" }}
			/>
		);
	

		return (
			<g key={`group-${countryName.replace(' ', '')}`}>
				{circle}
			</g>
		)
	})
	return countries;
}
export default memo(BubbleList)
