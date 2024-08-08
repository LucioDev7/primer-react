import Container from "./components/Container";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import React, { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]); //Devuelve variable en primer posicion, funcion en el segundo.

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!event.target.elements.taskName.value) return;
    setTasks( [ ...tasks, event.target.elements.taskName.value] );
    event.target.elements.taskName.value = '';
}

  return (
    <>
    <Container>
      <Titulo text="ToDo-App" />
      <Formulario onSubmitHandler={onSubmitHandler}/>
      {JSON.stringify(tasks)}
    </Container>
    </>
  );
};

export default App;