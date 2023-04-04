import React from "react";
import Tarea from "./Tarea";

const Tareas = ({ tareasArray, eliminarTarea, actualizarTarea }) => {
  return (
    <div className="my-5">
      <h2 className="mb-2 text-primary text-center">Tareas</h2>
      <ul>
        {/* ACÁ VAN LAS TAREAS */}
        {tareasArray.map((item) => (
          <Tarea 
          eliminarTarea={eliminarTarea} 
          actualizarTarea={actualizarTarea}
          key={item.id} 
          item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Tareas;
