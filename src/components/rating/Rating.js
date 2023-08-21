import { useState, useEffect } from "react";
import { Typography, Rating } from "@mui/material";

const RatingComponent = ({ cheeseId }) => {
    const [meanRating, setMeanRating] = useState();
    const [token, setToken] = useState(window.localStorage.getItem("token"));

    useEffect(() => {
        async function fetchMeanRating() {
            try {
                const response = await fetch(`/api/ratings/${cheeseId}`);
                if (response.status === 404) {
                    setMeanRating("This cheese is yet to be rated!");
                } else if (response.status === 200) {
                    const data = await response.json();
                    setMeanRating(data.meanRating);
                } else {
                    console.error("Error fetching rating");
                }
            } catch (error) {
                console.error("Error fetching rating");
            }
        }
        fetchMeanRating();
    }, [cheeseId]);

    return (
        <div>
            <Typography>Average rating: {meanRating}</Typography>
            <Rating name="mean-rating" value={meanRating} readOnly />
        </div>
    );
};

export default RatingComponent;
