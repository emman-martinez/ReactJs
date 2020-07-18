import React, { useEffect, useState } from 'react';

const Message = () => {

    const initialState = {
        x: 0,
        y: 0,
    };

    const [coors, setCoors] = useState(initialState);

    const { x, y } = coors;

    useEffect(() => {

        const mouseMove = (e) => {
            const coors = {
                x: e.x,
                y: e.y,
            };
            setCoors(coors);
            console.log(coors);
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };

    }, []);

    return (
        <div>
            <h3>Eres Genial!!!</h3>
            <p>
                x: {x}, y: {y}
            </p>
        </div>
    );

};

export default Message;