import React, { useState } from'react';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TodoList from './component/TodoList';

function TabApp() {
    const [value, setValue] = useState('home'); 

    const handleChange = (event, value) => {
        setValue(value); 
    }

    return (
    <div>
        <Tabs value={value} onChange={handleChange}>
            <Tab value="home" label="Home"/>
            <Tab value="todos" label="Todo Page"/>
        </Tabs>
        {value === 'home' && <div><p>Let's check the todo list and start to finish it!</p></div>}
        {value === 'todos' && <TodoList/>}
    </div>
)}

export default TabApp;