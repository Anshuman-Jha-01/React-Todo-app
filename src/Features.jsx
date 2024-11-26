// Component to add additional features
export default function Features({tasks,setTasks}) {
    // Change all tasks to uppercase
    function changeToUppercaseAll() {
        let newTasks = tasks.map((todo) => {
            return {...todo, task: todo.task.toUpperCase()}
        });
        setTasks(newTasks);
    }

    // Change all tasks to lowercase
    function changeToLowercaseAll() {
        let newTasks = tasks.map((todo) => {
            return {...todo, task: todo.task.toLowerCase()}
        });
        setTasks(newTasks);
    }

    // Cross all the tasks 
    function markAllIsDone() {
        let newTasks = tasks.map((todo) => {
            return {...todo, isDone: true}
        });  
        setTasks(newTasks);   
    }

    // Delete all of the tasks
    function deleteAll() {
        setTasks([]);        
    }

    return (
        <>
            <button onClick={changeToUppercaseAll}>Uppercase All</button> &nbsp;
            <button onClick={changeToLowercaseAll}>Lowercase All</button>  &nbsp;
            <button onClick={markAllIsDone}>Mark All is Done</button>
            <button onClick={deleteAll}>Delete All</button>
        </>
    );
}