import Card from "@mui/material/Card";
import { Typography } from "@mui/material";


const CheeseListItem = (props) => {
    const cheese = props.cheese;
    cheese.shortDescription = cheese.description.slice(0, 100).concat("...");
    const index = props.index
    const backgroundColor = index % 2 === 0 ? "rgb(255, 255, 220)" : "rgb(255, 255, 183)"
    return (
        <a data-cy="idlink" href={`/cheeses/${cheese.cheeseId}`} style={{textDecoration: 'none'}}>
            <Card style={{padding: "20px", backgroundColor: backgroundColor}}>
                <img
                    src={cheese.image}
                    alt={cheese.name}
                    style={{ width: "100px", height: "auto" }}
                />
                <h1>{cheese.name}</h1>
                <p data-cy="cheeseShortDescription">
                    {cheese.shortDescription}
                </p>
                <p data-cy="cheeseRegion">
                    {cheese.region ? `${cheese.region}` : ``}{cheese.countries && Array.isArray(cheese.countries) ? (
                            cheese?.countries?.map((item) => (
                                <p data-cy="cheeseCountry"
                                    key={item}
                                    style={{ margin: "5px 10px 5px 0" }}
                                >
                                    {item}
                                    
                                </p>
                            ))
                        ) : (
                            <p style={{ margin: "5px 10px 5px 0" }}>Unknown</p>
                        )}
                    
                </p>
            </Card>
        </a>
    );
};

export default CheeseListItem;
