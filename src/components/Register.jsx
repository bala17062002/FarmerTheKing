import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Username from "./Username";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Passwordfeild from "./Passwordfeild";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import P1 from "../images/fcr.jpg"




function Register() {
  return (
    <div style={{ backgroundImage: `url(${P1})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "100vw" }}>
      <MainHeader />
      <div style={{
        backgroundColor: "#F0EEED",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 15px",
        fontWeight: "18px",
        color: "white",
        marginTop: "10%",
        marginBottom: "20%",
        marginLeft: "40%",
        marginRight: "40%",
        width: "10cm",

      }}>
        <Username username="First name" />
        <TextField
          sx={{ width: "6cm" }}
          label="Last name"
          id="standard-size-small"
          size="small"
          variant="standard"
        />
        <FormControl sx={{ width: "6cm", color: "black" }}>
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
        <Passwordfeild />
        <Link to='/Soiltest'>
          <Button sx={{ backgroundColor: "green", marginTop: "6px" }} variant="contained">Log in</Button>
        </Link>
      </div>
    </div>)
}
export default Register;
