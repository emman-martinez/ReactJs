import React, { useRef } from 'react';
import './index.css';

const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div className="container">
            <h1>Focus Screen</h1>
            <hr/>
            <input 
                ref={inputRef}
                className="form-control"
                placeholder="Tu Nombre..."
            />
            <button 
                className="btn btn-primary mt-5"
                onClick = { handleClick }
            >
                Focus
            </button>
        </div>
    );
};

export default FocusScreen;
