import React from "react";
import { TodoIcons } from "./TodoIcons";

function DeleteIcon({onDeleted}) {
  return <TodoIcons type="delete" color="gray" 
  onClick={onDeleted}/>;
}

export { DeleteIcon };
