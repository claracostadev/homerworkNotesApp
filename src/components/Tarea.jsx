import React from "react";

const Tarea = ({item, eliminarTarea, actualizarTarea}) => {
   
    const {title, description, priority, state, id} = item; 
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mt-2 border p-2">
        {/* <div className="d-none text-center">No hay tareas</div> */}
        <div className="ms-2 me-auto">
            <div className="fw-bold">
                {title}
                {state ? (
                    <span className="badge bg-success text-light ms-5">Completado</span>
                ) : (
                    <span className="badge bg-info text-light ms-5">Pendiente</span>
                )}
            </div>
            <p>{description}</p>
            <div>
                <button className="btn btn-sm btn-danger me-1" onClick={() => eliminarTarea(id)}>
                    Eliminar
                </button>
                <button className="btn btn-sm btn-warning me-1" onClick={() => actualizarTarea(id)}>
                    Editar
                </button>
            </div>
        </div>
        {priority === true ? (
            <span className="badge bg-primary rounded-pill">Prioritario</span>
        ) : (
            <span className="badge bg-warning rounded-pill">No prioritario</span>
        )}
    </li>
  );
};

export default Tarea;
