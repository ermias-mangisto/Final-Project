import { useState, createContext, useEffect } from "react";
export const ModeContext = createContext();
const BlueMode = {backgroundNav:"rgb(8, 8, 43)",backgroundScreen:"#F2F2F2",color:"#F2F2F2",border:"#F2F2F2 2px solid",defultBorder:"black  2px solid",isMode:false};
const DarkMode = {backgroundNav:"rgb(8, 8, 43)",backgroundScreen:"#F2F2F2",colorTitle:"rgb(8, 8, 43)",color:"#F2F2F2",colorText: "#F2F2F2",border:"rgb(8, 8, 43) 2px solid" ,defultBorder:"black  2px solid",isMode:false};    
export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState(DarkMode);
    useEffect(() => {
        const ConstMode = localStorage.getItem("currentMode");
        ConstMode ?
            setMode(JSON.parse(ConstMode)) :
            setMode({})
    }, [])
    useEffect(() => {
        localStorage.setItem("currentMode", JSON.stringify(mode));
    }, [mode])
    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeContext.Provider>
    )
}