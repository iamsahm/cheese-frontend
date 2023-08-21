import Card from "@mui/material/Card";

const CheeseListItem = (cheese) => {
    if (!cheese.name) {
        return <h1>404 error, cheese not found! </h1>;
    }
    cheese.shortDescription = cheese.description.slice(0, 100).concat("...");

    return (
        <Card>
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
        </Card>
    );
};

export default CheeseListItem;
