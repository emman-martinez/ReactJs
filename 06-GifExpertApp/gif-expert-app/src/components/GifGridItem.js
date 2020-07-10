import React from 'react'

const GifGridItem = ({id, title, url}) => {

    return (
        <div className="card">
            <img src={ url } alt={ title }/>
            <h2>{ title }</h2>
        </div>
    )

}

export default GifGridItem;