import logo from "./platzi.webp";
import { TodoCounter } from "./todoCounter/TodoCounter";
import { TodoFilter } from "./todoFilter/TodoFilter";
import { TodoList } from "./todoList/TodoList";
import { TodoItem } from "./todoItem/TodoItem";
import { TodoButton } from "./todoButton/TodoButton";
import React from "react";

const defaultTodos = [
  { text: "Tarea1", completed: true },
  { text: "Tarea2", completed: false },
  { text: "Tarea3", completed: false },
  { text: "Tarea4", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  //Estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const noTildes = (text) => {
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }; //Controlo las tildes

    const todoText = noTildes(todo.text.toLowerCase());
    const searchText = noTildes(searchValue.toLowerCase());

    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    //Busco el elemento para cambiar propiedad completed
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    //Busco el elemento para cambiar propiedad completed
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoFilter searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={ () => completeTodo(todo.text)}
            onDeleted={ () => deleteTodo(todo.text)}
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
