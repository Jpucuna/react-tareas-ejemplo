import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

export default function TaskForm() {
  
    
    const [title, settitle] = useState("");
    const [description, setdescription] = useState('');
    const {createTask} = useContext(TaskContext)

    const hundleSubmit = (e)=>{
        e.preventDefault();
        const task = {
            title,
            description
        };
        createTask(task);
        settitle('');
        setdescription('');
    }

    return (
        <div className='max-w-md mx-auto'>
           <form onSubmit={hundleSubmit} className="bg-slate-800 p-10 mb-4">
            <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
            <input value={title} placeholder="Escribe tu tarea" 
            className='bg-slate-300 p-3 w-full mb-2'
            onChange={(e) => settitle(e.target.value)
            }/>
            <textarea value={description} placeholder='Escribe la descripcion de la tarea'
            className='bg-slate-300 p-3 w-full mb-2'
             onChange={(e) => setdescription(e.target.value)
            }></textarea>
            <button className='bg-indigo-500 px-3 py-1 text-white'>
                Guardar
            </button>
        </form>     
        </div>
        
  );
}
