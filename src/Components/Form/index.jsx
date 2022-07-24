import { useState } from "react";
import "./style.css";

function Form({ addTodo }) {
  const [newInput, setUserInput] = useState("");
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Insira sua Tarefa"
        value={newInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button type="button" onClick={() => addTodo(newInput)}>
        Adicionar Tarefa
      </button>
    </form>
  );
}
export default Form;
