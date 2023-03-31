import React, { useState } from "react";
import "./App.css";
import Tareas from "./components/Tareas";
import Formulario from "./components/Formulario";


const initialTareas = [
  {
    id: 1,
    title: "tarea #1",
    description: "descripción #1",
    state: false,
    priority: false,
  },
  {
    id: 2,
    title: "tarea #2",
    description: "descripción #2",
    state: true,
    priority: false,
  },
  {
    id: 3,
    title: "tarea #3",
    description: "descripción #3",
    state: true,
    priority: true,
  },
];

const App = () => {
  const [tareasArray, setTareasArray] = useState(initialTareas);

  return (
    <>
      <div className="container my-3">
        <h2 className="mb-3 text-primary">Formulario</h2>
        <Formulario />
        <Tareas 
          tareasArray={tareasArray}
        />
      </div>
    </>
  )
}

export default App;
