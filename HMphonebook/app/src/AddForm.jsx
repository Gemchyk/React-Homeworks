import React from 'react';
import { useRef } from 'react';

const AddForm = ({contacts, setContacts, setPage}) => {

    const nameRef = useRef();
    const surNameRef = useRef();
    const numberRef = useRef();

    function handleSubmit(){
        const newContact = {
            id: Date.now(),
            name: nameRef.current.value,
            surName: surNameRef.current.value,
            number: numberRef.current.value
        }
        setContacts([...contacts, newContact]);
        setPage(false);
    }

    const handleChange = () => {
        setPage(false);
    }

    return (
        <>
        <div className='flex'>
            <button onClick={handleChange}>List</button>
            <button>Add Contact</button>
        </div>
        <h2>Add new Contact</h2>
            <form>
                <input type="text" name="name" placeholder='Enter Name' ref={nameRef} required/> <br />
                <input type="text" name="surName" placeholder='Enter Surname' ref={surNameRef}/><br />
                <input type="text" name="number" placeholder='Enter Phone Number' ref={numberRef} required/><br />
            </form>
            <button type='button' onClick={handleSubmit}>Add</button>
            <button onClick={handleChange}>Cancel</button>
        </>
    );
}

export default AddForm;