

export const TaskComp = (props) => {
    
    
    return (<div>
    <h1>{props.taskName}</h1>
    <button style={{color: 'red', fontWeight: "bold"}} onClick={() => props.deleteTask(props.id)}>X</button>
    </div>)
}