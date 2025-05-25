import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import './List.css';

function AddForm({tasks, setTasks}) {
    useEffect(() => {
        console.log("done");
    });

    function handleSubmit(values){
        const newObj = {
            id: Date.now(),
            name: values.task
        }
        const newArr = [...tasks, newObj];
        setTasks(newArr);
    }
    const validation = Yup.object({
        task: Yup.string().min(5, "At least 5 symbols").required("This field is required")
    });

    return (
        <Formik
            initialValues={{
                task: ""
            }}
            onSubmit={handleSubmit}
            validationSchema={validation}
            render={erors => 
                <Form className='form' >
                    {erors.login ? <div>{erors.login}</div> : null}
                    <Field className='form__input' name="task" placeholder="Write task" />
                    <ErrorMessage name="task" component="span" />
                    <button className='form__btn' type='submit'>Add</button>
                </Form>
            }
        >

        </Formik>
    );
}

export default AddForm;