import React, { useState } from 'react';
import './Botones.css';

const Botones = ({ tareaMasRapida, agregarTarea }) => {
    const [tarea, setTarea] = useState('');

   

    const submit = () => {
        agregarTarea(tarea);
        setTarea('');
    };

    return (
        <div className="btns">
          
            <button onClick={submit}>Agregar Tarea</button>
            <button onClick={tareaMasRapida}>Mostrar Tarea Más Rápida</button>
        </div>
    );
};

export default Botones;
