import { Link } from "react-router-dom";
import MondayToDo from "./MondayToDo";



function ToDoNav(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">To-Do App</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                General
                            </Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/Monday" className="nav-link">
                                Monday Tasks
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Tuesday" className="nav-link">
                                Tuesday Tasks
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Wednesday</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Thursday</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Friday</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Saturday</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sunday</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default ToDoNav;