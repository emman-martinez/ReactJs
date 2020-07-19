import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const initialState = {
        data: null,
        loading: true,
        error: null,
    };
    
    const [state, setState] = useState(initialState);

    useEffect(() => {

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    data,
                    loading: false,
                    error: null,
                });
            });

    }, [url]);

    return state;

};

export default useFetch;
