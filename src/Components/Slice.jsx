import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({

     name:"sample",
     initialState : [],
     reducers:{
        addTodo : (state,action) => {
            state.push({id:Date.now() ,status :false , text: action.payload})
            console.log("state is updating :" ,action.payload );
        },
        updateStatus : (state,action) =>{
          const todo =   state.find((t)=> t.id == action.payload)
           //state.push(
           if(todo){        
               todo.status = true
           }
        //);

        }

     }
})

export default Slice.reducer;
export const {addTodo,updateStatus} = Slice.actions;