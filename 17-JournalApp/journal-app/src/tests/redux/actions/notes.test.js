import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote, startLoadingNotes, startSaveNote } from '../../../redux/actions/notes';
import { types } from '../../../redux/types/types';
import { db } from '../../../firebase/firebase-config';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: 'TESTING',
    }
};

let store = mockStore(initState);

describe('Pruebas con las acciones de notes', () => {

    beforeEach(() => {

        store = mockStore(initState);

    });

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

    test('startLoadingNotes debe cargar la notas ', async() => {

        await store.dispatch(startLoadingNotes('TESTING'));

        const actions = store.getActions();
        //console.log(actions);

        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array),
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        };

        expect(actions[0].payload[0]).toMatchObject(expected);

    });

    test('startSaveNote debe de actualizar la nota', async() => {

        const note = {
            id: 'LG6vMG1YVuOBMJdeJEMt',
            title: 'titulo',
            body: 'body'
        };

        await store.dispatch(startSaveNote(note));

        const actions = store.getActions();
        // console.log(actions);

        expect(actions[0].type).toBe(types.notesUpdated);

        const docRef = await db.doc(`TESTING/journal/notes/${note.id}`).get();

        expect(docRef.data().title).toBe(note.title);

    });



});