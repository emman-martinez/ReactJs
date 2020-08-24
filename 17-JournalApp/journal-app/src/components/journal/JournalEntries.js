import React from 'react';
import { JournalEntry } from './JournalEntry';
import { useSelector } from 'react-redux';

export const JournalEntries = () => {

    // const entries = [1,2,3,4,5];

    const state = useSelector(state => state.notes);
    const { notes } = state;

    return (
        <div className="journal__entries">
         
            {/* Firebase */}
            {
                notes.map(note => (
                    <JournalEntry 
                        key={ note.id }
                        { ...note } 
                    />
                ))
            }

            
            {/* Estatico
                {
                    entries.map(value => (
                        <JournalEntry key={ value }/>
                    ))
                }
            */}


        </div>
    );
};
