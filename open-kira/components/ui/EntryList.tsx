import { List, Paper, stepLabelClasses } from '@mui/material'
import React, { FC, useMemo, DragEvent } from 'react'
import { EntryCard } from './'; 
import { EntryStatus } from '../../interfaces/entry';
import { useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';

import styles from './EntryList.module.css'; 

interface Props {
    status: EntryStatus; 
}

//figure out how to hide material or react scrollbar. 
export const EntryList:FC<Props> = ({ status }) => {
    const { Entries, updateEntry }  = useContext(EntriesContext); 

    const {isDragging, endDragging} = useContext(UIContext)

    // every time inputs change memo memorizes the array
    const entriesByStatus = useMemo(() => Entries.filter( entry => entry.status === status), [Entries]) || []; 
    
    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text'); 

        const entry = Entries.find(e => e._id === id)!; 
        entry.status = status; 
        updateEntry( entry );
        endDragging();
    }

    const allowDrop = (event: DragEvent<HTMLDivElement>)=> {
        event.preventDefault(); 
    }

     
  return (
    <div
    onDrop={ onDropEntry }
    onDragOver={ allowDrop }
    className={ isDragging ? styles.dragging: ''}

    > 
        
        <Paper sx={{ height: 'calc(100vh - 180px)', backgroundColor: 'transparent', padding: ' 1px 5px' }}>

            <List sx = {{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s'}}>
                {
                    entriesByStatus.map( entry => (
                        <EntryCard key={ entry._id } entry = {entry}/>
                    ))
                }
            </List>
        </Paper>
    </div>
  )
}
