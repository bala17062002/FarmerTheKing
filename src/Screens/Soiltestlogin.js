import React,{useState} from "react";
import Opitionslogin from "../components/Opitionslogin";
import Farmerlog from "../components/Farmerlog";
import Agentlog from "../components/Agentlog";


function Soiltestlogin(){
    const[flog,setflog] = useState(false);
    function click(event){
 setflog(
     true
 )
}
function clicks(event){
    setflog(
        false
    )
}
    return(
     <div>
        <div style={{display:"flex",flexDirection:"row",marginLeft:"10%",marginTop:"15%"}}>
        <Opitionslogin click={click} clicks={clicks}/>
        {flog ? <Farmerlog   />: <Agentlog />}
        </div>
     </div>
    )
}

export default Soiltestlogin;