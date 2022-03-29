import { useContext } from "react";
import { ModeContext } from "../../../context/modeContext/ModeContext";
const Modes = ()=>{
const { setMode } = useContext(ModeContext);
const BlueMode = {background:"#191970",color:"white",border:"white 2px solid"}; 
const BrownMode = {background:"#cd853f",color:"#ffdead",border:"white 2px solid"};
const OliveMode = {background:"#c19a6b",color:"#d1bea8",border:"white 2px solid"};
return(
    <div>
         <button className="button"></button>
         <button className="button button2 " onClick={()=> setMode(BlueMode)}>blue</button>
         <button className="button button3" onClick={()=> setMode(BrownMode)}>borwn</button>
         <button className="button button4" onClick={()=> setMode(OliveMode)}>olive</button>
    </div>
)    
}
export default Modes;