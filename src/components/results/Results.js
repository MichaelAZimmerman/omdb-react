import React, { useState } from "react";
import Display from "./Display";

const Results = ({ response }) => {
  if (response.Error != "Movie not found!") {
    console.log(response);
    return <Display response={response} />;
  } else return <div>No results. Try changing search terms.</div>;
};
export default Results;
