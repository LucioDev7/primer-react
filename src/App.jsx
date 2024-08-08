import Container from "./components/Container";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";

function App() {

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event)
}

  return (
    <>
    <Container>
      <Titulo text="ToDo-App" />
      <Formulario onSubmitHandler={onSubmitHandler}/>
    </Container>
    </>
  );
};

export default App;

