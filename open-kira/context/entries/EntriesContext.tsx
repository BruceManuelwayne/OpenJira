import { createContext } from 'react'
import { Entry } from '../../interfaces';


interface ContextProps {

  

     Entries: Entry[]; // todo: falta tipo de dato. 
     //methods

   

     addNewEntry: (description: string) => void; 
     updateEntry: (Entry: Entry) => void; 
  
}


export const EntriesContext = createContext({} as ContextProps); 