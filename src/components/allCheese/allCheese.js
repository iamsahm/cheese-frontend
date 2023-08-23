import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import StyledButton from '@mui/material/Button';
import API_URL from '../config';

const AllCheeses = ()=> {
    const [cheeses, setCheeses] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`${API_URL}/api/cheeses/allcheeses?page=${page}&limit=25`)
        .then((response) => response.json())
        .then((data) => {
            setCheeses(data);
        });
    }, [page]);

    return (
        <div>
        {cheeses?.map((cheese) => (
            <div key={cheese.id}>
            <h2>{cheese.name}</h2>
            </div>
        ))}
        <StyledButton onClick={() => setPage(page + 1)}>
            Load More
        </StyledButton>
        </div>
    );
    }

export default AllCheeses;