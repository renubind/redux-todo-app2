import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    totalTodo: 0,
    completedTodo: 0,
  },
  reducers: {
    markTodoCompleted: (state, action) => {},
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },

    deleteTask: (state, action) => {},
  },
});

export const { markTodoCompleted, addTodo, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
