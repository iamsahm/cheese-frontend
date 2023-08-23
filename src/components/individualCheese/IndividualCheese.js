import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import RatingComponent from "../rating/Rating";
import {Container} from '@mui/material'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import API_URL from "../config";

const IndividualCheeseComponent = () => {
    const [cheese, setCheese] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchCheese = async () => {
            const response = await fetch(`${API_URL}/api/cheeses/${id}`);
            const data = await response.json();
            setCheese(data);
        };
        fetchCheese();
    }, [id]);

    if (!cheese.name) {
        return <h1>404 error, cheese not found! </h1>;
    }

    const link = cheese.image;
    return (

        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'lower',
            justifyContent: 'center',
            margin: "50px"
        }}
    >    
        <img src={link} alt={cheese.name} style={{ width: '100%', maxWidth: '250px', height: '200px', margin: '15 0' }} />
        <Typography style={{marginTop: "10px"}} variant="h4">{cheese.name}</Typography>
        <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600', marginTop: "10px"}}>Cheese Type: </Typography>
        {/* this conditional checks if exists once, then if not does nothing, then is rechecked when useEffect is called/component is re-rendered*/}
        <Typography variant="p" className='randomCheeseFields' style={{ display: 'flex', flexDirection: 'row' }}>
        {cheese.type && Array.isArray(cheese.type) ? (
        cheese.type.map((item) => (
        <p key={item} style={{ margin: '0px 10px 5px 0' }}>
        {item}
        </p>
            ))
            ) : (
        <p>No types available</p>
            )}
        </Typography>
        <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600', marginTop: "10px"}}>Description: </Typography>
        <Typography variant="p" className='randomCheeseFields'>{cheese.description}</Typography>
        <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600', marginTop: "10px"}}>Flavour Profiles: </Typography>
        <Typography variant="p" className='randomCheeseFields'>{ cheese.flavour ? cheese.flavour : 'Unknown'}</Typography>
        <Typography  variant="h2" style={{fontSize:'18px', fontWeight: '600', marginTop: "10px"}}>Cheese Families: </Typography>
        <Typography variant="p" className='randomCheeseFields'>{ cheese.family ? cheese.family : 'Unknown'}</Typography>
        <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600', marginTop: "10px"}}>Aromas: </Typography>
        <Typography 
        variant="p" 
        className='randomCheeseFields' 
        style={{ 
            display: 'flex', 
            flexDirection: 'row' 
        }}
        >{cheese.aromas && Array.isArray(cheese.aromas) ? cheese?.aromas?.map((item) => (
            <p key={item} style={{ margin: '0px 10px 5px 0' }}>{ item }</p>
        )) : <p style={{ margin: '0px 10px 5px 0' }}>Unknown</p>}
        </Typography>
        <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600', marginTop: "10px"}}>Regions of Origin: </Typography>
        <Typography variant="p" className='randomCheeseFields'>{ cheese.region ? cheese.region : 'Unknown'}</Typography>
        <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600', marginTop: "10px"}}>Countries of Origin: </Typography>
        <Typography 
        variant="p" 
        className='randomCheeseFields' 
        style={{ 
            display: 'flex', 
            flexDirection: 'row' 
        }}
        >{cheese.countries && Array.isArray(cheese.countries) ? cheese?.countries?.map((item) => (
            <p key={item} style={{ margin: '0px 10px 5px 0' }}>{ item }</p>
        )) : <p style={{ margin: '0px 10px 5px 0' }}>Unknown</p>}
        </Typography>
        <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600', marginTop: "10px"}}>Milk Type: </Typography>
        <Typography 
        variant="p" 
        className='randomCheeseFields' 
        style={{ 
            display: 'flex', 
            flexDirection: 'row' 
        }}
        >{cheese.milks && Array.isArray(cheese.aromas) ? cheese?.milks?.map((item) => (
            <p key={item} style={{ margin: '0px 10px 5px 0' }}>{ item }</p>
        )) : <p style={{ margin: '0px 10px 5px 0' }}>Unknown</p>}
        </Typography>
        <Typography variant="h2" style={{fontSize:'18px', fontWeight: '600', marginTop: "10px"}}>Suitable for Vegetarians: </Typography>
        <Typography variant="p" className='randomCheeseFields'>{ cheese.vegetarian ? cheese.vegetarian : 'Unknown'}</Typography>
        <RatingComponent cheeseId={id}/>
    </Box>

    );
};

export default IndividualCheeseComponent;
