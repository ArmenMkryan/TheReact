import {React, useContext}from "react"
import { ChangeProfile } from "./ChangeProfile";
import { AppContext } from "../App";

export const Myhome =() => {
    const {userName} = useContext(AppContext)
    console.log(userName)
    return (
        <div>
        <h1>This is HOME PAGE.</h1> 
        <h1>This page belongs to: {userName}</h1>
        <ChangeProfile />
        </div>
    )
}