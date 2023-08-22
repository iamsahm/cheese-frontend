import Card from "@mui/material/Card";

const CheeseListItem = (props) => {
    const cheese = props.cheese;
    cheese.shortDescription = cheese.description.slice(0, 100).concat("...");
    return (
        <a data-cy="idlink" href={`/cheeses/${cheese.id}`}>
            <Card>
                <img
                    src={cheese.image}
                    alt={cheese.name}
                    style={{ width: "100px", height: "auto" }}
                />
                <h1>{cheese.name}</h1>
                <p data-cy="cheeseShortDescription">
                    {cheese.shortDescription}
                </p>
                <p data-cy="cheeseRegionCountry">
                    {cheese.region}: {cheese.countries}
                </p>
            </Card>
        </a>
    );
};

export default CheeseListItem;
