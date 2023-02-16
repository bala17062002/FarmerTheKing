import React from 'react'
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
export const Organiccard = (props) => {
    return (
        <div>
            <div style={{ backgroundColor: "#E1EEDD", width: "300px", height: "300px", borderRadius: "5px", margin: "8px" }}>
                <img src={props.src} alt="item" style={{ margin: "40px", marginBottom: "0", borderRadius: "9px", width: "150px", height: "125px" }} />
                <h1 style={{ color: "green", marginLeft: "45px", marginBottom: "1px", marginTop: "1px" }}>{props.name}<span style={{ color: "black", fontSize: "18px" }}>{props.quantity}</span></h1>
                <h3 style={{ marginLeft: "45px", marginTop: "1px", marginBottom: "1px" }}>Price: <span style={{ fontSize: "15px" }}>{props.price}</span></h3>
                <Link to="/Poverview" state={{ names: props.name, image: props.src, Quantity: props.quantity, cost: props.price }} style={{ textDecoration: "none" }} >
                    <Button sx={{ backgroundColor: "green", marginLeft: "150px", borderRadius: "15px" }} variant="contained">Buy now</Button>
                </Link>
            </div>
        </div>
    )
}
