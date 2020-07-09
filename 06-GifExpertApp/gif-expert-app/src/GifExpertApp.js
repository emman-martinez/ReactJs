import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import Imagen from './components/Imagen';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <div className="gif-expert-app">
            <div className="main-title">
                <Imagen />
                <h2>GifExpertApp</h2>
                <Imagen />
            </div>
            <AddCategory 
                setCategories={setCategories}
            />
            <hr/>
            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid
                                    key={category}
                                    category={category}
                                />;
                    })
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;