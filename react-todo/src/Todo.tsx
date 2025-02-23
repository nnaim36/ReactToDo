import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDoNav from "./ToDoNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MondayToDo from "./MondayToDo";
import TuesdayToDo from "./TuesdayToDo";

import { useSelector, useDispatch } from "react-redux";
import {addTask, deleteTask,upgradeTask,downgradeTask,clearTasks} from "./reducer/thisDayReducer"
import { RootState } from './store'



import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";


//const dispatch = useDispatch<AppDispatch>();

function Todo(){
    
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.thisDayReducer.todos);
    const currentTask = useSelector((state: RootState) => state.thisDayReducer.currentTask);
    
    
    
    const handleAddTask = () => {
        if (task.trim() !== "") {
            dispatch(addTask(task));
            setTask(""); // clear the input after dispatching
          }
    };

    const handleDeleteTask = (index: number) => {
        dispatch(deleteTask(index));
    };
    
    const handleUpgradeTask = (index:number) => {
        dispatch(upgradeTask(index));
    }
    const handleDowngradeTask = (index:number) =>{
        dispatch(downgradeTask(index));
    }
    const handleClearTasks = () => {
        dispatch(clearTasks());
    }
    

    const [taskList, setTaskList] = useState<string[]>([]);
    const [task, setTask] = useState<string>("");
    const [tempTask,setTempTask] = useState<string>("");
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    function updateTask(event:any){
        setTask(event.target.value);
    }

    function updateTempTask(event: any) {
        setTempTask(event.target.value);
    }

    function editTask(index:number){
        setIsEditing(true);
        setEditIndex(index);
        setTempTask(taskList[index]);
    }
    /*
    function deleteTask(index: number){
        const newTaskList = taskList.filter((_,i) => i !== index);

        setTaskList(newTaskList)
    }
    */

    /*
    function upgradeTask(index: number){
        const copylist = [...taskList]
        
        if( index > 0){
            [copylist[index],copylist[index -1]] = [copylist[index-1],copylist[index]]
            setTaskList(copylist)
        }

    }
    */

    /*
    function downGradeTask(index:number){
        const copylist = [...taskList]

        if( index < taskList.length -1){
            [copylist[index],copylist[index +1 ]] = [copylist[index+1], copylist[index]];
            setTaskList(copylist);
        }
    }
    */

    /*
    function addTask(){
        setTaskList((prevTasks) => [...prevTasks,task]);
        console.log(taskList);

        setTask("");
    }
    */

    /*
    function clearTask(){
        setTaskList([]);
    }
    */

    function saveEditedTask() {
        if (editIndex !== null) {
            const updatedTasks = [...taskList];
            updatedTasks[editIndex] = tempTask;
            setTaskList(updatedTasks);
        }
        setIsEditing(false);
        setEditIndex(null);
    }


    return(
        <>
            <ToDoNav/>
            <h1>To Do App</h1>
            <div className="task-entry">
            <input 
                type="text" 
                placeholder="Enter in a new task"
                value = {task}
                onChange={updateTask}
                className="form-control"
                id="text-new-task"
            />
            <button className="btn btn-success" onClick={()=>handleAddTask()}>Submit</button>
            </div>
            {isEditing && (
            <div className="edit-task-section">
                <input 
                    type="text" 
                    
                    value = {tempTask}
                    onChange={updateTempTask}
                    className="form-control"
                    id="edit-task"
                />
                <button className="btn btn-warning" onClick={saveEditedTask}>Update</button>
                <button className="btn btn-danger" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
            )}

            <div>
                <button className="btn btn-danger" onClick={handleClearTasks}>Clear</button>
            </div>
            <div>
                <ul className="task-list">
                    {todos.map((t,index) => (
                        <li key={index} className="task-text-list">
                            <div className="task-move-buttons">
                                {/*
                                <button onClick={() => downGradeTask(index)}
                                    
                                    >
                                    <FaChevronCircleDown size={30}/>
                                </button>
                                <button onClick={() => upgradeTask(index)}
                                    >
                                        <FaChevronCircleUp size={30}/>
                                </button>
                                */}
                                <FaChevronCircleUp size={25} 
                                onClick={() => handleUpgradeTask(index)}
                                />
                                <FaChevronCircleDown size={25} 
                                onClick={() => handleDowngradeTask(index)}
                                />
                            </div>

                            <span className="task-text text-lg-left">{t}</span>
                            <div className="task-manipulation-buttons">
                                <button className="btn btn-warning btn-lg" onClick={() => editTask(index)}>Edit</button>
                                <button className="btn btn-danger btn-lg" onClick={()=>handleDeleteTask(index)} >
                                    <FaRegTrashCan />
                                </button>
                            </div>
                        </li>
                    ))
                    
                    }
                </ul>
            </div>
            
            
            
        </>
    )

}

export default Todo;