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

  
 
  
 
function Register(){
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
            <Username username="First name"/>
            <TextField
            sx={{width:"6cm"}}
          label="Last name"
          id="standard-size-small"
          size="small"
          variant="standard"
        />
    <FormControl sx={{width:"6cm"}}>
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
       </div>
    </div>)
}
export default Register;
