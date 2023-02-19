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
import P2 from '../images/Farm.jpg';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Link } from 'react-router-dom';


export const Requestsoil = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    const [value, setValue] = React.useState(dayjs('2022-04-07'));


    return (
        <div style={{ backgroundImage: `url(${P2})`, height: "150vh", backgroundRepeat: "initial", backgroundSize: "100vw" }}>
            <MainHeader />
            <div style={{}}>
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
                        marginTop: "5%",
                        marginBottom: "20%",
                        marginLeft: "35%",
                        marginRight: "40%",
                        justifyContent: "center",
                        borderRadius: "20px",
                        opacity: "0.8"
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
                                    sx={{ margin: "5px" }}>
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
                            <div>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <StaticDatePicker
                                        displayStaticWrapperAs="mobile"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);

                                        }
                                        }
                                        renderInput={(params) => <TextField {...params} />}
                                        dayOfWeekFormatter={(day) => `${day}.`}
                                        toolbarFormat="ddd DD MMMM"
                                        showToolbar
                                        width='100px'
                                        height='100px'
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <Link to="/Fsoiltest">
                            <Button sx={{ backgroundColor: "green", marginTop: "6px" }} variant="contained">Submit</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
