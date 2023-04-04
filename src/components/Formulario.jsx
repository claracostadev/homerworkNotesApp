import React, { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ agregarTarea }) => {
  const [tarea, setTarea] = useState({
    title: "",
    description: "",
    state: "pendiente",
    priority: false,
  });

  const { title, description, state } = tarea;

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Complete el título y la descripción",
      });
      return;
    }

    agregarTarea({
      id: Date.now(),
      ...tarea,
      state: "completado" === state ? true : false,
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tarea agregada con éxito",
      timer: 1500,
    });
  };

  const modificarCampo = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={(e) => enviarFormulario(e)}>
        <input
          type="text"
          placeholder="ingrese tarea"
          className="form-control mb-2"
          name="title"
          value={tarea.title}
          onChange={modificarCampo}
        />
        <textarea
          name="description"
          className="form-control mb-2"
          cols="30"
          placeholder="descripción"
          value={tarea.description}
          onChange={modificarCampo}
        ></textarea>
        <select
          name="state"
          className="form-select mb-2"
          value={tarea.state}
          onChange={modificarCampo}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check mb-2">
          <input 
            type="checkbox" 
            className="form-check-input" 
            name="priority"
            checked={tarea.priority}
            onChange={(e) => setTarea({...tarea, priority: e.target.checked})}
            />
          <label className="form-check-label">Prioridad</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Formulario;
