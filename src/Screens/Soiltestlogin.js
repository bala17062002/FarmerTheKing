import React, { useState } from "react";
import Opitionslogin from "../components/Opitionslogin";
import Farmerlog from "../components/Farmerlog";
import Agentlog from "../components/Agentlog";
import MainHeader from "../components/MainHeader";
import P2 from '../images/farmer1.jpg';


function Soiltestlogin() {
    const [flog, setflog] = useState(false);
    function click(event) {
        setflog(
            false
        )
    }
    function clicks(event) {
        setflog(
            true
        )
    }
    return (
        <div style={{ backgroundImage: `url(${P2})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "100vw" }}>
            <MainHeader />
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "10%", marginTop: "15%", opacity: "0.8" }}>
                <Opitionslogin click={click} clicks={clicks} />
                {flog ? <Agentlog /> : <Farmerlog />}
            </div>
        </div>
    )
}

export default Soiltestlogin;