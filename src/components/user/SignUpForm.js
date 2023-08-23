import React, { useState } from 'react';
import API_URL from '../config';
import {
  Grid,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox
  } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import StyledButton from '@mui/material/Button';

const SignUpForm = ({ navigate }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch( `${API_URL}/api/users`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password, username: username })
    })
      .then(response => {
        if(response.status === 201) {
          navigate('/')
        } else {
          navigate('/signup')
        }
      })
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

    return (
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
                  <Grid
      item
      xs={false}
      sm={14}
      md={14}
      sx={{
          display: 'block',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
      }}
      style={{backgroundColor: '#ffffff'}}
      >
              <Box
          sx={{
          my: 10,

          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          }}
      >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography id="submit" component="h1" variant="h5">
      Become a brieliever!
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
      </Box>
      <TextField
        margin="normal"
        required
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={handlePasswordChange}
      />
            <TextField
        margin="normal"
        required
        name="username"
        label="Username"
        type="text"
        id="username"
        autoComplete="username"
        autoFocus
        value={username}
        onChange={handleUsernameChange}
      />
            <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
            <StyledButton
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        data-cy="SignIn"
        to="/"
      >
        Sign Up
      </StyledButton>
      </Box>
      </Grid>
      </Grid>
    );
}

export default SignUpForm;