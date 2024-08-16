import React, { useRef } from "react";

function Formulario ({onSubmitHandler}){
    
    const taskInput = useRef();
    
    const onSubmitHandlerEvent = (event)=>{
        onSubmitHandler(event);
        taskInput.current.value = '';
    }

    return(
        <form onSubmit={onSubmitHandlerEvent} className="formulario">
            <input ref={taskInput} name="taskName" type='text' placeholder='Escribe tu tarea' />
            <button>Crear</button>
        </form>
    );
}

export default Formulario;