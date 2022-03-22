import React, { useState } from'react';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TodoList from './TodoList';
import Home from './Home';
function TabApp() {
    const [value, setValue] = useState('one'); 

    const handleChange = (event, value) => {
        setValue(value); 
    }

    return (
    <div>
        <Tabs value={value} onChange={handleChange}>
            <Tab value="one" label="Home"/>
            <Tab value="two" label="Todo Page"/>
        </Tabs>
        {value === 'one' && <Home />}
        {value === 'two' && <TodoList />}
    </div>
)}

export default TabApp;