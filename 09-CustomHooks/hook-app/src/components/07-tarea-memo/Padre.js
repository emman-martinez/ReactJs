import React, { useState, useCallback } from 'react';
import { Hijo } from './Hijo';
import './../06-memos/index.css';

const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // };

    const incrementar = useCallback((num) => {
        setValor( v => v + num );
    }, [setValor]);

    return (
        <div className="container">
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />
            <div className="btns-hijo">
                {
                    numeros.map( n => (
                        <Hijo 
                            key={ n }
                            numero={ n }
                            incrementar={ incrementar }
                        />
                    ))
                }
            </div>
            {/* <Hijo /> */}
        </div>
    );
};

export default Padre;
