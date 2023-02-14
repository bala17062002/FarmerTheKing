import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactDOM } from "react-dom";
import Header from "../components/Header";
import Farmerlog from "../components/Farmerlog";
import Opitionslogin from "../components/Opitionslogin";
import Username from "../components/Username";
import Agentlog from "../components/Agentlog";
import Hpage from "./Hpage";
import Register from "../components/Register";
import MainHeader from "../components/MainHeader";

function Home() {
    return (<div style={{ backgroundColor: "#EDE4E0" }}>
        <MainHeader />
        <Hpage />

    </div>
    )
}
export default Home;