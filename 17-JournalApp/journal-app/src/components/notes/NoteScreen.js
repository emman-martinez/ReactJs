import React from 'react';
import { NotesAppBar } from './NotesAppBar';
import { useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';

export const NoteScreen = () => {

    const state = useSelector( state => state.notes );
    const { active: note } = state;

    const [ formValues, handleInputChange ] = useForm(note);
    console.log(formValues);

    const { body, title, url } = formValues;

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
                        value= { title }
                        onChange= { handleInputChange }
                    />

                    <textarea 
                        placeholder="What happened today?"
                        className="notes__textarea"
                        value = { body }
                        onChange= { handleInputChange }
                    ></textarea>

                    {   
                        url &&
                        <div className="notes__image">
                            <img 
                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" 
                                alt="imagen"
                            />
                        </div>
                    }

                </div>

            </div>          
        </div>
    );
};
