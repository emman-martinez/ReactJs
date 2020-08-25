import Swal from "sweetalert2";
import { db } from "../../firebase/firebase-config";
import { types } from "../types/types";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

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
        dispatch(activeNote(doc.id, newNote));

    };

};

export const activeNote = (id, note) => {

    return {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    };

};

export const startLoadingNotes = (uid) => {

    return async(dispatch) => {

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));

    };

};

export const setNotes = (notes) => {

    return {
        type: types.notesLoad,
        payload: notes
    };

};

// Guardar Nota editada en Firebase
export const startSaveNote = (note) => {

    return async(dispatch, getState) => {
        const state = getState().auth;
        const { uid } = state;

        if (!note.url) {
            delete note.url;
        }

        const noteToFirestore = {...note };
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(refreshNote(note.id, note));
        Swal.fire('Saved', note.title, 'success');
    };

};

// Actualizar la vista de manera instantanea
export const refreshNote = (id, note) => {

    return {
        type: types.notesUpdated,
        payload: {
            id,
            note: {
                id,
                ...note
            }
        }
    };

};

export const startUploading = (file) => {

    return async(dispatch, getState) => {

        const state = getState().notes;
        const { active: activeNote } = state;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });
        // console.log(file);
        // console.log(activeNote);

        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        //  console.log(fileUrl);

        dispatch(startSaveNote(activeNote));

        Swal.close();

    };

};