import React, { useEffect, useState } from "react";

const CheeseListItem = (cheeseId) => {
    const [cheese, setCheese] = useState({});

    useEffect(() => {
        const fetchCheese = async () => {
            const response = await fetch(`/api/cheeses/${cheeseId}`);
            const data = await response.json();
            console.log(data);
            setCheese(data);
        };
        fetchCheese();
    }, [cheeseId]);

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
