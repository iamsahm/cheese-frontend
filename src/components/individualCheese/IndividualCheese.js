import React, { useEffect, useState } from "react";

const IndividualCheeseComponent = () => {
    const [cheese, setCheese] = useState({});
    const cheeseId = window.location.pathname.split("/")[2];

    useEffect(() => {
        const fetchCheese = async () => {
            const response = await fetch(`/api/cheeses/${cheeseId}`);
            const data = await response.json();
            console.log(data);
            setCheese(data);
        };
        fetchCheese();
    }, [cheeseId]);

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
            {/* <RatingComponent cheeseId={cheeseId}/> */}
        </article>
    );
};

export default IndividualCheeseComponent;
