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
                setCheese(data);
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
            <Grid item xs={false} sm={10} md={4} sx={{
                marginLeft: '30px',
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'lower',
                        justifyContent: 'center'}}
                >    
                    <Typography variant="h1" style={{ fontSize: '50px' }}>Random Cheese</Typography>
                    <img src={link} alt={cheese.name} style={{ width: '100%', maxWidth: '350px', height: '250px', margin: '15 0' }} />
                    <Typography variant="h4">{cheese.name}</Typography>
                    <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600'}}>Cheese Type: </Typography>
                    {/* this conditional checks if exists once, then if not does nothing, then is rechecked when useEffect is called/component is re-rendered*/}
                    <Typography variant="p" className='randomCheeseFields' style={{ display: 'flex', flexDirection: 'row' }}>{cheese?.type?.map((item) => (
                        <p key={item} style={{ margin: '5px 10px 5px 0' }}>{item} </p>
                    ))}
                    </Typography>
                    <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600'}}>Description: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{cheese.description}</Typography>
                    <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600'}}>Flavour Profiles: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{ cheese.flavour ? cheese.flavour : 'Unknown'}</Typography>
                    <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600'}}>Cheese Families: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{ cheese.family ? cheese.family : 'Unknown'}</Typography>
                    <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600'}}>Aromas: </Typography>
                    <Typography 
                    variant="p" 
                    className='randomCheeseFields' 
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'row' 
                    }}
                    >{cheese.aromas && cheese.aromas.length > 0 ? cheese?.aromas?.map((item) => (
                        <p key={item} style={{ margin: '5px 10px 5px 0' }}>{ item }</p>
                    )) : <p style={{ margin: '5px 10px 5px 0' }}>Unknown</p>}
                    </Typography>
                    <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600'}}>Regions of Origin: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{ cheese.region ? cheese.region : 'Unknown'}</Typography>
                    <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600'}}>Countries of Origin: </Typography>
                    <Typography 
                    variant="p" 
                    className='randomCheeseFields' 
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'row' 
                    }}
                    >{cheese.countries && cheese.countries.length > 0 ? cheese?.countries?.map((item) => (
                        <p key={item} style={{ margin: '5px 10px 5px 0' }}>{ item }</p>
                    )) : <p style={{ margin: '5px 10px 5px 0' }}>Unknown</p>}
                    </Typography>
                    <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600'}}>Milk Type: </Typography>
                    <Typography 
                    variant="p" 
                    className='randomCheeseFields' 
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'row' 
                    }}
                    >{cheese.milks && cheese.milks.length > 0 ? cheese?.milks?.map((item) => (
                        <p key={item} style={{ margin: '5px 10px 5px 0' }}>{ item }</p>
                    )) : <p style={{ margin: '5px 10px 5px 0' }}>Unknown</p>}
                    </Typography>
                    <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600'}}>Suitable for Vegetarians: </Typography>
                    <Typography variant="p" className='randomCheeseFields'>{ cheese.vegetarian ? cheese.vegetarian : 'Unknown'}</Typography>
                </Box>
            </Grid>
        </Grid>
        

)}


export { RandomCheese }