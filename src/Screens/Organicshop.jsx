import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MainHeader from '../components/MainHeader'
import Passwordfeild from '../components/Passwordfeild'
import Username from '../components/Username'

export const Organicshop = () => {
    return (
        <div>
            <MainHeader />
            <div style={{ backgroundColor: "green", alignContent: "center" }}>
                <h1 style={{ color: "white", textAlign: "center" }}>ORGANIC PRODUCTS</h1>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px 15px",
                backgroundColor: "#F0EEED",
                width: "10cm",
                height: "8.1cm",
                marginTop: "10%",
                marginBottom: "10%",
                marginLeft: "40%",
                marginRight: "40%", justifyContent: "center"
            }}>
                <h1 style={{ color: "green" }}>Welcome Organic products</h1>
                <Username username="User-id" />
                <Passwordfeild />
                <Link to="/Organichome" >
                    <Button sx={{ backgroundColor: "green" }} variant="contained">Log in</Button>
                </Link>


            </div>
        </div>
    )
}
