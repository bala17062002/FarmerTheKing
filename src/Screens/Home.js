import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import Header from "../components/Header";
import Farmerlog from "../components/Farmerlog";
import Opitionslogin from "../components/Opitionslogin";
import Username from "../components/Username";
import Agentlog from "../components/Agentlog";

function Home(){
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
    return(<div style={{backgroundColor:"#EDE4E0"}}>
        <Header />
        <div style={{display:"flex",flexDirection:"row",marginLeft:"10%",marginTop:"15%"}}>
        <Opitionslogin click={click} clicks={clicks}/>
        {flog ? <Farmerlog   />: <Agentlog />}
        </div>
        
       
      
    </div>)
}
export default Home;