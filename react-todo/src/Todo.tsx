import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDoNav from "./ToDoNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MondayToDo from "./MondayToDo";
import TuesdayToDo from "./TuesdayToDo";

import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

function Todo(){
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
    function deleteTask(index: number){
        const newTaskList = taskList.filter((_,i) => i !== index);

        setTaskList(newTaskList)
    }
    function upgradeTask(index: number){
        const copylist = [...taskList]
        
        if( index > 0){
            [copylist[index],copylist[index -1]] = [copylist[index-1],copylist[index]]
            setTaskList(copylist)
        }

    }
    function downGradeTask(index:number){
        const copylist = [...taskList]

        if( index < taskList.length -1){
            [copylist[index],copylist[index +1 ]] = [copylist[index+1], copylist[index]];
            setTaskList(copylist);
        }
    }
    function addTask(){
        setTaskList((prevTasks) => [...prevTasks,task]);
        console.log(taskList);

        setTask("");
    }
    function clearTask(){
        setTaskList([]);
    }
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
            <button className="btn btn-success" onClick={addTask}>Submit</button>
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
                <button onClick={clearTask}>Clear</button>
            </div>
            <div>
                <ul className="task-list">
                    {taskList.map((t,index) => (
                        <li key={index} className="task-text-list">
                            <div className="task-move-buttons">
                                <button onClick={() => downGradeTask(index)}
                                    
                                    >
                                    <FaChevronCircleDown size={30}/>
                                </button>
                                <button onClick={() => upgradeTask(index)}
                                    >
                                        <FaChevronCircleUp size={30}/>
                                </button>

                            </div>

                            <span className="task-text text-lg-left">{t}</span>
                            <div className="task-manipulation-buttons">
                                <button className="btn btn-warning" onClick={() => editTask(index)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteTask(index)} >
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