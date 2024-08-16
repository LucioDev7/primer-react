function Task({id, name, completed, onToggleHandler}){

    const classname = completed ? 'task-item completed' : 'task-item'
    const onToggle = () =>{
        onToggleHandler(id);
    }
    return(
        <li>
            <div className={classname} onClick={onToggle}>
                <span>{name}</span>
            </div>
        </li>
    )
};

export default Task;