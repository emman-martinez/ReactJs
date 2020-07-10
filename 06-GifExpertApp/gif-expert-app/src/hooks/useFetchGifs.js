import { useState } from 'react';

const useFetchGifs = () => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    return state;

};

export default useFetchGifs;