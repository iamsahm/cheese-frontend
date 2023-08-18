import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; 
import LogInForm from './/../auth/LoginForm';


const RandomCheese = () => {
    const [cheese, setCheese] = useState([]);
    const navigate = useNavigate(); 
    
    useEffect(() => {
        fetch("/api/cheeses/random")
        .then((response) => {
            response.json()
            .then((data) => {
                setCheese(data.data);
            } )
        })
        
    }, [])
    const link = cheese.image;
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            {/* Left side: Login box */}
            <Grid item xs={12} sm={10} md={5} component={Paper} elevation={6} square>
                <LogInForm navigate={navigate} />
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
                    <Typography variant="h1">Random Cheese</Typography>
                    <img src={link} alt={cheese.name} style={{ width: '100%', maxWidth: '600px' }} />
                    <Typography variant="h4">{cheese.name}</Typography>
                    <Typography variant="h2">Cheese Type: </Typography>
                    {/* this conditional checks if exists once, then if not does nothing, then is rechecked when useEffect is called/component is re-rendered*/}
                    <Typography variant="p" className='randomCheeseFields'>{cheese?.type?.map((item) => (
                        <p key={item}>{item}</p>
                    ))}
                    </Typography>
                    <Typography variant="h2">Description: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{cheese.description}</Typography>
                    <Typography variant="h2">Flavour Profiles: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{cheese.flavour}</Typography>
                    <Typography variant="h2">Cheese Families: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{cheese.family}</Typography>
                    <Typography variant="h2">Aromas: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{cheese?.aromas?.map((item) => (
                        <p key={item}>{item}</p>
                    ))}
                    </Typography>
                    <Typography variant="h2">Regions of Origin: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{cheese.region}</Typography>
                    <Typography variant="h2">Countries of Origin: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{cheese?.countries?.map((item) => (
                        <p key={item}>{item}</p>
                    ))}
                    </Typography>
                    <Typography variant="h2">Milk Type: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{cheese?.milks?.map((item) => (
                        <p key={item}>{item}</p>
                    ))}
                    </Typography>
                    <Typography variant="h2">Suitable for Vegetarians: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{ cheese.vegetarian ? cheese.vegetarian : 'Unknown'}</Typography>
                </Box>
            </Grid>
        </Grid>
        

)}


export { RandomCheese }