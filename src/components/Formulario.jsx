function Formulario ({onSubmitHandler}){
    
    return(
        <form onSubmit={onSubmitHandler} className="formulario">
            <input type='text' placeholder='Escribe tu tarea' />
            <button>Crear</button>
        </form>
    );
}

export default Formulario;