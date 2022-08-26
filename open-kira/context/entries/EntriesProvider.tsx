import { EntriesContext,entriesReducer } from './'

import { FC, PropsWithChildren, useEffect, useReducer } from 'react'; 
import { Entry } from '../../interfaces';
import entriesApi from '../../apis/entriesApi';
import entreisApi from '../../apis/entriesApi';


export interface EntriesState {
    Entries: Entry[]; 
}

const Entries_INITIAL_STATE: EntriesState = {
     Entries: [],
}

export const EntriesProvider:FC<PropsWithChildren> = ({children}) => {
   
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = async( description: string ) => {
        const { data } = await entriesApi.post<Entry>('/entries', {description})
        // dispatch sends an action to the story. changes the state so refreshes
        dispatch({ type: '[Entry] Add-Entry', payload: data});
    }

    const updateEntry = async ({ _id, description, status}: Entry) => {
        try {
            const {data} = await entreisApi.put<Entry>(`/entries/${ _id}`, {description, status}); 
            dispatch({type: '[Entry] Entry-Updated', payload: data}); 
            } catch (error) {
                console.log({error})
            
        }

    }
    
    const refreshEntries = async() => {
        const { data } = await entriesApi.get<Entry[]>('/entries'); 
        dispatch({ type: '[Entry] Refresh-Data', payload: data }); 
    }
    
    useEffect(() => {
        refreshEntries(); 
    }, [])
    

    return (
     <EntriesContext.Provider value = {{
        ...state,
        //methods
        addNewEntry,
        updateEntry,
       
     }}>
         {children}
     </EntriesContext.Provider>
   ); 
};