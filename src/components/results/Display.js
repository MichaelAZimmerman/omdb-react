import React, { useState } from "react";

const Display = ({ response }) => {
  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <h2>Title: {response.Title}</h2>
      <h3>Year: {response.Year}</h3>
      <h4>Type: {response.Type}</h4>
      <img src={response.Poster} />
    </div>
  );
};
export default Display;
