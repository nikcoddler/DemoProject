import React from "react";
import { useUserContext } from "./context";

interface SideBarProps {

}

export function SideBar({}: SideBarProps){
    const user = useUserContext()

    return (
        <div>
            <div>{user.name}</div>
            <div>Sub Status : {user.isSubscribed}</div>
        </div>
    )
}

interface ProfileProps {

}

export function Profile({}: ProfileProps){
    const user = useUserContext()
    return (
        <div>
            <div>{user.name}</div>
        </div>
    )
}