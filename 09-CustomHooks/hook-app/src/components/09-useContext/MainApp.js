import React, { useState } from 'react';
import AppRouter from './AppRouter';
import { UserContext } from './UserContext';

const MainApp = () => {

    const initialState = {};
    
    const [user, setUser] = useState(initialState);

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>
    );
};

export default MainApp;