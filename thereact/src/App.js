

import './App.css';
import { User } from './Components/user';
import { Job } from './Components/job';
import { Planets } from './Components/planets';
import { planets } from './Components/planets';
import { users } from './Components/user';
import { useState } from 'react';
 
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


  return (
    <div className="App">

    <button onClick={() => {textColor ? setColor("green") : setColor("black")}}>Make green</button>
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
