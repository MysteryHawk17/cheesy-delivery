import React from "react";
import "./loader.css"
const Loader = ({ type }) => {
  return (
    <div class="psoload">
    <div class="straight"></div>
    <div class="curve"></div>
    <div class="center"></div>
    <div class="inner"></div>
  </div>
  );
};

export default Loader;
