import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MondayToDo from './MondayToDo'
import TuesdayToDo from './TuesdayToDo'
import ToDoNav from './ToDoNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>
            <div>

              {/*<ToDoNav/>*/}
                <Routes>
                    <Route path="/" element={<Todo />} />
                    <Route path="/Monday" element={<MondayToDo />} />
                    <Route path="/Tuesday" element={<TuesdayToDo />} />
                </Routes>
            </div>
        </Router>
    </>
  )
}

export default App
