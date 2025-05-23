import React from 'react';
import './ContactItem.css';
import {useRef} from 'react';

const ContactItem = ({id, name, surName, number, handleDelete}) => {

    return (
        <div className='contact'>
            <h3>{name} {surName}</h3>
            <h4>{number}</h4>
            <button type='button' id={id} onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default ContactItem;