import CheeseListItem from "./CheeseListItem";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const CheeseList = () => {
    let { cheeseTypeUnclean } = useParams();
    console.log(cheeseTypeUnclean);
    let cheeseType = cheeseTypeUnclean.toLowerCase();
    const [cheeses, setCheeses] = useState([]);

    useEffect(() => {
        const fetchCheeses = async () => {
            const response = await fetch(`/api/cheeses/type/${cheeseType}`);
            const data = await response.json();
            setCheeses(data);
        };
        if (cheeseType) {
            fetchCheeses();
        }
    }, [cheeseType]);

    return (
        <div>
            {cheeses.map((cheese) => (
                <CheeseListItem key={cheese.id} cheese={cheese} />
            ))}
        </div>
    );
};

export default CheeseList;
