import React from 'react';
import ContactItem from './ContactItem';

function ContactList({contacts, setContacts}) {

    const handleDelete = (e) => {
        const newArr = contacts.filter(i => i.id != e.target.id);
        setContacts(newArr);
    }
    return (
        <div>
            
            {contacts.map(i => <ContactItem key={i.id} contact={i} handleDelete={handleDelete} />)}
        </div>
    );
}

export default ContactList;