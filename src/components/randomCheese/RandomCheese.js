import {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; 
import LogInForm from './/../auth/LoginForm';
import StyledButton from '../app/styledButton';



const RandomCheese = () => {
    const [cheese, setCheese] = useState([]);
    const navigate = useNavigate(); 
    
    useEffect(() => {
        fetch("/api/cheeses/random")
        .then((response) => response.json())
        .then((data) => {
            setCheese(data);
        } )
    }, [])

    const link = cheese.image;

    


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        // You can add further logic here, such as sending the form data to the server
    };


    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
        {/* Left side: Login box */}
        <Grid item xs={12} sm={10} md={5} component={Paper} elevation={6} square>
        <LogInForm navigate={navigate} />
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
            item
            xs={false}
            sm={12}
            md={6}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
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
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <StyledButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </StyledButton>
                <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2">
                        {"Join the cheese party? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                </Box>
            </Box>
            </Grid>
        </Grid>
        </Grid>
        
        
        {/* Right side: Random Cheese image */}
        <Grid item xs={false} sm={10} md={4}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'lower',
                    justifyContent: 'center'}}
            >    
            <img src={link} alt={cheese.name} style={{ width: '100%', maxWidth: '600px' }} />
            <Typography variant="h4">{cheese.name}</Typography>

            </Box>
        </Grid>
    </Grid>

)}


export { RandomCheese }