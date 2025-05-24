import React from 'react';
import ContactItem from './ContactItem';

function ContactList({contacts, setContacts, setPage}) {

    const handleDelete = (e) => {
        const newArr = contacts.filter(i => i.id != e.target.id);
        setContacts(newArr);
        console.log(e.target.id);
    }

    const startConctacts = [
        {
          id: 1,
          name: "Bob",
          surName: "Smith",
          number: "111100001111"
        },
        {
          id: 2,
          name: "Buba",
          surName: "Smith",
          number: "111100001111"
        },
        {
          id: 3,
          name: "Spinge",
          surName: "Smith",
          number: "111100001111"
        }
      ];

    return (
        <div>
            
            {contacts.map(i => <ContactItem key={i.id} id={i.id} name={i.name} surName={i.surName} number={i.number} handleDelete={handleDelete} />)}
        </div>
    );
}

export default ContactList;