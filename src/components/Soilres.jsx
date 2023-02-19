import React from 'react'
import MainHeader from './MainHeader';

import Soil from '../images/soil.jpg';
import Table from 'react-bootstrap/Table';

export const Soilres = () => {
    return (
        <div>
            <MainHeader />
            <div>
                <h1 style={{ color: "green", marginLeft: "40%" }}>SOIL-TEST RESULT</h1>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ backgroundColor: "lightblue", width: "25cm", height: "25cm" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div >
                            <h1 style={{ color: "green", fontSize: "30px", }}> Crop Suggestion</h1>
                            <p> Acording to parameters which are obatined by soil Test, we would conclude that <b>"Paddy"</b> will be a good option with an investment of 20,000 per acare which gives almost 5 times profit, if you follow organic methods and sell to us</p>
                        </div>
                        <div >
                            <img src={Soil} alt="crop suggested" style={{ backgroundColor: "lightgreen", width: "300px", height: "300px", borderRadius: "10%", marginTop: "10%", marginLeft: "0%" }} />

                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#CFB997" }}>
                    <h4 style={{ color: "green" }}>
                        The following are main minerals in your land:
                    </h4>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Crop</th>
                                <th>P</th>
                                <th>Na</th>
                                <th>K</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2022</td>
                                <td>Paddy</td>
                                <td>23</td>
                                <td>32</td>
                                <td>42</td>
                            </tr>
                            <tr>
                                <td>2023</td>
                                <td>Paddy</td>
                                <td>25</td>
                                <td>34</td>
                                <td>56</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>Groundnut</td>
                                <td >25</td>
                                <td>30</td>
                                <td>25</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
