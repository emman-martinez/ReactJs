import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { login, logout, startLogout, startLoginEmailPassword } from '../../../redux/actions/auth';
import { types } from '../../../redux/types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones de Auth', () => {

    beforeEach(() => {
        store = mockStore(initState);
    });

    test('login y logout deben de crear la acción respectiva', () => {

        const uid = 'ABC';
        const displayName = 'Casandra';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });

        expect(logoutAction).toEqual({
            type: types.logout,
        });

    });

    test('Debe de realizar el startLogout', async () => {
        
        await store.dispatch(startLogout());

        const actions = store.getActions();
        // console.log(actions);

        expect(actions[0]).toEqual({
            type: types.logout,
        });

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning,
        });

    });

    test('Debe de Iniciar el startLoginEmailPassword', async () => {
    
        await store.dispatch(startLoginEmailPassword('test@testing.com', '123456'));

        const actions = store.getActions();
        // console.log(actions);

        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: 'NFRm0p4om1coZ1WiFKSByEwn6Zq2',
                displayName: null,
            }
        });

    });

});