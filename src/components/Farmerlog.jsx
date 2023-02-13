import React from "react";
import Username from "./Username";
import Passwordfeild from "./Passwordfeild";
import Circleimg from "./Circleimg";
import { Button } from "@mui/material";

function Farmerlog(){
    return(
        <div>
        <div style={{backgroundColor:"#F0EEED",
        backgroundImage:"",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 15px",
        fontWeight: "18px",
        color: "white",
        marginTop: "0%",
        marginBottom: "20%",
        marginLeft: "40%",
        marginRight: "40%",
        width:"10cm",
        height:"6cm"}}>
            <Circleimg />
            <Username username="Farmers id"/>
            <Passwordfeild />
            <Button sx={{backgroundColor:"green"}} variant="contained">Log in</Button>
            </div>
        </div>
    )
}
export default Farmerlog;