import React from 'react';
import './index.css';
import useFetch from '../../hooks/useFetch';
import SpinnerChase from './SpinnerChase';
import useCounter from '../../hooks/useCounter';

const MultipleCustomHooks = () => {

    const { state: counter, increment, decrement, reset } = useCounter();

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { data, loading } = useFetch(url);
    const { author, quote } = !!data && data[0];

    return (

        <div className="container">

            <h1>Breaking Bad Quotes</h1>
            <hr/>

            { 
                loading 
                    ?
                        <SpinnerChase />
                    : 
                        (
                            <blockquote className="blockquote text-right">
                                <p className="mb-0">{ quote }</p>
                                <footer className="blockquote-footer">{ author }</footer>
                            </blockquote>
                        )
            }

            <div className="paginacion">
                <button 
                    className="btn btn-success"
                    onClick={ decrement }
                >
                    Prev Quote
                </button>
                <p>
                    { counter }
                </p>
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

export default MultipleCustomHooks;


