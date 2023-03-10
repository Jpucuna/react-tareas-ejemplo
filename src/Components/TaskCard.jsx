import {useContext} from "react";
import {TaskContext} from '../context/TaskContext'
export default function TaskCard({ task}) {

  const { eliminarTask } = useContext(TaskContext);

  return (
    <div className="bg-slate-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.descripcion}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => eliminarTask(task.id)}>Eliminar</button>
    </div>
  );
}
