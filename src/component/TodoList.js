import React, { useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function TodoList(){
    const [todo, setTodo] = useState({description: '', date: ''})
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value})
    }

    const addTodo = () => {
        setTodos([...todos, todo]); 
        setTodo({description: '', date: ''});
    }

    const deleteTodo = ( row ) => {
        setTodos(todos.filter((todo, index) => index !== row))
    }
    return (
        <div>
            <AppBar style={{background: '#2E3B55'}} position="static">
                <Toolbar>
                <Typography variant="h6" >
                    Todolist
                </Typography>
                </Toolbar>
            </AppBar>
            <input type="text" placeholder='Description' name="description"value={todo.description} onChange={inputChanged} />
            <input type="date" name='date' value={todo.date} onChange={inputChanged}/>
            <button onClick={addTodo}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => 
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList; 