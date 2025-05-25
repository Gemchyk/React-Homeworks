
import ListItem from "./ListItem";
import React from 'react';
import './List.css';

function List({tasks, setTasks}) {

    const handleDelete = (e) => {
        console.log(e.target.id);
        const newArr = tasks.filter(i => i.id != e.target.id);
        console.log(newArr);    
        setTasks(newArr);
    }

    return (
        <div>
            {tasks.map(i => <ListItem key={i.id} task={i} handleDelete={handleDelete} />)}
        </div>
    );
}

export default List;