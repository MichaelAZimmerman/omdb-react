import React, { useState } from "react";

const Display = ({ response }) => {
  return (
    <div className="container">
      <h2>Title: {response.Title}</h2>

      <h3>Year: {response.Year}</h3>

      <h4>Type: {response.Type}</h4>

      <img title="No Poster Provided" src={response.Poster} />
    </div>
  );
};
export default Display;
