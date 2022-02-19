import React from'react';

function TodoTable(props) {
    
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                    {props.todos.map((item, index) => <tr key={index}>
                        <td>{item.description}</td>
                        <td>{item.date}</td>
                        <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>  
    );
}

export default TodoTable;