import React,  { createContext, useContext } from "react";
import { User } from ".";

export const DashboardContext =  createContext<User | undefined>(undefined);

export function useUserContext(){

    const user = useContext(DashboardContext);

    if(user === undefined) {
        throw new Error("must be used with Dashboard context");
    }

    return user;
}