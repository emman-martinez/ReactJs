import React, { useLayoutEffect, useRef, useState } from 'react';
import './index.css';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

const Layout = () => {

    const { state: counter, increment, decrement } = useCounter();

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { data } = useFetch(url);
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (

        <div className="container">

            <h1>LayoutEffect</h1>
            <hr/>
            <div className="quote">
            
                <blockquote className="blockquote text-right">
                    <p 
                        className="mb-0"
                        ref={pTag}
                    >
                        { quote }
                    </p>
                </blockquote>
            
            </div>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <div className="paginacion">

                {
                    counter === 1 
                    ?
                        ''
                    :
                        (
                            <button 
                                className="btn btn-success"
                                onClick={ decrement }
                            >
                                Prev Quote
                            </button>
                        )
                }
                
                <button 
                    className="btn btn-success"
                    onClick={ increment }
                >
                    Next Quote
                </button>
                
            </div>
            
        </div>

    );

};

export default Layout;


