import {configureStore} from '@reduxjs/toolkit';
import contactReducer from './Slice'

export const store = configureStore({
    reducer: contactReducer
});