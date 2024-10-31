import React from "react";
import loading from "../assets/loading.svg";

function Loading() {
  return (
    <img className="loading-explorer" src={loading} alt="loading spinner"></img>
  );
}

export default Loading;
