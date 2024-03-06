import React, { useState } from "react";
import TodoTable from "./TodoTable";
import TodoGrid from "./components/TodoGrid";



function TodoList() {
  const [todo, setTodo] = useState({ description: "", date: "", priority: ""});
  const [todos, setTodos] = useState([]);

 

  const handleChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "", priority: "" }); // poistaa todos
  };

  const deleteByIndex = (index) => {
    setTodos(todos.filter((item, i) => i != index));
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
          type="date" // lisää kalenterin 
          name="date"
          placeholder="date"
          value={todo.date}
          onChange={handleChange}
        />

<input
          type="priority" 
          name="priority"
          placeholder="priority"
          value={todo.priority}
          onChange={handleChange}
        />
      </label>

      <button onClick={addTodo}>Add</button>
      <br />

      <TodoGrid todos={todos} deleteByIndex={deleteByIndex} />
    </>
  );
}

export default TodoList;
