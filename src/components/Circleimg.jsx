import React from "react";
function Circleimg(props){
    return(
        <div style={{borderRadius:"100%"}}>
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}
export default Circleimg;