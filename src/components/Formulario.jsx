import React, { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({agregarTarea}) => {
    const [tarea, /*setTarea*/] = useState({
        title: '',
        description: '',
        state: 'pendiente',
        priority: 'false',
    });

    const {title, description, state} = tarea; 

    const enviarFormulario = (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Complete el título y la descripción'
            });
            return;
        }

        agregarTarea({
            id: Date.now(),
            ...tarea, 
            state: 'completado' === state ? true : false,
        });

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tarea agregada con éxito',
            timer: 1500
        });
    };

    // const modificarCampo = (e) => {
        
    // };

    return (
        <>
            <form onSubmit={(e) => enviarFormulario(e)}>
                
            </form>
        </>
    )
}

export default Formulario;