import React, { useState } from 'react';
import TextField from '@mui/material/TextField'; 
import StyledButton from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {themeOptions} from '../randomCheese/RandomCheese';



const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch( '/tokens', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    })

    if(response.status !== 201) {
      console.log("yay")
      navigate('/login')
    } else {
      console.log("oop")
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      navigate('/');
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


    return ( 
      <ThemeProvider theme={themeOptions}>
      <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        id="email"
        type="text"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <StyledButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </StyledButton>
    </form>
      </ThemeProvider>
    );
}

export default LogInForm;



