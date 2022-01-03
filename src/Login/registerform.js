import { Link } from "react-router-dom";
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, Select, MenuItem, Box } from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from "./input-register";
import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { signin, signup } from '../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const RegisterForm = () => {
   const [form, setForm] = useState(initialState);
   const isSignup = true;
   const dispatch = useDispatch();
   const history = useHistory();
   const classes = useStyles();


   const [showPassword, setShowPassword] = useState(false);
   const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); 
   const handleSubmit = (e) => {
      e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
   };

   const handleChange = () => {

   }

   

    return (
      <div className="wrapper">
         <div className="right-side-reg">
         <h2> Register </h2>
          <span> Please Fill up the Form </span> <br />
               <Container component = "main" maxWidth = "xs">
                  <Box className="box">
                  <Paper className={classes.paper} elevation={3}>
                     {/* <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>  */}
                     <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                     
                                 <>
                                    <Input name="fullname" label="Full name" handleChange={handleChange} autoFocus xs={12} />
                                    <Input name="organization" label="Organization" handleChange={handleChange} autoFocus xs={12} /> 
                                    <Grid item xs={12} >
                                    <Select name="college" label="College" handleChange={handleChange} autoFocus xs={12} fullWidth variant="outlined">
              <MenuItem value="">College of Engineering</MenuItem>
              <MenuItem value="male">College of Nursing</MenuItem>
              <MenuItem value="female">College of Education</MenuItem>
            </Select> </Grid>
                                      
                                    
                                    <Input name="email" label="Email" handleChange={handleChange} autoFocus xs={12} />
                                    <Input name="studentid" label="Student ID" handleChange={handleChange} autoFocus xs={12} /> 
                                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                    <Grid item xs={12} >
                                    <Button type="submit" fullWidth variant="contained" color="error" className={classes.submit}>Sign Up</Button>
                                    </Grid>
                                 </>
                           
                           
                        </Grid>
                     </form>
                  </Paper>
                  </Box>
               </Container>
                           </div>

{/*           
          <div className="wrapper">
          <h2> Register </h2>
          <span> Please Fill up the Form </span> <br />
          <div className="register-form">
       <div className="inputfield">
          <label>Full name</label>
          <input type="text" className="input" />
       </div>  
        <div className="inputfield">
          <label>Organization</label>
          <input type="text" className="input" />
       </div>  
       <div className="inputfield">
          <label>College</label>
          <div className="custom_select">
            <select>
              <option value="">College of Engineering</option>
              <option value="male">College of Nursing</option>
              <option value="female">College of Education</option>
            </select>
          </div>
       </div>  
      <div className="inputfield">
          <label>Email</label>
          <input type="text" className="input" />
       </div> 
       <div className="inputfield">
          <label>Student Number</label>
          <input type="text" className="input" />
       </div> 
        
        <div className="inputfield">
          <label>Email Address</label>
          <input type="text" className="input" />
       </div> 
      <div className="inputfield">
          <label>Phone Number</label>
          <input type="text" className="input" />
       </div> 
      <div className="inputfield">
          <label>Postal Code</label>
          <input type="text" className="input" />
       </div> 
            <div className="inputfield">
        <input type="submit" value="Register as a Student" className="btn" /><input type="submit" value="Register as an Organization" className="btn" />
      </div>
      <div className="inputfield">
        <input type="reset" value="Register as a Student" className="btn" />
      </div>
      </div>
      </div> */}
      </div>
     );
}
 
export default RegisterForm;