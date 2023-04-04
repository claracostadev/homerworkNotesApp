import React, { useEffect, useState } from "react";
import "./App.css";
import Tareas from "./components/Tareas";
import Formulario from "./components/Formulario";
import Tarea from "./components/Tarea";

const initialTareas = localStorage.getItem("tareas") ? JSON.parse(localStorage.getItem("tareas")) : [];

const App = () => {
  const [tareasArray, setTareasArray] = useState(initialTareas);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareasArray));
  }, [tareasArray]);

  const agregarTarea = (tarea) => {
    setTareasArray([...tareasArray, tarea]);
  };

  const eliminarTarea = (id) => {
    const arrFiltrado = tareasArray.filter((item) => item.id !== id);
    setTareasArray(arrFiltrado);
  };

  const actualizarTarea = (id) => {
    const arrFiltrado = tareasArray.map((item) => {
      if (item.id === id) {
        item.state = !item.state;
      }
      return item;
    });
    setTareasArray(arrFiltrado);
  };

  // const mostrarMensaje = () => {
  //   if (tareasArray.length !== 0) {
  //     Tarea.
  //   }
  // }

  return (
    <>
      <div className="container my-3">
        <h2 className="mb-3 text-primary">Formulario</h2>
        <Formulario agregarTarea={agregarTarea} />
        <Tareas
          /*mostrarMensaje={mostrarMensaje}*/ eliminarTarea={eliminarTarea}
          actualizarTarea={actualizarTarea}
          tareasArray={tareasArray}
        />
      </div>
    </>
  );
};

export default App;
