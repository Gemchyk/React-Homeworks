import { useState } from 'react';
import './App.css';
import ContactList from './ContactList';

function App() {

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
  ]
  
  const [contacts, setContacts] = useState(startConctacts);

  return (
    <>
      <ContactList contacts={contacts} />
    </>
  )
}

export default App
