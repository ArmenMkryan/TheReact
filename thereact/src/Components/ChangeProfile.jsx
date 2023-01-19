import React from "react";
import { useState } from "react";
export const ChangeProfile = (props) => {

    const [newUsername, setNewUsername] = useState("")

    return (
        <div>
            <input onChange={(event) => setNewUsername(event.target.value)} type="text" name="" id="" />
            <button onClick={() => {props.setUsername(newUsername)}}>Change username</button>
        </div>
    )
}