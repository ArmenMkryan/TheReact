import './propdiv.css';
import '../App.css'

export const TaskComp = (props) => {
    
    
    return (<div  style={{backgroundColor: props.completed ? 'green' : 'white' }}className="propdiv App">
    
    <div ><h1>{props.taskName}</h1></div>
    
    <div ><button  onClick={() => props.completedTask(props.id)}>Completed</button>
    <button style={{color: 'red', fontWeight: "bold"}} onClick={() => props.deleteTask(props.id)}>X</button></div>
    </div>)
}
// 

// style={{color:'green', backgroundColor: 'white'}}