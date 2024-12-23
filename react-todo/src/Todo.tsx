import { useState } from "react";


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

    }
    function upgradeTask(index: number){

    }
    function downGradeTask(index:number){
        console.log(index);
    }
    function addTask(){
        setTaskList((prevTasks) => [...prevTasks,task]);
        console.log(taskList);
    }
    function clearTask(){
        setTaskList([]);
    }


    return(
        <>
            <h1>To Do App</h1>
            <input 
                type="text" 
                placeholder="Enter in a new task"
                value = {task}
                onChange={updateTask}
            />
            <button onClick={addTask}>Submit</button>
            <div>
                <button onClick={clearTask}>Clear</button>
            </div>
            <div>
                <ul>
                    {taskList.map((t,index) => (
                        <li key={index} className="task-text-list">
                            <button>down</button>
                            <button>up</button>
                            <span className="task-text">{t}</span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    ))
                    
                    }
                </ul>
            </div>
        </>
    )

}

export default Todo;