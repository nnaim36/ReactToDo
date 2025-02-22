import {createSlice,PayloadAction } from "@reduxjs/toolkit";

interface TodoState{
    todos: string[],
    currentTask:string;
}

const initialState: TodoState = {
    todos:[],
    currentTask: '',
}

const thisDaySlicer = createSlice({
    name:"genTodo",
    initialState,
    reducers:{
        addTask(state){
            if (state.currentTask.trim() !== ""){
                state.todos.push(state.currentTask);
                state.currentTask = "";
            }
        },
        deleteTask(state,action:PayloadAction<number>){
            state.todos =state.todos.filter((_, i) => i !==action.payload)
        },

    },
    
});

export const { addTask,deleteTask} = thisDaySlicer.actions;
export default thisDaySlicer.reducer;