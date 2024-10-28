import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.find((t) => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((t) => t.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.find((t) => t.id === id);
            if (todo) {
                todo.text = text; // Update the todo text
            }
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
