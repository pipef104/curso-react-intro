import logo from "./platzi.webp";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";


function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoFilter />
      <TodoList>
        <TodoItem item={1} />
        <TodoItem item={2} />
        <TodoItem item={3} />
      </TodoList>
      <TodoButton />
    </div>
  );
}



export default App;
