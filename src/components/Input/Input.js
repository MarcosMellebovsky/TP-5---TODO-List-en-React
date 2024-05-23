import React from 'react';
import './Input.css';

const Input = ({ setTareaActual }) => {

    const cambiar = (e) => {
        setTareaActual(e.target.value);
    };

    return (
        <>
            <input className="nuevaLista" placeholder="Escribe una nueva tarea" type="text" onChange={cambiar} />
        </>
    );
};

export default Input;

