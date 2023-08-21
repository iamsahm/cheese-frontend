import CheeseListItem from "./CheeseListItem";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const CheeseList = () => {
    let { type } = useParams();
    console.log("cheeseType", type);
    const [cheeses, setCheeses] = useState([]);

    useEffect(() => {
        const fetchCheeses = async () => {
            const response = await fetch(`/api/cheeses/type/${type}`);
            const data = await response.json();
            setCheeses(data);
        };
        if (type) {
            fetchCheeses();
        }
    }, [type]);

    return (
        <div>
            {cheeses.map((cheese) => (
                <CheeseListItem key={cheese.id} cheese={cheese} />
            ))}
        </div>
    );
};

export default CheeseList;
