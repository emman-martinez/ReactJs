import '@testing-library/jest-dom';
import { authReducer } from '../../../redux/reducers/authReducer';
import { types } from '../../../redux/types/types';

describe('Pruebas en authReducer', () => {

    test('Debe de realizar el login', () => {

        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Emmanuel'
            }
        };
        const state = authReducer(initState, action);
        console.log(state);
        expect(state).toEqual({
            uid: 'abc',
            name: 'Emmanuel'
        });
    });

    test('Debe de realizar el logout', () => {

        const initState = {
            uid: 'jkhgvkjcfhgdkjf',
            name: 'Emmanuel'
        };

        const action = {
            type: types.logout
        };

        const state = authReducer(initState, action);
        console.log(state);
        expect(state).toEqual({}); 
    });

    test('No debe de hacer cambios en el state', () => {

        const initState = {
            uid: 'jkhgvkjcfhgdkjf',
            name: 'Emmanuel'
        };

        const action = {
            type: 'jkxfhgdfjb'
        };

        const state = authReducer(initState, action);
        console.log(state);
        expect(state).toEqual(initState); 
    });

});