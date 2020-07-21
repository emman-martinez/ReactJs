import React, { useState, useMemo } from 'react';
import useCounter from './../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';
import './index.css';

const MemoHook = () => {

    const {state: counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div className="container">
            <h1>MemoHook</h1>
            <h3>Counter: <small> { counter } </small> </h3>
            <hr/>
            <p> { memoProcesoPesado } </p>
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
