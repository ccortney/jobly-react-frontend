import {Paper, InputBase, Button, Box} from '@mui/material';
import { useState } from 'react';

const SearchForm = ({searchPhrase, completeSearch}) => {
    
    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
        const {value} = e.target;
        setFormData(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        completeSearch(formData)
        setFormData("")
    }


    return (
            <Box display="flex" justifyContent="center" component="form" onSubmit={handleSubmit}>
                <Paper
                    sx={{ p: '4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={searchPhrase}
                    onChange={handleChange}
                    value={formData}
                    id="value"
                    name="name"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Button variant="contained" type="submit">Search</Button>
                </Paper>
            </Box>
        
    )
}

export default SearchForm