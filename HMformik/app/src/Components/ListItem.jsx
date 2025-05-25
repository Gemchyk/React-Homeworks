

import React from 'react';
import './List.css';

function ListItem({task, handleDelete}) {
    return (
        <div>
            <li className='todo-item'>
                <span className="todo-item__description">{task.name}</span>
                <button id={task.id} onClick={handleDelete} className="todo-item__delete">Видалити</button>
            </li>
        </div>
    );
}

export default ListItem;