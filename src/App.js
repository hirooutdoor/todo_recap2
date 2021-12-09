import { useState } from "react";
import "./styles.css";
import styles from "../styles/Home.module.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  console.log(currentTodo);

  const handleAddTodo = () => {
    setTodos((todo) => [
      ...todo,
      { id: todo.length + 1, title: currentTodo, isDone: isChecked }
    ]);
    setCurrentTodo("");
  };

  const handleOnChange = (id) => {
    setIsChecked(!isChecked[id]);
    console.log(isChecked[id]);
    console.log(id);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        className={styles.input_add}
        value={currentTodo}
        onChange={(e) => {
          e.preventDefault();
          setCurrentTodo(e.target.value);
        }}
      />
      <button
        className={styles.add_button}
        onClick={handleAddTodo}
        disabled={currentTodo === "" ? true : false}
      >
        Submit
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.list}>
            <input
              className={styles.todo_checkbox}
              type="checkbox"
              checked={isChecked[todo.id]}
              onChange={() => handleOnChange(todo.id)}
            />
            {isChecked[todo.id] ? (
              <p className={styles.todo_title_checked}>{todo.title}</p>
            ) : (
              <p className={styles.todo_title}>{todo.title}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
