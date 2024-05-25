import "./TodoFilter.css";
import React from "react";

function TodoFilter(props) {
  const [searchValue, setSearchValue] = React.useState("");
  console.log('Los usuarios buscan TODO de:', searchValue);
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
