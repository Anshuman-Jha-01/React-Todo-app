// Require the necesary dependencies 
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Component to add a new task
export default function AddTask({setTasks}) {
    let [input, setInput] = useState("");

    function updateInput(event) {
        setInput(event.target.value);      
    }

    function Addtask() {
        if(input!="") {
            setTasks((currTasks) => {
                return [...currTasks, {task: input, id: uuidv4()}]
            });
            setInput("");
        }
    }
    return (
        <>
            <input type="text" placeholder="Add a task" value={input} onChange={updateInput}/> &nbsp;&nbsp;
            <button onClick={Addtask}>Add task</button>
        </>
    );    
}