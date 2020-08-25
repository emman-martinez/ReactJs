import React, { useEffect, useRef } from 'react';
import { NotesAppBar } from './NotesAppBar';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { activeNote } from '../../redux/actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.notes );
    const { active: note } = state;

    const [ formValues, handleInputChange, reset ] = useForm(note);
    //  console.log(formValues);
    const { body, title, url } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        if(note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch])

    return (
        <div>
            <div className="notes__main-content">

                <NotesAppBar />

                <div className="notes__content">

                    <input 
                        type="text"
                        placeholder="Some awesome title"
                        className="notes__title-input"
                        autoComplete="off"
                        name="title"
                        value= { title }
                        onChange= { handleInputChange }
                    />

                    <textarea 
                        placeholder="What happened today?"
                        className="notes__textarea"
                        name="body"
                        value = { body }
                        onChange= { handleInputChange }
                    ></textarea>

                    {   
                        (note.url) &&
                        <div className="notes__image">
                            <img 
                                src={ note.url }
                                alt="imagen"
                            />
                        </div>
                    }

                </div>

            </div>          
        </div>
    );
};
