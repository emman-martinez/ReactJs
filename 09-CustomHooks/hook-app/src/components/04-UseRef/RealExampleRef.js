import React, { useState } from 'react';
import MultipleCustomHooks from './../03-examples/MultipleCustomHooks';
import './index.css';

const RealExampleRef = () => {

    const initialState= false;

    const [show, setShow] = useState(initialState);

    return (
        <div className="container">
            <h1>RealExampleRef</h1>
            <hr/>
            { show && <MultipleCustomHooks /> }
            <button 
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>
        </div>
    );
};

export default RealExampleRef;
