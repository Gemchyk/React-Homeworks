import React, { useContext } from 'react';
import './ContactItemDark.css';
import './ContactItemLight.css';
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';




const ContactItem = ({id, name, surName, number, handleDelete}) => {

    const lang = useContext(LanguageContext);
    const theme = useContext(ThemeContext);

    return (
        <div className={theme.value === 'Dark' ? "contact" : "contactLight"}>
            <h3>{name} {surName}</h3>
            <h4>{number}</h4>
            <button type='button' id={id} onClick={handleDelete}>{lang.value === 'UA' ? "Видалити" : "Delete"}</button>
        </div>
    );
}

export default ContactItem;