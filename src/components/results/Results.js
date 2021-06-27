import React, { useState } from "react";
import Display from "./Display";

const Results = ({ response }) => {
  const totalResults = response.totalResults;
  const isResponse = response.Response;
  const searchResults = response.Search;
  return (
    <div className="flexBox">
      {/* Is searchbox 0? yes, null. no, nested condition */}

      {isResponse === "False" ? (
        <h1>No Results! Try new search terms!</h1>
      ) : searchResults === undefined ? null : (
        <h1>Showing 10 of {totalResults} results!</h1> &&
        searchResults.map((response, idx) => (
          <Display key={idx} response={response} />
        ))
      )}
    </div>
  );
};
export default Results;
