import logo from "./platzi.webp";
import { TodoCounter } from "./todoCounter/TodoCounter";
import { TodoFilter } from "./todoFilter/TodoFilter";
import { TodoList } from "./todoList/TodoList";
import { TodoItem } from "./todoItem/TodoItem";
import { TodoButton } from "./todoButton/TodoButton";
import React from "react";

// const defaultTodos = [
//   { text: "Tarea1", completed: true },
//   { text: "Tarea2", completed: false },
//   { text: "Tarea3", completed: false },
//   { text: "Tarea4", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1')
function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  // let parsedTodos = JSON.parse(localStorageTodos);

  const [todos, setTodos] = React.useState(parsedTodos);
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

  //Funcion para actualizar estado con persistencia
  const saveTodos = (newTodos) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    //Busco el elemento para cambiar propiedad completed
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    //Busco el elemento para cambiar propiedad completed
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
            onCompleted={() => completeTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
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
