import React from 'react';
import MainHeader from './MainHeader';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Username from "./Username";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export const Requestsoil = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <MainHeader />
            <div style={{ backgroundColor: "#DCEDC1", minHeight: "100vh" }}>
                <h1 style={{ color: "green", fontSize: "30px", marginLeft: "22%" }}>Thanks for choosing
                    <span style={{ fontSize: "50px", justifyContent: "center" }}>  Farmer <span style={{ fontSize: "30px" }}>The King</span></span>
                </h1>
                <div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "10px 15px",
                        backgroundColor: "#F0EEED",
                        width: "12cm",
                        height: "12cm",
                        marginTop: "10%",
                        marginBottom: "20%",
                        marginLeft: "40%",
                        marginRight: "40%",
                        justifyContent: "center",
                        borderRadius: "20px"
                    }}>
                        <h5>Soiltest Request Form</h5>
                        <Username username="First name" />
                        <TextField
                            sx={{ width: "6cm" }}
                            label="Last name"
                            id="standard-size-small"
                            size="small"
                            variant="standard"
                        />
                        <FormControl sx={{ width: "6cm" }}>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="formatted-text-mask-input">Mobile Number</InputLabel>
                                    <Input
                                        name="Enter mobile number "
                                        id="formatted-text-mask-input"
                                    />
                                </FormControl>
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            sx={{ width: "6cm" }}
                            label="Land id"
                            id="standard-size-small"
                            size="small"
                            variant="standard"
                        />
                        <div>
                            <div>
                                <Button variant="outlined" onClick={handleClickOpen}
                                    sx={{ marginTop: "5px" }}>
                                    Terms and conditions
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Use Google's location service?"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Accept if you have all documents about land
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Disagree</Button>
                                        <Button onClick={handleClose} autoFocus>
                                            Agree
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </div>
                        <Button sx={{ backgroundColor: "green", marginTop: "6px" }} variant="contained">Log in</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
