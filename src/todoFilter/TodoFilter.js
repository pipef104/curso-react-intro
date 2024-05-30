import "./TodoFilter.css";
import React from "react";

function TodoFilter( {searchValue,setSearchValue} ) {
 
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoFilter"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    ></input>
  );
}

export { TodoFilter };
