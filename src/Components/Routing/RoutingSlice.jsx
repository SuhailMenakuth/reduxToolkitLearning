import { createSlice } from "@reduxjs/toolkit";

const routingSlice =createSlice({
    name:"routing",
    initialState :[],
    reducers:{
    
        add: (state, action) => {
            state.push(action.payload); 
        },
        
    }
})
export const {add }= routingSlice.actions
export default routingSlice.reducer


