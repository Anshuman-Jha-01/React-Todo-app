// Require the necessary dependencies
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import TaskList from "./TaskList";
import AddTask from './AddTask';
import Features from './Features';
import "./Todo.css"

// Component to render the todo list
export default function Todo() {
    let [tasks, setTasks] = useState([{task: "Eat", id: uuidv4(), isDone: false}, {task: "Sleep", id: uuidv4(), isDone: false}, {task: "Study", id: uuidv4(), isDone: false}]);
    return (
        <>
            <h2 style={{marginTop: "0"}}>Todo List</h2>
            <AddTask setTasks={setTasks}></AddTask>
            <br /><br />
            <hr />
            <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
            <hr />
            <h3 style={{marginTop: "1.5rem"}}>Aditional Features</h3>
            <Features tasks={tasks} setTasks={setTasks}></Features>
            <br />
        </>
    );
}