import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => { 

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=12&api_key=PXqndBfypROZiCkdYLaaMWxEr1qKDCYP';

        try {

            const resp = await fetch(url);
            if(!resp.ok) throw new Error ('No se pudo realizar la petición');

            const { data } = await resp.json();

            const gifs = data.map(img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url,
                };
            });

            console.log(gifs);
            setImages(gifs);

        } catch (err) {

            throw err;

        }
        
    };

    return (
        <>
            <div className="category">
                <h3>{ category }</h3>
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
