// Component to delete a task
export default function Delete({tasks,setTasks,id}) {
    function deleteTask(id) {
        let newTasks = tasks.filter((task) => id!==task.id);
        setTasks(newTasks);
    }
    return (
        <span> <button onClick={() => deleteTask(id)}>Delete</button> </span> 
    );
}