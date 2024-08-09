import Container from "./components/Container";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import React, { useEffect, useState } from "react";

function App() {
  
  console.log('componente app ejecutado')

  //Devuelve variable en primer posicion, funcion en el segundo.  
  const [tasks, setTasks] = useState([]); //TAREA: INICIALIZAR CON L.S.
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!event.target.elements.taskName.value) return;

    //TAREA: REEMPLAZAR EL STRING DEL VALUE POR UN OBJETO QUE CONTENGA
    //EL STRING Y EL ESTADO FINALIZADO 

    setTasks( [ ...tasks, event.target.elements.taskName.value] ); //EN LUGAR DEL EVENT, GUARDAR OBJETO
    event.target.elements.taskName.value = '';
}

  useEffect( () => {
    console.log('UseEffect ejecutado', tasks)

    //DE TAREA VAMOS A AGREGAR EL GUARDADO EN EL LOCALSTORAGE

    // return () => {
    //   alert ('componente desmontado')
    // };
  }, [tasks]); //array es el conjunto de dependencia que queremos que tenga

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