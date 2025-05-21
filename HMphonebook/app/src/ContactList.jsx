import React from 'react';
import ContactItem from './ContactItem';

function ContactList(props) {
    return (
        <div>
            {props.contacts.map(i => <ContactItem key={i.id} name={i.name} surName={i.surName} number={i.number} />)}
        </div>
    );
}

export default ContactList;