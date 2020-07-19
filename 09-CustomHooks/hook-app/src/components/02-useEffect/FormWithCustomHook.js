import React, { useEffect } from 'react'
import './effects.css';
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {

    const initialState = {
        name: '',
        email: '',
        password: '',
    };

    const [formValues, handleInputChange] = useForm(initialState);

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambió');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (

        <form 
            className="form-custom-hook"
            onSubmit={ handleSubmit }
        >
            <h1>FormWithCustomHook</h1>
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

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Tu Password..."
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type="submit" className="btn btn-success">
                Guardar
            </button>

        </form>

    );

};

export default FormWithCustomHook;
