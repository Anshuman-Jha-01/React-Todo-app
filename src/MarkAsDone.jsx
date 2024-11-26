// Component to cross a task 
export default function MarkAsDone({tasks,setTasks,id}) {
    function markAsDone(id) {
        let newTasks = tasks.map((todo) => {
            if(id==todo.id)
            {
                return {...todo, isDone: true}
            }
            else {
                return todo;
            }
        });
        setTasks(newTasks);
    }
    return (
        <span> <button onClick={() => markAsDone(id)}> Mark as done </button> </span>
    );
}