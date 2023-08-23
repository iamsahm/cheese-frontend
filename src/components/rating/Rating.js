import {useState, useEffect} from 'react'
import {Typography, Rating, Box} from '@mui/material'
import MakeRating from '../makeRating/MakeRating'
import API_URL from '../../config'



const RatingComponent = ({cheeseId}) => {
    const [meanRating, setMeanRating] = useState()
    
    async function fetchMeanRating() {
        try {
            const response = await fetch(`${API_URL}/api/ratings/${cheeseId}`);
            if (response.status === 404) {
                setMeanRating('This cheese is yet to be rated!')
            } else if (response.status === 200) {
                const data = await response.json()
                setMeanRating(data.meanRating)
                
            } else {
                console.error("Error fetching rating")
            }
            } catch (error){
                console.error("Error fetching rating")
            }
        }

    useEffect(() => {
        fetchMeanRating();

        }
    , [cheeseId])

    const handleAddRating = () => {
        fetchMeanRating()
    }
    return ( 
        <Box sx ={{ alignItems : 'left'}}>
        <Typography>Average rating: {meanRating}</Typography>
        <Rating sx={{marginBottom: 1, marginTop: 1}} name="mean-rating" value={parseFloat(meanRating)} readOnly />
        <MakeRating cheeseId={cheeseId} handleAddRating={handleAddRating}/>
        </Box>
     );
}
 
export default RatingComponent;

