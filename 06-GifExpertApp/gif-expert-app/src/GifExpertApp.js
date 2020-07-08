import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     const anime = 'Black Clover';
    //     //  setCategories([...categories, anime]); 
    //     setCategories((cats) => [...cats, anime]);
    // };

    return (
        <div className="gif-expert-app">
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories={setCategories}
            />
            <hr/>
            <ol>
                {
                    categories.map((category) => {
                        return <li key={category}>{category}</li>;
                    })
                }
            </ol>
        </div>
    );
}
 
export default GifExpertApp;