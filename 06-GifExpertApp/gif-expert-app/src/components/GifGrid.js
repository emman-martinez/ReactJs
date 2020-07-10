import React from 'react';
// import GifGridItem from './GifGridItem';
import Imagen from './Imagen';
import useFetchGifs from '../hooks/useFetchGifs';
// import getGifs from './../helpers/getGifs';

const GifGrid = ({category}) => { 

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(gifs => setImages(gifs));
    // }, [category]);

    const { loading } = useFetchGifs();

    return (
        <>
            <div className="category">
                <Imagen />
                <h3>{ category }</h3>
                <Imagen />
            </div>
            { loading ? 'Cargando...' : 'Data Cargada' }
            {/*<div className="card-grid">
                {
                    images.map(img => {
                            return <GifGridItem 
                                        key={img.id}
                                        {...img}                       
                                    />;
                        }
                    )
                }
            </div>*/}
        </>
    )
};

export default GifGrid;
