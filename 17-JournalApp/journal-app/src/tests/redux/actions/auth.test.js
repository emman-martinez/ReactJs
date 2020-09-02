import '@testing-library/jest-dom';
import { login, logout } from '../../../redux/actions/auth';
import { types } from '../../../redux/types/types';

describe('Pruebas con las acciones de Auth', () => {

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

});