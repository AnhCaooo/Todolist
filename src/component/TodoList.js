import React, { useRef, useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function TodoList(){
    const [todo, setTodo] = useState({description: '', date: '', priority: ''}); 
    const [todos, setTodos] = useState([]);

    const gridRef = useRef();

    const columns = [
        {field: 'description', sortable: true, filter: true, floatingFilter: true }, 
        {field: 'date', sortable: true, filter: true, floatingFilter: true},
        {field: 'priority', sortable: true, filter: true, floatingFilter: true, 
        cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}
    ]; 

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value})
    }

    const addTodo = () => {
        setTodos([...todos, todo]); 
        setTodo({description: '', date: '', priority: ''});
    }

const deleteTodo = () => {

    if (gridRef.current.getSelectedNodes().length > 0) {    
       setTodos(todos.filter((todo, index) =>      
            index !== gridRef.current.getSelectedNodes()[0].childIndex)) 
    } else {    
      alert('Select your deleted row first');  
    }
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
            <input type="text" 
                placeholder='Description' 
                name="description"
                value={todo.description} 
                onChange={inputChanged} 
            />
            <input 
                type="date" 
                name='date' 
                value={todo.date} 
                onChange={inputChanged}
            />
            <input 
                type="priority" 
                placeholder='Priority' 
                name='priority' 
                value={todo.priority} 
                onChange={inputChanged}
            />
            <button onClick={addTodo}>Add</button>
            <button onClick={deleteTodo}>Delete</button>
            <div className='ag-theme-material' 
                style={{height: 400, width: 700, margin: 'auto'}}
            >   <AgGridReact
                    rowData={todos}
                    columnDefs={columns}
                    ref={gridRef}
                    rowSelection='single' 
                    animateRows={true}
                    onGridReady={ params => gridRef.current = params.api}
                />
            </div>  
            
        </div>
    );
}

export default TodoList; 