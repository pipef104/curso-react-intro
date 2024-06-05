import React from 'react'
import { TodoIcons } from "./TodoIcons";

function CompleteIcon({completed, onCompleted}) {
    return <TodoIcons type="check" color={completed? 'green' : 'gray'} 
    onClick={onCompleted}/>;
}

export { CompleteIcon };