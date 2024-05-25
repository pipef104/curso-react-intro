import logo from "./platzi.webp";
import { TodoCounter } from "./todoCounter/TodoCounter";
import { TodoFilter } from "./todoFilter/TodoFilter";
import { TodoList } from "./todoList/TodoList";
import { TodoItem } from "./todoItem/TodoItem";
import { TodoButton } from "./todoButton/TodoButton";
import React from "react";

const defaultTodos = [
  { text: "Tarea1", completed: true },
  { text: "Tarea2", completed: true },
  { text: "Tarea3", completed: false },
  { text: "Tarea4", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoFilter />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
        {/* <TodoItem item={1} />
        <TodoItem item={2} />
        <TodoItem item={3} /> */}
      </TodoList>
      <TodoButton />
    </React.Fragment>
  );
}

export default App;
