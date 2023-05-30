import './App.css';
import './componentes/Tareas';
import Tareas from './componentes/Tareas';
import { useState, useRef } from 'react';

function App() {
  
  const [tareas, setTareas] = useState([]);

  const inputRef = useRef(null);

  const añadir = () => {

    const nuevaTarea = {
      id: Math.random().toString(),
      texto: inputRef.current.value,
      tareaSeleccionada: false

    };

    setTareas([...tareas, nuevaTarea]);
    inputRef.current.value = '';

  };

  const seleccionarTarea = (id) => {

    const nuevasTareas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, tareaSeleccionada: !tarea.tareaSeleccionada };
      }
      return tarea;
    });

    setTareas(nuevasTareas);

  };

  const borrar = () => {
    const nuevasTareas = tareas.filter((tarea) => !tarea.tareaSeleccionada);
    setTareas(nuevasTareas);
  };

  return (

    <div className='App'>
      <h1>ToDo List</h1>

      <div className='contenedor-texto'>

        <input type='text' id='tarea' placeholder='Escribe tu tarea' ref={inputRef} />
        <button id='btnAgregar' className='agregar' onClick={añadir}>
          Añadir tarea
        </button>
        <button id='btnBorrar' className='borrar' onClick={borrar}>
          Borrar marcadas
        </button>

      </div>

      <div className='contenedor-tareas'>

        {tareas.map((tarea) => (
          <Tareas
            key={tarea.id}
            texto={tarea.texto}
            tareaSeleccionada={tarea.tareaSeleccionada}
            Click={() => seleccionarTarea(tarea.id)}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
