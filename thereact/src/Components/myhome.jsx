import React from "react"
import { ChangeProfile } from "./ChangeProfile"
export const Myhome =(props) => {

    return (
        <div>
        <h1>This is HOME PAGE.</h1> 
        <h1>This page belongs to: {props.userName}</h1>
        <ChangeProfile setUsername={props.setUsername}/>
        </div>
    )
}