import React, { useState } from 'react';
import useCounter from './../../hooks/useCounter';
import './index.css';

const MemoHook = () => {

    const {state: counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const procesoPesado = (iteraciones) => {

        for(let i = 0; i < iteraciones; i++) {
            console.log('Ahí vamos...');
        }

        return `${iteraciones} iteraciones realizadas.`;

    };

    return (
        <div className="container">
            <h1>MemoHook</h1>
            <h3>Counter: <small> { counter } </small> </h3>
            <hr/>
            <p> { procesoPesado(counter) } </p>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <button 
                className="btn btn-primary mt-3"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    );
};

export default MemoHook;
