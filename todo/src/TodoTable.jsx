import { Button } from "@mui/material";
import React from "react";

function TodoTable({ todos, deleteByIndex }) {
  const itemRows = todos.map((todo, index) => (
    <tr key={index}>
      <td>{todo.description}</td>
      <td>{todo.date}</td>
      <td>
        <button onClick={() => deleteByIndex(index)}>Delete</button>
        
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{itemRows}</tbody>
    </table>
  );
}

export default TodoTable;


