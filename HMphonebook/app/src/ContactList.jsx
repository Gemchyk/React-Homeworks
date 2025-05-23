import React from 'react';
import ContactItem from './ContactItem';

function ContactList({contacts, setContacts, setPage}) {

    const handleDelete = (e) => {
        const newArr = contacts.filter(i => i.id != e.target.id);
        setContacts(newArr);
        console.log(e.target.id);
    }

    const handleChange = () => {
        setPage(true);
    }

    return (
        <div>
            <div className='flex'>
                <button>List</button>
                <button onClick={handleChange}>Add Contact</button>
            </div>
            {contacts.map(i => <ContactItem key={i.id} id={i.id} name={i.name} surName={i.surName} number={i.number} handleDelete={handleDelete} />)}
        </div>
    );
}

export default ContactList;