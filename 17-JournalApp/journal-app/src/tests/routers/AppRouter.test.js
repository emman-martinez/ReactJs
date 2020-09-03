import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { firebase } from './../../firebase/firebase-config';
import { AppRouter } from '../../routers/AppRouter';
import { login } from '../../redux/actions/auth';
import { act } from 'react-dom/test-utils';

jest.mock('../../redux/actions/auth', () => ({
    login: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null,
    },
    notes: {
        active: {
            id: 'ABC'
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();


describe('Pruebas en <AppRouter />', () => {

    test('Debe de llamar el login si estoy autenticado />', async () => {

        let user;

        await act( async () => {

            const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456');
            user = userCred.user;

            console.log(userCred);

            const wrapper = mount(
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );

        });

        expect(login).toHaveBeenCalledWith('NFRm0p4om1coZ1WiFKSByEwn6Zq2', null);
        
    });
    
});