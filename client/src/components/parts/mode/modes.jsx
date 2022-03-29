import { useContext } from "react";
import { ModeContext } from "../../../context/modeContext/ModeContext";
const Modes = ()=>{
const { mode, setMode } = useContext(ModeContext);
const BlueMode = {background:"#191970",color:"#4169e1",border:"white"};
const BrownMode = {background:"#cd853f",color:"#ffdead",border:"#ffdead"};
const OliveMode = {background:"#c19a6b",color:"#d1bea8",border:"#d1bea8"};
return(
    <div>
     
    </div>
)    
}