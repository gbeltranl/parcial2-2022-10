import React, { useEffect, useState } from "react";
import Bar from "../charts/bar-chart";
export const Report = () => {
  let rest = "";
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json"
    )
      .then((res) => res.json())
      .then((res) => {
        rest = res;
        console.log("rest", rest);
      });
  });
  return(
  <div>
    {/* <Bar data={rest}></Bar> */}
  </div>);
};
