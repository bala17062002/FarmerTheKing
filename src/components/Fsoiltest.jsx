import { Button } from '@mui/material';
import React from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom';
import P1 from '../images/soil.jpg';

export const Fsoiltest = () => {
    return (
        <div style={{ backgroundImage: `url(${P1})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "100vw" }}>
            <MainHeader />
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "35%", marginTop: "10%", backgroundColor: "#F0EEED", opacity: "0.8", width: "500px", height: "500px", justifyContent: "center", alignItems: "center" }}>
                <Link to="/Requestsoil">
                    <Button sx={{ backgroundColor: "green", margin: "10px", width: "3cm", height: "2.5cm" }} variant="contained">Request Soil Test</Button>
                </Link>
                <Link to="/Soilres" >
                    <Button sx={{ backgroundColor: "green", margin: "10px", width: "3cm", height: "2.5cm" }} variant="contained">View Results</Button>
                </Link>
                <Link to="/Contact">
                    <Button sx={{ backgroundColor: "green", margin: "10px", width: "3cm", height: "2.5cm" }} variant="contained">Contact us</Button>
                </Link>
            </div>
        </div>
    )
}
