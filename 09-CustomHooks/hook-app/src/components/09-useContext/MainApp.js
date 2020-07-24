import React from 'react';
import AppRouter from './AppRouter';
import { UserContext } from './UserContext';

const MainApp = () => {

    const user  = {
        id: 123456,
        name: 'Emmanuel',
        email: 'correo@correo.com',
    }

    return (
        <UserContext.Provider value={ user }>
            <AppRouter />
        </UserContext.Provider>
    );
};

export default MainApp;