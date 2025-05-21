import React from 'react';
import './ContactItem.css';

function ContactItem({name, surName, number}) {


    return (
        <div className='contact'>
            <h3>{name} {surName}</h3>
            <h4>{number}</h4>
            <button>Options</button>
        </div>
    );
}

export default ContactItem;