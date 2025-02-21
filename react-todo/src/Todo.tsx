import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDoNav from "./ToDoNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MondayToDo from "./MondayToDo";
import TuesdayToDo from "./TuesdayToDo";

function Todo(){
    const [taskList, setTaskList] = useState<string[]>([]);
    const [task, setTask] = useState<string>("");

    function updateTask(event:any){
        setTask(event.target.value);
        console.log(task);
    }
    function edit(){

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
            <div className="edit-task-section">
                <input 
                    type="text" 
                    placeholder="Enter in a new task"
                    value = {task}
                    onChange={updateTask}
                    className="form-control"
                    id="edit-task"
                />
                <button className="btn btn-warning" onClick={addTask}>Update</button>
                <button className="btn btn-danger" onClick={addTask}>Cancel</button>
            </div>

            <div>
                <button onClick={clearTask}>Clear</button>
            </div>
            <div>
                <ul className="task-list">
                    {taskList.map((t,index) => (
                        <li key={index} className="task-text-list">
                            <button onClick={() => downGradeTask(index)}>down</button>
                            <button onClick={() => upgradeTask(index)}>up</button>
                            <span className="task-text">{t}</span>
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteTask(index)} >Delete</button>
                        </li>
                    ))
                    
                    }
                </ul>
            </div>
            
            
            
        </>
    )

}

export default Todo;