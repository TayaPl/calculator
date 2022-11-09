import { configureStore } from "@reduxjs/toolkit";
import historyReducer from './historySlice'
import mathExpReducer from './mathExpSlice'

export const store = configureStore({
    reducer:{
        history: historyReducer,
        mathExp: mathExpReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch