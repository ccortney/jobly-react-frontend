import {Card, Typography, Button, CardActions, Grid} from '@mui/material';
import "./JobCard.css";
import { useState, useContext, useEffect } from 'react';
import UserContext from './UserContext';

const JobCard = ({job, showCompany, applyForJob}) => {
    const user = useContext(UserContext);
    const [applied, setApplied] = useState()

    useEffect(() => {
        if (user) {
            if (user.applications.indexOf(job.id) !== -1) setApplied(true)
            else setApplied(false)
        }
        
    }, [user, job.id])

    if (!job.equity) {
        job.equity = "Unknown"
    }

    const applyButton = applied ? 
        <Button variant="contained" className="apply-button" disabled>Applied</Button> :
        <Button variant="contained" className="apply-button" onClick = {() => applyForJob(job.id)}>Apply</Button> 
        

    return (
        <Card sx={{ my: 2, mx: 7}} variant="outlined">
                <Typography variant="h6" >
                    {job.title}
                </Typography>
                {showCompany &&
                    <Typography variant="subtitle1" >
                        {job.companyName}
                    </Typography>
                }
                <Typography variant="subtitle2" color="text.secondary">
                    Salary: {job.salary}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    Equity: {job.equity}
                </Typography>
            <Grid container justifyContent = "flex-end">
                <CardActions >
                    {applyButton}
                </CardActions>
            </Grid>

        </Card>
  );
}

export default JobCard;

