import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CheeseListItem = () => {
    const [cheese, setCheese] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchCheese = async () => {
            const response = await fetch(`/api/cheeses/${id}`);
            const data = await response.json();
            console.log(data);
            setCheese(data);
        };
        fetchCheese();
    }, [id]);

    if (!cheese.name) {
        return <h1>404 error, cheese not found! </h1>;
    }
    cheese.shortDescription = cheese.description.slice(0, 100).concat("...");

    return (
        <article>
            <img
                src={cheese.image}
                alt={cheese.name}
                style={{ height: "300px", width: "auto" }}
            />
            <h1>{cheese.name}</h1>
            <p data-cy="cheeseShortDescription">{cheese.shortDescription}</p>
            <p data-cy="cheeseRegionCountry">
                {cheese.region}: {cheese.countries}
            </p>
            {/* <RatingComponent id={id}/> */}
        </article>
    );
};

export default CheeseListItem;
