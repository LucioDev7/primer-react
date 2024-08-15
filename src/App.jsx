import Container from "./components/Container";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import React, { useEffect, useState } from "react";

function App() {
  
  // useState se usa para declarar una variable de estado
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');   // Obtener las tareas guardadas en `localStorage`.
    return savedTasks ? JSON.parse(savedTasks) : [];    // Si existen, se parsean a un array, sino, se inicializa vacío.
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const taskName = event.target.elements.taskName.value;
    if (!taskName) return;

    // Objeto de tarea con su nombre y un estado inicializado en `false`.
    const newTask = { name: taskName, completed: false };

    setTasks([...tasks, newTask]);
    event.target.elements.taskName.value = '';
  }

  useEffect(() => {
    // Guarda el array de tareas en `localStorage` en formato JSON cada vez que `tasks` cambia.
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // useEffect solo se ejecuta cuando `tasks` cambia.


  return (
    <>
      <Container>
        <Titulo text="ToDo-App" />
        <Formulario onSubmitHandler={onSubmitHandler} />
        {tasks.map((task, index) => (
          <div key={index}>
            {task.name} - {task.completed ? "Completado" : "Pendiente"}
          </div>
        ))}
      </Container>
    </>
  );
};

export default App;
