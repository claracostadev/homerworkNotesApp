import React from "react";
import Tarea from "./Tarea";

const Tareas = ({ tareasArray }) => {
  return (
    <div className="my-5">
      <h2 className="mb-2 text-primary text-center">Tareas</h2>
      <ul>
        {/* ACÁ VAN LAS TAREAS */}
        {tareasArray.map((item) => (
          <Tarea item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Tareas;
