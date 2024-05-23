import React from 'react';
import './Tareas.css'
const Tareas = ({ tareas, tareaa, eliminarTarea }) => {
    return (
        <ul className="ul-lista">
            {tareas.map((tarea, index) => (
                <li key={index} className="li-listas">
                    <input
                        type="checkbox"
                        checked={tarea.completada}
                        onChange={() => tareaa(index)}
                    />
                    <label style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                        {tarea.nombre}
                    </label>
                    <label>{new Date(tarea.fechaIngreso).toLocaleDateString()}</label>
                    <button className="eliminar-btn" onClick={() => eliminarTarea(index)}></button>
                </li>
            ))}
        </ul>
    );
};

export default Tareas;