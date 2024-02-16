import React from "react";
import { Profile, SideBar } from "./components";

interface DashboardProps {
   
}

export default function Dashboard({} : DashboardProps){

    return (
        <div>
            <SideBar />
            <Profile />
        </div>
    )
}