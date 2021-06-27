import React, { useState } from "react";
import Display from "./Display";

const Results = ({ response, search }) => {
  const totalResults = response.totalResults;
  const isResponse = response.Response;
  const searchResults = response.Search;
  const searchLength = search.length;
  return (
    <div>
      {/* Is searchbox 0? yes, null. no, nested condition */}
      {searchLength === 0 ? null : searchLength <= 2 ? ( // Is search <= 2? yes, error msg. no nested condition
        <h1>Your search must have at least 3 characters!</h1>
      ) : // Are there results? Yes, show results. No, error msg.
      isResponse === "False" ? (
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
