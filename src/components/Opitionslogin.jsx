import { Button } from "@mui/material";
import React from "react";
function Opitionslogin(props){
 
    return(
        <div>
     <div style={{display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"10px 15px",
        backgroundColor:"#F0EEED",
        width:"10cm",
        height:"8.1cm",
        marginTop: "0%",
        marginBottom: "20%",
        marginLeft: "40%",
        marginRight: "40%",justifyContent:"center"}}>
         <Button sx={{backgroundColor:"green",width:"3cm",height:"3cm",margin:"5px"}} variant="contained" onClick={props.click}>Farmer</Button>
         <Button sx={{backgroundColor:"green",width:"3cm",height:"3cm"}} variant="contained" onClick={props.clicks}>Agent</Button>
           
        </div>
    </div>
    )
}
export default Opitionslogin;