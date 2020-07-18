import React, { useEffect, useState } from 'react'
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const initialState = {
        name: '',
        email: '',
    };

    const [formState, setFormState] = useState(initialState);

    const { name, email } = formState;

    useEffect(() => {
        //console.log('Hey!');
    }, []);

    useEffect(() => {
        //console.log('formState cambió');
    }, [formState]);

    useEffect(() => {
        //console.log('email cambió');
    }, [email]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    }

    return (

        <div>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre..."
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu Correo..."
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === '123') && <Message /> }

        </div>

    );

};

export default SimpleForm;
