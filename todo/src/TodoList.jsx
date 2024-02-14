// Import useState from react
import { useState } from "react";

function TodoList() {

    // Declare states
    const [todo, setTodo] = useState({ description: '', date: '' });
    const [todos, setTodos] = useState([]);
  

    const handleChange = (event) => {
        setTodo ({...todo, [event.target.name]: event.target.value});
    };

    
    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({description:'', date:''}) //tyhjentää syöttäkentän !
    };

    const itemRows = todos.map((todo,index) => //index, koska ei valmiina id:tä kuten esim json tiedost voi olla
        <tr key={index}>

            <td>{todo.description}</td>
            <td>{todo.date}</td>
            

        </tr>
    )

    return(
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
    <br/>

    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {itemRows}
        </tbody>
    </table>
</>
    )
}

export default TodoList;













