import React, { useEffect, useState } from 'react';
const RandomCheese = () => {
    const [cheese, setCheese] = useState([]);
    
    useEffect(() => {
        fetch("/api/cheeses/random")
        .then((response) => response.json())
        .then((data) => {
            setCheese(data);
        } )
    }, [])
    return ( 
        <div>
            <h1>Random Cheese</h1>
            <h2>{ cheese.name }</h2>
        </div>
        
     );
}
    
export default RandomCheese;