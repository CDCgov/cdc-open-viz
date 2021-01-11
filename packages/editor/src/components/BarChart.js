/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

export default function BarChart() {
  // useEffect(() => {
  //   this.drawChart();
  // });

  // drawChart(() => {
  //   const data = [12, 5, 6, 6, 9, 10];

  //   const svg = d3.select("body")
  //   .append("svg")
  //   .attr("width", w)
  //   .attr("height", h)
  //   .style("margin-left", 100);

  //   svg.selectAll("rect")
  //     .data(data)
  //     .enter()
  //     .append("rect")
  //     .attr("x", (d, i) => i * 70)
  //     .attr("y", (d, i) => h - 10 * d)
  //     .attr("width", 65)
  //     .attr("height", (d, i) => d * 10)
  //     .attr("fill", "green")
  // });

  //     return(
  //     <div id={"#" + this.props.id}></div>
  //   )

  const [count, setCount] = useState(0);

  drawChart(() => {
    const data = [12, 5, 6, 6, 9, 10];

    const svg = d3.select('body')
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .style('margin-left', 100);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d) => h - 10 * d)
      .attr('width', 65)
      .attr('height', (d) => d * 10)
      .attr('fill', 'green');
  });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
