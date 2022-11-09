    import {createSlice} from '@reduxjs/toolkit';
    
    const mathExpSlice = createSlice({
        name: 'mathExp',
        initialState:{
            mathExp: "",
        },
        reducers:{
              addToMathExp(state, action){
                state.mathExp = state.mathExp + action.payload;
              },
              removeFromMathExp(state, action){
                state.mathExp = state.mathExp.slice(0, -1);
              },
              removeMathExp(state, action){
                state.mathExp = "";
              },
        }
    });
    
    export const {addToMathExp, removeFromMathExp, removeMathExp } = mathExpSlice.actions;
    
    export default mathExpSlice.reducer;