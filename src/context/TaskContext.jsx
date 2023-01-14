import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/Task";

export const TaskContext = createContext();

export function TaskContexProvider(props) {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(newTask) {
    setTask([
      ...task,
      {
        id: task.length,
        title: newTask.title,
        descripcion: newTask.description,
      },
    ]);
  }

  function eliminarTask(taskID) {
    setTask(task.filter((task) => task.id !== taskID));
  }

  return (
    <TaskContext.Provider value={{ task, createTask, eliminarTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
