import '@testing-library/jest-dom';
import { authReducer } from '../../auth/authReducer';
import { types } from './../../types/types';

describe('Pruebas en authReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const initialState = {
            logged: false,
        }

        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);

    });

    test('Debe de autenticar y colocar el name del usuario', () => {
        
        const initialState = {
            logged: false,
        };

        const finalState = {
            logged: true,
            name: 'Emmanuel',
        };

        const action = {
            type: types.login,
            payload: {
                name: 'Emmanuel',
            }
        };

        const state = authReducer(initialState, action);
        expect(state).toEqual(finalState);

    });

    test('Debe de borrar el name del usuario y logged en false', () => {

        const initialState = {
            logged: true,
            name: 'Casandra',
        };

        const finalState = {
            logged: false,
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer(initialState, action);
        expect(state).toEqual(finalState);

    });

});