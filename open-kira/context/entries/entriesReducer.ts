import { EntriesState } from './';
import { Entry } from '../../interfaces/entry';

type EntriesActionType = 
|{type: '[Entry] Add-Entry', payload: Entry }
|{type: '[Entry] Entry-Updated', payload: Entry }
|{type: '[Entry] Refresh-Data', payload: Entry[]}
|{type: '[Entry] Entry-Select', payload: Entry }

export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {
  
    switch(action.type){
     case '[Entry] Add-Entry':
       return{
           ...state,
           Entries: [ ...state.Entries, action.payload]
    }
    case '[Entry] Entry-Updated':
       return{
           ...state,
           Entries: state.Entries.map(entry => {
            if ( entry._id === action.payload._id){
              entry.status = action.payload.status; 
              entry.description = action.payload.description;
            }
            return entry; 
           })
    }
    case '[Entry] Refresh-Data':
      return{
          ...state,
          Entries: [...action.payload]
          
       
          }
   
      default:
        return state;
    }
  }