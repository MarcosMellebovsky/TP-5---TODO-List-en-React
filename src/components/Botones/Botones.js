import React from 'react';
import './Botones.css';

const Botones = ({ tareaMasRapida, agregarTarea }) => {
    return (
        <div className="btns">
            <button className="btn btn-secondary btn-lg" onClick={agregarTarea}>Agregar Tarea</button>
            <button className="btn btn-secondary btn-lg" onClick={tareaMasRapida}>Tarea Más Rápida</button>
        </div>
    );
};

export default Botones;
