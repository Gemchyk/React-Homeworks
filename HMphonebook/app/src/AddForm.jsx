import React, { useContext } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './contexts/LanguageContext.js';
import { ThemeContext } from './contexts/ThemeContext.js';
import './ContactItemDark.css';
import './ContactItemLight.css';



const AddForm = ({contacts, setContacts}) => {

    const nameRef = useRef();
    const surNameRef = useRef();
    const numberRef = useRef();

    const theme = useContext(ThemeContext);
    const lang = useContext(LanguageContext);

    function handleSubmit(){
        const newContact = {
            id: Date.now(),
            name: nameRef.current.value,
            surName: surNameRef.current.value,
            number: numberRef.current.value
        }
        setContacts([...contacts, newContact]);
    }


    return (
        <>
        <h2 className={theme.value === "Dark" ? "addFormH2Dark" : "addFormH2Light"}>{lang.value === 'UA' ? "Додати новий контакт" : "Add new Contact"}</h2>
            <form>
                <input type="text" name="name" placeholder='Enter Name' ref={nameRef} required/> <br />
                <input type="text" name="surName" placeholder='Enter Surname' ref={surNameRef}/><br />
                <input type="text" name="number" placeholder='Enter Phone Number' ref={numberRef} required/><br />
            </form>
            <Link to='/'><button type='button' onClick={handleSubmit}>{lang.value === 'UA' ? "Додати" : "Add"}</button></Link>
            <Link to='/'> <button>{lang.value === 'UA' ? "Скасувати" : "Cancel"}</button></Link>
        </>
    );
}

export default AddForm;