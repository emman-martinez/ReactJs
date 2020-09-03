import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { Sidebar } from '../../../components/journal/Sidebar';
import { startLogout } from '../../../redux/actions/auth';
import { startNewNote } from '../../../redux/actions/notes';

jest.mock('../../../redux/actions/auth', () => ({
    startLogout: jest.fn()
}));

jest.mock('../../../redux/actions/notes', () => ({
    startNewNote: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '1',
        name: 'Casandra'
    },
    ui: {
        loading: false,
        msgError: null,
    },
    notes: {
        active: null,
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <Sidebar />
    </Provider>
);

describe('Pruebas en <Sidebar />', () => {

    test('Debe de mostrarse correctamente', () => {
        // Snapshot
        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe de llamar el logout', () => {
        // Acción del logout
        wrapper.find('button').prop('onClick')();
        expect(startLogout).toHaveBeenCalled();
        
    });

    test('Debe de llamar el startNewNote', () => {
        // Acción startNewNote
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect(startNewNote).toHaveBeenCalled();
        
    });
    
    
});