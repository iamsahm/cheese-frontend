import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import RatingComponent from "../rating/Rating";
import MakeRating from "../makeRating/MakeRating";
import {Container} from '@mui/material'

const IndividualCheeseComponent = () => {
    const [cheese, setCheese] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchCheese = async () => {
            const response = await fetch(`/api/cheeses/${id}`);
            const data = await response.json();
            setCheese(data);
        };
        fetchCheese();
    }, [id]);

    if (!cheese.name) {
        return <h1>404 error, cheese not found! </h1>;
    }

    return (
        <Container sx={{marginTop: 5}}>
            <img src={cheese.image} alt={cheese.name} />
            <h1>{cheese.name}</h1>
            <p>{cheese.description}</p>
            <p>Type: {cheese.type}</p>
            <p>Flavour: {cheese.flavour}</p>
            <p>Family: {cheese.family}</p>
            <p>Aromas: {cheese.aromas}</p>
            <p>Region: {cheese.region}</p>
            <p>Countries: {cheese.countries}</p>
            <p>Milks: {cheese.milks}</p>
            <p>Vegetarian: {cheese.vegetarian}</p>
            <RatingComponent cheeseId={id}/>
        </Container>

    );
};

export default IndividualCheeseComponent;
