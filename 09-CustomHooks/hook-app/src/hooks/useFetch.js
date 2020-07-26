import { useState, useEffect, useRef } from 'react';

const useFetch = (url) => {

    const isMounted = useRef(true);

    const initialState = {
        data: null,
        loading: true,
        error: null,
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null,
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: null,
                    });
                }

            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                });
            });

    }, [url]);

    return state;

};

export default useFetch;