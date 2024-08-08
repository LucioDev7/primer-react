import Container from "./components/Container";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import React, { useState } from "react";

function App() {

  const [taskName, setTakeName] = useState('My first task'); //Devuelve variable en primer posicion, funcion en el segundo.

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTakeName(event.target.elements.taskName.value);
    event.target.elements.taskName.value = '';
}

  return (
    <>
    <Container>
      <Titulo text="ToDo-App" />
      <Formulario onSubmitHandler={onSubmitHandler}/>
      {taskName}
    </Container>
    </>
  );
};

export default App;