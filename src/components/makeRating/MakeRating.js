import {useState} from 'react'
import {FormControl, InputLabel, Select, MenuItem, Button, Container, Box} from '@mui/material'

const MakeRating = ({cheeseId, handleAddRating}) => {
    const [cheeseRating, setCheeseRating] = useState()
    const [token, setToken] = useState(window.localStorage.getItem("token"))

    const handleRatingChange = (event) => {
        setCheeseRating(event.target.value)
    }

    const handleRatingSubmit = async () => {
        try {
            const response = await fetch(`/api/ratings/cheese/${cheeseId}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({cheeseRating})
            })
            if (response.status === 201) {
                console.log("Rating added")
            } else if (response.status === 409) {
                console.log("Already rated")
            } else {
                console.error("Error adding rating")
            }
        } catch (error) {
            console.error("Error adding error", error)
        }

        handleAddRating();
    }
    

    return (
        <Box>
            {token ? (
                <Box sx={{ display: 'flex'}}>
                    <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="rating-input" data-cy="rating-input">Choose a rating</InputLabel>
                    <Select
                        labelId="rating-numbers"
                        id="rating-numbers"
                        value={cheeseRating}
                        label="Rating"
                        onChange={handleRatingChange}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                    </FormControl>

                    <Button onClick={handleRatingSubmit}>
                        Submit Rating
                    </Button>
                </Box>
            ): (
                <p>
                    You need to be logged in to rate a cheese
                </p>
            )}
        </Box>
    )

}

export default MakeRating;