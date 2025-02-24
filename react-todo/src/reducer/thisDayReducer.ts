import {createSlice,PayloadAction } from "@reduxjs/toolkit";

interface TodoState{
    todos: string[],
    currentTask:string;
}

interface UpdateTaskPayload{
    index:number;
    updatedTask:string;
}

const initialState: TodoState = {
    todos:[],
    currentTask: '',
}


const thisDaySlice = createSlice({
    name:"genTodo",
    initialState,
    reducers:{
        addTask: (state, action: PayloadAction<string>) => {
            state.todos.push(action.payload);
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.todos.splice(action.payload, 1);
        },
        upgradeTask: (state, action:PayloadAction<number>) => {
            const index = action.payload;

            if(index >0){
                const temp = state.todos[index];
                state.todos[index] = state.todos[index - 1];
                state.todos[index - 1] = temp;
                
            }
        },
        downgradeTask:(state, action:PayloadAction<number>) =>{
            const index = action.payload;

            if (index <state.todos.length -1){
                const temp = state.todos[index];
                state.todos[index] = state.todos[index +1];
                state.todos[index +1] = temp;
            }
        },
        clearTasks:(state) =>{
            state.todos = [];
        },
        updateTask2:(state,action:PayloadAction<UpdateTaskPayload>)=>{
            const index =action.payload.index;
            const newTask = action.payload.updatedTask;
            state.todos[index] = newTask;
        },
    },
    
});

export const { addTask,deleteTask,upgradeTask,downgradeTask, clearTasks, updateTask2} = thisDaySlice.actions;
export default thisDaySlice.reducer;