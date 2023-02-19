import React from "react";
import Username from "./Username";
import Passwordfeild from "./Passwordfeild";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Agentlog() {
    return (
        <div>
            <div style={{
                backgroundColor: "#F0EEED",
                backgroundImage: "",
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
                width: "10cm",
                height: "8.1cm"
            }}>

                <h1 style={{ color: "green", fontSize: "20px" }}>LOGIN-AGENT ACCOUNT</h1>
                <Username username="Agent's id" />
                <Passwordfeild />
                <Link to='/Agents'>
                    <Button sx={{ backgroundColor: "green" }} variant="contained">Log in</Button>
                </Link>
            </div>
        </div>
    )
}
export default Agentlog;