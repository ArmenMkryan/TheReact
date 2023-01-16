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
    completed: false,
  }  
  setTodoList([...todoList, task]);
    }

    
const deleteTask = (id) => {
    // setTodoList(task.filter((task) => task !== taskName)) 
 
    setTodoList(todoList.filter((task) => task.id !== id))


}
const completedTask = (id) => {
    // setTodoList(task.filter((task) => task !== taskName)) 
 
    setTodoList(
      todoList.map((task) => {
        if  (task.id === id) {
          return {...task, completed: true};
        } else {
          return task;
        }
      })
    );
};




    return (
    <div className="App">
<div className='addTask'>
  <input type="text" onChange={handleChange}/>
  <button onClick={addTask}> Add Task </button>
</div>
<div className='list'>{todoList.map((task) => {
  return <TaskComp 
            taskName={task.taskName} 
            id={task.id} 
            deleteTask={deleteTask} 
            completed={task.completed} 
            completedTask={completedTask} 
            />
    
})}</div>
    </div>)
}