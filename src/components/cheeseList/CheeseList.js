import CheeseListItem from "./CheeseListItem";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import API_URL from "../../../config";

const CheeseList = () => {
    let { type } = useParams();
    const [cheeses, setCheeses] = useState([]);

    useEffect(() => {
        const fetchCheeses = async () => {
            const response = await fetch(`${API_URL}/api/cheeses/type/${type}`);
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
