import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
import Imagen from './Imagen';
import getGifs from './../helpers/getGifs';

const GifGrid = ({category}) => { 

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(gifs => setImages(gifs));
    }, [category]);

    return (
        <>
            <div className="category">
                <Imagen />
                <h3>{ category }</h3>
                <Imagen />
            </div>
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
