import { db } from "../../firebase/firebase-config";

export const startNewNote = () => {

    return async(dispatch, getState) => {

        const state = getState().auth;
        const { uid } = state;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        };

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        console.log(doc);

    };

};