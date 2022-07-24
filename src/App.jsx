import { useState } from "react";
//import "./App.css";
import TodoList from "./Components/TodoList";
import Form from "./Components/Form";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleTodo(itemRemovido) {
    const itens = todos.filter((item) => {
      return item !== itemRemovido;
    });
    return setTodos(itens);
  }

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} handleTodo={handleTodo} />
    </div>
  );
}

export default App;
