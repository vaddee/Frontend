import React, { useState } from "react";
import TodoTable from "./TodoTable";
import TodoGrid from "./components/TodoGrid";
import { Button, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";





function TodoList() {
  const [todo, setTodo] = useState({ description: "", date: "", priority: "" });
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
  const handleDateChange = (date) => {
    setTodo({ ...todo, date: date });
};

  return (
    <>
    <Stack mt={20}direction="row" spacing={2} justifyContent="center" alignItems="center">

    

    
      <h3>Add todos</h3>
      <TextField
        label="Description"
        name="description"
        value={todo.description}
        onChange={handleChange}


      />

      





    {/*   <TextField
        label="Date"
        name="date"
        value={todo.date}
        onChange={handleChange}


      /> */}

<LocalizationProvider dateAdapter={AdapterDayjs}>
  
      <DatePicker label="Date"
      disablePast
      name="date"
      value={todo.date}
      onChange={handleDateChange}
      
    
      />
      
    </LocalizationProvider>


      <TextField
        label="Priority"
        name="priority"
        value={todo.priority}
        onChange={handleChange}
        timePicker={false} // Disable time picker


      />


      <Button variant="contained" onClick={addTodo}>Add</Button>
      
      </Stack>
      <br />

      <TodoGrid todos={todos} deleteByIndex={deleteByIndex} />
      
    </>
  );
}

export default TodoList;
