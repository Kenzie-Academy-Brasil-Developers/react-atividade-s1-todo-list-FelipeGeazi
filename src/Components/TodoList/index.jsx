//import "../App.css";
function TodoList({ todos, handleTodo }) {
  return (
    <ul>
      {todos.map((item) => {
        return (
          <li key={item}>
            {item}
            {""}
            <button onClick={() => handleTodo(item)}>Concluir Tarefa</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
