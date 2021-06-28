import React, { useState } from "react";
import Display from "./Display";

const Results = ({ response }) => {
  const totalResults = response.totalResults;
  const isResponse = response.Response;
  const searchResults = response.Search;

  return (
    <div className="flexBox justify">
      {isResponse === "True" ? (
        <h1>
          Now Showing: {searchResults.length} of {totalResults} results!
        </h1>
      ) : (
        <h1 />
      )}

      {isResponse === "False" ? (
        <h1>No Results! Try new search terms!</h1>
      ) : searchResults === undefined ? null : (
        isResponse === "True" &&
        searchResults.map((response, idx) => (
          <Display key={idx} response={response} />
        ))
      )}
    </div>
  );
};
export default Results;
