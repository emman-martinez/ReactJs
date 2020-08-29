import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from '../../../redux/actions/notes';
import { types } from '../../../redux/types/types';
import { db } from '../../../firebase/firebase-config';

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

        const actions = store.getActions();
        // console.log(actions);

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        //  console.log(actions[0].payload.id);

        const docId = actions[0].payload.id;
        await db.doc(`/TESTING/journal/notes/${docId}`).delete();

    });

});