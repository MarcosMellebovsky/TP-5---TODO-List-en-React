import React, { useState } from 'react';
import './App.css';
import Input from './components/Input/Input.js';
import Tareas from './components/Tarea/Tareas.js';
import Titulo from './components/Titulo/Titulo.js';
import Botones from './components/Botones/Botones.js';

function App() {
    const [tareas, setTareas] = useState([
        { nombre: "Tarea 1", completada: false, fechaIngreso: Date.now(), tachado: null },
    ]);

    const [tareaActual, setTareaActual] = useState('');

    const agregarTarea = () => {
        if (tareaActual !== '') {
            setTareas([...tareas, { nombre: tareaActual, completada: false, fechaIngreso: Date.now(), tachado: null }]);
            setTareaActual('');
        }
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((tarea, i) => i !== index);
        setTareas(nuevasTareas);
    };

    const tareaa = (index) => {
        const nuevasTareas = tareas.map((tarea, i) => {
            if (i === index) {
                return { ...tarea, completada: !tarea.completada, tachado: !tarea.completada ? Date.now() : null };
            }
            return tarea;
        });
        setTareas(nuevasTareas);
    };

    const tareaMasRapida = () => {
        const tareasTachadas = tareas.filter(t => t.completada);
        if (tareasTachadas.length === 0) {
            alert("No hay tareas hechas");
            return;
        }
        let tareaR = tareasTachadas[0];
        tareasTachadas.forEach(t => {
            if ((t.tachado - t.fechaIngreso) < (tareaR.tachado - tareaR.fechaIngreso)) {
                tareaR = t;
            }
        });
        alert(`La tarea hecha más rápida fue: ${tareaR.nombre}`);
    };

    return (
        <div className="padre">
            <div className="hijo">
                <Titulo />
                <Input setTareaActual={setTareaActual} />
                <Botones tareaMasRapida={tareaMasRapida} agregarTarea={agregarTarea} />
                <Tareas tareas={tareas} tareaa={tareaa} eliminarTarea={eliminarTarea} />
            </div>
        </div>
    );
}

export default App;
