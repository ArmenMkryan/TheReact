
import  {React, useState, createContext } from 'react';
import './App.css';
import { Tasks } from './Components/tasks';
import { Catfact } from './Components/catfact';
import { Age } from './Components/age';
import { Excuser } from './Components/excuser';
import {BrowserRouter as Router, Routes, Route, Link, Form} from 'react-router-dom';
import { Myhome } from './Components/myhome';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Forma } from './Components/form';




export const AppContext = createContext();

function App() {
const client = new QueryClient({defaultOptions: {
  queries: {
    refetchOnWindowFocus: false,
  }
}});



const navi = {
  textDecoration:'none',
  fontSize: '20px',
  padding: '20px',
  
}

const [userName, setUserName] = useState("pedro")

  return (
    <div className="App">

<QueryClientProvider client={client}> 
  <AppContext.Provider value={{userName, setUserName}}>
      <Router>
        <Link style={navi} to='/'>Home </Link>
        <Link style={navi} to='/age'>Age </Link>
        <Link style={navi} to='/catfact'>Catfact </Link>
        <Link style={navi} to='/excuser'>Excuser </Link>
        <Link style={navi} to='/tasks'>Tasks</Link>
        <Link style={navi} to='/forma'>Register</Link>
    <Routes>
      
        <Route path='/' element ={<Myhome userName={userName} setUserName={setUserName}/>}/>
        <Route path='/age' element={<Age />} />
        <Route path='/excuser' element={<Excuser />} />
        <Route path='/catfact' element={<Catfact />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/forma' element={<Forma/>} />
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
     </Routes>
</Router>
</AppContext.Provider>
</QueryClientProvider>
    </div>
  );
}




export default App;
