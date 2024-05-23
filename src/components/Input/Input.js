import React, { useState } from 'react';
import './Input.css'

const Input = () => {
    const [tarea, setTarea] = useState('');

    const cambiar = (e) => {
        setTarea(e.target.value);
    };

    return (
        <div className="div-input">
            <input className="nuevaLista" placeholder="Escribe una nueva tarea" type="text" value={tarea} onChange={cambiar} />
            
        </div>
    );
};

export default Input;