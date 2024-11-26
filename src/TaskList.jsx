// Import the necessary dependencies
import Task from "./Task";

// Component to render all the tasks
export default function TaskList({tasks, setTasks}) {
    return (
        <>
        <h3>Tasks remaining</h3>
        {tasks==[] || tasks==""?<p><i>Great work! You have completed every task</i></p>:""}
        <ul>
            {
                tasks.map((todo) => {
                    return (
                        <Task key={todo.id} todo={todo} tasks={tasks} setTasks={setTasks}></Task>
                    );
                })
            }
        </ul>    
        </>
    );    
}