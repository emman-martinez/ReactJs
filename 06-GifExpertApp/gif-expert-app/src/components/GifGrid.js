import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import Chase from './../spinners/Chase';
import GifGridItem from './GifGridItem';
import Imagen from './Imagen';

const GifGrid = ({category}) => { 

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <div className="category animate__animated animate__fadeIn">
                <Imagen />
                <h3>{ category }</h3>
                <Imagen />
            </div>
            { loading && <Chase /> }
            <div className="card-grid">
                {
                    images.map(img => {
                            return <GifGridItem 
                                        key={img.id}
                                        {...img}                       
                                    />;
                        }
                    )
                }
            </div>
        </>
    )
};

export default GifGrid;
