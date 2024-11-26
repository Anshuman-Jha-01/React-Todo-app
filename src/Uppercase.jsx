// Component to change a task to upper case
export default function Uppercase({tasks,setTasks,id}) {
    function changeToUppercase(id) {
        let newTasks = tasks.map((todo) => {
            if(id==todo.id) {
                return {...todo, task: todo.task.toUpperCase()}
            }
            else {
                return todo;
            }
        });
        setTasks(newTasks);
    }
    return (
        <span> <button onClick={() => changeToUppercase(id)}> Uppercase </button> </span>
    );
}