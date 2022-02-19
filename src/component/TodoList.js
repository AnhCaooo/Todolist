import React, { useState} from 'react'

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
    return (
        <div>
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
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList; 