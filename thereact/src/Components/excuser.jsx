
import { useState, useEffect } from "react";
import  axios  from "axios";
import {React, useContext} from "react";
import { AppContext } from "../App";
export function Excuser () {
    const {userName,setUserName} = useContext(AppContext)
    const [getData, setGetData] = useState('')
    const border = {
    border: '1px solid grey',
    backgroundColor: 'WebGLQuery'
}

const fetchParty = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/party/").then((res) => {
        setGetData(res.data[0].excuse)
        console.log(res.data[0].excuse)
       
    })
}
const fetchFamily = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/family/").then((res) => {
        setGetData(res.data[0].excuse)
        console.log(res.data[0].excuse)
        console.log(getData)
    })
}
const fetchOffice = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/office/").then((res) => {
        setGetData(res.data[0].excuse)
        console.log(res.data[0].excuse)
        console.log(getData)
    })
}

    return (
        <div>
            <h1>Generate an Excuse</h1>
            <button onClick={fetchParty}>Party</button>
            <button onClick={fetchFamily}>Family</button>
            <button onClick={fetchOffice}>Office</button>
            <p style={{border}}>{getData}</p>
            <h1>This excuser is for: {userName}</h1>
        </div>
    )
}