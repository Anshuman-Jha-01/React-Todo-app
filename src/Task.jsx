// Import the necessary dependencies
import Delete from './Delete';
import Uppercase from './Uppercase';
import Lowercase from './Lowercase';
import MarkAsDone from './MarkAsDone';

// Component to render an individual task 
export default function Task({todo, tasks, setTasks}) {
    return (
        <li key={todo.id} > <span style={{textDecoration: todo.isDone == true ? "line-through" : ""}}> {todo.task} </span> &nbsp; 
            <Delete tasks={tasks} setTasks={setTasks} id={todo.id}></Delete>
            <Uppercase tasks={tasks} setTasks={setTasks} id={todo.id}></Uppercase>
            <Lowercase tasks={tasks} setTasks={setTasks} id={todo.id}></Lowercase>
            <MarkAsDone tasks={tasks} setTasks={setTasks} id={todo.id}></MarkAsDone>
        </li>
    );
}