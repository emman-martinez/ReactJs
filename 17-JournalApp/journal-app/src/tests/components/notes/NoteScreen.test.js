import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../redux/actions/notes';

jest.mock('../../../redux/actions/notes', () => ({
    activeNote: jest.fn()
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
        active: {
            id: 1234,
            title: 'Hola',
            body: 'Mundo',
            date: 0
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <NoteScreen />
    </Provider>
);

describe('Pruebas en <NoteScreen />', () => {

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de sisparar el active note', () => {

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo',
            }
        });

        expect(activeNote).toHaveBeenCalled(); // Sin args
        expect(activeNote).toHaveBeenLastCalledWith(1234, { // Con args
            title: 'Hola de nuevo',
            body: 'Mundo',
            id: 1234,
            date: 0
        });
        
    });
    
    
});
