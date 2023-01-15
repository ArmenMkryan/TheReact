import React from "react";
import { useState } from "react";
import { TaskComp } from "./taskComp";
 


export const Tasks = () => {

const [todoList, setTodoList] =useState([]);
const [newTask, setNewTask] = useState("");
const handleChange = (event) => {
  setNewTask(event.target.value)
}

const addTask = () => {
  const task = {
    id:       todoList.length === 0 ? 1 : todoList[todoList.length - 1] .id + 1,
    taskName: newTask,
  }  
  setTodoList([...todoList, task]);
    }

    
const deleteTask = (id) => {
    // setTodoList(task.filter((task) => task !== taskName)) 
 
    setTodoList(todoList.filter((task) => task.id !== id))


}

    return (
    <div className="App">
<div className='addTask'>
  <input type="text" onChange={handleChange}/>
  <button onClick={addTask}> Add Task </button>
</div>
<div className='list'>{todoList.map((task) => {
  return <TaskComp taskName={task.taskName} id={task.id} deleteTask={deleteTask} />
    
})}</div>
    </div>)
}