import React from "react";

const Search = (props) => {
  return (
   <input onChange={props.searchHandler} placeholder="search :)" id="searchInput"/>
  );
};

export default Search;