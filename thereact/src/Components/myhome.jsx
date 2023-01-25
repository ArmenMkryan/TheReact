import { React, useContext }from "react"
import { ChangeProfile } from "./ChangeProfile";
import { AppContext } from "../App";
import { isError, useQuery } from "@tanstack/react-query";
import  Axios  from "axios";

export const Myhome =() => {
    const {data: catData, isLoading, isError, refetch} = useQuery(['cat'], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });
    const {userName} = useContext(AppContext)
    console.log(userName)
   
    
    if(isLoading) {
        return <h1> Loading ...</h1>
    }

    if(isError) {
        return <h1>There Was an error</h1>   
    }

    
    return (
        <div>
        <h1>This is HOME PAGE.</h1> 
        <h1>This page belongs to: {userName}</h1>
        <p>{catData?.fact}</p>
        <button onClick={refetch}>Update</button>
        <br>
        </br>
        <ChangeProfile />
        <br>
        </br>
        </div>
    )
}