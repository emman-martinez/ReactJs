import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from '../../../redux/actions/notes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: 'TESTING',
    }
});

describe('Pruebas con las acciones de notes', () => {

    test('Debe de crear una nueva nota startNewNote', async() => {

        await store.dispatch(startNewNote());

    });

});