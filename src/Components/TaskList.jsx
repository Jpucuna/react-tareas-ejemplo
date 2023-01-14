import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
export default function TaskList() {

    const {task}=useContext(TaskContext)

    if(task.length === 0){
        return <h1 className="text-white text-4xl font-bold text-center py-5">
            No hay tareas aun...
        </h1>
    }

  return (
    <div className="grid grid-cols-4 gap-2 ">
        {task.map((task) => 
            (<TaskCard key={task.id} task={task}/>))
        }
    </div>
  );
}
