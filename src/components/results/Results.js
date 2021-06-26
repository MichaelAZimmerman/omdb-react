import React, { useState } from "react";
import Display from "./Display";

const Results = ({ response }) => {
  let totalResults = response.totalResults;
  const isResponse = response.Response;
  let searchResults = response.Search;
  return (
    <div>
      {isResponse === "True" && (
        <h1>Now Showing: 10 of {totalResults} results!</h1>
      )}
      {isResponse === "True" &&
        searchResults.map((response, idx) => (
          <Display key={idx} response={response} />
        ))}
    </div>
  );
};
export default Results;
