import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Bar = ({ width = 600, height = 600 }) => {
  const barChart = useRef();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("pokemons"));
    const margin = { top: 10, left: 60, bottom: 100, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - 2 * margin.bottom;
    // Define scale ordinal - discrete
    const colors = d3.scaleOrdinal([
      "#ffa822",
      "#134e6f",
      "#ff6150",
      "#1ac0c6",
      "#dee0e6",
    ]);

    const svg = d3
      .select(barChart.current)
      .attr("width", width)
      .attr("height", height);
    let g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.bottom})`);

    var y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, function (d) {
          return d.height;
        }),
      ])
      .range([iheight, 0]);

    var x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, iwidth])
      .padding(0.1);

    var bars = g.selectAll("rect").data(data);

    // Tooltip
    const tooldiv = d3
      .select("#chartArea")
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "gray");

    bars
      .enter()
      .append("rect")
      .attr("class", "bar")
      .style("fill", (d, i) => colors(i))
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => y(d.height))
      .attr("height", (d) => iheight - y(d.height))
      .attr("width", x.bandwidth())
      .on("mouseover", (e, d) => {
        console.log(e);
        console.log(d);

        tooldiv
          .style("visibility", "visible")
          .text(`${d.name}:` + `${d.height}`);
      })
      .on("mousemove", (e, d) => {
        tooldiv
          .style("top", e.pageY - 50 + "px")
          .style("left", e.pageX - 50 + "px");
      })
      .on("mouseout", () => {
        tooldiv.style("visibility", "hidden");
      });

    g.append("g")
      .classed("x--axis", true)
      .call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${iheight})`)
      .selectAll("text")	
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    g.append("g").classed("y--axis", true).call(d3.axisLeft(y));
  });

  return (
    <div id="chartArea">
      <svg ref={barChart}></svg>
    </div>
  );
};

export default Bar;
