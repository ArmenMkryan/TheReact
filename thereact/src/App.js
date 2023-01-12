
import { useDebugValue } from 'react';
import './App.css';

function App() {
const users = [
  {name : "Armen", age : 40}, 
  {name : "Arthur", age : 28},
  {name : "Jason", age : 30},
  {name : "Henry", age : 24},
  {name : "David", age : 26},
  {name : "Morgan", age : 36},
  {name : "Michael", age : 24}
]

  return (
    <div className="App">
      <h1>{users.map((name, key)=>{
        return <h6>{key + ' : ' +name   }</h6>
      })}</h1>
     <Job salary={20000} position="Senior" company="Amazon" />
     <Job salary={15000} position="Junior" company="Google" />
     <Job salary={20000} position="Minior" company="Netflix" />
     
     

    </div>
  );
}

const Job = (props) => {
  return ( <div>
 <h1>{props.salary}</h1>
 <h1>{props.position}</h1>
 <h1>{props.company}</h1>
 <h1>________________</h1>
  </div>
  );
};
export default App;
