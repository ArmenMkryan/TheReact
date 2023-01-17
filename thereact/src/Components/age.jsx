import  axios, { Axios } from "axios";
import { useState } from "react";
import { useEffect } from "react";


export function Age  () {
const [name, setName] = useState("")
const [predicted, setPredicted] = useState(null)


const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
        setPredicted(res.data)

        console.log(res.data)
})
    }

    return (
        <div>
            <input type="text" placeholder="Name here ..." onChange={(event) => {setName(event.target.value)}}/>
            <button onClick={fetchData}>Predict Age</button>
            <h1>Predicted Age: {predicted?.age} </h1>
            <h1>Count: {predicted?.count} </h1>
            <h1>Name: {predicted?.name} </h1>
        </div>
    )
}