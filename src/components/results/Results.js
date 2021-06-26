import React, { useState } from "react";
import Display from "./Display";

const Results = ({ response, search }) => {
  let totalResults = response.totalResults;
  const isResponse = response.Response;
  let searchResults = response.Search;
  let searchLength = search;
  return (
    <div>
      {isResponse === "True" && search > 2 ? (
        <h1>Now Showing: 10 of {totalResults} results!</h1>
      ) : (
        <h1>Nothing found. Try new search terms.</h1>
      )}
      {isResponse === "True" &&
        searchResults.map((response, idx) => (
          <Display key={idx} response={response} />
        ))}
    </div>
  );
};
export default Results;
