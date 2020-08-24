import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../redux/actions/notes';

export const NotesAppBar = () => {

    const state = useSelector( state => state.notes );
    const { active } = state;

    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(startSaveNote(active));
    };

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <div>
                <button className="btn">
                    Picture
                </button>
                <button 
                    className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    );
};
