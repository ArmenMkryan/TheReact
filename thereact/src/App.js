

import './App.css';
import { User } from './Components/user';
import { Job } from './Components/job';
import { Planets } from './Components/planets';
import { planets } from './Components/planets';
import { users } from './Components/user';
import { useState } from 'react';
import { Tasks } from './Components/tasks';
import { Catfact } from './Components/catfact';


function App() {
const [years, setYears] = useState(0);
const yearsAge = () => {
setYears(years + 1)
}

const [text, setText] = useState("");
const textFunc = (event) => {
  setText(event.target.value);
}

const [show, setShow] = useState(true);
const showFunc = () => {
  setShow(!show)
}

const [textColor, setColor] = useState("black")

const [count, setCount] = useState(0);
const Incr = () => {
  setCount(count + 1)
}

const Decr = () => {
  if(count <= 0){
    count = 0
  } else {
setCount(count - 1)}
}

const Reset = () => {
  if(count !== 0){
     setCount(0)
  } 
}








  return (
    <div className="App">

    <Catfact/>
     
     <Tasks />


      <button onClick={Incr}> Up ↑ </button>
      <button onClick={Decr}> Down ↓ </button>
      <button onClick={Reset}> Reset </button>
      <h1>{count}</h1>


    <button onClick={() => {textColor === 'black' ? setColor("green") : setColor("black")}}>Make green</button>
    <h1 style={{color: textColor}}>This is Colorful Text</h1>

       <button onClick={showFunc}>SHOW/HIDE</button>
      {show && <h1>THIS TEXT WILL DISAPPEAR</h1>}
     
  <h1>{years}</h1>
  
  <button onClick={yearsAge}>Increase</button>  

  <div>
    <input type="text" onChange={textFunc}/>
    <h1 >{text}</h1>
  </div>
  <br/>
      <div>
        {planets.map((planets, key) => {
          if(planets.isGasPlanet=== true){
            return <Planets name={planets.name}/>            
          }
        })}
      </div>
      
      <h1>{users.map((users, key)=>{
        return <User className='App' name={users.name}   age={users.age}/>
      })}</h1>
     
     <Job salary={20000} position="Senior" company="Amazon" />
     <Job salary={15000} position="Junior" company="Google" />
     <Job salary={20000} position="Minior" company="Netflix" />
     
     

    </div>
  );
}




export default App;
