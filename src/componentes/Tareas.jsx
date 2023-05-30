import '../Estilos/Tareas-agregadas.css';

function Tareas({ texto, tareaSeleccionada, Click }) {
  
  return (
    <div className={`Tareas-agregadas ${tareaSeleccionada ? 'tareaSeleccionada' : ''}`} onClick={Click}>
      {texto}
    </div>
  );
}

export default Tareas;
