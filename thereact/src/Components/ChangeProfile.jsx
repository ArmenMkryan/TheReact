import {React, useContext} from "react";
import { useState } from "react";
import { AppContext } from "../App";


export const ChangeProfile = () => {
    const {setUserName} = useContext(AppContext)
    const [newUsername, setNewUsername] = useState("")
console.log(newUsername)
    return (
        <div>
            <input onChange={(event) => setNewUsername(event.target.value)}      />
            <button onClick={() => {setUserName(newUsername)}}>Change username</button>
        </div>
    )
}