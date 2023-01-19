
import React from 'react';
import './App.css';
import { Tasks } from './Components/tasks';
import { Catfact } from './Components/catfact';
import { Age } from './Components/age';
import { Excuser } from './Components/excuser';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Home } from './Components/Home';
import { Myhome } from './Components/myhome';
import { useState } from 'react';



function App() {
const [userName, setUserName] = useState("")



const navi = {
  textDecoration:'none',
  fontSize: '20px',
  padding: '20px',
  
}



  return (
    <div className="App">


  
      <Router>
        <Link style={navi} to='/'>Home </Link>
        <Link style={navi} to='/age'>Age </Link>
        <Link style={navi} to='/catfact'>Catfact </Link>
        <Link style={navi} to='/excuser'>Excuser </Link>
        <Link style={navi} to='/tasks'>Tasks</Link>
    <Routes>
        <Route path='/' element ={<Myhome userName={userName} setUserName={setUserName}/>}/>
        <Route path='/age' element={<Age userName={userName} />} />
        <Route path='/catfact' element={<Catfact />} />
        <Route path='/excuser' element={<Excuser userName={userName} />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
     </Routes>
</Router>
    </div>
  );
}




export default App;
