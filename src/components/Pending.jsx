import React from 'react'
import MainHeader from './MainHeader'
import Table from 'react-bootstrap/Table';
import { Button } from '@mui/material';

export const Pending = () => {
    return (
        <div>
            <MainHeader />
            <div>
                <Table striped="columns">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Farmer Name</th>
                            <th>id</th>
                            <th>Village</th>
                            <th>contact number</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>18 th feb</td>
                            <td>Poornesh</td>
                            <td>202365</td>
                            <td>tirupati</td>
                            <td>12658974</td>
                            <td>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <Button>Approve</Button>
                                    <Button>Reject</Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>18 th feb</td>
                            <td>Seenu</td>
                            <td>202366</td>
                            <td>renigunta</td>
                            <td>456987123</td>
                            <td>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <Button>Approve</Button>
                                    <Button>Reject</Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>19 th feb</td>
                            <td>Rohith</td>
                            <td >202365</td>
                            <td>Yerpedu</td>
                            <td>236985741</td>
                            <td>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <Button>Approve</Button>
                                    <Button>Reject</Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
