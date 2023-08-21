import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

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
        <article>
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
            {/* <RatingComponent id={id}/> */}
        </article>
    );
};

export default IndividualCheeseComponent;
