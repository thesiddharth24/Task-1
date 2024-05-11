
import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    contacts: [
        {
            id:"1",
            firstName:"Siddhart",
            lastName:"Gupta",
            status:"active"
        }
    ]
}
 
export const contactSlice = createSlice(
    {
        name: 'contact',
        initialState,
        reducers:{
            //property and fxn ati hai 
            addContact: (state , action) => {
                const {firstName, lastName , status} = action.payload;
                const contact ={
                    // id: Date.now(),
                    id: nanoid(),
                    firstName: firstName,
                    lastName: lastName,
                    status: status
                }
                state.contacts.push(contact);
            },
            removeContact: (state , action ) => {
                state.contacts = state.contacts.filter((eachContact) => eachContact.id !== action.payload)
            },
            updateContact: (state , action ) => {
                const {id,firstName, lastName , status} = action.payload;
                state.contacts = state.contacts.filter((eachContact) => eachContact.id !== id);
                const contact ={
                    
                    id: id,
                    firstName: firstName,
                    lastName: lastName,
                    status: status
                }
                state.contacts.push(contact);


            }
        }
    }
);


export const {addContact,removeContact , updateContact} = contactSlice.actions

export default contactSlice.reducer
