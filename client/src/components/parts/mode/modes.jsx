import { useContext } from "react";
import { ModeContext } from "../../../context/modeContext/ModeContext";
import {  FaRegMoon,FaRegSun } from "react-icons/fa";
// import { BsSun } from "react-icons";
const Modes = () => {
    const { setMode, mode } = useContext(ModeContext);
    const DarkMode = {backgroundNav:"rgb(8, 8, 43)",backgroundScreen:"#F2F2F2",colorTitle:"rgb(8, 8, 43)",color:"#F2F2F2",colorText: "#F2F2F2",border:"rgb(8, 8, 43) 2px solid" ,defultBorder:"black  2px solid",isMode:false};
    const LightMose ={backgroundNav: "#F2F2F2",backgroundScreen:"rgb(8, 8, 43)", colorTitle:"#F2F2F2",color: "rgb(8, 8, 43)",colorText: "#F2F2F2", border: "#F2F2F2 2px solid",defultBorder:"black  2px solid", isMode: true };
    const ChangeColor = () => {
        mode.isMode?
        setMode(DarkMode) :
        setMode(LightMose)
}
return (
    <div>
        <button onClick={ChangeColor}>{mode.isMode?<FaRegSun/>:<FaRegMoon style={{color:"white"}}/>}</button>
        
    </div>
)
}
export default Modes;