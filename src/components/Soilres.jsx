import React from 'react'
import MainHeader from './MainHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Soil from '../images/soil.jpg';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}
