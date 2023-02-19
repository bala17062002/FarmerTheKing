import React from "react";
import Hpage from "./Hpage";
import 'aos/dist/aos.css'
import MainHeader from "../components/MainHeader";
import Far from '../images/Farmer.png';

function Home() {
    return (<div style={{ backgroundColor: "#EDE4E0", height: "100vh" }}>
        <MainHeader />
        <div data-aos="fade-up">
            <img src={Far} alt="home" style={{ width: "100%", height: "700px" }} />
        </div>
        <Hpage />

    </div>
    )
}
export default Home;