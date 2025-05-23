import { useState } from 'react';
import './App.css';
import ContactList from './ContactList';
import AddForm from './AddForm';
import { useEffect } from 'react';

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
  const [addPageSetted, setPage] = useState(true);
  
  useEffect(() => {
    console.log(contacts);

  }, [contacts])

  return (
    <>
      {!addPageSetted && <ContactList setPage={setPage} contacts={contacts} setContacts={setContacts} />}
      {addPageSetted && <AddForm setPage={setPage} contacts={contacts} setContacts={setContacts} />}
    </>
  )
}

export default App
