import { Button } from '@mui/material';
import React from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom';

export const Agentsh = () => {
    return (
        <div>
            <MainHeader />
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "35%", marginTop: "10%", backgroundColor: "#F0EEED", opacity: "0.8", width: "500px", height: "500px", justifyContent: "center", alignItems: "center" }}>
                <Link to="/Pending">
                    <Button sx={{ backgroundColor: "green", margin: "10px", width: "3cm", height: "2.5cm" }} variant="contained">Pending Requests</Button>
                </Link>
                <Link to="/Approved" >
                    <Button sx={{ backgroundColor: "green", margin: "10px", width: "3cm", height: "2.5cm" }} variant="contained">Approved</Button>
                </Link>

            </div>
        </div>
    )
}
