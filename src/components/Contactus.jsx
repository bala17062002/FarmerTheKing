import React from 'react'
import MainHeader from './MainHeader'
import { Button } from "@mui/material";
import Apple from '../images/apple.jpg';
export const Contactus = () => {
    return (
        <div style={{
            backgroundImage: `url(${Apple})`,
            backgroundSize: "100vh 100vh"
        }}>
            <MainHeader />
            <div style={{
                backgroundColor: "#F0EEED",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "50px 15px",
                fontWeight: "18px",
                color: "white",
                marginTop: "20%",
                marginBottom: "30%",
                marginLeft: "40%",
                marginRight: "40%",
                width: "10cm",
                height: "8.1cm",

            }}>
                <Button sx={{ backgroundColor: "green", width: "3cm", height: "3cm", margin: "5px" }} variant="contained" >Chat</Button>
                <Button sx={{ backgroundColor: "green", width: "3cm", height: "3cm" }} variant="contained" >Help Line(36**56)</Button>


            </div>
        </div>
    )
}
