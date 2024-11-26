// Component to change a task to lower case
export default function Lowercase({tasks,setTasks,id}) {
    function changeToLowercase(id) {
        let newTasks = tasks.map((todo) => {
            if(id==todo.id) {
                return {...todo, task: todo.task.toLowerCase()}
            }
            else {
                return todo;
            }
            
        });
        setTasks(newTasks);
    }

    return (
        <span> <button onClick={() => changeToLowercase(id)}> Lowercase </button> </span>
    );
}