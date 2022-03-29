import { useState, createContext, useEffect } from "react";
export const ModeContext = createContext();
export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState({});
    useEffect(()=>{
    const ConstMode = localStorage.getItem("currentMode");
    ConstMode?
    setMode(JSON.parse(ConstMode)):
    setMode({})
    },[])
    useEffect(()=>{
    localStorage.setItem("currentMode",JSON.stringify(mode));  
    },[mode])
    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeContext.Provider>
    )
}