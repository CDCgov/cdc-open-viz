import * as d3 from 'd3';
import { geoAlbersUsaTerritories } from 'd3-composite-projections';
import { geoPath, geoCentroid } from "d3-geo";

import data from '../data/dfc-map.json';
import { feature, mesh } from "topojson-client";


const WIDTH = 880;
const HEIGHT = 500;
const PADDING = 25;

class D3Map {
	constructor(element) {

		const vis = this;

		vis.centered = null;
		vis.countyMap = {};
		vis.color = d3.scaleLinear().domain([0,33]).range(['tan', 'darkgreen']);
		vis.projection = geoAlbersUsaTerritories().scale(1).translate([0, 0]);
		vis.projection.scale(1).translate([0, 0]);
		vis.path = geoPath().projection(vis.projection);

		console.log('VIS', vis)
		console.log('DATA', data)

		vis.countyMap.states = feature(data, data.objects.states);
		vis.countyMap.counties = feature(data, data.objects.counties);
		vis.countyMap.stateLines = vis.path(mesh(data, data.objects.states, function(a, b) { return a !== b; }))
		
		let tmpCounties = vis.countyMap.counties.features.filter( (county) => {
			return !county.id.includes('51820') && !county.id.includes('51620');
		})
		
		vis.countyMap.counties.features = tmpCounties;
			
		// bounds, scale, transform
		vis.b = vis.path.bounds(vis.countyMap.states);
		vis.s = .95 / Math.max((vis.b[1][0] - vis.b[0][0]) / WIDTH, (vis.b[1][1] - vis.b[0][1]) / HEIGHT);
		vis.t = [(WIDTH - vis.s * (vis.b[1][0] + vis.b[0][0])) / 2, (HEIGHT - vis.s * (vis.b[1][1] + vis.b[0][1])) / 2];

		vis.projection.scale(vis.s).translate(vis.t);


			
		vis.map = d3.select(element)
			.append('svg')
				.attr('width', WIDTH + PADDING + PADDING )
				.attr('height', HEIGHT + PADDING + PADDING )
				.attr('style', 'background-color: #E5F4FF')

			.append('g')
				.attr('class', 'county-group')
				
				vis.counties = vis.map.selectAll('.county-group path')
				.data(vis.countyMap.counties.features)
				
				vis.counties.enter()
					.append('path')
					.attr('d', vis.path)
					.attr('style', 'cursor: pointer')
					.attr('id', (d) => d.properties.name)
					.attr('fill', '#fff')
					.attr('stroke', 'darkgray')
					.on('click', (d,i) => {
						vis.updateZoom(i)
					})

					.append('g')
					.attr('class', 'boundary')
					.attr('fill', '#E5F4FF')
					.append('g')
						.attr('class', 'state-group')
	
						vis.states = vis.map.selectAll('.state-group path')
							.data(vis.countyMap.states.features)
	
						vis.states.enter()
							.append('path')
							.attr('d', vis.path)
							.attr('style', 'cursor: pointer')
							.attr('class', 'state')
							.attr('id', (d) =>  'state-' + d.properties.name  )
							.attr('fill', '#fff')
							.attr('style', 'display: none; cursor: pointer;')
							.on("click", (d,i)  => {
								vis.updateZoom(i)
							} )
							.on("mouseover", function (d, i) {
								console.log('mousing a state')
								d3.select(this).transition()
									.duration('500')
									.attr('fill', 'pink');
							})
							.on("mouseout", function(d,i) {
								d3.select(this).transition()
									.duration(500)
									.attr('fill', '#fff')
							})
			
					vis.map.append("path")
						.attr("stroke", "#000")
						.attr("stroke-width", 1)
						.attr("fill", "none")
						.attr("d", vis.path(mesh(data, data.objects.states )));


		// d3.csv('./data/cities.csv').then(function(cities) {
		// 	console.log('CITIES', cities)
		// 	var cityPoints = vis.map.selectAll('circle').data(cities); 
		// 	var cityText = vis.map.selectAll('text').data(cities); 
		// 	var radius = d3.scaleLinear().domain([0,100]).range([5,30]);  
	   
		// 	cityPoints.enter() 
		// 		.append('circle') 
		// 		.attr('cx', function(d) {
		// 		   return vis.projection ([d.lon, d.lat])[0]
		// 		})
		// 		.attr('cy', function(d) {
		// 		   return vis.projection ([d.lon, d.lat])[1]
		// 		}) 
		// 		.attr('fill', '#f5f5f5')
		// 		.attr('fill-opacity', '.5')
		// 		.attr('stroke', 'black')
		// 		.attr('r', function(d) {return radius(d.tequila); }) 

	   
		// 	cityText.enter() 
		// 		.append('text') 
		// 		.attr('x', function(d) {
		// 		   return vis.projection([d.lon, d.lat])[0]})
		// 		.attr('y', function(d) {
		// 		   return vis.projection([d.lon, d.lat])[1]}) 
		// 		.attr('dx', 5) 
		// 		.attr('dy', 3) 
		// 		.text(function(d) {return d.name}); 
		//   });


		
		//vis.update(element);
	}

	update(element) {
		// const vis = this;

		// setInterval(function(){
		// 	vis.map.selectAll('path').transition()
		// 		.duration(2000)
		// 		.style('fill', function(d) {
		// 			return vis.color(Math.floor((Math.random() * 32) + 1));
		// 		});
		// }, 2000);
	}

	updateZoom(d,i) {
		var x, y, k;
		const vis = this;

		d.stateFips = d.id.substring(0,2)

		let stateZoomed = vis.countyMap.states.features.filter( (state) => {
			return state.id === d.stateFips;
		})[0]
		
		let focusedState = d3.select(`#state-${stateZoomed.properties.name}`);
		let allStates = d3.selectAll('.state');
		let otherStates = d3.selectAll(`.state:not(#${stateZoomed.properties.name})`)
		console.log('FOCUSED STATE', focusedState)

		if (d && vis.centered !== d) {
			var centroid = vis.path.centroid(stateZoomed);
			console.log('centroid', centroid)
			x = centroid[0];
			y = centroid[1];
			k = 4;
			vis.centered = d;
		} else {
			x = WIDTH / 2;
			y = HEIGHT / 2;
			k = 1;
			vis.centered = null;
		}

		console.log('selection', d3.selectAll(`.state:not(${stateZoomed.properties.name})`))

		allStates.attr('class', 'state')
		otherStates.attr('style', 'display:block')
		focusedState.attr('style', 'display:none')
		focusedState.attr('class', 'state state--selected')

  
		vis.map.transition()
			.duration(250)
			.attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
			.style("stroke-width", 1.5 / k + "px");



		// console.log('zoomed', stateZoomed)
		// // bounds, scale, transform
		// vis.b = vis.path.bounds(stateZoomed);
		// vis.s = .95 / Math.max((vis.b[1][0] - vis.b[0][0]) / WIDTH, (vis.b[1][1] - vis.b[0][1]) / HEIGHT);
		// vis.t = [(WIDTH - vis.s * (vis.b[1][0] + vis.b[0][0])) / 2, (HEIGHT - vis.s * (vis.b[1][1] + vis.b[0][1])) / 2];

		// vis.projection.scale(vis.s).translate(vis.t);

		// console.table(element)
	}
}

export default D3Map;
