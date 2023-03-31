import React from "react";

const Tarea = ({item}) => {
    console.log(item)
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mt-2 border p-2">
        <div className="ms-2 me-auto">
            <div className="fw-bold">
                título
            </div>
            <p>descripción</p>
            <div>
                <button className="btn btn-sm btn-danger me-1">
                    Eliminar
                </button>
                <button className="btn btn-sm btn-warning me-1">
                    Editar
                </button>
            </div>
        </div>
    </li>
  );
};

export default Tarea;
