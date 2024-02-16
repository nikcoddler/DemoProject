import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext } from "./context";

interface DemoProps {
  
}

export interface User {
    isSubscribed: boolean;
    name: string;
}


export function Demo({}: DemoProps) {

    const [user] = useState<User>({
        isSubscribed: true,
        name: "You"
    });

    return (
        <div>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
            
        </div>
    )

}