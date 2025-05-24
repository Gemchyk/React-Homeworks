import { useState } from 'react';
import './App.css';
import ContactList from './ContactList';
import AddForm from './AddForm';
import { useEffect } from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext.js';
import { LanguageContext } from './contexts/LanguageContext.js';


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
  ];

  
  
  const [contacts, setContacts] = useState(startConctacts);
  const [language, setLanguage] = useState("EN");
  const [theme, setTheme] = useState("Dark");

  {document.querySelector("body").className = theme === 'Dark' ? "" : "bodyLight"}


  const handleLangChange = (e) => {
    setLanguage(e.target.value);
  }

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  }
  

  return (
    <>
      <ThemeContext.Provider value={{value: theme}}>
        <LanguageContext.Provider value={{value: language}}>
          <BrowserRouter>
            <div className='flex'>
              <Link to='/'> <button>{language === 'UA' ? "Список" : "List"}</button></Link>
              <Link to='/add'><button>{language === 'UA' ? "Додати контакт" : "Add Contact"}</button></Link>
            </div>
            <div>
              <select onChange={handleLangChange} name="Lang">
                <option value="EN">EN</option>
                <option value="UA">UA</option>
              </select>
              <select  onChange={handleThemeChange} name="Theme">
                <option value="Dark">Dark</option>
                <option value="Light">Light</option>
              </select>
            </div>
            <Routes>
              <Route path='/' element={<ContactList contacts={contacts} setContacts={setContacts} />} />
              <Route path='/add' element={<AddForm contacts={contacts} setContacts={setContacts} />} />
            </Routes>
          </BrowserRouter>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
