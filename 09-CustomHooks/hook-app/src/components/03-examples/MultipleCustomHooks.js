import React from 'react';
import './index.css';
import useFetch from '../../hooks/useFetch';
import SpinnerChase from './SpinnerChase';

const MultipleCustomHooks = () => {

    const url = `https://www.breakingbadapi.com/api/quotes/1`;

    const { data, loading } = useFetch(url);

    const { author, quote } = !!data && data[0];

    console.log(author, quote);

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
                                <p className="mb-0">Hola Mundo</p>
                                <footer className="blockquote-footer">Emmanuel</footer>
                            </blockquote>
                        )
            }
            
        </div>

    );

};

export default MultipleCustomHooks;


