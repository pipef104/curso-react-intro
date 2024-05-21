import logo from "./platzi.webp";
import { TodoCounter } from "./TodoCounter";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
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
