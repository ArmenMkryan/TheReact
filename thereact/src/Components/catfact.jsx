import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



export const Catfact =() => {

    const [catFact, setCatFact] = useState("");
    const fetchCatFact = () => {
        Axios.get('https://catfact.ninja/fact').then((res) => {
            setCatFact(res.data.fact);
        } );
    }
    useEffect(() => {
        fetchCatFact()
    }, []);
    
  
    return (<div>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
    </div>
    )
  }




// fatch("https//catfact.ninja/fact").then((res) => res.json())
// .then((data) => {
//     console.log(data)
// });
