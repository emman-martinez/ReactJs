import React, { useReducer } from 'react';
import AppRouter from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

const HeroesApp = () => {

    const initialState = {};

    const [user, dispatch] = useReducer(authReducer, initialState, init);

    return (
        <AuthContext.Provider values={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    );
};

export default HeroesApp;