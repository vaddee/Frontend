import React, { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "" }); // poistaa todos
  };

  const deleteByIndex = (index) => {
    setTodos(todos.filter((item, i) => i !== index));
  };

  return (
    <>
      <h3>Add todos</h3>
      <label>
        Description:
        <input
          type="text"
          name="description"
          placeholder="description"
          value={todo.description}
          onChange={handleChange}
        />
      </label>

      <label>
        Date:
        <input
          type="text"
          name="date"
          placeholder="date"
          value={todo.date}
          onChange={handleChange}
        />
      </label>

      <button onClick={addTodo}>Add</button>
      <br />

      <TodoTable todos={todos} deleteByIndex={deleteByIndex} />
    </>
  );
}

export default TodoList;
